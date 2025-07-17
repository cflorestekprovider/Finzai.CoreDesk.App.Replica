import { WidgetProps } from "../Widget/Widget";
import ReactApexChart from "react-apexcharts";

const BarGraphWidget: React.FC<WidgetProps> = ({ name, widgetData }) => {

    // Obtener el dataSourceResult y obtener el cliente y saldo vencido
    const rawData = widgetData.dataSourceResult?.[0] || '[]';
    let parsedData: { region: string; monto: number }[] = [];

    try {
        parsedData = JSON.parse(rawData);
    } catch (e) {
        console.error("Error con el parseo en el dataSourceResult", e);
    }

    // Diseñar grafica
    const categories = parsedData.map(item => item.region);
    const data = parsedData.map(item => item.monto);

    const series = [{
        name: widgetData.title,
        data
    }];

    const options = {
        chart: {
            type: "bar" as const,
            toolbar: { show: false },
            foreColor: widgetData.textColor,
            fontFamily: "'DM Sans', sans-serif",
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        xaxis: {
            categories,
            labels: {
                style: {
                    fontWeight: 700
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontWeight: 700
                }
            }
        },
        fill: {
            opacity: 1,
            colors: [widgetData.backgroundColor || "#1a9bfc"]
        },
        legend: {
            fontWeight: 'bold'
        },
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return "$" + val.toLocaleString();
                }
            }
        }
    };

    return (
        <div id={name} className="card w-100 mb-0">
            <div className="card-body">
                <h4 className="card-title">{widgetData.title}</h4>
                <p>{widgetData.description}</p>
                <ReactApexChart options={options} series={series} type="bar" height={225} />
            </div>
        </div>
    );
}

export default BarGraphWidget;
