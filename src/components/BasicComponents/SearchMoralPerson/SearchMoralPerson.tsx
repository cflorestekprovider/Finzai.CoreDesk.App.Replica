import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';

interface SearchPhysicalPersonProps {

}

const SearchMoralPerson: React.FC<SearchPhysicalPersonProps> = () => {
  
    return (
        <>
            <CustomInput
                id="personId"
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                required={true}
                readonly={false}
                title='Id Empresa'
                icon={<SearchIcon />} />

            <Input
                id='legalName'
                readonly={true}
                required={false}
                title='Nombre Legal'
                placeholder='Primer Apellido'
                classInput='col-12 col-md-6 col-lg-4 col-xl-6' />

            <Input
                id='comercialName'
                readonly={true}
                required={false}
                title='Nombre Comercial'
                placeholder='Nombre Comercial'
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

        </>
    );
};

export default SearchMoralPerson;