import React from 'react';
import { useTranslation } from "react-i18next";
import TabItem from '../TabItem/TabItem';
import { TabModel } from '../../api/models/TabsModels/TabModelPF';

interface TabDrawerMenuProps {
    items: TabModel[];
}

const TabDrawerMenu: React.FC<TabDrawerMenuProps> = ({items}) => {
  const { t } = useTranslation();
  return (
    <div className="tab-drawer-menu" role="tablist">
      {
        items.map((item) => {
          return (<TabItem 
            key={item.referenciaTab}
            title={item.translationKey ? t(item.translationKey) : item.title}
            icon={item.icon} 
            referenciaTab={item.referenciaTab} 
            isActive={item.isActive} />)
        })
      }
    </div>
);
};

export default TabDrawerMenu;