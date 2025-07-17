import { ReactNode } from "react"
import ReactApexChart from "react-apexcharts";

export enum IndicatorSize {
    Small = "1",
    Medium = "2",
    Large = "3"
}

export interface widgets {
    id: string,
    img: string,
    title: string,
    description: string,
    size: IndicatorSize[],
    widget?: (id: string, data?: any) => ReactNode;
    useRender?: boolean;
}

const basePath = import.meta.env.BASE_URL;
const imagePath = `${basePath}assets/images/users/`;

export const indicadores: widgets[] = [
    {
        id: "1",
        img: "1.jpg",
        title: "Indicador 1",
        description: "Descripción del indicador 1.",
        size: [IndicatorSize.Small],
        widget: (id: string, data?: any) => (<div id={id} className="card welcome-card overflow-hidden bg-light-info border-0 mb-0 auto-adjust-component">
            <div className="card-body"
            >
                <h3 className="text-primary position-relative">{data?.title || "Hey John,"}</h3>
                <h3 className="text-primary position-relative">{data?.description || "Download latest report"}</h3>
                <a href={data?.url || "#"} className="btn btn-info mt-3 position-relative">{"Download"}</a>
            </div>
        </div>)
    },
    {
        id: "2",
        img: "2.jpg",
        title: "Indicador 2",
        description: "Descripción del indicador 2.",
        size: [IndicatorSize.Small],
        widget: (id: string, data?: any) => (
            <>
                <div id={id} className="card bg-primary w-100 mb-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h4 className="card-title text-white">{data.title}</h4>
                            <div className="ms-auto">
                                <span className="btn btn-lg btn-info btn-circle d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h2 className="fs-8 text-white mb-0">{data?.dataSourceResult || ''}</h2>
                            <span className="text-white op-5">{data?.description || 'Monthly revenue'}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        id: "4",
        img: "4.jpg",
        title: "Indicador 4",
        description: "Descripción del indicador 4.",
        size: [IndicatorSize.Large],
    },
    {
        id: "5",
        img: "5.jpg",
        title: "Indicador 5",
        description: "Descripción del indicador 5.",
        size: [IndicatorSize.Large]
    },
    {
        id: "6",
        img: "6.jpg",
        title: "Indicador 6",
        description: "Descripción del indicador 6.",
        size: [IndicatorSize.Large],
        widget: (id: string) => (<div id={id} className="card w-100 mb-0">
            <div className="card-body">
                <div className="d-md-flex align-items-center">
                    <div>
                        <h3 className="card-title">Products Performance</h3>
                        <h6 className="card-subtitle mb-0">
                            Ample Admin Vs Pixel Admin
                        </h6>
                    </div>
                    <div className="ms-auto mt-3 mt-md-0">
                        <select className="form-select theme-select border-0" aria-label="Default select example">
                            <option value="1">March 2021</option>
                            <option value="2">March 2022</option>
                            <option value="3">March 2023</option>
                        </select>
                    </div>
                </div>
                <div className="table-responsive mt-4">
                    <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                        <thead>
                            <tr>
                                <th scope="col" className="px-0 text-muted">Assigned</th>
                                <th scope="col" className="px-0 text-muted">Name</th>
                                <th scope="col" className="px-0 text-muted">Priority</th>
                                <th scope="col" className="px-0 text-muted text-end">
                                    Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <img src={`${imagePath}1.jpg`} className="rounded-circle" width="35" alt="flexy" />`
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bold">Sunil Joshi</h6>
                                            <span className="text-muted fs-9">Web Designer</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">Elite Admin</td>
                                <td className="px-0">
                                    <span className="badge bg-info">Low</span>
                                </td>
                                <td className="px-0 text-dark font-weight-medium text-end">
                                    $3.9K
                                </td>
                            </tr>
                            <tr>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        `<img src={`${imagePath}2.jpg`} className="rounded-circle" width="35" alt="flexy" />`
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bold">Andrew McDownland</h6>
                                            <span className="text-muted fs-9">Project Manager</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">Real Homes WP Theme</td>
                                <td className="px-0">
                                    <span className="badge bg-primary">Medium</span>
                                </td>
                                <td className="px-0 text-dark font-weight-medium text-end">
                                    $24.5K
                                </td>
                            </tr>
                            <tr>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <img src={`${imagePath}3.jpg`} className="rounded-circle" width="35" alt="flexy" />
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bold">Christopher Jamil</h6>
                                            <span className="text-muted fs-9">SEO Manager</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">MedicalPro WP Theme</td>
                                <td className="px-0">
                                    <span className="badge bg-warning">Hight</span>
                                </td>
                                <td className="px-0 text-dark font-weight-medium text-end">
                                    $12.8K
                                </td>
                            </tr>
                            <tr>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        `<img src={`${imagePath}3.jpg`} className="rounded-circle" width="35" alt="flexy" />`
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bold">Christopher Jamil</h6>
                                            <span className="text-muted fs-9">SEO Manager</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">MedicalPro WP Theme</td>
                                <td className="px-0">
                                    <span className="badge bg-warning">Hight</span>
                                </td>
                                <td className="px-0 text-dark font-weight-medium text-end">
                                    $12.8K
                                </td>
                            </tr>
                            <tr>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <img src={`${imagePath}3.jpg`} className="rounded-circle" width="35" alt="flexy" />
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bold">Christopher Jamil</h6>
                                            <span className="text-muted fs-9">SEO Manager</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">MedicalPro WP Theme</td>
                                <td className="px-0">
                                    <span className="badge bg-warning">Hight</span>
                                </td>
                                <td className="px-0 text-dark font-weight-medium text-end">
                                    $12.8K
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
    },
    {
        id: "7",
        img: "7.jpg",
        title: "Indicador 7",
        description: "Descripción del indicador 7.",
        size: [IndicatorSize.Large]
    },
    {
        id: "8",
        img: "8.jpg",
        title: "Indicador 8",
        description: "Descripción del indicador 8.",
        size: [IndicatorSize.Large]
    },
    {
        id: "9",
        img: "9.jpg",
        title: "Indicador 9",
        description: "Descripción del indicador 9.",
        size: [IndicatorSize.Large]
    },
    {
        id: "3",
        img: "3.jpg",
        title: "Indicador 3",
        description: "Descripción del indicador 3.",
        size: [IndicatorSize.Small, IndicatorSize.Medium],
        widget: (id: string) => (<div id={id} className="card w-100 overflow-hidden mb-0">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                        <h5 className="fw-normal mb-0 text-muted">
                            Monthly Sales
                        </h5>
                        <h2 className="mb-0">3246</h2>
                    </div>
                    <div className="ms-auto">
                        <span className="btn btn-lg btn-warning btn-circle d-flex align-items-center justify-content-center">
                            <i data-feather="shopping-bag"></i>
                        </span>
                    </div>
                </div>
            </div>
            <ReactApexChart
                options={{
                    chart: {
                        type: "area",
                        height: 75,
                        toolbar: { show: false },
                        foreColor: "#adb0bb",
                        fontFamily: "'DM Sans',sans-serif",
                        sparkline: { enabled: true }
                    },
                    colors: ["#1a9bfc"],
                    fill: {
                        colors: ["#1a9bfc"],
                        opacity: 0.05,
                        type: "solid"
                    },
                    dataLabels: { enabled: false },
                    markers: { size: 0 },
                    legend: { show: false },
                    stroke: { show: true, width: 2, curve: "smooth" },
                    tooltip: { theme: "dark" }
                }}
                series={[{ name: "Monthly Sales", data: [70, 60, 30, 55, 40] }]}
                type="area"
                height={75}
            />
        </div>),
        useRender: true
    },
    {
        id: "10",
        img: "10.jpg",
        title: "Indicador 10",
        description: "Descripción del indicador 10.",
        size: [IndicatorSize.Small, IndicatorSize.Medium]
    },
    {
        id: "11",
        img: "11.jpg",
        title: "Indicador 11",
        description: "Descripción del indicador 11.",
        size: [IndicatorSize.Large]
    }
];