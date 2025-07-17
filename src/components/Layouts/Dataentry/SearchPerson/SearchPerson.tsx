import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { ClearIcon, PlusIcon, SearchIcon } from '../../../../api/models/IconsModels/IconsModels';
import SelectModel from '../../../../api/models/SelectModel/SelectModel';
import Select from '../../../BasicComponents/Select/Select';
import Input from '../../../BasicComponents/Input/Input';
import PageHeader from '../../../PageHeader/PageHeader';
import Button from '../../../BasicComponents/Button/Button';
import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
import Table from '../../../BasicComponents/Table/Table';
import { SearchCustomer } from '../../../../api/dataentry/physicalPerson/physicalPerson';
import { useCustomerContext } from '../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';

interface PersonSearchProps {
    onSelectPerson: (person: { type: string; name: string, id: string }) => void;
}

const SearchPerson: React.FC<PersonSearchProps> = ({ onSelectPerson }) => {
    const { t } = useTranslation();
    const { setField } = useCustomerContext();
    const identificationType: SelectModel[] = [
        { value: "1", option: 'RFC' },
        { value: "2", option: 'Número de cédula del RFC' },
        { value: "3", option: 'RFC comprador' }
    ];

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const customerData = await SearchCustomer();
            setSearchResults(customerData);

        } catch (error) {
            console.error("Error al cargar los datos del cliente:", error);
        }
    }

    const handleNewClick = () => {
        setField('id', null, 'address');
        onSelectPerson({ type: 'fisica', name: '', id: '' });
    };

    return (
        <>
            <PageHeader title={t("dataentry.search_customer")} name={'Username'} />
            <div className="row">
                <div className="col-12">
                    <div className="ui-title-action-bar">
                        <div className="ui-title">
                            <h4>{t("dataentry.search_criteria")}</h4>
                            <p>{t("dataentry.search_customer")}</p>
                        </div>
                        <div className="ui-action-bar">
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="row form-compact-holder">
                                    <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                        <DatePicker
                                            id="sinceDate"
                                            readonly={false}
                                            title={t("fields.registration_date_from")}
                                            required={true}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        />
                                        <DatePicker
                                            id="toDate"
                                            readonly={false}
                                            title={t("fields.registration_date_since")}
                                            required={true}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        />
                                    </div>
                                    <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                        <Input
                                            id="internNumber"
                                            readonly={false}
                                            required={true}
                                            title={t("fields.intern_number")}
                                            placeholder={t("fields.intern_number")}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        />

                                        <Input
                                            id='BUC'
                                            readonly={false}
                                            required={true}
                                            title={t("fields.BUC")}
                                            placeholder={t("fields.BUC")}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                    </div>
                                    <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                        <Input
                                            id='Name'
                                            readonly={false}
                                            required={true}
                                            title={t("fields.name")}
                                            placeholder={t("fields.name")}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-6' />
                                    </div>
                                    <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                        <Select
                                            id="identificactionType"
                                            readonly={false}
                                            title={t("fields.identification_type")}
                                            required={true}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                            options={identificationType} />

                                        <Input
                                            id='identification'
                                            readonly={false}
                                            required={true}
                                            title={t("fields.identification")}
                                            placeholder={t("fields.identification")}
                                            classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-left mt-3">
                                            {/* <Select 
                                                    id="show" 
                                                    readonly={false} 
                                                    title='Mostrar' 
                                                    required={false} 
                                                    classInput='col-1 col-md-2 col-lg-1 col-xl-2' 
                                                    options={identificationType} /> */}
                                            <Button
                                                id='search'
                                                title={t("buttons.search")}
                                                type='clearButton'
                                                onClick={handleSearch}
                                                icon={<SearchIcon />} />

                                            <Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                icon={<ClearIcon />} />

                                            <Button
                                                id='clear'
                                                title={t("buttons.new")}
                                                type='clearButton'
                                                icon={<PlusIcon />}
                                                onClick={handleNewClick}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                        <Table
                                            id='searchPersonTable'
                                            title={t("dataentry.search_result")}
                                            columns={[
                                                {
                                                    name: "ID",
                                                    field: "id",
                                                    hidden: true // se usa internamente pero no se muestra
                                                },
                                                {
                                                    name: "Nombre Completo",
                                                    field: ["firstName", "secondName", "firstLastName", "secondLastName"]
                                                },
                                                {
                                                    name: "Tipo",
                                                    field: "type.value"
                                                },
                                                {
                                                    name: "Nacimiento",
                                                    field: "birthDay",
                                                    format: "date"
                                                }
                                            ]}

                                            data={searchResults}
                                            onRowClick={(row) => onSelectPerson({ type: 'fisica', name: row.nombre, id: row.id })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPerson;