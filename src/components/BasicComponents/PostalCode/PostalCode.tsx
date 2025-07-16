import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { SearchIcon } from '../../../api/models/IconsModels/IconsModels';
import Input from '../Input/Input';
import SelectModel from '../../../api/models/SelectModel/SelectModel';
import Select from '../Select/Select';

interface CustomInputWithModalProps {
    readonly?:boolean;
    readonlyButton?:boolean;
}

const PostalCode: React.FC<CustomInputWithModalProps> = ({ readonly=false, readonlyButton=false }) => {
    const genderOptions: SelectModel[] = [
        { value: "1", option: 'Masculino' },
        { value: "2", option: 'Femenino' },
        { value: "3", option: 'Otro' }
    ];
    
    return (
        <>
             <CustomInput
                id="postalCode"
                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                required={true}
                readonly={readonly}
                readonlyButton={readonlyButton}
                title='Código Postal'
                icon={<SearchIcon />} />

            <Input 
                id='statePostalCode' 
                readonly={true} 
                required={false} 
                title='Estado' 
                placeholder='Estado' 
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input 
                id='municipalyPostalCode' 
                readonly={true} 
                required={false} 
                title='Municipio' 
                placeholder='Municipio' 
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Input 
                id='cityPostalCode' 
                readonly={true} 
                required={false} 
                title='Ciudad' 
                placeholder='Ciudad' 
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

            <Select 
                id="colonyPostalCode" 
                readonly={readonly} 
                title='Colonia' 
                required={true} 
                classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                options={genderOptions} />
        </>
    );
};

export default PostalCode;