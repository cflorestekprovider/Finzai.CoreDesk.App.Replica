import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomerRelationShip: React.FC = () => {
    const { t } = useTranslation();
  
    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>{t("dataentry.tabs.relations")}</h4>
                        <p>{t("dataentry.tabs.relations_description")}</p>
                    </div>
                    <div className="ui-action-bar">


                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CustomerRelationShip;