import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import SearchPerson from '../../../../BasicComponents/SearchPerson/SearchPerson';
import { useCatalogs } from '../../../../../context/Catalog/CatalogContext';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import { useCustomerContext } from '../../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';
import { CreateReference, UpdateReference } from '../../../../../api/dataentry/physicalPerson/physicalPerson';
import { showSuccessSweetAlert } from '../../../../../utils/SweetAlertUtils/sweetAlertUtils';
import Table from '../../../../BasicComponents/Table/Table';

const CustomerReference: React.FC = () => {

    const { t } = useTranslation();
    const { catalogs } = useCatalogs();
    const { state,setField, setReference,setReferences} = useCustomerContext();
    const { reference } = state;
    const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
    const [clearSearchPersonTrigger, setClearSearchPersonTrigger] = useState(false);

     const emptyReference = {
        id: null,
        customerId: "",
        referenceTypeId: "",
        referenceRelationId: "",
        knownSince: new Date,
        email: "",
        phone: "",
    };

    const getCatalogName = (
        catalog: { value: string; option: string }[],
        id: string | number
    ): string => {
        const item = catalog.find(opt => opt.value === String(id));
        return item ? item.option : String(id);
    };    

    const tableData = useMemo(() => {
        return (state.references || []).map(refer => ({
            ...refer,
            referenceRelationText: getCatalogName(catalogs.ReferenceRelation, refer.referenceRelationId),
            referenceTypeText: getCatalogName(catalogs.ReferenceType, refer.referenceTypeId),
            knownSince: refer.knownSince
            ? new Date(refer.knownSince).toISOString().split('T')[0] 
            : ''
        }));
    }, [state.references, catalogs.ReferenceRelation, catalogs.ReferenceType]);    

    const handleSave = async () => {
            try {
                if (state.reference.id && state.reference.id.trim() !== '') {
                    await UpdateReference(state.reference);
    
                    const updatedReferences = state.references.map(refer =>
                        refer.id === state.reference.id ? { ...state.reference } : refer
                    );
    
                    setReferences(updatedReferences);
                    setReference(emptyReference);
                    setSelectedPersonId(null);
                    setClearSearchPersonTrigger(prev => !prev);
                    showSuccessSweetAlert("Referencia actualizada");
                } else {
    
                    const referenceToSave =
                    {
                        ...state.reference,
                        customerId: state.customer.id
                    }
    
                    const response = await CreateReference(referenceToSave);
                    if (response) {
                        const newReference = { ...referenceToSave, id: response };
                        const updatedReferences = [...state.references, newReference];
    
                        setReferences(updatedReferences);
                        setReference(emptyReference);
                        setSelectedPersonId(null);
                        setClearSearchPersonTrigger(prev => !prev);
                        showSuccessSweetAlert("Referencia creada");
                    }
                }
            } catch (err: any) {
                console.error("Error al guardar la referencia:", err);
            }
    };

    const handleClear = () => {
        setReference(emptyReference);
        setSelectedPersonId(null);
        setClearSearchPersonTrigger(prev => !prev);
    };
    
    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.references")}</h4>
                        <p>{t("dataentry.tabs.references_description")}</p>
                    </div>
                    <div className="ui-action-bar">


                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">
                                    <Select
                                        id="referenceType"
                                        title={t("fields.reference_type")}
                                        required={true}
                                        readonly={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        selectedValue={reference.referenceTypeId?.toString()}
                                        options={catalogs.ReferenceType}
                                        onChange={(e) => setField('referenceTypeId', e.target.value, 'reference')}
                                        
                                    />

                                    <Select
                                        id="referenceRelation"
                                        title={t("fields.reference_relation")}
                                        required={true}
                                        readonly={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        selectedValue={reference.referenceRelationId?.toString()}
                                        options={catalogs.ReferenceRelation}
                                        onChange={(e) => setField('referenceRelationId', e.target.value, 'reference')}
                                        
                                    />

                                    <SearchPerson includeBirthDay personId={selectedPersonId}  clearTrigger={clearSearchPersonTrigger}/>
                                                     
                                    <DatePicker
                                        id="knownSince"
                                        title={t("fields.reference_knownsince")}
                                        required={true}
                                        readonly={false}
                                        value={
                                            reference.knownSince
                                            ? (() => {
                                                const localDate = new Date(reference.knownSince);
                                                const year = localDate.getFullYear();
                                                const month = String(localDate.getMonth() + 1).padStart(2, '0');
                                                const day = String(localDate.getDate()).padStart(2, '0');
                                                return `${year}-${month}-${day}`;
                                            })()
                                            : ''
                                        }
                                        classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                                        onChange={(e) => {
                                            const [year, month, day] = e.target.value.split('-').map(Number);

                                            const now = new Date();
                                            const localDate = new Date(
                                                year,
                                                month - 1, 
                                                day,
                                                now.getHours(),
                                                now.getMinutes(),
                                                now.getSeconds(),
                                                now.getMilliseconds()
                                            );

                                            const iso = localDate.toISOString(); 
                                            setField('knownSince', iso, 'reference');
                                        }}
                                    />

                                    <Input
                                        id="email"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={false}
                                        value={String(reference.email ?? '')}
                                        title={t("fields.email")}
                                        onChange={(e) => setField('email', e.target.value, 'reference')}
                                    />

                                    <Input
                                        id="phone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={false}
                                        value={String(reference.phone ?? '')}
                                        title={t("fields.phone")}
                                        onChange={(e) => setField('phone', e.target.value, 'reference')}
                                    />

                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <Button
                                                id='save'
                                                title={t("buttons.save")}
                                                type='saveButton'
                                                icon={<SaveIcon />} 
                                                onClick={handleSave} />

                                            <Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                icon={<ClearIcon />} 
                                                onClick={handleClear} />

                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="col-12">
                                <hr />
                                <Table
                                    id='referencesTable'
                                    title={t("Referencias")}
                                    columns={[
                                        { name: "ID", field: "id", hidden: true },
                                        {
                                            name: "Tipo",
                                            field: "referenceTypeText",
                                        },
                                        {
                                            name: "Relacion",
                                            field: "referenceRelationText",
                                        },
                                        {
                                            name: "Solicitud",
                                            field: "creditApplicationId",
                                        },
                                        {
                                            name: "Persona",
                                            field: "personId",
                                        },
                                        {
                                            name: "Conocido(a) desde",
                                            field: "knownSince",
                                        },
                                        {
                                            name: "Teléfono",
                                            field: "phone",
                                        },
                                        {
                                            name: "Email",
                                            field: "email",
                                        },
                                    ]}
                                    data={tableData}
                                    onRowClick={(row: any) => {
                                        const selected = state.references.find(refer => refer.id === row.id);
                                        if (selected) {
                                            setReference(selected);
                                            setSelectedPersonId(selected.personId);
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CustomerReference;