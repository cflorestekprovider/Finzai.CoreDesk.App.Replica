import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../../PageHeader/PageHeader';
import Table from '../../BasicComponents/Table/Table';
import { getCreditlinesByTenantId } from '../../../api/creditline/catalogs/creditlineCatalogService';
import EditCreditlineModal from './EditCreditlineModal';
import { AddPlusIcon } from '../../../api/models/IconsModels/IconsModels';

const CreditlineCatalog: React.FC = () => {
    const { t } = useTranslation();
    const [searchResults, setSearchResults] = useState([]);
    const [modalMode, setModalMode] = useState<'create' | 'update'>('create');
    const [selectedCreditlineId, setSelectedCreditlineId] = useState<string | undefined>(undefined);

    const fetchData = async () => {
        try {
            const creditlineList = await getCreditlinesByTenantId('4fa6f31d-7036-4fca-b4b3-56b1a3bcc00d');
            if (!creditlineList.creditlineCatalogs || creditlineList.creditlineCatalogs.length === 0) {
                console.warn("No data found for the given tenant ID.");
                return;
            }

            setSearchResults(creditlineList.creditlineCatalogs);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Open modal for create
    const handleCreate = () => {
        setModalMode('create');
        setSelectedCreditlineId(undefined);
        setTimeout(() => {
            // Open Bootstrap offcanvas programmatically
            const offcanvas = document.getElementById('offcanvasEditCreditlineModal');
            if (offcanvas) {
                // @ts-ignore
                const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
                bsOffcanvas.show();
            }
        }, 0);
    };

     // Open modal for edit
    const handleEdit = (creditlineId: string) => {
        setModalMode('update');
        setSelectedCreditlineId(creditlineId);
        setTimeout(() => {
            const offcanvas = document.getElementById('offcanvasEditCreditlineModal');
            if (offcanvas) {
                // @ts-ignore
                const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
                bsOffcanvas.show();
            }
        }, 0);
    };

    const handleCloseModal = () => {
        const offcanvas = document.getElementById('offcanvasEditCreditlineModal');
        if (offcanvas) {
            // @ts-ignore
            const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
            bsOffcanvas.hide();
        }
        fetchData();
    }
    return (
        <>
            <PageHeader title={t("creditlineCatalog.title")} name={'Username'} />
            <div className="row">
                <div className="col-12">
                    <div className="ui-title-action-bar">
                        <div className="ui-title">
                            <h4>{t("creditlineCatalog.search_result")}</h4>
                            <p>{t("creditlineCatalog.search_result")}</p>
                        </div>
                        <div className="ui-action-bar">
                            <button 
                                id="add-btn" 
                                type="button" 
                                className="btn waves-effect waves-light bg-outline-success btn-outline-success"
                                onClick={handleCreate}
                            >
                                {<AddPlusIcon />}
                                {t("buttons.new")}
                            </button>             
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="row form-compact-holder">
                                    <div className="col-12">                                        
                                        <Table
                                            id='searchPersonTable'
                                            title={t("creditlineCatalog.search_result")}
                                            columns={[
                                                {
                                                    name: "ID",
                                                    field: "id",
                                                    hidden: true // se usa internamente pero no se muestra
                                                },
                                                {
                                                    name: t('creditlineCatalog.grid_columns.name'),
                                                    field: "name"
                                                },
                                                {
                                                    name: t("creditlineCatalog.grid_columns.code"),
                                                    field: "code"
                                                },
                                                {
                                                    name: t("creditlineCatalog.grid_columns.portfolio_type_des"),
                                                    field: "portfolioType"
                                                },
                                                {
                                                    name: t("creditlineCatalog.grid_columns.product_type_des"),
                                                    field: "productType"
                                                },
                                                {
                                                    name: t("creditlineCatalog.grid_columns.customer_type_des"),
                                                    field: "customerType"
                                                }
                                            ]}
                                            data={searchResults}
                                            onRowClick={(row) => handleEdit(row.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <EditCreditlineModal  
                mode={modalMode}
                creditlineId={selectedCreditlineId}
                onClose={() => handleCloseModal()}
            />
        </>
    );

};

export default CreditlineCatalog;