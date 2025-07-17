import { useEffect, useState } from "react";
import ContactInfoCard from "../../Layouts/Dataentry/PhysicalPerson/CustomerData/ContactInfoCards";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EmailIcon } from "../../../api/models/IconsModels/IconsModels";
import Input from "../../BasicComponents/Input/Input";

interface EmailForm {
    id: string | null;
    email: string;
    customerId: string | null;
    isPrincipal: boolean;
    isActive: boolean;
    isVisible:boolean;
}

interface EmailInterface {
    initialEmails: any[];
    onChangeEmails?: (Emails: any[]) => void;
}

const Email: React.FC<EmailInterface> = ({ initialEmails, onChangeEmails }) => {
    const { t } = useTranslation();

   

    const [Emails, setEmails] = useState<EmailForm[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    useEffect(() => {
         console.log(initialEmails);
        if (initialEmails) {
            setEmails(initialEmails);
        }
    }, [initialEmails]);

    const [EmailForm, setEmailForm] = useState<EmailForm>({
        id: null,
        email: "",
        customerId: null,
        isPrincipal: false,
        isActive: false,
        isVisible:true
    });

    const resetForm = () => {
        setEditingIndex(null);
        setEmailForm({
            id: null,
            email: "",
            customerId: null,
            isPrincipal: false,
            isActive: false,
            isVisible:true
        });
    };

    const updateEmails = (updatedEmails: EmailForm[]) => {
        setEmails(updatedEmails);
        if (onChangeEmails) {
            onChangeEmails(updatedEmails);
        }
    };

    const handleAddOrUpdateEmail = () => {
        if (!EmailForm.email) return;

        const newEmail = { ...EmailForm };
        const updatedEmails = [...Emails];

        if (editingIndex !== null) {
            updatedEmails[editingIndex] = newEmail;
        } else {
            updatedEmails.push(newEmail);
        }

        updateEmails(updatedEmails);
        resetForm(); // mantener el modal abierto sin cerrarlo
    };

    const handleDeleteEmail = (index: number) => {
        const updated = Emails.filter((_, i) => i !== index);
        updateEmails(updated);
        resetForm();
    };

    const handleEditEmail = (index: number) => {
        setEmailForm(Emails[index]);
        setEditingIndex(index);
    };

    return (
        <ContactInfoCard
            id="Email"
            title={t("fields.email_fields.email")}
            icon={<EmailIcon />}
            modalId="offcanvasEmails"
            modalContent={
                <>
                    <div className="mb-3">
                        {t("fields.email_fields.description")}
                    </div>

                    <form>
                        <div className="row form-compact-holder">
                           
                            <Input
                                id="Email"
                                readonly={false}
                                required={false}
                                title={t("fields.email_fields.email")}
                                placeholder={t("fields.email_fields.email")}
                                classInput="col-12 col-md-12"
                                value={EmailForm.email}
                                onChange={(e) =>
                                    setEmailForm({ ...EmailForm, email: e.target.value })
                                }
                            />

                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="isPrincipal"
                                        checked={EmailForm.isPrincipal}
                                        onChange={(e) =>
                                            setEmailForm({ ...EmailForm, isPrincipal: e.target.checked })
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="isPrincipal">
                                         {t("fields.email_fields.email_principal")}
                                    </label>
                                </div>

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="isActive"
                                        checked={EmailForm.isActive}
                                        onChange={(e) =>
                                            setEmailForm({ ...EmailForm, isActive: e.target.checked })
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="isActive">
                                         {t("fields.email_fields.active")}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row form-compact-holder mt-3">
                            <div className="col-12 col-md-6 d-grid gap-2 mb-2 mb-md-0">
                                <button
                                    type="button"
                                    className="btn btn-light-danger text-danger"
                                    onClick={resetForm}
                                >
                                    {t("fields.email_fields.clear")}
                                </button>
                            </div>

                            <div className="col-12 col-md-6 d-grid gap-2">
                                <button
                                    onClick={handleAddOrUpdateEmail}
                                    type="button"
                                    className="btn btn-light-success text-success"
                                >
                                    {editingIndex !== null ?  t("fields.email_fields.update") :  t("fields.email_fields.save")}
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mt-2">
                                <hr />
                                <h4 className="mt-1"> {t("fields.email_fields.email_list")}</h4>
                                <div className="list-group">
                                    {Emails.length === 0 ? (
                                        <li className="list-group-item text-center">
                                           {t("fields.email_fields.empty")}
                                        </li>
                                    ) : (
                                        Emails.map((Email, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleEditEmail(index)}
                                                className={`list-group-item list-group-item-action d-flex pointer ${
                                                    editingIndex === index ? "bg-primary bg-opacity-10" : ""
                                                }`}
                                            >
                                                <div className="d-flex align-items-center w-100">
                                                    {Email.email}
                                                    {Email.isPrincipal && (
                                                        <span className="badge bg-light-primary text-info ms-2">{t("fields.email_fields.principal")}</span>
                                                    )}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteEmail(index);
                                                        }}
                                                        type="button"
                                                        className="btn btn-light-danger btn-sm ms-auto"
                                                    >
                                                        <DeleteIcon />
                                                        </button>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            }
        />
    );
};

export default Email;
