import React from 'react';
import TabDrawerMenu from '../../../TabDrawerMenu/TabDrawerMenu';
import { TabModel } from '../../../../api/models/TabsModels/TabModelPF';
import clsx from 'clsx';


interface LayoutProps {
    items: TabModel[];
}

const Layout: React.FC<LayoutProps> = ({ items }) => {
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