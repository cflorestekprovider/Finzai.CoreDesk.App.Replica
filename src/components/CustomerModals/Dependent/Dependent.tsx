import { useEffect, useState } from "react";
import ContactInfoCard from "../../Layouts/Dataentry/PhysicalPerson/CustomerData/ContactInfoCards";
import { useTranslation } from "react-i18next";
import { DeleteIcon, PhoneIcon } from "../../../api/models/IconsModels/IconsModels";
import Select from "../../BasicComponents/Select/Select";
import Input from "../../BasicComponents/Input/Input";
import { CatalogOption } from "../../../context/Catalog/CatalogContext";
import { Capitalize } from "../../../utils/StringsUtils/CatitaliceString";

interface DependentForm {
    id: string | null;
    dependentTypeId: string;
    genderId: string;
    firtsName: string;
    secondName: string;
    lastName: string;
    secondLastName: string;
    isVisible: boolean;
}

interface DependentInterface {
    dependentOptions: CatalogOption[];
    genderOptions: CatalogOption[];
    initialDependents: any[];
    onChangeDependents?: (phones: any[]) => void;
}

const Dependent: React.FC<DependentInterface> = ({ dependentOptions, genderOptions, initialDependents, onChangeDependents }) => {
    const { t } = useTranslation();



    const [dependents, setDependents] = useState<DependentForm[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    useEffect(() => {
        if (initialDependents) {
            setDependents(initialDependents);
        }
    }, [initialDependents]);

    const [dependentForm, setDependentForm] = useState<DependentForm>({
        id: null,
        dependentTypeId: "",
        genderId: "",
        firtsName: "",
        secondName: "",
        lastName: "",
        secondLastName: "",
        isVisible: true
    });

    const resetForm = () => {
        setEditingIndex(null);
        setDependentForm({
            id: null,
            dependentTypeId: "",
            genderId: "",
            firtsName: "",
            secondName: "",
            lastName: "",
            secondLastName: "",
            isVisible: true
        });
    };

    const updateDependents = (updatedDependents: DependentForm[]) => {
        setDependents(updatedDependents);
        if (onChangeDependents) {
            onChangeDependents(updatedDependents);
        }
    };

    const handleAddOrUpdateDependent = () => {
        if (!dependentForm.firtsName) return;

        const newDependent = { ...dependentForm };
        const updatedDependents = [...dependents];

        if (editingIndex !== null) {
            updatedDependents[editingIndex] = newDependent;
        } else {
            updatedDependents.push(newDependent);
        }

        updateDependents(updatedDependents);
        resetForm(); // mantener el modal abierto sin cerrarlo
    };

    const handleDeleteDependent = (index: number) => {
        const updated = dependents.filter((_, i) => i !== index);
        updateDependents(updated);
        resetForm();
    };

    const handleEditDependent = (index: number) => {
        setDependentForm(dependents[index]);
        setEditingIndex(index);
    };

    return (
        <ContactInfoCard
            id="dependent"
            title={t("fields.dependent_fields.dependent")}
            icon={<PhoneIcon />}
            modalId="offcanvasDependents"
            modalContent={
                <>
                    <div className="mb-3">
                        {t("fields.dependent_fields.description")}
                    </div>

                    <form>
                        <div className="row form-compact-holder">
                            <Select
                                id="dependentType"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.dependent_type")}
                                classInput="col-12"
                                options={dependentOptions}
                                selectedValue={dependentForm.dependentTypeId}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, dependentTypeId: e.target.value })
                                }
                            />

                            <Select
                                id="genderType"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.gender_type")}
                                classInput="col-12"
                                options={genderOptions}
                                selectedValue={dependentForm.genderId}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, genderId: e.target.value })
                                }
                            />

                            <Input
                                id="dependent_firtsname"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.firtsname")}
                                placeholder={t("fields.dependent_fields.firtsname")}
                                classInput="col-12 col-md-6"
                                value={dependentForm.firtsName}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, firtsName: e.target.value })
                                }
                            />

                            <Input
                                id="dependent_secondname"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.secondname")}
                                placeholder={t("fields.dependent_fields.secondname")}
                                classInput="col-12 col-md-6"
                                value={dependentForm.secondName}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, secondName: e.target.value })
                                }
                            />

                            <Input
                                id="dependent_lastname"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.lastname")}
                                placeholder={t("fields.dependent_fields.lastname")}
                                classInput="col-12 col-md-6"
                                value={dependentForm.lastName}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, lastName: e.target.value })
                                }
                            />

                            <Input
                                id="dependent_secondLastName"
                                readonly={false}
                                required={false}
                                title={t("fields.dependent_fields.secondLastName")}
                                placeholder={t("fields.dependent_fields.secondLastName")}
                                classInput="col-12 col-md-6"
                                value={dependentForm.secondLastName}
                                onChange={(e) =>
                                    setDependentForm({ ...dependentForm, secondLastName: e.target.value })
                                }
                            />


                        </div>



                        <div className="row form-compact-holder mt-3">
                            <div className="col-12 col-md-6 d-grid gap-2 mb-2 mb-md-0">
                                <button
                                    type="button"
                                    className="btn btn-light-danger text-danger"
                                    onClick={resetForm}
                                >
                                    {t("fields.dependent_fields.clear")}
                                </button>
                            </div>

                            <div className="col-12 col-md-6 d-grid gap-2">
                                <button
                                    onClick={handleAddOrUpdateDependent}
                                    type="button"
                                    className="btn btn-light-success text-success"
                                >
                                    {editingIndex !== null ? t("fields.dependent_fields.update") : t("fields.phone_fields.save")}
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mt-2">
                                <hr />
                                <h4 className="mt-1"> {t("fields.dependent_fields.dependent_list")}</h4>
                                <div className="list-group">
                                    {dependents.length === 0 ? (
                                        <li className="list-group-item text-center">
                                            {t("fields.dependent_fields.empty")}
                                        </li>
                                    ) : (
                                        dependents.map((dependent, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleEditDependent(index)}
                                                className={`list-group-item list-group-item-action d-flex pointer ${editingIndex === index ? "bg-primary bg-opacity-10" : ""
                                                    }`}
                                            >
                                                <div className="d-flex align-items-center w-100">
                                                    {dependentOptions.find(p => p.value === dependent.dependentTypeId)?.option}
                                                    {" - "}{Capitalize(dependent.firtsName)} {Capitalize(dependent.secondName)} {Capitalize(dependent.lastName)} {Capitalize(dependent.secondLastName)}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteDependent(index);
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

export default Dependent;
