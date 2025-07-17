import React, { ReactNode } from 'react';

interface ContactInfoCardProps {
    id: string;
    title: string;
    icon: ReactNode;
    modalId: string;
    modalContent: ReactNode;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
    title,
    icon,
    modalId,
    modalContent,
}) => {

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div
                    className={`card d-flex align-items-left justify-content-center px-3`}
                    style={{
                        cursor: 'pointer',
                        borderWidth: '1.5px',
                        height: '56px',
                    }}

                    data-bs-toggle="offcanvas"
                    data-bs-target={`#${modalId}`}
                    aria-controls={modalId}
                >
                    <div className="d-flex align-items-center gap-3">
                        <div
                            style={{
                                fontSize: '1.25rem',
                                color: '#0d6efd',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {icon}
                        </div>
                        <span
                            className="fw-medium"
                            style={{
                                fontSize: '0.9rem',
                                color: '#374151',
                                letterSpacing: '0.01em'
                            }}
                        >
                            {title}
                        </span>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end " tabIndex={-1}
             id={modalId} 
             aria-labelledby={`${modalId}Label`}>
                <div className="offcanvas-header offcanvas-ui">
                    <h5 className="offcanvas-title" id={`${modalId}Label`}>
                        <i data-feather="phone-call" className="feather-sm me-1"></i>  {title}
                    </h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                     {modalContent}
                </div>
            </div>
        </>
    );
};

export default ContactInfoCard;