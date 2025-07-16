import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import Button from '../../../../BasicComponents/Button/Button';
import PostalCode from '../../../../BasicComponents/PostalCode/PostalCode';
import { ClearIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';

const BusinessAddress: React.FC = () => {

    const genderOptions: SelectModel[] = [
        { value: "1", option: 'Masculino' },
        { value: "2", option: 'Femenino' },
        { value: "3", option: 'Otro' }
    ];

    const clientTypeOptions: SelectModel[] = [
        { value: "1", option: 'Cliente' },
        { value: "2", option: 'Cliente con restricciones' },
        { value: "3", option: 'Excliente' }
    ];

    const professionOptions: SelectModel[] = [
        { value: "1", option: 'Ama de casa' },
        { value: "2", option: 'Desempleado' },
        { value: "3", option: 'Estudiante' }
    ];
    
    const ocupationOptions: SelectModel[] = [
        { value: "1", option: 'Empleado Privado' },
        { value: "2", option: 'Empleado Publico' },
        { value: "3", option: 'Oficio' }
    ];

   
    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>Domicilio</h4>
                        <p>DESCRIPCIÓN</p>
                    </div>
                    <div className="ui-action-bar">

                        {/* PARA AGREGAR OPCIONES DE BOTONES */}

                        {/* <div className="dropdown ms-2">
                            <button className="btn d-flex bg-white align-items-center border full-height" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical feather-xs fill-white me-2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                Opciones
                                <span className="ms-2">
                                    <i className="ri-arrow-down-s-line fs-4"></i>
                                </span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle feather-xs fill-white me-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        Comentarios
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark feather-xs fill-white me-2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                        Atributos
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail feather-xs fill-white me-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        Buró
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text feather-xs fill-white me-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        Proforma customizada
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCuentasBancarias" aria-controls="offcanvasRight">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign feather-xs fill-white me-2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                        Cuentas bancarias
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn bg-outline-primary waves-effect waves-light btn-outline-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder feather-sm fill-white me-2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            Documentos
                        </button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="tab-content">
                            <form>
                                <div className="row form-compact-holder">
                                    <Select 
                                        id="statusAddress" 
                                        readonly={false} 
                                        title='Estatus' 
                                        required={true} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                                        options={clientTypeOptions} />
                                    <Select 
                                        id="addressType" 
                                        readonly={false} 
                                        title='Tipo de Domicilio' 
                                        required={true} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                                        options={professionOptions} />
                                    
                                    <Select 
                                        id="propertyType" 
                                        readonly={false} 
                                        title='Tipo de Propiedad' 
                                        required={true} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                                        options={ocupationOptions} />

                                    <Input 
                                        id='propertyValue' 
                                        readonly={false} 
                                        required={false} 
                                        title='Valor de la Propiedad' 
                                        placeholder='Valor de la Propiedad' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input 
                                        id='rentalValue' 
                                        readonly={false} 
                                        required={true} 
                                        title='Hípoteca' 
                                        placeholder='Hípoteca' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input 
                                        id='livingSinceYears' 
                                        readonly={true} 
                                        required={false} 
                                        title='Viviendo Desde (Años)' 
                                        placeholder='Hípoteca' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input 
                                        id='livingSinceMonths' 
                                        readonly={false} 
                                        required={true} 
                                        title='Viviendo Desde (Meses)' 
                                        placeholder='Viviendo Desde (Meses)' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <DatePicker 
                                        id="dateAddress" 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title='Fecha' />

                                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <div className="form-floating mb-3">
                                            <input type="text"  className="form-control" value="Teléfono" id="elm_21" />
                                            <label htmlFor="elm_21">Tipo Teléfono</label>
                                        </div>
                                    </div>

                                    <CustomInputWithModal
                                        id="addressPhone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Teléfono'
                                        icon={<PhoneIcon />} />

                                    <Input 
                                        id='addressExtention' 
                                        readonly={true} 
                                        required={false} 
                                        title='Extensión' 
                                        placeholder='Extensión' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                   
                                    <Input 
                                        id='addressContactTime' 
                                        readonly={true} 
                                        required={false} 
                                        title='Hora contacto' 
                                        placeholder='Hora contacto' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select 
                                        id="addressCountry" 
                                        readonly={false} 
                                        title='País' 
                                        required={true} 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                                        options={genderOptions} />

                                   <PostalCode />
                                    
                                   <Input 
                                        id='addressStreet' 
                                        readonly={false} 
                                        required={false} 
                                        title='Calle' 
                                        placeholder='Calle' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input 
                                        id='addressExternalNumber' 
                                        readonly={false} 
                                        required={false} 
                                        title='Número Exterior' 
                                        placeholder='Número Exterior' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                    
                                    <Input 
                                        id='addressInternalNumber' 
                                        readonly={false} 
                                        required={false} 
                                        title='Número Interior' 
                                        placeholder='Número Interior' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input 
                                        id='addressCrossWith' 
                                        readonly={false} 
                                        required={false} 
                                        title='Cruza con' 
                                        placeholder='Cruza con' 
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    
                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <Button
                                                id='save'
                                                title='Guardar información'
                                                type='saveButton'
                                                icon={<SaveIcon />} />

                                            <Button
                                                id='clear'
                                                title='Limpiar'
                                                type='clearButton'
                                                icon={<ClearIcon />} />
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BusinessAddress;