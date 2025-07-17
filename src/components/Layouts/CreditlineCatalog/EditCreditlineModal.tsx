import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Input from '../../BasicComponents/Input/Input';
import Select from '../../BasicComponents/Select/Select';
import Button from '../../BasicComponents/Button/Button';
import { SaveIcon, UpdateBoardIcon } from '../../../api/models/IconsModels/IconsModels';
import { createCreditline, getCreditlineById, updateCreditline } from '../../../api/creditline/catalogs/creditlineCatalogService';
import { CreditlinePayload } from '../../../api/models/Creditline/CreditlineCatalog';
import DatePicker from '../../BasicComponents/DatePicker/DatePicker';
import { showErrorSweetAlert } from '../../../utils/SweetAlertUtils/sweetAlertUtils';
import { showSuccessToast } from '../../../utils/ToastUtils/toastUtils';

interface EditCreditlineModalProps {
    mode: 'create' | 'update';
    creditlineId?: string;
    onClose?: () => void;
}

const EditCreditlineModal: React.FC<EditCreditlineModalProps> = ({ mode, creditlineId, onClose }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        id: creditlineId || '',
        name: '',
        code: '',
        customerType: '',
        productType: '',
        portfolioType: '',
        currency: '',
        interestType: '',
        interestRate: '',
        fixedAmount: '',
        minAmount: '',
        maxAmount: '',
        validFrom: '',
        validUntil: '',
        multiDisbursement: false,
        active: false,
    });

    /*temporal*/
    const customerTypeOptions = [
        { option: 'Persona Física', value: '1' },
        { option: 'Persona Moral', value: '2' }
    ];

    const productTypeOptions = [
        { value: '1', option: 'Producto 1' },
        { value: '2', option: 'Producto 2' }
    ];

    const portfolioTypeOptions = [
        { value: '1', option: 'Portafolio 1' },
        { value: '2', option: 'Portafolio 2' }
    ];

    const currencyOptions = [
        { value: '1', option: 'Pesos MXN' },
        { value: '2', option: 'Dólares' }
    ];

    const interestTypeOptions = [
        { value: '1', option: 'Fijo' },
        { value: '2', option: 'Variable' }
    ];
    /*temporal*/
    useEffect(() => {
        const fetchCreditlineById = async (creditlineId:string) => {
            try {
                const response = await getCreditlineById(creditlineId, '4fa6f31d-7036-4fca-b4b3-56b1a3bcc00d');
                if (response && response.creditlineCatalogDto) {
                    setForm({
                        id: creditlineId,
                        name: response.creditlineCatalogDto.name || '',
                        code: response.creditlineCatalogDto.code || '',
                        customerType: response.creditlineCatalogDto.customerTypeId || '0',
                        productType: response.creditlineCatalogDto.productId || '0',
                        portfolioType: response.creditlineCatalogDto.portfolioTypeId || '0',
                        currency: response.creditlineCatalogDto.currencyId || '0',
                        interestType: response.creditlineCatalogDto.interestTypeId || '0',
                        interestRate: response.creditlineCatalogDto.interestRate !== null && response.creditlineCatalogDto.interestRate !== undefined
                            ? response.creditlineCatalogDto.interestRate.toString()
                            : '',
                        fixedAmount: response.creditlineCatalogDto.fixedAmount !== null && response.creditlineCatalogDto.fixedAmount !== undefined
                            ? formatMoney(response.creditlineCatalogDto.fixedAmount.toString())
                            : '',
                        minAmount: response.creditlineCatalogDto.minAmount !== null && response.creditlineCatalogDto.minAmount !== undefined
                            ? formatMoney(response.creditlineCatalogDto.minAmount.toString())
                            : '',
                        maxAmount: response.creditlineCatalogDto.maxAmount !== null && response.creditlineCatalogDto.maxAmount !== undefined
                            ? formatMoney(response.creditlineCatalogDto.maxAmount.toString())
                            : '',
                        validFrom: response.creditlineCatalogDto.validFrom
                            ? new Date(response.creditlineCatalogDto.validFrom).toISOString().split('T')[0]
                            : '',
                        validUntil: response.creditlineCatalogDto.validUntil
                            ? new Date(response.creditlineCatalogDto.validUntil).toISOString().split('T')[0]
                            : '',
                        multiDisbursement: response.creditlineCatalogDto.isMultiDisbursement || false,
                        active: response.creditlineCatalogDto.isActive || false,
                    });
                }
            } catch (error) {
                console.error("Error al cargar los datos del cliente:", error);
            }
        };

        if (mode === 'update' && creditlineId) {
            fetchCreditlineById(creditlineId);
            console.log('Load data for update:', creditlineId);
        } else if (mode === 'create') {
            setForm({
                id: '',
                name: '',
                code: '',
                customerType: '',
                productType: '',
                portfolioType: '',
                currency: '',
                interestType: '',
                interestRate: '',
                fixedAmount: '',
                minAmount: '',
                maxAmount: '',
                validFrom: '',
                validUntil: '',
                multiDisbursement: false,
                active: false,
            });
            console.log('Prepare form for creation');
        }
    }, [mode, creditlineId]);

    const formatMoney = (value: string | number, currency: string = 'USD', locale: string = 'en-US') => {
        if (value === '' || value === null || value === undefined) return '';
        const number = typeof value === 'string' ? Number(value.replace(/,/g, '')) : value;
        return isNaN(number)
            ? ''
            : new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(number);
    };

    const parseNumber = (value: string) => {
        return value.replace(/[^0-9.]/g, '');
    };

    const payload: CreditlinePayload = {
        tenantId: '4fa6f31d-7036-4fca-b4b3-56b1a3bcc00d',// Replace with actual tenant ID
        id: form.id || '',
        name: form.name,
        code: form.code,
        productId: Number(form.productType),
        portfolioTypeId: Number(form.portfolioType),
        fixedAmount: form.fixedAmount ? Number(parseNumber(form.fixedAmount)) : undefined,
        minimumAmount: form.minAmount ? Number(parseNumber(form.minAmount)) : undefined,
        maximumAmount: form.maxAmount ? Number(parseNumber(form.maxAmount)) : undefined,
        interestTypeId: Number(form.interestType),
        currencyId: Number(form.currency),
        customerTypeId: Number(form.customerType),
        interestRate: Number(form.interestRate),
        validFrom: form.validFrom,
        validUntil: form.validUntil,
        isMultiDisbursement: form.multiDisbursement,
        isActive: form.active,
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target;
        setForm(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

     const handleDateChange = (id: string, value: any) => {
        setForm(prev => ({
            ...prev,
            [id]: value.target.value
        }));
    };

    // Function to save a new creditline
    const saveCreditlineData = async () => {
        try {
            // You may need to adjust the payload according to your API
            await createCreditline(payload);   

            showSuccessToast(t('creditlineCatalog.messages.success'));

            if (onClose) onClose();
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error creating creditline:", error);
                showErrorSweetAlert(error.message);
            } else {
                console.error("Unexpected error:", error);
                showErrorSweetAlert('An unexpected error occurred');
            } 
        }
    };

    // Function to update an existing creditline
    const updateCreditlineData = async () => {
        try {
            if (!creditlineId) return;

            await updateCreditline(payload);

            showSuccessToast(t('creditlineCatalog.messages.update_success'));
            
            if (onClose) onClose();
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error updating creditline:", error);
                showErrorSweetAlert(error.message);
            } else {
                console.error("Unexpected error:", error);
                showErrorSweetAlert(t('creditlineCatalog.messages.error'));
            }
        }
    };

    return (
        <>
            <div
                className="offcanvas offcanvas-end"
                id="offcanvasEditCreditlineModal"
                aria-labelledby="offcanvasEditCreditlineLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasEditCreditlineLabel">
                       {
                        mode === 'create'
                            ? t("creditlineCatalog.add_creditline.title")
                            : t("creditlineCatalog.edit_creditline")
                        }
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <Input
                            id='name'
                            readonly={false}
                            required={true}
                            title={t("creditlineCatalog.add_creditline.name")}
                            placeholder={t("creditlineCatalog.add_creditline.name")}
                            classInput='col-8'     
                            value={form.name}
                            onChange={handleChange}
                        />
                        <Input
                            id='code'
                            readonly={false}
                            required={true}
                            title={t("creditlineCatalog.add_creditline.code")}
                            placeholder={t("creditlineCatalog.add_creditline.code")}
                            classInput='col-4'
                            value={form.code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row">
                        <Select
                            id='customerType'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.customer_type")}
                            classInput='col-4'
                            options={customerTypeOptions}
                            selectedValue={form.customerType}
                            onChange={handleChange}
                        />
                        <Select
                            id='productType'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.product_type")}
                            classInput='col-4'
                            options={productTypeOptions}
                            selectedValue={form.productType}
                            onChange={handleChange}
                        />
                        <Select
                            id='portfolioType'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.portfolio_type")}
                            classInput='col-4'
                            options={portfolioTypeOptions}
                            selectedValue={form.portfolioType}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row">
                        <Select
                            id='currency'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.currency")}
                            classInput='col-4'
                            options={currencyOptions}
                            selectedValue={form.currency}
                            onChange={handleChange}
                        />
                        <Select
                            id='interestType'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.interest_type")}
                            classInput='col-4'
                            options={interestTypeOptions}
                            selectedValue={form.interestType}
                            onChange={handleChange}
                        />
                        <Input
                            id='interestRate'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.interest_rate")}
                            placeholder={t("creditlineCatalog.add_creditline.interest_rate")}
                            classInput='col-4'
                            value={form.interestRate}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div className="row">
                        <Input
                            id='fixedAmount'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.fixed_amount")}
                            placeholder={t("creditlineCatalog.add_creditline.fixed_amount")}
                            classInput='col-4'
                            value={form.fixedAmount}
                            onChange={handleChange}
                            onBlur={e => {
                                const val = parseNumber(e.target.value);
                                setForm(prev => ({ ...prev, fixedAmount: formatMoney(val, 'USD', 'en-US') }));
                            }}
                            type="text"
                        />
                        <Input
                            id='minAmount'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.min_amount")}
                            placeholder={t("creditlineCatalog.add_creditline.min_amount")}
                            classInput='col-4'
                            value={form.minAmount}
                            onChange={handleChange}
                            onBlur={e => {
                                const val = parseNumber(e.target.value);
                                setForm(prev => ({ ...prev, minAmount: formatMoney(val, 'USD', 'en-US') }));
                            }}
                            type="text"
                        />
                        <Input
                            id='maxAmount'
                            readonly={false}
                            required={false}
                            title={t("creditlineCatalog.add_creditline.max_amount")}
                            placeholder={t("creditlineCatalog.add_creditline.max_amount")}
                            classInput='col-4'
                            value={form.maxAmount}
                            onChange={handleChange}
                            onBlur={e => {
                                const val = parseNumber(e.target.value);
                                setForm(prev => ({ ...prev, maxAmount: formatMoney(val, 'USD', 'en-US') }));
                            }}
                            type="text"
                        />
                    </div>
                    <div className="row"> 
                        <DatePicker
                            id="validFrom"
                            readonly={false}
                            required={true}
                            title={t("creditlineCatalog.add_creditline.valid_from")}
                            value={form.validFrom}
                            classInput='col-4'
                            onChange={date => handleDateChange('validFrom', date)}
                        /> 
                        <DatePicker
                            id="validUntil"
                            readonly={false}
                            required={true}
                            title={t("creditlineCatalog.add_creditline.valid_until")}
                            value={form.validUntil}
                            classInput='col-4'
                            onChange={date => handleDateChange('validUntil', date)}
                        />
                        <div className="col-4 d-flex align-items-center">
                            <div className="form-check mt-n2">
                                <div>
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="multiDisbursement"
                                        checked={form.multiDisbursement}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="multiDisbursement">
                                        {t("creditlineCatalog.add_creditline.is_multi_disbursement")}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="active"
                                        checked={form.active}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="active">
                                        {t("creditlineCatalog.add_creditline.active")}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                        {
                        mode === 'create'
                            ? <Button
                            id='save'
                            title={t("buttons.save")}
                            type='saveButton'
                            icon={<SaveIcon />}
                            onClick={saveCreditlineData}
                        />
                            : <Button
                            id='update'
                            title={t("buttons.update")}
                            type='simpleButton'
                            icon={<UpdateBoardIcon />}
                            onClick={updateCreditlineData}
                        />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditCreditlineModal;