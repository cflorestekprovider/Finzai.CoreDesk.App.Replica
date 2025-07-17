import { useEffect, useState } from "react";
import ContactInfoCard from "../../Layouts/Dataentry/PhysicalPerson/CustomerData/ContactInfoCards";
import { useTranslation } from "react-i18next";
import { DeleteIcon, IdentificationIcon } from "../../../api/models/IconsModels/IconsModels";
import Select from "../../BasicComponents/Select/Select";
import Input from "../../BasicComponents/Input/Input";
import { CatalogOption } from "../../../context/Catalog/CatalogContext";
import DatePicker from "../../BasicComponents/DatePicker/DatePicker";

interface IdentificationForm {
    id: string | null;
    number: string;
    identificationTypeId: string;
    emisionDate: string| null;
    expirationDate: string| null;
    customerId: string | null;
    isPrincipal: boolean;
    isVisible: boolean;
}

interface IdentificationInterface {
    identificationTypeOptions: CatalogOption[];
    initialIdentifications: any[];
    onChangeIdentifications?: (Identifications: any[]) => void;
}

const Identification: React.FC<IdentificationInterface> = ({ identificationTypeOptions, initialIdentifications, onChangeIdentifications }) => {
    const { t } = useTranslation();



    const [identifications, setIdentifications] = useState<IdentificationForm[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    useEffect(() => {
        console.log(initialIdentifications);
        if (initialIdentifications) {
            setIdentifications(initialIdentifications);
        }
    }, [initialIdentifications]);

    const [identificationForm, setIdentificationForm] = useState<IdentificationForm>({
        id: null,
        number: "",
        identificationTypeId: "",
        emisionDate: null,
        expirationDate: null,
        customerId: null,
        isPrincipal: false,
        isVisible: true
    });

    const resetForm = () => {
        setEditingIndex(null);
        setIdentificationForm({
            id: null,
            number: "",
            identificationTypeId: "",
            emisionDate: null,
            expirationDate: null,
            customerId: null,
            isPrincipal: false,
            isVisible: true
        });
    };

    const updateIdentifications = (updatedIdentifications: IdentificationForm[]) => {
        setIdentifications(updatedIdentifications);
        if (onChangeIdentifications) {
            onChangeIdentifications(updatedIdentifications);
        }
    };

    const handleAddOrUpdateIdentification = () => {
        if (!identificationForm.number) return;

        const newIdentification = { ...identificationForm };
        const updatedIdentifications = [...identifications];

        if (editingIndex !== null) {
            updatedIdentifications[editingIndex] = newIdentification;
        } else {
            updatedIdentifications.push(newIdentification);
        }

        updateIdentifications(updatedIdentifications);
        resetForm(); // mantener el modal abierto sin cerrarlo
    };

    const handleDeleteIdentification = (index: number) => {
        const updated = identifications.filter((_, i) => i !== index);
        updateIdentifications(updated);
        resetForm();
    };

    const handleEditIdentification = (index: number) => {
        setIdentificationForm(identifications[index]);
        setEditingIndex(index);
    };

    return (
        <ContactInfoCard
            id="Identification"
            title={t("fields.identification_fields.identification")}
            icon={<IdentificationIcon />}
            modalId="offcanvasIdentifications"
            modalContent={
                <>
                    <div className="mb-3">
                        {t("fields.identification_fields.description")}
                    </div>

                    <form>
                        <div className="row form-compact-holder">
                            <Select
                                id="IdentificationType"
                                readonly={false}
                                required={false}
                                title={t("fields.identification_fields.identification_type")}
                                classInput="col-12"
                                options={identificationTypeOptions}
                                selectedValue={identificationForm.identificationTypeId}
                                onChange={(e) =>
                                    setIdentificationForm({ ...identificationForm, identificationTypeId: e.target.value })
                                }
                            />

                            <Input
                                id="Identification"
                                readonly={false}
                                required={false}
                                title={t("fields.identification_fields.identification")}
                                placeholder={t("fields.identification_fields.identification")}
                                classInput="col-12 col-md-6"
                                value={identificationForm.number}
                                onChange={(e) =>
                                    setIdentificationForm({ ...identificationForm, number: e.target.value })
                                }
                            />

                            <DatePicker
                                id="extension"
                                readonly={false}
                                required={false}
                                title={t("fields.identification_fields.emisionDate")}
                                placeholder={t("fields.identification_fields.emisionDate")}
                                classInput="col-12 col-md-6"
                                value={identificationForm.emisionDate ?? ""}
                                onChange={(e) =>
                                    setIdentificationForm({ ...identificationForm, emisionDate: e.target.value })
                                }
                            />


                            <DatePicker
                                id="extension"
                                readonly={false}
                                required={false}
                                title={t("fields.identification_fields.expirationDate")}
                                placeholder={t("fields.identification_fields.expirationDate")}
                                classInput="col-12 col-md-6"
                                value={identificationForm.expirationDate ?? ""}
                                onChange={(e) =>
                                    setIdentificationForm({ ...identificationForm, expirationDate: e.target.value })
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
                                        checked={identificationForm.isPrincipal}
                                        onChange={(e) =>
                                            setIdentificationForm({ ...identificationForm, isPrincipal: e.target.checked })
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="isPrincipal">
                                        {t("fields.identification_fields.identification_principal")}
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
                                    {t("fields.identification_fields.clear")}
                                </button>
                            </div>

                            <div className="col-12 col-md-6 d-grid gap-2">
                                <button
                                    onClick={handleAddOrUpdateIdentification}
                                    type="button"
                                    className="btn btn-light-success text-success"
                                >
                                    {editingIndex !== null ? t("fields.identification_fields.update") : t("fields.identification_fields.save")}
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mt-2">
                                <hr />
                                <h4 className="mt-1"> {t("fields.identification_fields.identification_list")}</h4>
                                <div className="list-group">
                                    {identifications.length === 0 ? (
                                        <li className="list-group-item text-center">
                                            {t("fields.identification_fields.empty")}
                                        </li>
                                    ) : (
                                        identifications.map((identification, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleEditIdentification(index)}
                                                className={`list-group-item list-group-item-action d-flex pointer ${editingIndex === index ? "bg-primary bg-opacity-10" : ""
                                                    }`}
                                            >
                                                <div className="d-flex align-items-center w-100">
                                                    {identificationTypeOptions.find(p => p.value === identification.identificationTypeId)?.option}
                                                    {" "}{identification.number.toUpperCase()}{", "} {identification.emisionDate} - {identification.expirationDate}
                                                    {identification.isPrincipal && (
                                                        <span className="badge bg-light-primary text-info ms-2">{t("fields.identification_fields.principal")}</span>
                                                    )}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteIdentification(index);
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

export default Identification;
