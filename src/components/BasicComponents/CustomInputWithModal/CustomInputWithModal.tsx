import React, { ReactNode } from 'react';

interface CustomInputWithModalProps {
    id: string;
    title: string;
    readonly?: boolean;
    required: boolean;
    classInput:string;
    icon:ReactNode;
    modalId?: string;
    modalContent?: ReactNode;
}

const CustomInputWithModal: React.FC<CustomInputWithModalProps> = ({
    title, readonly = true, required, id, classInput,
    icon, modalId, modalContent
}) => {
    return (
        <>
            <div className={classInput}>
                <div className="input-group form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        readOnly={readonly}
                        disabled={readonly}
                        placeholder={title}
                        id={id}
                    />
                    <button
                        className="btn btn-primary addon-btn-attached-right"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#${modalId}`}
                        aria-controls={modalId}
                    >
                        {icon}
                    </button>
                    <label htmlFor={id}>
                        {required && <span className="required-tag"> * </span>}
                        {title}
                    </label>
                </div>
            </div>

            {/* Modal sidebar */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id={modalId}
                aria-labelledby={`${modalId}Label`}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id={`${modalId}Label`}>{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {modalContent}
                </div>
            </div>
        </>
    );
};

export default CustomInputWithModal;