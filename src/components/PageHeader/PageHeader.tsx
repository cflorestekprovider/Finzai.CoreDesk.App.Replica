import React from 'react';
import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  title?: string;
  name?: string;
  isButtonVisible?: boolean;
  onBack?: () => void; 
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, name, isButtonVisible, onBack }) => {
  const { t } = useTranslation();
  return (
    <div className="page-titles bg-white">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 mb-2 mb-md-0 align-self-center">
          <h6 className="text-muted mb-0 fw-normal">{name}</h6>
          <h3 className="mb-0 fw-bold">{title}</h3>
        </div>
        <div className="col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-md-end justify-content-start">
          {isButtonVisible && (
            <button 
              className="btn btn-primary"
              onClick={onBack}
            >
              {t("dataentry.back_to_search")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
