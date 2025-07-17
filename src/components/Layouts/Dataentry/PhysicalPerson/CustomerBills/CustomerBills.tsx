import React, {useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import { ClearIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';
import {CreateExpense, UpdateExpense } from '../../../../../api/dataentry/physicalPerson/physicalPerson';
import { showSuccessSweetAlert,showWarningSweetAlert } from '../../../../../utils/SweetAlertUtils/sweetAlertUtils';
import { useCatalogs } from '../../../../../context/Catalog/CatalogContext';
import { NumericFormat } from 'react-number-format';
import { useCustomerContext } from '../../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';
import Table from '../../../../BasicComponents/Table/Table';

const CustomerBills: React.FC = () => {
    const { t } = useTranslation();
    const { catalogs } = useCatalogs();
    const { state, setField, setExpense, setExpenses } = useCustomerContext();
    const { expense } = state;

    const emptyExpense = {
        id: null,
        expenseTypeId: 0,
        expenseFrequencyId: 0,
        amount: 0,
        monthlyAmount:0,
        comments: "",
    };

    const getCatalogName = (
        catalog: { value: string; option: string }[],
        id: string | number
    ): string => {
        const item = catalog.find(opt => opt.value === String(id));
        return item ? item.option : String(id);
    };

    const tableData = useMemo(() => {
        return (state.expenses || []).map(expen => ({
            ...expen,
            expenseTypeText: getCatalogName(catalogs.ExpenseType, expen.expenseTypeId),
            expenseFrequencyText: getCatalogName(catalogs.ExpenseFrequency, expen.expenseFrequencyId),
            amount: `$${Number(expen.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            monthlyAmount: `$${Number(expen.monthlyAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }));
    }, [state.expenses, catalogs.ExpenseType, catalogs.ExpenseFrequency]);

    const handleSave = async () => {
        try {

            const isNew = !state.expense.id || state.expense.id.trim() === '';

            // Verificar duplicado solo si es nuevo
            if (isNew) {
                const exists = state.expenses.some(
                    (e) => e.expenseTypeId === state.expense.expenseTypeId
                );

                if (exists) {
                    showWarningSweetAlert("Ya existe un gasto de ese tipo.");
                    return;
                }
            }

            if (!isNew) {
                await UpdateExpense(state.expense);

                const updatedExpenses = state.expenses.map(expen =>
                    expen.id === state.expense.id ? { ...state.expense } : expen
                );

                setExpenses(updatedExpenses);
                setExpense(emptyExpense);
                showSuccessSweetAlert("Gasto actualizado");
            } else {
                const expenseToSave = {
                    ...state.expense,
                    customerId: state.customer.id
                };

                const response = await CreateExpense(expenseToSave);
                if (response) {
                    const newExpense = { ...expenseToSave, id: response };
                    const updatedExpenses = [...state.expenses, newExpense];

                    setExpenses(updatedExpenses);
                    setExpense(emptyExpense);
                    showSuccessSweetAlert("Gasto creado");
                }
            }
        } catch (err: any) {
            console.error("Error al guardar el gasto:", err);
        }
    };

    const handleClear = () => {
        setExpense(emptyExpense);
    };

    useEffect(() => {
        const amount = expense.amount ?? 0;
        const freqId = expense.expenseFrequencyId;

        if (!freqId || !amount) {
            setField('monthlyAmount', 0, 'expense');
            return;
        }

        const frequencyOption = catalogs.ExpenseFrequency.find(opt => opt.value === String(freqId));
        const frequencyText = frequencyOption?.option?.toLowerCase() ?? '';

        let monthlyAmount = amount;

        if (frequencyText.includes('semanal')) {
            monthlyAmount = amount * 4.33;
        } else if (frequencyText.includes('anual')) {
            monthlyAmount = amount / 12;
        } else if (frequencyText.includes('mensual')) {
            monthlyAmount = amount;
        } else {
            monthlyAmount = 0;
        }

        setField('monthlyAmount', parseFloat(monthlyAmount.toFixed(2)), 'expense');
    }, [expense.amount, expense.expenseFrequencyId, catalogs.ExpenseFrequency]);

    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.expenses")}</h4>
                        <p>{t("dataentry.tabs.expenses_description")}</p>
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
                                        id="expenseType"
                                        readonly={false}
                                        title={t("fields.expense")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.ExpenseType}
                                        selectedValue={expense.expenseTypeId?.toString()}
                                        onChange={(e) => setField('expenseTypeId', e.target.value, 'expense')}
                                    />
                                    <Select
                                        id="expenseFrecuency"
                                        readonly={false}
                                        title={t("fields.frequency")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={catalogs.ExpenseFrequency}
                                        selectedValue={expense.expenseFrequencyId?.toString()}
                                        onChange={(e) => setField('expenseFrequencyId', e.target.value, 'expense')}
                                    />
                                    <NumericFormat
                                        id="amount"
                                        readonly={false}
                                        title={t("fields.amount")}
                                        placeholder={t("fields.amount")}
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={expense.amount}
                                        onValueChange={({ floatValue }: { floatValue: number | undefined }) =>
                                            setField('amount', floatValue ?? 0, 'expense')
                                        }
                                        prefix="$"
                                        allowNegative={false}
                                        decimalScale={2}
                                        thousandSeparator
                                        customInput={Input}
                                        
                                    />
                                    <NumericFormat
                                        id='monthlyAmount'
                                        readonly={true}
                                        required={false}
                                        title={t("fields.monthlyAmount")}
                                        placeholder={t("fields.monthlyAmount")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        value={String(expense.monthlyAmount ?? 0)}
                                        onValueChange={({ floatValue }: { floatValue: number | undefined }) =>
                                            setField('monthlyAmount', floatValue ?? 0, 'expense')
                                        }
                                        prefix="$"
                                        allowNegative={false}
                                        decimalScale={2}
                                        thousandSeparator
                                        customInput={Input}
                                    />

                                    <Input
                                        id='comments'
                                        readonly={false}
                                        required={false}
                                        title={t("fields.comments")}
                                        placeholder={t("fields.comments")}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-12'
                                        value={expense.comments ?? ''}
                                        onChange={(e) => setField('comments', e.target.value, 'expense')}
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
                                                

                                            <Button
                                                id='clear'
                                                title={t("buttons.clear")}
                                                type='clearButton'
                                                icon={<ClearIcon />} 
                                                onClick={handleClear}
                                            />


                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="col-12">
                                <hr />
                                <Table
                                    id='searchPersonTable'
                                    title={t("Gastos")}
                                    columns={[
                                        { name: "ID", field: "id", hidden: true },
                                        {
                                            name: "Gasto",
                                            field: "expenseTypeText",
                                        },
                                        {
                                            name: "Frecuencia",
                                            field: "expenseFrequencyText",
                                        },
                                        {
                                            name: "Monto",
                                            field: "amount",
                                        },
                                        {
                                            name: "Monto mensual",
                                            field: "monthlyAmount",
                                        },
                                    ]}
                                    data={tableData}
                                    onRowClick={(row: any) => {
                                        const selected = state.expenses.find(expen => expen.id === row.id);
                                        if (selected) {
                                            setExpense(selected);
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

export default CustomerBills;