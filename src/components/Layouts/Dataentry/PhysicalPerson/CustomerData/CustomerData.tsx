import React from 'react';
import Input from '../../../../BasicComponents/Input/Input';
import Select from '../../../../BasicComponents/Select/Select';
import SelectModel from '../../../../../api/models/SelectModel/SelectModel';
import DatePicker from '../../../../BasicComponents/DatePicker/DatePicker';
import CustomInputWithModal from '../../../../BasicComponents/CustomInputWithModal/CustomInputWithModal';
import { DependentsIcon, EmailIcon, IdentificationIcon, PhoneIcon, SaveIcon } from '../../../../../api/models/IconsModels/IconsModels';
import Button from '../../../../BasicComponents/Button/Button';

const CustomerData: React.FC = () => {

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

    const clientStatus: SelectModel[] = [
        { value: "1", option: 'Activo' },
        { value: "2", option: 'Inactivo' }
    ];


    return (
        <div className="row">
            <div className="col-12">
                <div className="ui-title-action-bar">
                    <div className="ui-title">
                        <h4>Datos cliente</h4>
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
                                        id="clientType"
                                        readonly={false}
                                        title='Tipo cliente'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={clientTypeOptions} />
                                    <Select
                                        id="profession"
                                        readonly={false}
                                        title='Profesión'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-6'
                                        options={professionOptions} />

                                    <Select
                                        id="clientType"
                                        readonly={false}
                                        title='Ocupación'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={ocupationOptions} />

                                    <Select
                                        id="clientStatus"
                                        readonly={false}
                                        title='Estatus cliente'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={clientStatus} />

                                    <Input
                                        id='firtsSecondName'
                                        readonly={false}
                                        required={true}
                                        title='Primer apellido'
                                        placeholder='Primer apellido'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='lastSecondName'
                                        readonly={false}
                                        required={false}
                                        title='Segundo apellido'
                                        placeholder='Segundo apellido'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='firtsName'
                                        readonly={false}
                                        required={true}
                                        title='Nombre'
                                        placeholder='Nombre'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='secondName'
                                        readonly={false}
                                        required={false}
                                        title='Segundo nombre'
                                        placeholder='Segundo nombre'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="gender"
                                        readonly={false}
                                        title='Género'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="nacionality"
                                        readonly={false}
                                        title='Nacionalidad'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />


                                    <DatePicker
                                        id="birthDay"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        readonly={false}
                                        required={true}
                                        title='Fecha de Nacimiento'
                                    />

                                    <Input
                                        id='years'
                                        readonly={true}
                                        required={false}
                                        title='Edad'
                                        placeholder='Edad'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Select
                                        id="country"
                                        readonly={false}
                                        title='País de nacimiento'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="state"
                                        readonly={false}
                                        title='Estado de nacimiento'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="city"
                                        readonly={false}
                                        title='Ciudad de nacimiento'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="migratoryState"
                                        readonly={false}
                                        title='Estado migratoro'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="maritalStatus"
                                        readonly={false}
                                        title='Estado civil'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="regimenMaritalStatus"
                                        readonly={false}
                                        title='Regimen Matrimonial'
                                        required={false}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <CustomInputWithModal
                                        id="Dependents"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Dependientes'
                                        icon={<DependentsIcon />}
                                    />

                                    <Select
                                        id="categoryEconomicActivity"
                                        readonly={false}
                                        title='Categoria Actividad económica'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="economicActivity"
                                        readonly={false}
                                        title='Actividad económica'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />



                                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center">
                                        <div className="form-check mt-n2">
                                            <div>
                                                <input className="form-check-input me-1" type="checkbox" value="" id="check_1" />
                                                <label className="form-check-label" htmlFor="check_1">
                                                    Actividad principal
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input me-1" type="checkbox" value="" id="check_2" />
                                                <label className="form-check-label" htmlFor="check_2">
                                                    Activo
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Select
                                        id="studies"
                                        readonly={false}
                                        title='Estudios'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <Select
                                        id="directPolitical"
                                        readonly={false}
                                        title='Político Directo'
                                        required={true}
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        options={genderOptions} />

                                    <CustomInputWithModal
                                        id="email"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Correo electrónico'
                                        icon={<EmailIcon />} />



                                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" value="Teléfono celular" id="elm_21" />
                                            <label htmlFor="elm_21">Tipo Teléfono</label>
                                        </div>
                                    </div>

                                    <CustomInputWithModal
                                        id="phone"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Teléfono'
                                        icon={<PhoneIcon />} />

                                    <Input
                                        id='extention'
                                        readonly={true}
                                        required={false}
                                        title='Extensión'
                                        placeholder='Extensión'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='contactTime'
                                        readonly={true}
                                        required={false}
                                        title='Hora contacto'
                                        placeholder='Hora contacto'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />


                                    <CustomInputWithModal
                                        id="identification"
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                        required={true}
                                        title='Identificación'
                                        icon={<IdentificationIcon />} />

                                    <Input
                                        id='identificationType'
                                        readonly={true}
                                        required={false}
                                        title='Tipo Identificación'
                                        placeholder='Tipo Identificación'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='emitionPlace'
                                        readonly={true}
                                        required={false}
                                        title='Lugar de emisión'
                                        placeholder='Lugar de emisión'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='emitionDate'
                                        readonly={true}
                                        required={false}
                                        title='Fecha de emisión'
                                        placeholder='Fecha de emisión'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='expirationDate'
                                        readonly={true}
                                        required={false}
                                        title='Fecha de expiración'
                                        placeholder='Fecha de expiración'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />

                                    <Input
                                        id='identificationStatus'
                                        readonly={true}
                                        required={false}
                                        title='Estatus'
                                        placeholder='Estatus'
                                        classInput='col-12 col-md-6 col-lg-4 col-xl-3' />




                                    <div className="col-12">
                                        <hr />
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                                            <button type="submit" className="btn waves-effect waves-light btn-light-danger text-danger me-0 me-md-2 mb-2 mb-md-0">
                                                Cancelar
                                            </button>

                                            <Button
                                                id='save'
                                                title='Guardar información'
                                                type='saveButton'
                                                icon={<SaveIcon />} />

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

export default CustomerData;