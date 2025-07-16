import React from 'react';

const ModalCanvas: React.FC = () => {

    return (
        <>
            <div className="offcanvas offcanvas-end offcanvas-medium"
                id="offcanvasConfigNode"
                aria-labelledby="offcanvasConfigNodeLabel">
                <div className="offcanvas-header offcanvas-ui">
                    <h5 className="offcanvas-title" id="offcanvasConfigNodeLabel">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-settings feather-sm me-1">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        Configuracion de Indicador
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-3">
                        Podrás establecer ajustes o parámetros, para el indicador seleccionado.
                    </div>
                    <div className="indicator-info-cells type-1 hidden-cat p-0">
                        <form action="">
                            <div className="row form-compact-holder">
                                <div className="col-12 mb-3">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Nombre del indicador (nodo)" id="" />
                                        <label htmlFor="">
                                            <span className="required-tag">*</span>
                                            Nombre del indicador (nodo)
                                        </label>
                                        <div
                                            className="nodo-icon-onimput">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-box feather-sm">
                                                <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                                                <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                                                <line x1="12" y1="22.76" x2="12" y2="11"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-1 mb-lg-0">
                                    <div className="ui-select data-important-highl-control">
                                        <label htmlFor="">
                                            <span className="required-tag">*</span>
                                            Contenido del indicador (nodo)</label>
                                        <select className="form-select col-12" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="1">Rendimiento de la mesa de trabajo</option>
                                        </select>
                                    </div>
                                    <small className="text-muted mt-1 ms-1">Esta opción le permitirá al indicador, saber qué información debe visualizar.</small>
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12">
                                    <p>¿Qué meses deseas visualizar?</p>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_33" />
                                                    <label className="form-check-label" htmlFor="elm_off_33">
                                                        Enero
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_34" />
                                                    <label className="form-check-label" htmlFor="elm_off_34">
                                                        Febrero
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_35" />
                                                    <label className="form-check-label" htmlFor="elm_off_35">
                                                        Marzo
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_36" />
                                                    <label className="form-check-label" htmlFor="elm_off_36">
                                                        Abril
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_37" />
                                                    <label className="form-check-label" htmlFor="elm_off_37">
                                                        Mayo
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_38" />
                                                    <label className="form-check-label" htmlFor="elm_off_38">
                                                        Junio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_39" />
                                                    <label className="form-check-label" htmlFor="elm_off_39">
                                                        Julio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_40" />
                                                    <label className="form-check-label" htmlFor="elm_off_40">
                                                        Agosto
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_41" />
                                                    <label className="form-check-label" htmlFor="elm_off_41">
                                                        Septiembre
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_42" />
                                                    <label className="form-check-label" htmlFor="elm_off_42">
                                                        Octubre
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_43" />
                                                    <label className="form-check-label" htmlFor="elm_off_43">
                                                        Noviembre
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_44" />
                                                    <label className="form-check-label" htmlFor="elm_off_44">
                                                        Diciembre
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <hr />
                                    <p>¿Deseas interconectar este componente con algún otro componente actualmente agregado a este tablerto?</p>
                                    <div className="component-with-trigger-btn d-flex mb-3">
                                        <div className="ui-select auto-adjust-component me-3">
                                            <label htmlFor=""><span className="required-tag">*</span> Indicadores (nodos) en este tablero</label>
                                            <select className="form-select col-12 selected-node-demo">
                                                <option value="">Seleccione...</option>
                                                <option value="Grafico: Rendimiento mesa de trabajo">Grafico: Rendimiento mesa de trabajo</option>
                                                <option value="Tabla: Datos de las solicitudes levantadas">Tabla: Datos de las solicitudes levantadas</option>
                                            </select>
                                        </div>
                                        <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center ms-auto add-node-conection">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus icon-small-added me-1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            Conectar
                                        </a>
                                    </div>
                                    <hr />
                                    <h4 className="mt-1">Nodos Conectados (relacionados entre si)</h4>
                                    <div className="list-group nodes-contected-list">
                                        <li className="list-group-item list-group-item-action d-flex pointer no-nodes-availables" aria-current="true">
                                            No hay nodos conectados actualmente.
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-compact-holder mt-3">
                                <div className="col-12 d-grid gap-2">
                                    <button type="button" className="btn waves-effect waves-light btn-light-success text-success" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save feather-sm fill-white"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                        Guardar ajustes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="indicator-info-cells type-2 hidden-cat p-0">
                        <form action="">
                            <div className="row form-compact-holder">
                                <div className="col-12 mb-3">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Nombre del indicador (nodo)" id="" />
                                        <label htmlFor=""><span className="required-tag">*</span> Nombre del indicador (nodo)</label>

                                        <div className="nodo-icon-onimput"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box feather-sm"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg></div>
                                    </div>
                                </div>
                                <div className="col-12 mb-3 mb-lg-0">
                                    <div className="ui-select data-important-highl-control">
                                        <label htmlFor=""><span className="required-tag">*</span> Contenido del indicador (nodo)</label>
                                        <select className="form-select col-12" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="1">Estado de las solicitudes</option>
                                            <option value="2">Usuarios del sistema por perfil</option>
                                            <option value="3">Informacion de Creditos</option>
                                        </select>
                                    </div>
                                    <small className="text-muted mt-1 ms-1">Esta opción le permitirá al indicador, saber qué información debe visualizar.</small>
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="ui-select mb-3 mb-lg-0">
                                        <label htmlFor=""><span className="required-tag">*</span> Filtrado por mes</label>
                                        <select className="form-select col-12" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="1">Si</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="ui-select mb-3 mb-lg-0">
                                        <label htmlFor=""><span className="required-tag">*</span> Icono central</label>
                                        <select className="form-select col-12 icon-for-indicator" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="clipboard">Clipboard</option>
                                            <option value="settings">Engrane</option>
                                            <option value="plus">Agregar</option>
                                            <option value="dollar-sign">Simbolo de dinero</option>
                                        </select>

                                        <div className="icon-placeholder i-clipboard hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard feather-sm"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></div>
                                        <div className="icon-placeholder i-settings hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings feather-sm"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                                        <div className="icon-placeholder i-dollar-sign hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign feather-sm"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                                        <div className="icon-placeholder i-plus hidden-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus feather-sm"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <hr />
                                    <p>¿Deseas interconectar este componente con algún otro componente actualmente agregado a este tablerto?</p>
                                    <div className="component-with-trigger-btn d-flex mb-3">
                                        <div className="ui-select auto-adjust-component me-3">
                                            <label htmlFor=""><span className="required-tag">*</span> Indicadores (nodos) en este tablero</label>
                                            <select className="form-select col-12" id="node-selected-demo">
                                                <option value="">Seleccione...</option>
                                                <option value="Grafico: Rendimiento mesa de trabajo">Grafico: Rendimiento mesa de trabajo</option>
                                                <option value="Tabla: Datos de las solicitudes levantadas">Tabla: Datos de las solicitudes levantadas</option>
                                            </select>
                                        </div>
                                        <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center ms-auto add-node-conection">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus icon-small-added me-1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            Conectar
                                        </a>
                                    </div>
                                    <hr />
                                    <h4 className="mt-1">Nodos Conectados (relacionados entre si)</h4>
                                    <div className="list-group nodes-contected-list">
                                        <li className="list-group-item list-group-item-action d-flex pointer no-nodes-availables" aria-current="true">
                                            No hay nodos conectados actualmente.
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-compact-holder mt-3">
                                <div className="col-12 d-grid gap-2">
                                    <button type="button" className="btn waves-effect waves-light btn-light-success text-success" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save feather-sm fill-white"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                        Guardar ajustes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="indicator-info-cells type-3 hidden-cat p-0">
                        <form action="">
                            <div className="row form-compact-holder">
                                <div className="col-12 mb-3">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Nombre del indicador (nodo)" id="" />
                                        <label htmlFor=""><span className="required-tag">*</span> Nombre del indicador (nodo)</label>
                                        <div className="nodo-icon-onimput"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box feather-sm"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg></div>
                                    </div>
                                </div>
                                <div className="col-12 mb-3 mb-lg-0">
                                    <div className="ui-select data-important-highl-control">
                                        <label htmlFor=""><span className="required-tag">*</span> Contenido del indicador (nodo)</label>
                                        <select className="form-select col-12" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="1">Estado de las solicitudes</option>
                                            <option value="2">Usuarios del sistema por perfil</option>
                                            <option value="3">Informacion de Creditos</option>
                                        </select>
                                    </div>
                                    <small className="text-muted mt-1 ms-1">Esta opción le permitirá al indicador, saber qué información debe visualizar.</small>
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12 col-md-6 v-aligned-content-col">
                                    <div className="form-check">
                                        <div>
                                            <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_45" />
                                            <label className="form-check-label" htmlFor="elm_off_45">
                                                Paginar la tabla
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="ui-select">
                                        <label htmlFor=""><span className="required-tag">*</span> Registros por página</label>
                                        <select className="form-select col-12">
                                            <option value="">Seleccione...</option>
                                            <option value="5">5 registros</option>
                                            <option value="10">10 registros</option>
                                            <option value="15">15 registros</option>
                                            <option value="20">20 registros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <hr />
                                    <p>¿Qué acciones pueden realizarse en esta tabla?</p>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_46" />
                                                    <label className="form-check-label" htmlFor="elm_off_46">
                                                        Agregar
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_47" />
                                                    <label className="form-check-label" htmlFor="elm_off_47">
                                                        Editar
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_48" />
                                                    <label className="form-check-label" htmlFor="elm_off_48">
                                                        Ver detalles
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_49" />
                                                    <label className="form-check-label" htmlFor="elm_off_49">
                                                        Eliminar
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_50" />
                                                    <label className="form-check-label" htmlFor="elm_off_50">
                                                        Usuarios asociados
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-check">
                                                <div className="mb-1">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="elm_off_51" />
                                                    <label className="form-check-label" htmlFor="elm_off_51">
                                                        Ver PDF
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <hr />
                                    <p>¿Deseas interconectar este componente con algún otro componente actualmente agregado a este tablerto?</p>
                                    <div className="component-with-trigger-btn d-flex mb-3">
                                        <div className="ui-select auto-adjust-component me-3">
                                            <label htmlFor=""><span className="required-tag">*</span> Indicadores (nodos) en este tablero</label>
                                            <select className="form-select col-12 selected-node-demo">
                                                <option value="">Seleccione...</option>
                                                <option value="Grafico: Rendimiento mesa de trabajo">Grafico: Rendimiento mesa de trabajo</option>
                                                <option value="Tabla: Datos de las solicitudes levantadas">Tabla: Datos de las solicitudes levantadas</option>
                                            </select>
                                        </div>
                                        <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center ms-auto add-node-conection">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus icon-small-added me-1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            Conectar
                                        </a>
                                    </div>
                                    <hr />
                                    <h4 className="mt-1">Nodos Conectados (relacionados entre si)</h4>
                                    <div className="list-group nodes-contected-list">
                                        <li className="list-group-item list-group-item-action d-flex pointer no-nodes-availables" aria-current="true">
                                            No hay nodos conectados actualmente.
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-compact-holder mt-3">
                                <div className="col-12 d-grid gap-2">
                                    <button type="button" className="btn waves-effect waves-light btn-light-success text-success" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save feather-sm fill-white"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                        Guardar ajustes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end offcanvas-medium" 
             id="offcanvasAddIndicator" aria-labelledby="offcanvasAddIndicatorLabel">
                <div className="offcanvas-header offcanvas-ui">
                    <input type="hidden" name="indicator-selected-slot" id="indicator-selected-slot" value="grid-1741631964129-1" />
                    <h5 className="offcanvas-title" id="offcanvasAddIndicatorLabel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout feather-sm me-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> Indicadores disponibles
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-3">
                        Indicadores disponibles para ser agregados a este nodo. Los indicadores se muestran por categoría y según sean compatibles con el nodo seleccionado. Tomar en cuenta, qué nodos de distinta forma o tamaño, podrían tener distintos indicadores disponibles.
                    </div>
                    <div className="indicator-info-cells category-1">
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/1.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="1" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/2.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="2" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/3.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="3" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/10.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="10" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                    </div>
                    <div className="indicator-info-cells category-2 hidden-cat">
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/4.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="4" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/5.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="5" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/6.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="6" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/7.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="7" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/8.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="8" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/9.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="9" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/11.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="11" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                    </div>
                    <div className="indicator-info-cells category-3 hidden-cat">
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/1.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="1" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/2.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="2" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/3.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="3" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/10.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="10" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/4.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="4" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/5.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="5" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/6.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="6" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/7.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="7" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/8.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="8" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/9.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="9" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                        <div className="indicator-wrapper">
                            <div className="indicator-header">
                                <div className="header-plate">
                                    <span>Indicador</span>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart feather-sm me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Nombre del indicador</h5>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}assets/images/background/indicators/11.jpg`} alt="Indicador disponible" />
                            </div>
                            <div className="indicator-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center justify-content-center select-indicator" data-indicator-selected="11" data-bs-dismiss="offcanvas" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check me-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Seleccionar Indicador
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalCanvas;
