import { useEffect, useState } from "react";
import ContactInfoCard from "../../Layouts/Dataentry/PhysicalPerson/CustomerData/ContactInfoCards";
import { useTranslation } from "react-i18next";
import { DeleteIcon, PhoneIcon } from "../../../api/models/IconsModels/IconsModels";
import Select from "../../BasicComponents/Select/Select";
import Input from "../../BasicComponents/Input/Input";
import { CatalogOption } from "../../../context/Catalog/CatalogContext";

interface PhoneForm {
    id: string | null;
    number: string;
    phoneTypeId: string;
    extension: string;
    contactTimeInitial: string;
    contactTimeFinal: string;
    customerId: string | null;
    isPrincipal: boolean;
    isActive: boolean;
    isVisible:boolean;
}

interface PhoneInterface {
    typeOptions: CatalogOption[];
    initialPhones: any[];
    onChangePhones?: (phones: any[]) => void;
}

const Phone: React.FC<PhoneInterface> = ({ typeOptions, initialPhones, onChangePhones }) => {
    const { t } = useTranslation();

   

    const [phones, setPhones] = useState<PhoneForm[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    useEffect(() => {
         console.log(initialPhones);
        if (initialPhones) {
            setPhones(initialPhones);
        }
    }, [initialPhones]);

    const [phoneForm, setPhoneForm] = useState<PhoneForm>({
        id: null,
        number: "",
        phoneTypeId: "",
        extension: "",
        contactTimeInitial: "",
        contactTimeFinal: "",
        customerId: null,
        isPrincipal: false,
        isActive: false,
        isVisible:true
    });

    const resetForm = () => {
        setEditingIndex(null);
        setPhoneForm({
            id: null,
            number: "",
            phoneTypeId: "",
            extension: "",
            contactTimeInitial: "",
            contactTimeFinal: "",
            customerId: null,
            isPrincipal: false,
            isActive: false,
            isVisible:true
        });
    };

    const updatePhones = (updatedPhones: PhoneForm[]) => {
        setPhones(updatedPhones);
        if (onChangePhones) {
            onChangePhones(updatedPhones);
        }
    };

    const handleAddOrUpdatePhone = () => {
        if (!phoneForm.number) return;

        const newPhone = { ...phoneForm };
        const updatedPhones = [...phones];

        if (editingIndex !== null) {
            updatedPhones[editingIndex] = newPhone;
        } else {
            updatedPhones.push(newPhone);
        }

        updatePhones(updatedPhones);
        resetForm(); // mantener el modal abierto sin cerrarlo
    };

    const handleDeletePhone = (index: number) => {
        const updated = phones.filter((_, i) => i !== index);
        updatePhones(updated);
        resetForm();
    };

    const handleEditPhone = (index: number) => {
        setPhoneForm(phones[index]);
        setEditingIndex(index);
    };

    return (
        <ContactInfoCard
            id="phone"
            title={t("fields.phone_fields.phone")}
            icon={<PhoneIcon />}
            modalId="offcanvasPhones"
            modalContent={
                <>
                    <div className="mb-3">
                        {t("fields.phone_fields.description")}
                    </div>

                    <form>
                        <div className="row form-compact-holder">
                            <Select
                                id="phoneType"
                                readonly={false}
                                required={false}
                                title={t("fields.phone_fields.phone_type")}
                                classInput="col-12"
                                options={typeOptions}
                                selectedValue={phoneForm.phoneTypeId}
                                onChange={(e) =>
                                    setPhoneForm({ ...phoneForm, phoneTypeId: e.target.value })
                                }
                            />

                            <Input
                                id="phone"
                                readonly={false}
                                required={false}
                                title={t("fields.phone_fields.phone")}
                                placeholder={t("fields.phone_fields.phone")}
                                classInput="col-12 col-md-6"
                                value={phoneForm.number}
                                onChange={(e) =>
                                    setPhoneForm({ ...phoneForm, number: e.target.value })
                                }
                            />

                            <Input
                                id="extension"
                                readonly={false}
                                required={false}
                                title={t("fields.phone_fields.extension")}
                                placeholder={t("fields.phone_fields.extension")}
                                classInput="col-12 col-md-6"
                                value={phoneForm.extension}
                                onChange={(e) =>
                                    setPhoneForm({ ...phoneForm, extension: e.target.value })
                                }
                            />

                            <div className="col-12 col-md-6">
                                <label htmlFor="contactTimeInitial" className="form-label">
                                    {t("fields.phone_fields.contact_time_initial")}
                                </label>
                                <input
                                    type="time"
                                    id="contactTimeInitial"
                                    className="form-control"
                                    value={phoneForm.contactTimeInitial}
                                    onChange={(e) =>
                                        setPhoneForm({ ...phoneForm, contactTimeInitial: e.target.value })
                                    }
                                />
                            </div>

                            <div className="col-12 col-md-6">
                                <label htmlFor="contactTimeFinal" className="form-label">
                                    {t("fields.phone_fields.contact_time_final")}
                                </label>
                                <input
                                    type="time"
                                    id="contactTimeFinal"
                                    className="form-control"
                                    value={phoneForm.contactTimeFinal}
                                    onChange={(e) =>
                                        setPhoneForm({ ...phoneForm, contactTimeFinal: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="isPrincipal"
                                        checked={phoneForm.isPrincipal}
                                        onChange={(e) =>
                                            setPhoneForm({ ...phoneForm, isPrincipal: e.target.checked })
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="isPrincipal">
                                         {t("fields.phone_fields.phonePrincipal")}
                                    </label>
                                </div>

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        id="isActive"
                                        checked={phoneForm.isActive}
                                        onChange={(e) =>
                                            setPhoneForm({ ...phoneForm, isActive: e.target.checked })
                                        }
                                    />
                                    <label className="form-check-label" htmlFor="isActive">
                                         {t("fields.phone_fields.active")}
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
                                    {t("fields.phone_fields.clear")}
                                </button>
                            </div>

                            <div className="col-12 col-md-6 d-grid gap-2">
                                <button
                                    onClick={handleAddOrUpdatePhone}
                                    type="button"
                                    className="btn btn-light-success text-success"
                                >
                                    {editingIndex !== null ?  t("fields.phone_fields.update") :  t("fields.phone_fields.save")}
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mt-2">
                                <hr />
                                <h4 className="mt-1"> {t("fields.phone_fields.phone_list")}</h4>
                                <div className="list-group">
                                    {phones.length === 0 ? (
                                        <li className="list-group-item text-center">
                                           {t("fields.phone_fields.empty")}
                                        </li>
                                    ) : (
                                        phones.map((phone, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleEditPhone(index)}
                                                className={`list-group-item list-group-item-action d-flex pointer ${
                                                    editingIndex === index ? "bg-primary bg-opacity-10" : ""
                                                }`}
                                            >
                                                <div className="d-flex align-items-center w-100">
                                                    {typeOptions.find(p => p.value === phone.phoneTypeId)?.option}
                                                    {" "}
                                                    {phone.number} ext {phone.extension},{" "}
                                                    {t("fields.contact_time")}: {phone.contactTimeInitial} - {phone.contactTimeFinal}
                                                    {phone.isPrincipal && (
                                                        <span className="badge bg-light-primary text-info ms-2">{t("fields.phone_fields.principal")}</span>
                                                    )}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeletePhone(index);
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

export default Phone;
