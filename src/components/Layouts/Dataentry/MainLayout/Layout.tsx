import React, { useEffect } from 'react';
import TabDrawerMenu from '../../../TabDrawerMenu/TabDrawerMenu';
import { TabModel } from '../../../../api/models/TabsModels/TabModelPF';
import clsx from 'clsx';
import { useCustomerContext } from '../../../../context/DataEntry/PhysicalPerson/CustomerDataContext';


interface LayoutProps {
    items: TabModel[];
    id: string;
    personType:number;
}

const Layout: React.FC<LayoutProps> = ({ items, id, personType }) => {

    const {  setField } = useCustomerContext();

    useEffect(() => {
        if(personType == 1)
        {
            setField("id", id, "customer");
        }
    }, [id])

    return (
        <>
            <TabDrawerMenu items={items} />
            <div className='tab-content border mt-2'>
                {
                    items.map((item) => {

                        return (<div
                            key={item.referenciaTab}
                            className={clsx('tab-pane p-0', item.isActive ? 'active' : '')}
                            role="tabpanel"
                            id={item.referenciaTab}>
                            {item.tab}
                        </div>)
                    })
                }

            </div>

        </>

    );
};

export default Layout;