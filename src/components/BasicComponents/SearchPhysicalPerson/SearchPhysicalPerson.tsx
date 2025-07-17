import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';

interface SearchPhysicalPersonProps {
    includeBirthDay?: boolean;
}

const SearchPhysicalPerson: React.FC<SearchPhysicalPersonProps> = ({ includeBirthDay = false }) => {
    const { t } = useTranslation();
    return (
        <>
            <CustomInput
                id="personId"
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                required={true}
                readonly={false}
                title={t("fields.id_individual")}
                icon={<SearchIcon />} />

            <Input
                id='firtsLastName'
                readonly={true}
                required={false}
                title={t("fields.first_last_name")}
                placeholder={t("fields.first_last_name")}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='secondLastName'
                readonly={true}
                required={false}
                title={t("fields.second_last_name")}
                placeholder={t("fields.second_last_name")}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='Name'
                readonly={true}
                required={false}
                title={t("fields.name")}
                placeholder={t("fields.name")}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='SecondName'
                readonly={true}
                required={false}
                title={t("fields.second_name")}
                placeholder={t("fields.second_name")}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            {
                includeBirthDay && <Input
                    id='birthDay'
                    readonly={true}
                    required={false}
                    title={t("fields.birthdate")}
                    placeholder={t("fields.birthdate")}
                    classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            }


        </>
    );
};

export default SearchPhysicalPerson;