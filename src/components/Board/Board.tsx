import React from 'react';

const Board: React.FC = () => {

    return (
        <div className="dashboard-box-holder" id="holderbox-tablero-1">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card welcome-card overflow-hidden bg-light-info border-0">
                        <div className="card-body">
                            <h3 className="text-primary position-relative">Hey John,</h3>
                            <h3 className="text-primary position-relative">
                                Download latest report
                            </h3>
                            <a href="#" className="btn btn-info mb-4 mt-3 position-relative">Download</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-items-stretch">
                            <div className="card bg-primary w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h4 className="card-title text-white">Earnings</h4>
                                        <div className="ms-auto">
                                            <span className="
                                                            btn btn-lg btn-info btn-circle
                                                            d-flex
                                                            align-items-center
                                                            justify-content-center
                                                        ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-dollar-sign">
                                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h2 className="fs-8 text-white mb-0">$93,438.78</h2>
                                        <span className="text-white op-5">Monthly revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-stretch">
                            <div className="card w-100 overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="fw-normal mb-0 text-muted">
                                                Monthly Sales
                                            </h5>
                                            <h2 className="mb-0">3246</h2>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="
                                                            btn btn-lg btn-warning btn-circle
                                                            d-flex
                                                            align-items-center
                                                            justify-content-center
                                                        ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="monthly-sales"
                                    style={{ minHeight: "75px" }}>
                                    <div
                                        id="apexchartsbvwsoabw"
                                        className="apexcharts-canvas apexchartsbvwsoabw"
                                        style={{ width: "0px", height: "75px" }}>
                                        <svg
                                            id="SvgjsSvg1014"
                                            width="0"
                                            height="75"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            className="apexcharts-svg"
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}>
                                            <g id="SvgjsG1017" className="apexcharts-annotations"></g>
                                            <g id="SvgjsG1016" className="apexcharts-inner apexcharts-graphical">
                                                <defs id="SvgjsDefs1015"></defs>
                                            </g>
                                        </svg>
                                        <div className="apexcharts-legend"></div>
                                    </div>
                                </div>
                                <div className="resize-triggers">
                                    <div className="expand-trigger">
                                        <div style={{ width: "1px", height: "1px" }}></div>
                                    </div>
                                    <div className="contract-trigger"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card w-100">
                        <div className="card-body" style={{ position: "relative" }}>
                            <div className="d-md-flex align-items-center">
                                <div>
                                    <h3 className="card-title">Sales Overview</h3>
                                    <h6 className="card-subtitle">Ample admin Vs Pixel admin</h6>
                                </div>
                                <div className="ms-auto">
                                    <ul className="list-style-none">
                                        <li className="list-inline-item text-primary">
                                            <i className="ri-checkbox-blank-circle-fill fs-1 me-1"></i>
                                            Ample
                                        </li>
                                        <li className="list-inline-item text-info">
                                            <i className="ri-checkbox-blank-circle-fill fs-1 me-1"></i>Pixel Admin
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="sales-overview" className="mt-4" style={{ minHeight: "275px" }}>
                                <div
                                    id="apexchartsxp9c1dcbl"
                                    className="apexcharts-canvas apexchartsxp9c1dcbl"
                                    style={{ width: "0px", height: "260px" }}>
                                    <svg
                                        id="SvgjsSvg1010"
                                        width="0"
                                        height="260"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        className="apexcharts-svg"
                                        transform="translate(-15, 0)"
                                        style={{ background: "transparent" }}>
                                        <g id="SvgjsG1013" className="apexcharts-annotations"></g>
                                        <g id="SvgjsG1012" className="apexcharts-inner apexcharts-graphical">
                                            <defs id="SvgjsDefs1011"></defs>
                                        </g>
                                    </svg>
                                    <div className="apexcharts-legend">
                                    </div>
                                </div>
                            </div>
                            <div className="resize-triggers">
                                <div className="expand-trigger">
                                    <div style={{ width: "1px", height: "1px" }}></div>
                                </div>
                                <div className="contract-trigger"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center pb-3 border-bottom">
                                <div>
                                    <h3 className="card-title">Total Sales</h3>
                                    <h6 className="card-subtitle mb-0">Overview of Years</h6>
                                </div>
                                <div className="ms-auto">
                                    <select className="form-select theme-select border-0" aria-label="Default select example">
                                        <option value="1">March 2021</option>
                                        <option value="2">March 2022</option>
                                        <option value="3">March 2023</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <h5 className="text-muted fw-normal mb-0">Sales Yearly</h5>
                                <div className="ms-auto">
                                    <h2 className="fw-bold mb-0">8,364,398</h2>
                                </div>
                            </div>
                            <div className="position-relative">
                                <div id="total-sales2" className="mt-4 pt-2"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart total-sales-icon text-muted-lite feather-xl"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            </div>
                            <ul className="list-style-none d-flex justify-content-between mt-5">
                                <li className="list-inline-item">
                                    <i className="
                                                        ri-checkbox-blank-circle-fill
                                                        text-info
                                                        fs-1
                                                        me-1
                                                    "></i>
                                    2021
                                </li>
                                <li className="list-inline-item">
                                    <i className="
                                                        ri-checkbox-blank-circle-fill
                                                        text-primary
                                                        fs-1
                                                        me-1
                                                    "></i>2020
                                </li>
                                <li className="list-inline-item">
                                    <i className="
                                                        ri-checkbox-blank-circle-fill
                                                        text-warning
                                                        fs-1
                                                        me-1
                                                    "></i>2019
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch">
                    <div className="card w-100">
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
                                <table className="
                                                    table
                                                    mb-0
                                                    text-nowrap
                                                    varient-table
                                                    align-middle
                                                    fs-3
                                                    ">
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
                                                    <img src={`${import.meta.env.BASE_URL}assets/images/users/1.jpg`}  className="rounded-circle" width="35" alt="flexy" />
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
                                                    <img src={`${import.meta.env.BASE_URL}assets/images/users/2.jpg`}  className="rounded-circle" width="35" alt="flexy" />
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
                                                    <img src={`${import.meta.env.BASE_URL}assets/images/users/3.jpg`} className="rounded-circle" width="35" alt="flexy" />
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
                                                    <img src={`${import.meta.env.BASE_URL}assets/images/users/4.jpg`}  className="rounded-circle" width="35" alt="flexy" />
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 fw-bold">Nirav Joshi</h6>
                                                        <span className="text-muted fs-9">Frontend Engineer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-0">Hosting Press HTML</td>
                                            <td className="px-0">
                                                <span className="badge bg-danger">Low</span>
                                            </td>
                                            <td className="px-0 text-dark font-weight-medium text-end">
                                                $2.4K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-0">
                                                <div className="d-flex align-items-center">
                                                    <img src={`${import.meta.env.BASE_URL}assets/images/users/5.jpg`}  className="rounded-circle" width="35" alt="flexy" />
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 fw-bold">Micheal Doe</h6>
                                                        <span className="text-muted fs-9">Content Writer</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-0">Helping Hands WP Theme</td>
                                            <td className="px-0">
                                                <span className="badge bg-success">Low</span>
                                            </td>
                                            <td className="px-0 text-dark font-weight-medium text-end">
                                                $9.3K
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100">
                        <img src={`${import.meta.env.BASE_URL}assets/images/background/blog-bg.jpg`}  className="card-img-top blog-img" alt="..." />
                        <div className="card-body">
                            <div className="d-flex align-items-center text-muted-lite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock feather-lg me-1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                22 March, 2021
                            </div>
                            <h3 className="card-title mt-4">
                                Super awesome, Angular 12 is coming soon!
                            </h3>
                            <ul className="list-style-none mt-3 pt-1 pb-4">
                                <li className="list-inline-item">
                                    <span className="badge bg-primary">Medium</span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="badge bg-danger">Low</span>
                                </li>
                            </ul>
                            <div className="border-top pt-4 d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <a href="#" className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="John Deo" data-bs-original-title="John Deo">
                                        <img src={`${import.meta.env.BASE_URL}assets/images/users/1.jpg`}   className="rounded-circle" width="35" alt="flexy" />
                                    </a>
                                    <a href="#" className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Micheal Doe" data-bs-original-title="Micheal Doe">
                                        <img src={`${import.meta.env.BASE_URL}assets/images/users/2.jpg`}  className="rounded-circle" width="35" alt="flexy" />
                                    </a>
                                    <a href="#" className="
                                                        me-1
                                                        round-md
                                                        rounded-circle
                                                        d-flex
                                                        align-items-center
                                                        justify-content-center
                                                        bg-light-success
                                                        text-success
                                                    " data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add new" data-bs-original-title="Add new"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus feather-sm"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></a>
                                </div>
                                <div className="ms-auto">
                                    <a href="javascript:void(0)" className="text-muted-lite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100 overflow-hidden">
                        <div className="card-body pb-0">
                            <div className="d-flex align-items-start">
                                <div>
                                    <h3 className="card-title">Weekly Stats</h3>
                                    <h6 className="card-subtitle mb-0">Average sales</h6>
                                </div>
                                <div className="ms-auto">
                                    <div className="dropdown">
                                        <a href="#" className="text-muted-lite" id="year1-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="year1-dropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 pb-3 d-flex align-items-center">
                                <span className="btn btn-primary btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                </span>
                                <div className="ms-3">
                                    <h5 className="mb-0 fw-bold">Top Sales</h5>
                                    <span className="text-muted fs-9">Johnathan Doe</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-light-secondary text-muted">+68%</span>
                                </div>
                            </div>
                            <div className="py-3 d-flex align-items-center">
                                <span className="btn btn-warning btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </span>
                                <div className="ms-3">
                                    <h5 className="mb-0 fw-bold">Best Seller</h5>
                                    <span className="text-muted fs-9">MaterialPro Admin</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-light-secondary text-muted">+68%</span>
                                </div>
                            </div>
                            <div className="pt-3 d-flex align-items-center">
                                <span className="btn btn-success btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </span>
                                <div className="ms-3">
                                    <h5 className="mb-0 fw-bold">Most Commented</h5>
                                    <span className="text-muted fs-9">Ample Admin</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-light-secondary text-muted">+68%</span>
                                </div>
                            </div>
                        </div>
                        <div
                            id="weekly-stats"
                            style={{ minHeight: "145px" }}>
                            <div
                                id="apexchartsujwcbv96"
                                className="apexcharts-canvas apexchartsujwcbv96"
                                style={{ width: "0px", height: "145px" }}>
                                <svg
                                    id="SvgjsSvg1022"
                                    width="0"
                                    height="145"
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    className="apexcharts-svg"
                                    transform="translate(0, 0)"
                                    style={{ background: "transparent" }}>
                                    <g id="SvgjsG1025" className="apexcharts-annotations"></g>
                                    <g id="SvgjsG1024" className="apexcharts-inner apexcharts-graphical">
                                        <defs id="SvgjsDefs1023"></defs>
                                    </g>
                                </svg>
                                <div className="apexcharts-legend"></div>
                            </div>
                        </div>
                        <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: "1px", height: "1px" }}></div></div><div className="contract-trigger"></div></div></div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex align-items-start">
                                <div>
                                    <h3 className="card-title">Daily Activities</h3>
                                    <h6 className="card-subtitle mb-0">Overview of Years</h6>
                                </div>
                                <div className="ms-auto">
                                    <div className="dropdown">
                                        <a href="#" className="text-muted-lite" id="year1-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="year1-dropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative mt-5 scrollable ps-container ps-theme-default" style={{ height: "300px" }} data-ps-id="5f52c85c-fcd5-6cd8-1b5b-9511c123e4d4">
                                <ul className="timeline-widget">
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-primary
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            Payment received from John Doe of $385.90
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-info flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            Project Meeting
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-warning
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            New Sale recorded
                                            <a href="javascript:void(0)" className="text-info">#ML-3467</a>
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-danger flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            Payment was made of $64.95 to Michael Anderson
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-success
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            New payment receipt created for Alphanso Golvo
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-primary
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            New Sale recorded
                                            <a href="javascript:void(0)" className="text-info">#ML-3467</a>
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-info flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            Project Meeting
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-primary
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            Payment received from John Doe of $385.90
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-info flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            Project Meeting
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-warning
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            New Sale recorded
                                            <a href="javascript:void(0)" className="text-info">#ML-3467</a>
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-danger flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            Payment was made of $64.95 to Michael Anderson
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-success
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-muted mt-n1">
                                            New payment receipt created for Alphanso Golvo
                                        </div>
                                    </li>
                                    <li className="timeline-item mb-4">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="
                                                        timeline-badge
                                                        me-3
                                                        badge-primary
                                                        flex-shrink-0
                                                        "></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            New Sale recorded
                                            <a href="javascript:void(0)" className="text-info">#ML-3467</a>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-time fw-bold text-dark fs-2 mt-n1">
                                            09.46
                                        </div>
                                        <span className="timeline-badge me-3 badge-info flex-shrink-0"></span>
                                        <div className="timeline-desc fs-3 text-dark fw-bold mt-n1">
                                            Project Meeting
                                        </div>
                                    </li>
                                </ul>
                                <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                                    <div className="ps-scrollbar-x" style={{ left: "0px", width: "0px" }}>

                                    </div>
                                </div>
                                <div className="ps-scrollbar-y-rail" style={{ top: "0px", right: "3px" }}>
                                    <div className="ps-scrollbar-y" style={{ top: "0px", height: "0px" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
