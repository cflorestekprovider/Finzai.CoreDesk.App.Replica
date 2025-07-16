// src/components/TabDrawerMenu.tsx
import React from 'react';
import TabItem from '../TabItem/TabItem';
import { TabModel } from '../../api/models/TabsModels/TabModelPF';

interface TabDrawerMenuProps {
    items: TabModel[];
}

const TabDrawerMenu: React.FC<TabDrawerMenuProps> = ({items}) => {
  return (
    <div className="tab-drawer-menu" role="tablist">
      {
        items.map((item) => {
          return (<TabItem 
            key={item.referenciaTab}
            title={item.title} 
            icon={item.icon} 
            referenciaTab={item.referenciaTab} 
            isActive={item.isActive} />)
        })
      }
    </div>
);
};

export default TabDrawerMenu;