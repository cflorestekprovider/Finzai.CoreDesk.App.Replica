import React, { useEffect, useState } from "react";
import { useDashboardContext } from "../../../context/DashboardContext";
import { IndicatorSize } from "../../../api/models/WidgetsModel/WidgetsModel";
import Layout from "../../../api/models/DashboardModels/LayoutModel";
import { getWidgetData } from "../../../api/dashboard/Dashboard";
import Widget from "../../Widget/Widget";

interface ImageItem {
  id: string;
  colClass: string;
  gaugeCat: string;
  dobleSpace?: boolean;
}

interface GridLayoutProps {
  id: string;
  layoutClass: string;
  items: ImageItem[];
  onDelete?: () => void;
  widgets?: Array<{ widgetId: number; widgetOrder: number }>;
  readOnly?: boolean;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  id,
  layoutClass,
  items,
  onDelete,
  widgets = [],
  readOnly = false,
}) => {
  const basePath = import.meta.env.BASE_URL;
  const imagePath = `${basePath}assets/images/agregar-indicator.png`;

  const { setIndicatorSize, setLayoutKey, setLayoutIndex, state } = useDashboardContext();

  const [layout, setLayout] = useState<Layout | undefined>(() => {
    if (!readOnly) {
      return state.layouts.find((x) => x.layoutKey === id);
    }
    return {
      layoutKey: id,
      widgets: widgets || [],
    } as Layout;
  });

  const [widgetDataMap, setWidgetDataMap] = useState<Record<number, any>>({});

  useEffect(() => {
    if (!readOnly) {
      const foundLayout = state.layouts.find((x) => x.layoutKey === id);
      setLayout(foundLayout);
    } else {
      setLayout((prev) => ({
        ...prev,
        widgets: widgets || [],
      }) as Layout);
    }
  }, [readOnly ? widgets : state.layouts.find((x) => x.layoutKey === id)?.widgets, id, readOnly]);

  // Cargar datos de widgets
  useEffect(() => {
    const loadWidgets = async () => {
      if (!layout?.widgets) return;

      const dataMap: Record<number, any> = {};
      for (const widget of layout.widgets) {
        if (widget.widgetId > 0) {
          const data = await getWidgetData(widget.widgetId);
          dataMap[widget.widgetOrder] = data;
        }
      }
      setWidgetDataMap(dataMap);
    };

    loadWidgets();
  }, [layout]);

  const gaugeToSizeMap: Record<string, IndicatorSize> = {
    "1": IndicatorSize.Small,
    "2": IndicatorSize.Medium,
    "3": IndicatorSize.Large,
  };

  const handleSetData = (gaugeCat: string, id: string, index: number) => {
    if (readOnly) return;

    const size = gaugeToSizeMap[gaugeCat] ?? IndicatorSize.Small;
    setIndicatorSize(size);
    setLayoutKey(id);
    setLayoutIndex(index);
  };

  return (
    <div className={`${layoutClass} grid-primal-component mb-4`} id={`grid-${id}`}>
      {!readOnly && (
        <a href="javascript:void(0);" className="delete-grid-element" onClick={onDelete}></a>
      )}
      <div className="row">
        {items.map((item, index) => {
          const widgetData = layout?.widgets.find((w) => w.widgetOrder === index);
          const data = widgetDataMap[widgetData?.widgetOrder ?? -1];

          const extraClasses =
            (index === 2 && layoutClass.includes("1-b") ? " mt-4" : "") +
            (index === 0 && layoutClass.includes("4") ? " mb-4" : "");

          return (
            <div
              key={index}
              className={`${item.colClass} d-flex align-items-stretch${extraClasses}`}
              data-bs-toggle={!readOnly ? "offcanvas" : ""}
              data-bs-target={!readOnly ? "#offcanvasAddIndicator" : ""}
              aria-controls={!readOnly ? "offcanvasRight" : ""}
              data-gauge-cat={item.gaugeCat}
              onClick={!readOnly ? () => handleSetData(item.gaugeCat, id, index) : undefined}
            >
              { (!widgetData || widgetData.widgetId === 0 || !data) ? (
                <button
                  type="button"
                  id={`grid-${id}-${index}`}
                  className={`trigger-placeholder-card${item.dobleSpace ? " doble-space" : ""}`}
                >
                  <img src={imagePath} alt="agregar indicador" />
                </button>
              ) : (
                widgetData && data && widgetData.widgetId !== 0 && (
                  <Widget name={`graph-${id}-${index}`} widgetData={data} />
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridLayout;
