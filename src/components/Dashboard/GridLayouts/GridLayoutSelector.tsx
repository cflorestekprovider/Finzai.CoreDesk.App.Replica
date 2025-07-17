import React from "react";
import GridLayout from "./GridLayout";
import gridsLayoutModel from "../../../api/models/DashboardModels/gridsLayoutCatalog";

interface GridLayoutSelectorProps {
    id: string;
    layoutName: string; 
    onDelete?: () => void;
    widgets?: Array<{widgetId: number, widgetOrder: number}>;
    readOnly?: boolean;
}

const GridLayoutSelector: React.FC<GridLayoutSelectorProps> = ({ 
    id, 
    layoutName, 
    onDelete,
    widgets = [],
    readOnly = false
}) => {
    const layout = gridsLayoutModel.find((x) => x.layoutName === layoutName)?.props;

    if (!layout) {
        return null; 
    }

    return (
        <GridLayout
            id={id}
            layoutClass={layout.layoutClass}
            items={layout.items}
            onDelete={onDelete}
            widgets={widgets}
            readOnly={readOnly}
        />
    );
};

export default GridLayoutSelector;
