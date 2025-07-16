import React from 'react';
import InputWithIcon from '../../../BasicComponents/InputWithIcon/IconWithIcon';
import { EditIcon, FormIcon } from '../../../../api/models/IconsModels/IconsModels';
import { 
    layout1, 
    layout10, 
    layout11, 
    layout11b, 
    layout2, 
    layout3, 
    layout3b, 
    layout4, 
    layout5, 
    layout6, 
    layout7, 
    layout7b, 
    layout8, 
    layout8b, 
    layout9, 
    layout1b } from '../../../../utils/ImagesRoutes/ImagesRoutes';

enum contentTypes {
    notSelected = 1,
    showDashboard = 2,
    createDashboard = 3,
}

interface DashboardContentProps {
    contentState?: contentTypes;
}
const DashboardSettings: React.FC<DashboardContentProps> = () => {
    return (
        <div className='tab-content border mt-2'>
            <div className='tab-pane active p-0'>
                <div className="dashboard-box-holder new-dashboard-canvas">

                    <div className="pre-head-slot">
                        <InputWithIcon
                            classInput='form-control'
                            iconLeft={<FormIcon />}
                            iconRight={<EditIcon />}
                            id='dashboardName'
                            readonly={false}
                            required={false}
                            title=''
                            placeholder='Nombre del tablero'
                        />

                        <div className="tab-drawer-menu" role="tablist">
                            <a type='button'
                                className="layout-component-pickup"
                                data-pickup-layout-design="1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                aria-label="¿Agregar componente #1?"
                                data-bs-original-title="¿Agregar componente #1?">
                                <img src={layout1} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="1-b" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #1-B?" data-bs-original-title="¿Agregar componente #1-B?">
                                <img src={layout1b} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #2?" data-bs-original-title="¿Agregar componente #2?">
                                <img src={layout2} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="3" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #3?" data-bs-original-title="¿Agregar componente #3?">
                                <img src={layout3} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="3-b" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #3-B?" data-bs-original-title="¿Agregar componente #3-B?">
                                <img src={layout3b} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="4" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #4?" data-bs-original-title="¿Agregar componente #4?">
                                <img src={layout4} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="5" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #5?" data-bs-original-title="¿Agregar componente #5?">
                                <img src={layout5} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="6" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #6?" data-bs-original-title="¿Agregar componente #6?">
                                <img src={layout6} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #7?" data-bs-original-title="¿Agregar componente #7?">
                                <img src={layout7} alt="componente del tablero" />
                            </a>
                            <a href="javascript:void(0)" className="layout-component-pickup" data-pickup-layout-design="7-b" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #7-B?" data-bs-original-title="¿Agregar componente #7-B?">
                                <img src={layout7b} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="8" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #8?" data-bs-original-title="¿Agregar componente #8?">
                                <img src={layout8} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="8-b" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #8-B?" data-bs-original-title="¿Agregar componente #8-B?">
                                <img src={layout8b} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="9" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #9?" data-bs-original-title="¿Agregar componente #9?">
                                <img src={layout9} alt="componente del tablero" />
                            </a>
                            <a href="javascript:void(0)" className="layout-component-pickup" data-pickup-layout-design="10" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #10?" data-bs-original-title="¿Agregar componente #10?">
                                <img src={layout10} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="11" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #11?" data-bs-original-title="¿Agregar componente #11?">
                                <img src={layout11} alt="componente del tablero" />
                            </a>
                            <a type='button' className="layout-component-pickup" data-pickup-layout-design="11-b" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="¿Agregar componente #11-B?" data-bs-original-title="¿Agregar componente #11-B?">
                                <img src={layout11b} alt="componente del tablero" />
                            </a>
                        </div>
                    </div>
                    <div className="new-grid-layout-body" id="new-grid-layout-body">
                        <div className="dashboard-empty-scenario">
                            <img src={`${import.meta.env.BASE_URL}assets/images/layout-build.png`} alt="No hay tablero seleccionado" className="empty-icon" />
                            <h2>Tablero en construcción</h2>
                            <p className="text-center">Tu estructura (grid), se creará a medida que agregues los <b>componentes</b> de estructura que están disponibles en la parte superior a esta sección.</p>
                        </div>
                        <div className="row angular-fundation-row"></div>
                    </div>
                </div>
                <div className="new-dashboard-save-holder">
                    <a href="javascript:void(0)" className="btn btn-primary d-flex align-items-center save-dashborad-trigger">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-pocket me-1">
                            <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
                            <polyline points="8 10 12 14 16 10"></polyline>
                        </svg>
                        Guardar Tablero
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DashboardSettings; 