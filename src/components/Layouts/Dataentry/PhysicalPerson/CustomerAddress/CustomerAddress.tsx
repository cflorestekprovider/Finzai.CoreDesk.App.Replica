import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import Button from '../../../../BasicComponents/Button/Button';
import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import { useCatalogs } from '../../../../../context/Catalog/CatalogContext';
import { useCustomerContext } from '../../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';
import { NumericFormat } from 'react-number-format';
import { CreateAddress, UpdateAddress } from '../../../../../api/dataentry/physicalPerson/physicalPerson';
import { showSuccessSweetAlert } from '../../../../../utils/SweetAlertUtils/sweetAlertUtils';
import Table from '../../../../BasicComponents/Table/Table';
import { AddressState } from '../../../../../reducers/InitialStates/PhysicalPersonState';


const CustomerAddress: React.FC = () => {

    const { t } = useTranslation();
    const { catalogs, countryOptions } = useCatalogs();
    const { state, setField, setAddress, setAddresses } = useCustomerContext();
    const { address } = state;

    const emptyAddress = {
        id: null,
        customerId: "",
        statusId: "",
        addressTypeId: "",
        propertyTypeId: "",
        livingSinceDate: new Date,
        countryId: "",
        postalCode: "",
        stateId: "",
        cityId: 0,
        municipalityId: 0,
        neighborhoodId: 0,
        street: "",
        exteriorNumber: "",
        propertyValue: 0,
        mortgage: 0,
        proofOfAddressId: "",
        marginalId: "",
        zoneTypeId: "",
        interiorNumber: "",
        crossStreet: "",
        yearsResiding: 0,
        monthsResiding: 0,
    };

    const getCatalogName = (
        catalog: { value: string; option: string }[],
        id: string | number
    ): string => {
        const item = catalog.find(opt => opt.value === String(id));
        return item ? item.option : String(id);
    };

    const tableData = useMemo(() => {
        return (state.addresses || []).map(addr => ({
            ...addr,
            statusText: getCatalogName(catalogs.Status, addr.statusId),
            addressTypeText: getCatalogName(catalogs.AddressType, addr.addressTypeId),
        }));
    }, [state.addresses, catalogs.Status, catalogs.AddressType]);


    const handleSave = async () => {
        try {
            if (state.address.id && state.address.id.trim() !== '') {
                await UpdateAddress(state.address);

                // Actualiza el listado completo
                const updatedAddresses = state.addresses.map(addr =>
                    addr.id === state.address.id ? { ...state.address } : addr
                );

                setAddresses(updatedAddresses);
                setAddress(emptyAddress);
                showSuccessSweetAlert("Domicilio actualizado");
            } else {

                const addressToSave =
                {
                    ...state.address,
                    customerId: state.customer.id
                }

                const response = await CreateAddress(addressToSave);
                if (response) {
                    const newAddress = { ...addressToSave, id: response };
                    const updatedAddresses = [...state.addresses, newAddress];

                    console.log(updatedAddresses)
                    setAddresses(updatedAddresses);
                    setAddress(emptyAddress);
                    showSuccessSweetAlert("Domicilio creado");
                }
            }
        } catch (err: any) {
            console.error("Error al guardar el cliente:", err);
        }
    };

    const handleClear = () => {
        setAddress(emptyAddress);
    };

    useEffect(() => {
        if (!state.address.livingSinceDate) return;

        const startDate = new Date(state.address.livingSinceDate);
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        setField('yearsResiding', years, 'address');
        setField('monthsResiding', months, 'address');

    }, [state.address.livingSinceDate]);

    const handleAddressChange = (updatedFields: Partial<AddressState>) => {


        const newAddress = {
            ...state.address,
            ...updatedFields
        }

        setAddress(newAddress);
    };

   

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.address")}</h4>
                        <p>{t("dataentry.tabs.address_description")}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">
                                    <Select
                                        id="statusAddress"
                                        readonly={false}
                                        title={t("fields.status")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.Status}
                                        selectedValue={address.statusId?.toString()}
                                        onChange={(e) => setField('statusId', e.target.value, 'address')}
                                    />

                                    <Select
                                        id="addressType"
                                        readonly={false}
                                        title={t("fields.address_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.AddressType}
                                        selectedValue={address.addressTypeId?.toString()}
                                        onChange={(e) => setField('addressTypeId', e.target.value, 'address')}
                                    />

                                    <Select
                                        id="propertyType"
                                        readonly={false}
                                        title={t("fields.property_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.PropertyType}
                                        selectedValue={address.propertyTypeId?.toString()}
                                        onChange={(e) => setField('propertyTypeId', e.target.value, 'address')}
                                    />

                                    <Select
                                        id="marginal"
                                        readonly={false}
                                        title={t("fields.marginal")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.Marginal}
                                        selectedValue={address.marginalId?.toString()}
                                        onChange={(e) => setField('marginalId', e.target.value, 'address')}
                                    />

                                    <NumericFormat
                                        id="propertyValue"
                                        readonly={false}
                                        required={false}
                                        title={t("fields.property_value")}
                                        placeholder={t("fields.property_value")}
                                        classInput="col-12 col-md-6 col-lg-4 col-xl-3"
                                        value={address.propertyValue}
                                        onValueChange={(e) => setField("propertyValue", e.floatValue || 0, "address")}
                                        prefix="$"
                                        allowNegative={false}
                                        decimalScale={0}
                                        thousandSeparator
                                        customInput={Input}
                                    />

                                    <NumericFormat
                                        id='mortgage'
                                        readonly={false}
                                        required={false}
                                        title={t("fields.mortgage")}
                                        placeholder={t("fields.mortgage")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(address.mortgage)}
                                        onValueChange={(e) => setField('mortgage', e.floatValue, 'address')}
                                        prefix="$"
                                        allowNegative={false}
                                        decimalScale={0}
                                        thousandSeparator
                                        customInput={Input}
                                    />

                                    <DatePicker
                                        id="livingSince"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.living_since_date")}
                                        value={address.livingSinceDate}
                                        onChange={(e) => setField('livingSinceDate', e.target.value, 'address')}
                                    />

                                    <Input
                                        id='yearsResiding'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.years_residing")}
                                        placeholder={t("fields.years_residing")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(address.yearsResiding ?? 0)}
                                    />

                                    <Input
                                        id='monthsResiding'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.months_residing")}
                                        placeholder={t("fields.months_residing")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(address.monthsResiding ?? 0)}
                                        onChange={(e) => setField('monthsResiding', e.target.value, 'address')}
                                    />

                                    <Select
                                        id="addressCountry"
                                        readonly={false}
                                        title={t("fields.country")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={countryOptions}
                                        selectedValue={String(address.countryId)}
                                        onChange={(e) => setField('countryId', e.target.value, 'address')}
                                    />

                                    <PostalCode
                                        address={address}
                                        onAddressChange={handleAddressChange}
                                    />



                                    <Select
                                        id="zoneType"
                                        readonly={false}
                                        title={t("fields.zone_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.ZoneType}
                                        selectedValue={String(address.zoneTypeId)}
                                        onChange={(e) => setField('zoneTypeId', e.target.value, 'address')}
                                    />

                                    <Select
                                        id="comprobante"
                                        readonly={false}
                                        title={t("fields.proof_of_address")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.ProofOfAddressType}
                                        selectedValue={String(address.proofOfAddressId)}
                                        onChange={(e) => setField('proofOfAddressId', e.target.value, 'address')}
                                    />

                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <Button
                                                id='save'
                                                title={t("buttons.save")}
                                                type='saveButton'
                                                icon={<SaveIcon />}
                                                onClick={handleSave}
                                            />

                                            {<Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                icon={<ClearIcon />}
                                                onClick={handleClear}

                                            />}
                                        </div>
                                    </div>

                                </div>
                            </form>

                            <div className="col-12">
                                <hr />
                                <Table
                                    id='searchPersonTable'
                                    title={t("Direcciones")}
                                    columns={[
                                        { name: "ID", field: "id", hidden: true },
                                        {
                                            name: "Estatus",
                                            field: "statusText",
                                        },
                                        {
                                            name: "Tipo",
                                            field: "addressTypeText",
                                        },
                                        {
                                            name: "Dirección",
                                            field: ["street", "exteriorNumber", "interiorNumber", "postalCode"],
                                        },
                                    ]}
                                    data={tableData}
                                    onRowClick={(row: any) => {
                                        const selected = state.addresses.find(addr => addr.id === row.id);
                                        if (selected) {
                                            setAddress(selected);
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

export default CustomerAddress;