//import { useNavigate } from "react-router";
import { WidgetProps } from "../Widget/Widget";

// TO DO: Implementar el onCLick en el Cliente

const ClientsInArrearsWidget: React.FC<WidgetProps> = ({ name, widgetData }) => {

    //const navigate = useNavigate();
    const rawData = widgetData.dataSourceResult?.[0] || '[]';
    let parsedData: { cliente: string; credito: string; saldo_vencido: string; dias_atraso: string }[] = [];

    try {
        parsedData = JSON.parse(rawData);
    } catch (e) {
        console.error("Error con el parseo en el dataSourceResult", e);
    }

    //const handleClienteClick = (creditoId: string) => {
    //    const url = `${widgetData.clickTarget}?clientId=${encodeURIComponent(creditoId)}`;
    //    navigate(url);
    //};

    return (
        <div id={name} className="card text-center w-100 mb-0 shadow-sm border-0 mh-350 d-flex flex-column">
            <div className="card-body p-4 d-flex flex-column mh-350">
                <h4 className="text-xl font-bold text-center mb-0">{widgetData.title}</h4>
                <p className="text-sm text-center mb-2">{widgetData.description}</p>

                <div className="overflow-auto">
                    <table className="table table-bordered text-sm text-left mb-0">
                        <thead className="text-gray">
                            <tr>
                                <th className="px-4 py-2">Cliente</th>
                                <th className="px-4 py-2">Cr&eacute;dito</th>
                                <th className="px-4 py-2">Saldo vencido</th>
                                <th className="px-4 py-2">D&iacute;as de atraso</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {parsedData.map((item, index) => (
                                <tr key={index} className="text-black border-top hover:bg-blue-50 transition">
                                    <td
                                        className="px-4 py-2 cursor-pointer hover:underline font-medium"
                                       /* onClick={() => handleClienteClick(item.credito)}*/
                                    >
                                        {item.cliente}
                                    </td>
                                    <td className="px-4 py-2">{item.credito}</td>
                                    <td className="px-4 py-2 font-semibold">${item.saldo_vencido.toLocaleString()}</td>
                                    <td className="px-4 py-2">{item.dias_atraso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ClientsInArrearsWidget;
 