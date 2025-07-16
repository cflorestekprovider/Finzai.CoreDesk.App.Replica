import Select from '../../../BasicComponents/Select/Select';
import Button from '../../../BasicComponents/Button/Button';
import SelectModel from '../../../../api/models/SelectModel/SelectModel';
import { AddPlusIcon, FilterIcon, FlagIcon, PlusIcon } from '../../../../api/models/IconsModels/IconsModels';
import SelectWithIcon from '../../../BasicComponents/SelectWithIcons/SelectWithIcons';
import { useDashboardContext } from '../../../../context/DashboardContext';

const DashboardHeader = () => {

    const handleSetDashboardToShow = () => {
        setDashboardToShow(2);
    };

    const handleSetBoardItem = (board:number) => {
        setBoardItem(board);
        setDashboardToShow(1);
    }

    const { setBoardItem, setDashboardToShow } = useDashboardContext();

    

    const boardOptions: SelectModel[] = [
        { value: "1", option: 'Tablero 1' },
        { value: "2", option: 'Perfil mesa de control' },
        { value: "3", option: 'Tablero cliente' }
    ];

    const optionsFilter: SelectModel[] = [
        { value: "Filtro No1", option: 'Filtro No1', icon: <FlagIcon /> },
        { value: "Filtro No2", option: 'Filtro No2', icon: <FlagIcon /> }
    ];

    return (
        <div className="page-titles bg-white">
            <div className="row">
                <div className="col-lg-8 d-flex align-self-center ">
                    <div className="content-head-dashboards ">
                        <h3 className="mb-0 fw-bold">Hoy,</h3>
                        <h6 className="text-muted mb-0 fw-normal">06 de Marzo, 2025</h6>
                    </div>
                    <Select
                        id="selectBoard"
                        title='Seleccionar tablero'
                        readonly={false}
                        required={false}
                        classInput='col-12 col-md-6 col-lg-3 col-xl-3 ms-3'
                        options={boardOptions} 
                        onChange={handleSetBoardItem}
                        />
                    <div className="d-flex align-items-center ms-3 user-in-dashboard">

                        <a href="#" className="me-1
                                round-md
                                rounded-circle
                                d-flex
                                align-items-center
                                justify-content-center
                                bg-light-success
                                text-success
                                " data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Invitar al tablero" data-bs-original-title="Invitar al tablero">
                            <AddPlusIcon />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-end justify-content-start">

                    <SelectWithIcon
                        id="filters"
                        title='Filtros'
                        icon={<FilterIcon />}
                        options={optionsFilter}
                        
                    />
                    <Button
                        id="new-dashboard-btn"
                        title="Crear tablero"
                        type="primaryButton"
                        icon={<PlusIcon />}
                        onClick={handleSetDashboardToShow}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader; 
