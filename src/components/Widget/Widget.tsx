import React from 'react';
import ActiveAccountsWidget from '../WidgetsDesign/ActiveAccountsWidget';
import RequestsInProgressWidget from '../WidgetsDesign/RequestsInProgressWidget';
import BarGraphWidget from '../WidgetsDesign/BarGraphWidget';
import ClientsInArrearsWidget from '../WidgetsDesign/ClientsInArrearsWidget';
import NewRequestsWidget from '../WidgetsDesign/NewRequestsWidget';
import PieWidget from '../WidgetsDesign/PieWidget';

export interface WidgetProps {
  name: string;
  widgetData: WidgetDetail;
}

export interface WidgetDetail {
  name: string;
  id: number;
  widgetTypeId: number;
  title: string;
  subtitle: string;
  description: string;
  widgetSizeId: number;
  widgetDataSourceId: null;
  dataSourceResult: any;
  refreshInterval: null;
  clickAction: string;
  clickTarget: string;
  clickKey: string;
  backgroundImageURL: string;
  textColor: string;
  widgetChartTypeId: number;
  isActive: boolean;
  useIcon: boolean;
  iconTypeId: string;
  backgroundColor: string;
}

const Widget: React.FC<WidgetProps> = ({ name, widgetData }) => {
  if (!widgetData) return null;

  if (widgetData.widgetTypeId === 1 && widgetData.id === 1)
    return <NewRequestsWidget name={name} widgetData={widgetData} />;

  if (widgetData.widgetTypeId === 1 && widgetData.id === 2)
    return <RequestsInProgressWidget name={name} widgetData={widgetData} />;

  if (widgetData.widgetTypeId === 1 && widgetData.id === 3)
    return <ActiveAccountsWidget name={name} widgetData={widgetData} />;

  if (widgetData.widgetTypeId === 2 && widgetData.id === 4)
    return <ClientsInArrearsWidget name={name} widgetData={widgetData} />;

  if (widgetData.widgetTypeId === 2 && widgetData.id === 6)
    return <BarGraphWidget name={name} widgetData={widgetData} />;

  if (widgetData.widgetTypeId === 3 && widgetData.id === 7)
    return <PieWidget name={name} widgetData={widgetData} />;

  return null;
};

export default Widget;
