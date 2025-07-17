import { WidgetProps } from "../Widget/Widget";
import { AmountIcon } from "../../api/models/IconsModels/IconsModels";


const ActiveAccountsWidget: React.FC<WidgetProps> = ({ name, widgetData }) => {
    return (
        <>
            <div id={name} className="card w-100 mb-0" style={{ backgroundColor: widgetData.backgroundColor }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title text-white">{widgetData.title}</h4>

                        {
                            widgetData.useIcon &&
                            <div className="ms-auto">
                                <span className="btn btn-lg btn-light btn-circle d-flex align-items-center justify-content-center">
                                    <AmountIcon />
                                </span>
                            </div>
                        }

                    </div>
                    <div className="mt-3">
                        <h2 className="fs-8 text-white mb-0">{widgetData?.dataSourceResult || ''}</h2>
                        <span className="text-white op-5">{widgetData?.description || 'Monthly revenue'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiveAccountsWidget;
