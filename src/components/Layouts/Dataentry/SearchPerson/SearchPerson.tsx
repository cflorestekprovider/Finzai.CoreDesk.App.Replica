import React from 'react';
import { ClearIcon, SearchIcon } from '../../../../api/models/IconsModels/IconsModels';
import SelectModel from '../../../../api/models/SelectModel/SelectModel';
import Select from '../../../BasicComponents/Select/Select';
import Input from '../../../BasicComponents/Input/Input';
import PageHeader from '../../../PageHeader/PageHeader';
import Button from '../../../BasicComponents/Button/Button';
import DatePicker from '../../../BasicComponents/DatePicker/DatePicker';
import Table from '../../../BasicComponents/Table/Table';

interface PersonSearchProps {
    onSelectPerson: (person: { type: string; name: string }) => void;
  }
  
const SearchPerson: React.FC<PersonSearchProps> = ({ onSelectPerson }) => {

    const identificationType: SelectModel[] = [
        { value: "1", option: 'RFC' },
        { value: "2", option: 'Número de cédula del RFC' },
        { value: "3", option: 'RFC comprador' }
    ];
    const searchResults = [
        { icono: "👤", nombre: "Axel Patricio Ortega Cota", domicilio: "Av. Lopez Mateos 123. Guadalajara, Jalisco. ", tipo: "fisica" },
        { icono: "👥", nombre: "Coca Cola S.A de C.V", domicilio: "Avenida Central 456. Monterrey, Nuevo León. ", tipo: "moral" },
    ];

    return (
        <div className="container-fluid bg-container-main no-width-restrictions">
            <PageHeader title={'Búsqueda de Personas '} name={'Username'}/>
            <div className="row">
                <div className="col-12">
                    <div className="ui-title-action-bar">
                        <div className="ui-title">
                            <h4>Criterios de Búsqueda</h4>
                            <p>Búsqueda de personas</p>
                        </div>
                        <div className="ui-action-bar">
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <form>
                                    <div className="row form-compact-holder">
                                        <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                            <DatePicker
                                                id="sinceDate"
                                                readonly={false}
                                                title='Fecha de registro desde'
                                                required={true}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                            />
                                            <DatePicker
                                                id="toDate"
                                                readonly={false}
                                                title='Fecha de registro hasta'
                                                required={true}
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                            />
                                        </div>
                                        <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                            <Input
                                                id="internNumber"
                                                readonly={false}
                                                required={true}
                                                title='Número interno'
                                                placeholder='Número interno'
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3'
                                            />

                                            <Input
                                                id='BUC'
                                                readonly={false}
                                                required={true}
                                                title='BUC'
                                                placeholder='BUC'
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                        </div>
                                        <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                            <Input
                                                id='Name'
                                                readonly={false}
                                                required={true}
                                                title='Nombre'
                                                placeholder='Nombre'
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-6' />
                                        </div>
                                        <div className="col-12 d-grid gap-2 d-md-flex mt-3">
                                            <Select 
                                                id="identificactionType" 
                                                readonly={false} 
                                                title='Tipo de identificación' 
                                                required={true} 
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3' 
                                                options={identificationType} />

                                            <Input
                                                id='identification'
                                                readonly={false}
                                                required={true}
                                                title='Identificación'
                                                placeholder='Identificación'
                                                classInput='col-12 col-md-6 col-lg-4 col-xl-3' />
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-left mt-3">
                                                {/* <Select 
                                                    id="show" 
                                                    readonly={false} 
                                                    title='Mostrar' 
                                                    required={false} 
                                                    classInput='col-1 col-md-2 col-lg-1 col-xl-2' 
                                                    options={identificationType} /> */}
                                                <Button
                                                    id='search'
                                                    title='Buscar'
                                                    type='clearButton'
                                                    icon={<SearchIcon />} />

                                                <Button
                                                    id='clear'
                                                    title='Limpiar'
                                                    type='clearButton'
                                                    icon={<ClearIcon />} />

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <hr />
                                                <Table 
                                                    id='searchPersonTable'
                                                    title='Resultados de búsqueda'
                                                    columns={["Icono", "Nombre", "Domicilio", "Tipo"]}
                                                    data={searchResults}
                                                    onRowClick={(row) => onSelectPerson({ type: row.tipo, name: row.nombre })}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPerson;