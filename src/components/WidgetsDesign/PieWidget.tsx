import { WidgetProps } from "../Widget/Widget";
import ReactApexChart from "react-apexcharts";

const PieWidget: React.FC<WidgetProps> = ({ name, widgetData }) => {
    const rawData = widgetData.dataSourceResult?.[0] || "[]";

    let parsedData: { producto: string; monto: number }[] = [];

    try {
        parsedData = JSON.parse(rawData);
    } catch (e) {
        console.error("Error al parsear el dataSourceResult", e);
    }

    const productLabels = parsedData.map(item => item.producto);
    const montoSeries = parsedData.map(item => item.monto);

    const defaultColors = [
        "#d3d3d3", "#43b3d8", "#1f77b4", "#add8e6"
    ];

    const productColors = productLabels.map((_, index) => defaultColors[index % defaultColors.length]);

    const options = {
        chart: {
            foreColor: widgetData.textColor,
            type: "donut" as const,
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    size: '0%'
                }
            }
        },
        labels: productLabels,
        colors: productColors,
        dataLabels: {
            enabled: true,
            fontWeight: "bold",
            formatter: function (value: number) {
                return value.toFixed(2) + "%";
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            fontWeight: "bold",
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return "$" + val.toLocaleString();
                },
            },
        }
    };

    return (
        <div id={name} className="card w-100 mb-0">
            <div className="card-body">
                <h4 className="card-title">{widgetData.title}</h4>
                <p>{widgetData.description}</p>
                <ReactApexChart options={options} series={montoSeries} type="donut" height={235} />
            </div>
        </div>
    );
}

export default PieWidget;
