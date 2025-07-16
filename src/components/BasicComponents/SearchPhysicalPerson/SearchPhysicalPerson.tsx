import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';

interface SearchPhysicalPersonProps {
    includeBirthDay?: boolean;
}

const SearchPhysicalPerson: React.FC<SearchPhysicalPersonProps> = ({ includeBirthDay = false }) => {

    return (
        <>
            <CustomInput
                id="personId"
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                required={true}
                readonly={true}
                title='Id Individuo'
                icon={<SearchIcon />} />

            <Input
                id='firtsLastName'
                readonly={true}
                required={false}
                title='Primer Apellido'
                placeholder='Primer Apellido'
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='secondLastName'
                readonly={true}
                required={false}
                title='Segundo Apellido'
                placeholder='Segundo Apellido'
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='Name'
                readonly={true}
                required={false}
                title='Nombre'
                placeholder='Nombre'
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input
                id='SecondName'
                readonly={true}
                required={false}
                title='Segundo Nombre'
                placeholder='Segundo Nombre'
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            {
                includeBirthDay && <Input
                    id='birthDay'
                    readonly={true}
                    required={false}
                    title='Fecha de Nacimiento'
                    placeholder='Fecha de Nacimiento'
                    classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            }


        </>
    );
};

export default SearchPhysicalPerson;