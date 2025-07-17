import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import { SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import { CreateCustomer, GetGeneralDataCustomerById, UpdateCustomer } from '../../../../../api/dataentry/physicalPerson/physicalPerson';
import { useCustomerContext } from '../../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';
import { showInfoSweetAlert, showSuccessSweetAlert } from '../../../../../utils/SweetAlertUtils/sweetAlertUtils';
import { useCatalogs } from '../../../../../context/Catalog/CatalogContext';
import Phone from '../../../../CustomerModals/Phone/Phone';
import Dependent from '../../../../CustomerModals/Dependent/Dependent';
import Email from '../../../../CustomerModals/Email/Email';
import Identification from '../../../../CustomerModals/Identification/Identification';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import { MunicipalityToSelectModel, StateToSelectModel } from '../../../../../utils/TransformSelect/TransformToSelectModel';
import { fetchStates } from '../../../../../queries/catalogs/StateQuery';
import { fetchMunicipality } from '../../../../../queries/catalogs/MunicipalityQuery';


const CustomerData: React.FC = () => {

    const { t } = useTranslation();
    const { catalogs, countryOptions } = useCatalogs();
    const { 
        state, 
        setField, 
        setCustomer, 
        setAddress, 
        setPhones, 
        setDependents, 
        setEmails, 
        setIdentifications, 
        setAddresses,
        setExpense,
        setExpenses,
        setReference,
        setReferences,
        setJob, 
        setJobs } = useCustomerContext();
    const { customer, phones, dependents, emails, identifications } = state;
    const [states, setStates] = useState<SelectModel[]>([]);
    const [municipalities, setMunicipalities] = useState<SelectModel[]>([]);
    
    const getCustomerIdFromHeader = (): string | null => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('customerId');
    };

    useEffect(() => {
        const customerId = getCustomerIdFromHeader();
        if (customerId) {
            loadCustomerData(customerId);
        }
    }, []);

    useEffect(() => {
        if (customer.id) {
            loadCustomerData(customer.id);
        }
    }, [customer.id]);

    const loadCustomerData = async (customerId: string) => {
        try {
            const customerData = await GetGeneralDataCustomerById(customerId);
            if (!customerData) return;
            await setCustomer(customerData.customer);
            await setAddress(customerData.addresses[0]);
            await setAddresses([...state.addresses, ...customerData.addresses]);

            await setExpense(customerData.expenses[0]);
            await setExpenses([...state.expenses, ...customerData.expenses]);

            await setReference(customerData.references[0]);
            await setReferences([...state.references, ...customerData.references]);

            await setJob(customerData.jobs[0]);
            await setJobs([...state.jobs, ...customerData.jobs]);

            if(customerData && customerData.customer && customerData.customer.customer )
            {
                if(customerData.customer.customer.countryBirthId)
                {
                     await handleCountry(customerData.customer.customer.countryBirthId)
                }
                
            }

        } catch (error) {
            console.error("Error al cargar los datos del cliente:", error);
        }
    };

    
    const validateRequiredFields = (): boolean => {
        const form = document.querySelector('.form-compact-holder');
        if (!form) return true;

        const invalidFields: string[] = [];

        const elements = form.querySelectorAll('input, select, textarea');

        elements.forEach((el) => {
            const input = el as HTMLInputElement | HTMLSelectElement;
            const id = input.id;
            //const type = input.type;
            const value = input.value?.trim();
            let isRequired = false;
            let labelText = id;

            // Buscar el label asociado
            const label = form.querySelector(`label[for="${id}"]`);
            if (label) {
                isRequired = !!label.querySelector('.required-tag');
                labelText = label.textContent?.replace('*', '').trim() || id;
            } else {
                // Si no hay un label con for, busca dentro del contenedor del input/select
                const container = input.closest('div');
                const labelInside = container?.querySelector('label');
                if (labelInside && labelInside.querySelector('.required-tag')) {
                    isRequired = true;
                    labelText = labelInside.textContent?.replace('*', '').trim() || id;
                }
            }

            const isEmpty = (input.tagName === 'SELECT' && (value === '0' || value === '')) ||
                (input.tagName !== 'SELECT' && !value);

            if (isRequired && isEmpty) {
                input.classList.add('is-invalid');
                invalidFields.push(labelText);
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (invalidFields.length > 0) {
            showInfoSweetAlert(`Faltan los siguientes campos obligatorios:\n${invalidFields.join(', ')}`);

            return false;
        }

        return true;
    };


    const handleSave = async () => {

        if (!validateRequiredFields()) return;

        try {
            if (state.customer.id && state.customer.id.trim() !== '') {
                try {
                    await UpdateCustomer(state);
                    showSuccessSweetAlert("Actualizado")

                    await loadCustomerData(state.customer.id);
                } catch (err: any) {
                    console.error("Error al actualizar el cliente:", err);
                }
            }
            else {

                const customerToSave =
                {
                    ...state,
                    customer: {
                        ...state.customer,
                        id: null,
                        customerId: state.customer.id

                    }
                }

                const response = await CreateCustomer(customerToSave);
                if (response) {
                    setField('id', response, "customer");
                    showSuccessSweetAlert("Guardado");
                    if (response) {
                        await loadCustomerData(response);
                    }
                }
            }
        } catch (err: any) {
            console.error("Error al guardar el cliente:", err);
        }
    }

    useEffect(() => {
        if (customer.birthDay) {
            const birthDate = new Date(customer.birthDay);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
            setField("age", age.toString(), 'customer');
        }
    }, [customer.birthDay]);

    
    
     const handleCountry = async (countryId: any) => {
        setField('countryBirthId', countryId, 'customer')

        if(countryId == 1){
            const statesResponse = await fetchStates(countryId);
            const statesOptions = statesResponse ? StateToSelectModel(statesResponse) : [];
            setStates(statesOptions);
        }
    }

    useEffect(() => {
        if(state.customer.stateBirthId > 0 )
        {
            const fetchData = async () => {
                const municipalityResponse =  await fetchMunicipality(state.customer.stateBirthId);
                const municipalityOptions = municipalityResponse ? MunicipalityToSelectModel(municipalityResponse) : [];
                setMunicipalities(municipalityOptions);
            }

             fetchData();
            
        }
    }, [state.customer.stateBirthId])



    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.client_data")}</h4>
                        <p>{t("dataentry.tabs.client_data_description")}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="row form-compact-holder">
                                <Select
                                    id="clientType"
                                    readonly={false}
                                    title={t("fields.client_type")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.ClientType}
                                    selectedValue={customer.clientTypeId ?? ""}
                                    onChange={(e) => setField('clientTypeId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="applicantType"
                                    readonly={false}
                                    title={t("fields.applicant_type")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.ApplicantType}
                                    selectedValue={customer.applicantTypeId ?? ""}
                                    onChange={(e) => setField('applicantTypeId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="relationWithHolder"
                                    readonly={false}
                                    title={t("fields.relation_with_holder")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Relation}
                                    selectedValue={customer.relationWithHolderId ?? ""}
                                    onChange={(e) => setField('relationWithHolderId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="clientStatus"
                                    readonly={false}
                                    title={t("fields.client_status")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.ClientStatus}
                                    selectedValue={customer.clientStatusId ?? ""}
                                    onChange={(e) => setField('clientStatusId', e.target.value, 'customer')}
                                />

                                <Input
                                    id='firstLastName'
                                    readonly={false}
                                    required={true}
                                    title={t("fields.first_last_name")}
                                    placeholder='Primer apellido'
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    value={customer.firstLastName}
                                    onChange={(e) => setField('firstLastName', e.target.value, 'customer')}
                                />

                                <Input
                                    id='secondLastName'
                                    readonly={false}
                                    required={false}
                                    title={t("fields.second_last_name")}
                                    placeholder='Segundo apellido'
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    value={customer.secondLastName}
                                    onChange={(e) => setField('secondLastName', e.target.value, 'customer')}
                                />

                                <Input
                                    id='firstName'
                                    readonly={false}
                                    required={true}
                                    title={t("fields.first_name")}
                                    placeholder='Nombre'
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    value={customer.firstName}
                                    onChange={(e) => setField('firstName', e.target.value, 'customer')}
                                />

                                <Input
                                    id='secondName'
                                    readonly={false}
                                    required={false}
                                    title={t("fields.second_name")}
                                    placeholder='Segundo nombre'
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    value={customer.secondName}
                                    onChange={(e) => setField('secondName', e.target.value, 'customer')}
                                />

                                <Select
                                    id="gender"
                                    readonly={false}
                                    title={t("fields.gender")}
                                    required={true}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Gender || []}
                                    selectedValue={customer.genderId ?? ""}
                                    onChange={(e) => setField('genderId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="country"
                                    readonly={false}
                                    title={t("fields.birthdate_country")}
                                    required={true}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={countryOptions}
                                    selectedValue={customer.countryBirthId?.toString()}
                                    onChange={(e) => handleCountry(Number(e.target.value))}
                                />

                                <Select
                                    id="state"
                                    readonly={false}
                                    title={t("fields.birthdate_state")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={states}
                                    selectedValue={customer.stateBirthId?.toString()}
                                    onChange={(e) => setField('stateBirthId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="city"
                                    readonly={false}
                                    title={t("fields.birthdate_city")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={municipalities}
                                    selectedValue={customer.municipalityBirthId?.toString()}
                                    onChange={(e) => setField('municipalityBirthId', e.target.value, 'customer')}
                                />

                                <DatePicker
                                    id="birthDay"
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    readonly={false}
                                    required={true}
                                    title={t("fields.birthdate")}
                                    value={customer.birthDay}
                                    onChange={(e) => { setField("birthDay", e.target.value, 'customer') }}
                                />

                                <Input
                                    id='age'
                                    readonly={true}
                                    required={false}
                                    title={t("fields.age")}
                                    placeholder='Edad'
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    value={customer.age}
                                    onChange={(e) => setField('age', e.target.value, 'customer')}
                                />

                                <Select
                                    id="nationality"
                                    readonly={false}
                                    title={t("fields.nationality")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Nationality}
                                    selectedValue={customer.nationalityId ?? ""}
                                    onChange={(e) => setField('nationalityId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="migratoryState"
                                    readonly={false}
                                    title={t("fields.migratory_state")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.MigratoryStatus}
                                    selectedValue={customer.migratoryStatusId ?? ""}
                                    onChange={(e) => setField('migratoryStatusId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="maritalStatus"
                                    readonly={false}
                                    title={t("fields.civil_status")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.MaritalStatus}
                                    selectedValue={customer.maritalStatusId ?? ""}
                                    onChange={(e) => setField('maritalStatusId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="regimenMarital"
                                    readonly={false}
                                    title={t("fields.marital_regime")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.MaritalRegime}
                                    selectedValue={customer.regimenMaritalStatusId ?? ""}
                                    onChange={(e) => setField('regimenMaritalStatusId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="studies"
                                    readonly={false}
                                    title={t("fields.studies")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Title}
                                    selectedValue={customer.studiesId ?? ""}
                                    onChange={(e) => setField('studiesId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="studiesLevel"
                                    readonly={false}
                                    title={t("fields.studies_level")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.StudiesLevel}
                                    selectedValue={customer.titleId ?? ""}
                                    onChange={(e) => setField('titleId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="profession"
                                    readonly={false}
                                    title={t("fields.profession")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Profession}
                                    selectedValue={customer.professionId ?? ""}
                                    onChange={(e) => setField('professionId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="occupation"
                                    readonly={false}
                                    title={t("fields.occupation")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.Occupation}
                                    selectedValue={customer.occupationId ?? ""}
                                    onChange={(e) => setField('occupationId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="directPolitical"
                                    readonly={false}
                                    title={t("fields.direct_political")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.PoliticalDirect}
                                    selectedValue={customer.directPoliticalId ?? ""}
                                    onChange={(e) => setField('directPoliticalId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="categoryEconomicActivity"
                                    readonly={false}
                                    title={t("fields.category_economic_activity")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.EconomicActivityCategory}
                                    selectedValue={customer.categoryEconomicActivityId ?? ""}
                                    onChange={(e) => setField('categoryEconomicActivityId', e.target.value, 'customer')}
                                />

                                <Select
                                    id="economicActivity"
                                    readonly={false}
                                    title={t("fields.economic_activity")}
                                    required={false}
                                    classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                    options={catalogs.EconomicActivity}
                                    selectedValue={customer.economicActivityId ?? ""}
                                    onChange={(e) => setField('economicActivityId', e.target.value, 'customer')}
                                />

                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center">
                                    <div className="form-check mt-n2">
                                        <div>
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                id="mainActivity"
                                                checked={customer.mainActivity}
                                                onChange={(e) => setField('mainActivity', e.target.checked, 'customer')}
                                            />
                                            <label className="form-check-label" htmlFor="mainActivity">
                                                {t("fields.main_activity")}
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                id="active"
                                                checked={customer.active}
                                                onChange={(e) => setField('active', e.target.checked, 'customer')}
                                            />
                                            <label className="form-check-label" htmlFor="active">
                                                {t("fields.active")}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="mb-4">{t("fields.contact_info")}</h5>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <Phone
                                            typeOptions={catalogs.PhoneType.filter(x => x.isVisible)}
                                            initialPhones={phones}
                                            onChangePhones={(updatedPhones) => {
                                                console.log(updatedPhones);
                                                setPhones(updatedPhones)
                                            }
                                            }
                                        />

                                        <Email initialEmails={emails}
                                            onChangeEmails={(updatedEmails) => {
                                                console.log(updatedEmails);
                                                setEmails(updatedEmails)
                                            }
                                            } />

                                        <Identification identificationTypeOptions={catalogs.IdentificationType.filter(x => x.isVisible)}
                                            initialIdentifications={identifications}
                                            onChangeIdentifications={(updatedIdentifications) => {
                                                console.log(updatedIdentifications);
                                                setIdentifications(updatedIdentifications)
                                            }}
                                        />

                                        <Dependent
                                            dependentOptions={catalogs.DependentsType.filter(x => x.isVisible)}
                                            genderOptions={catalogs.Gender.filter(x => x.isVisible)}
                                            initialDependents={dependents}
                                            onChangeDependents={(updatedDependents) => {
                                                console.log(updatedDependents);
                                                setDependents(updatedDependents)
                                            }
                                            }
                                        />
                                    </div>
                                </div>
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

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CustomerData;