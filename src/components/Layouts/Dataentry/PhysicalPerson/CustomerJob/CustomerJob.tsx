import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import SearchMoralPerson from '../../../../BasicComponents/SearchMoralPerson/SearchMoralPerson';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import { useCatalogs } from '../../../../../context/Catalog/CatalogContext';
import { useCustomerContext } from '../../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';
import { CreateJob, UpdateJob } from '../../../../../api/dataentry/physicalPerson/physicalPerson';
import { showSuccessSweetAlert } from '../../../../../utils/SweetAlertUtils/sweetAlertUtils';
import Table from '../../../../BasicComponents/Table/Table';
import { emptyJob } from '../../../../../reducers/InitialStates/PhysicalPersonState';
import { NumericFormat } from 'react-number-format';

const CustomerJob: React.FC = () => {

    const { t } = useTranslation();
    const { catalogs } = useCatalogs();
    const { state, setField, setJob, setJobs } = useCustomerContext();
    const { job } = state;

    const handleSave = async () => {
        try {
            if (state.job.id && state.job.id.trim() !== '') {
                const response = await UpdateJob(state.job);
                if (response) {
                    showSuccessSweetAlert(response.message || "Empleo actualizado");

                    // Actualiza el listado completo
                    const updatedJobs = state.jobs.map((job: any) =>
                        job.id === state.job.id ? { ...state.job } : job
                    );

                    setJobs(updatedJobs);
                    setJob(emptyJob);
                }
            } else {

                const jobToSave =
                {
                    ...state.job,
                    customerId: state.customer.id
                }

                const response = await CreateJob(jobToSave);
                if (response) {
                    const newJob = { ...jobToSave, id: response };
                    const updatedJobs = [...state.jobs, newJob];

                    console.log(updatedJobs)
                    setJobs(updatedJobs);
                    setJob(emptyJob);

                    showSuccessSweetAlert(response.message || "Empleo creado");
                }
            }
        } catch (err: any) {
            console.error("Error al guardar el empleo:", err);
        }
    };

    const getCatalogName = (
        catalog: { value: string; option: string }[],
        id: string | number
    ): string => {
        const item = catalog.find(opt => opt.value === String(id));
        return item ? item.option : String(id);
    };


    const tableData = useMemo(() => {
        return (state.jobs || []).map((job: any) => ({
            ...job,
            statusText: getCatalogName(catalogs.Status, job.statusId),
            jobTypeText: getCatalogName(catalogs.JobType, job.jobTypeId),
        }));
    }, [state.jobs, catalogs.Status, catalogs.JobType]);

     useEffect(() => {
            if (!job.startDate || !job.endDate) return;

            
    
            const startDate = new Date(job.startDate);
            const endDate = new Date(job.endDate);
    
            if(startDate > endDate) return;

            let years = endDate.getFullYear() - startDate.getFullYear();
            let months = endDate.getMonth() - startDate.getMonth();
    
            if (months < 0) {
                years--;
                months += 12;
            }
    
            setField('yearsOfService', years, 'job');
            setField('monthsOfService', months, 'job');
    
        }, [job.startDate, job.endDate]);

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.jobs")}</h4>
                        <p>{t("dataentry.tabs.jobs_description")}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">
                                    <Select
                                        id="jobStatus"
                                        readonly={false}
                                        title={t("fields.status")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.Status}
                                        selectedValue={job.statusId ?? ""}
                                        onChange={(e) => setField('statusId', e.target.value, 'job')}
                                    />

                                    <Select
                                        id='jobSituation'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.job_situation")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.JobSituation}
                                        selectedValue={job.jobSituationId ?? ""}
                                        onChange={(e) => setField('jobSituationId', e.target.value, 'job')}
                                    />

                                    <Select
                                        id="jobType"
                                        readonly={false}
                                        title={t("fields.job_type")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.JobType}
                                        selectedValue={job.jobTypeId ?? ""}
                                        onChange={(e) => setField('jobTypeId', e.target.value, 'job')}
                                    />

                                    <Select
                                        id='companyPartner'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.company_partner")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.CompanyPartner}
                                        selectedValue={job.companyPartnerId ?? ""}
                                        onChange={(e) => setField('companyPartnerId', e.target.value, 'job')}
                                    />

                                    <SearchMoralPerson />

                                    <Select
                                        id="jobGenericActivity"
                                        readonly={false}
                                        title={t("fields.generic_activity")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.GenericActivity}
                                        selectedValue={job.genericActivityId ?? ""}
                                        onChange={(e) => setField('genericActivityId', e.target.value, 'job')}
                                    />

                                    <Select
                                        id="jobSpecificActivity"
                                        readonly={false}
                                        title={t("fields.specific_activity")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.SpecificActivity}
                                        selectedValue={job.specificActivityId ?? ""}
                                        onChange={(e) => setField('specificActivityId', e.target.value, 'job')}
                                    />



                                    <Input
                                        id='jobImmediateBoss'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.immediate_boss")}
                                        placeholder={t("fields.immediate_boss")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={job.immediateBoss ?? ""}
                                        onChange={(e) => setField('immediateBoss', e.target.value, 'job')}
                                    />

                                    <Select
                                        id="jobPositionBoss"
                                        readonly={false}
                                        title={t("fields.position_boss")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.BossPosition}
                                        selectedValue={job.bossPositionId ?? ""}
                                        onChange={(e) => setField('bossPositionId', e.target.value, 'job')}
                                    />

                                    <Select
                                        id='numberOfEmployees'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.number_of_employees")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.EmployeeNumber}
                                        selectedValue={job.numberOfEmployeesId ?? ""}
                                        onChange={(e) => setField('numberOfEmployeesId', e.target.value, 'job')}
                                    />

                                    <Input
                                        id='jobEmployeeCode'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.employee_code")}
                                        placeholder={t("fields.employee_code")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={job.employeeCode ?? ""}
                                        onChange={(e) => setField('employeeCode', e.target.value, 'job')}
                                    />


                                    <Select
                                        id="jobPosition"
                                        readonly={false}
                                        title={t("fields.position")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.JobPosition}
                                        selectedValue={job.positionId ?? ""}
                                        onChange={(e) => setField('positionId', e.target.value, 'job')}
                                    />

                                    <DatePicker
                                        id="startDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.start_date")}
                                        value={job.startDate ?? ""}
                                        onChange={(e) => setField('startDate', e.target.value, 'job')}
                                    />

                                    <DatePicker
                                        id="startDate"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title={t("fields.end_date")}
                                        value={job.startDate ?? ""}
                                        onChange={(e) => setField('endDate', e.target.value, 'job')}
                                    />

                                    <Input
                                        id='jobEmployYear'
                                        readonly={true}
                                        required={true}
                                        title={t("fields.years_of_service")}
                                        placeholder={t("fields.years_of_service")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(job.yearsOfService ?? 0)}
                                        onChange={(e) => setField('yearsOfService', e.target.value, 'job')}
                                    />

                                    <Input
                                        id='jobEmployMonth'
                                        readonly={true}
                                        required={true}
                                        title={t("fields.months_of_service")}
                                        placeholder={t("fields.months_of_service")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(job.monthsOfService ?? 0)}
                                        onChange={(e) => setField('monthsOfService', e.target.value, 'job')}
                                    />


                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <h5 className="mb-4">{t("fields.income")}</h5>
                                            </div>
                                            <Select
                                                id="jobPaymentWay"
                                                readonly={false}
                                                title={t("fields.job_payment_way")}
                                                required={true}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                                options={catalogs.FormOfPayment}
                                                selectedValue={job.paymentMethodId ?? ""}
                                                onChange={(e) => setField('paymentMethodId', e.target.value, 'job')}
                                            />
                                            <Select
                                                id="jobPaymentFrequency"
                                                readonly={false}
                                                title={t("fields.payment_frequency")}
                                                required={true}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                                options={catalogs.FrequencyPayment}
                                                selectedValue={job.frequencyPaymentId ?? ""}
                                                onChange={(e) => setField('frequencyPaymentId', e.target.value, 'job')}
                                            />
                                            <Select
                                                id="jobCurrency"
                                                readonly={false}
                                                title={t("fields.currency")}
                                                required={true}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                                options={catalogs.Currency}
                                                selectedValue={job.currencyId ?? ""}
                                                onChange={(e) => setField('currencyId', e.target.value, 'job')}
                                            />


                                            <NumericFormat
                                                id="propertyValue"
                                                readonly={false}
                                                required={false}
                                                title={t("fields.fixed_salary")}
                                                placeholder={t("fields.fixed_salary")}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                                value={job.fixedIncome}
                                                onValueChange={(e) => setField('fixedIncome', e.floatValue, 'job')}
                                                prefix="$"
                                                allowNegative={false}
                                                decimalScale={0}
                                                thousandSeparator
                                                customInput={Input}
                                            />


                                            <NumericFormat
                                                id="propertyValue"
                                                readonly={false}
                                                required={false}
                                                title={t("fields.variable_incomes")}
                                                placeholder={t("fields.variable_incomes")}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                                value={job.variableIncome}
                                                onValueChange={(e) => setField('variableIncome', e.floatValue, 'job')}
                                                prefix="$"
                                                allowNegative={false}
                                                decimalScale={0}
                                                thousandSeparator
                                                customInput={Input}
                                            />

                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <Button
                                                id='save'
                                                title={t("buttons.save")}
                                                type={'saveButton'}
                                                icon={<SaveIcon />}
                                                onClick={handleSave}
                                            />

                                            <Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                onClick={() => setJob(emptyJob)}
                                                icon={<ClearIcon />}
                                            />

                                            {/* <Button
                                                id='new'
                                                title={t("buttons.new")}
                                                type='newButton'
                                                icon={<AddPlusIcon />}
                                                onClick={handleSave}    
                                            /> */}

                                        </div>
                                    </div>


                                </div>
                            </form>

                            <div className="col-12">
                                <hr />
                                <Table
                                    id='searchPersonTable'
                                    title={t("Empleos")}
                                    columns={[
                                        { name: "ID", field: "id", hidden: true },
                                        {
                                            name: "Estatus",
                                            field: "statusText",
                                        },
                                        {
                                            name: "Tipo",
                                            field: "jobTypeText",
                                        },

                                    ]}
                                    data={tableData}
                                    onRowClick={(row: any) => {
                                        const selected = state.jobs.find((job: any) => job.id === row.id);
                                        if (selected) {
                                            setJob(selected);
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

export default CustomerJob;
