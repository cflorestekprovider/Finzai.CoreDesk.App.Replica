import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';
import { GetPersonNameDetail } from '../../../api/dataentry/physicalPerson/physicalPerson';
import { useCatalogs } from '../../../context/Catalog/CatalogContext';
import Select from '../Select/Select';


interface SearchPersonProps {
    includeBirthDay?: boolean;
    personId?: string | null;
    clearTrigger?: boolean;
}

const SearchPerson: React.FC<SearchPersonProps> = ({ 
     includeBirthDay = false, 
     personId,
     clearTrigger = false
    }) => {
    const { t } = useTranslation();
    const { catalogs } = useCatalogs();
    const [internalPersonId, setInternalPersonId] = useState<string>(''); 
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [secondLastName, setSecondLastName] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [identificationId, setIdentificationId] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [genderId, setGenderId] = useState('');

    useEffect(() => {
        if (personId) {
            setInternalPersonId(personId);
            handlePersonSearch(personId);
        }
    }, [personId]);

    useEffect(() => {
        setInternalPersonId('');
        setFirstName('');
        setSecondName('');
        setFirstLastName('');
        setSecondLastName('');
        setIdentificationNumber('');
        setIdentificationId('');
        setBirthDate('');
        setGenderId('');
    }, [clearTrigger]);

    const handlePersonSearch = async (idToSearch?: string) => {
        try {
            const id = idToSearch ?? internalPersonId;
            const response = await GetPersonNameDetail(id);
            if (response) {
               
                setFirstName(response.firstName || '');
                setSecondName(response.secondName || '');
                setFirstLastName(response.firstLastName || '');
                setSecondLastName(response.secondLastName || '');
                setIdentificationNumber(response.identificationNumber || '');
                setIdentificationId(response.identificationId || '');
                setBirthDate(response.birthDate || '');
                setGenderId(response.genderId || '');
            }
        } catch (error) {
            console.error('Error al obtener detalles de la persona:', error);
        }
    };
    return (
        <>
            <CustomInput
                id="personId"
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                required={true}
                readonly={false}
                title={t("fields.id_person")}
                icon={<SearchIcon />}
                value={internalPersonId}
                onChange={(e) => setInternalPersonId(e.target.value)}
                onClick={() => handlePersonSearch()}
            />

            <Input
                id='firtsLastName'
                readonly={true}
                required={false}
                title={t("fields.first_last_name")}
                placeholder={t("fields.first_last_name")}
                 value={firstLastName}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='secondLastName'
                readonly={true}
                required={false}
                title={t("fields.second_last_name")}
                placeholder={t("fields.second_last_name")}
                value={secondLastName}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='Name'
                readonly={true}
                required={false}
                title={t("fields.name")}
                placeholder={t("fields.name")}
                value={firstName}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='SecondName'
                readonly={true}
                required={false}
                title={t("fields.second_name")}
                placeholder={t("fields.second_name")}
                value={secondName}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
            
            <Select
                id="gender"
                readonly={true}
                title={t("fields.gender")}
                required={true}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                options={catalogs.Gender}
                selectedValue={genderId}

             />
            
            <Select
                id="identification"
                readonly={true}
                title={t("fields.identification_type")}
                required={true}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                options={catalogs.IdentificationType}
                selectedValue={identificationId}

             />
            
            <Input
                id='IdentificationNumber'
                readonly={true}
                required={false}
                title={t("fields.identification_number")}
                placeholder={t("fields.identificationNumber")}
                value={identificationNumber}
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            {
                includeBirthDay && <Input
                    id='birthDate'
                    readonly={true}
                    required={false}
                    title={t("fields.birthdate")}
                    placeholder={t("fields.birthdate")}
                    value={birthDate ? new Date(birthDate).toISOString().split('T')[0] : ''}
                    classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            }


        </>
    );
};

export default SearchPerson;