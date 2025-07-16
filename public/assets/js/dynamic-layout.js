$(document).on("click", ".layout-component-pickup", function () {
    var pickupdesignId = $(this).attr("data-pickup-layout-design");

    Swal.fire({
        title: "¿Agregar a la estructura?",
        text: "Se creará un componente para incluir las funcionalidades de tu tablero en construcción.",
        showCancelButton: true,
        confirmButtonColor: "#2381E3",
        cancelButtonColor: "#919b9f",
        confirmButtonText: "Si, agregar",
        cancelButtonText: "No, cancelar",
        imageUrl: "./assets/images/layout-icon.png",

    }).then((result) => {
        if (result.value) {
            updatePlateAndDrawNewGrid(pickupdesignId);
        }
    });
});

    
$(document).on("click", ".new-grid-layout-body a.delete-grid-element", function () {
    $(this).closest(".grid-primal-component").remove();
    var htmlRemaining = $(".new-grid-layout-body .angular-fundation-row").html()
    console.log(htmlRemaining);

    if (htmlRemaining == undefined || htmlRemaining == '' || htmlRemaining ==' '){
        $(".dashboard-empty-scenario").removeClass("hidden-board");
        $(".new-dashboard-save-holder").addClass("hidden-save-btn");
    }
    
});


$(document).on("click", ".angular-fundation-row a.trigger-placeholder-card", function () {
    var indicatorCat = $(this).attr("data-gauge-cat");
    var slotId = $(this).attr("id");

    $(".indicator-info-cells").addClass("hidden-cat");
    $(".indicator-info-cells.category-" + indicatorCat).removeClass("hidden-cat");

    $("#indicator-selected-slot").val(slotId);
    console.log("Val guardado", slotId);
});

$(document).on("click", ".select-indicator", function () {
    var slotIdSelected = $("#indicator-selected-slot").val();
    var indicatorId = $(this).attr("data-indicator-selected");

    console.log(slotIdSelected);
    console.log(indicatorId);

    switch(indicatorId) {
        case "1":
            var IndicatorSelected =
                '<div class="card welcome-card overflow-hidden bg-light-info border-0 mb-0 auto-adjust-component">'+
                    '<a href="javascript:void(0);" class="config-node-added"></a>'+
                    '<div class="card-body">'+
                        '<h3 class="text-primary position-relative">Hey John,</h3>'+
                        '<h3 class="text-primary position-relative">'+
                            'Download latest report'+
                        '</h3>'+
                        '<a href="#" class="btn btn-info mt-3 position-relative">Download</a>'+
                    '</div>'+
                '</div>';
                // $("#"+slotIdSelected).parent().remove();
                $("#"+slotIdSelected).parent().append(IndicatorSelected);
                $("#"+slotIdSelected).remove();
        break;


        case "2":
            var IndicatorSelected =
                '<div class="card bg-primary w-100 mb-0">'+
                    '<a href="javascript:void(0);" class="config-node-added"></a>'+
                    '<div class="card-body">'+
                        '<div class="d-flex align-items-center">'+
                            '<h4 class="card-title text-white">Earnings</h4>'+
                            '<div class="ms-auto">'+
                                '<span class="btn btn-lg btn-info btn-circle d-flex align-items-center justify-content-center">'+
                                    '<i data-feather="dollar-sign"></i>'+
                                '</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="mt-3">'+
                            '<h2 class="fs-8 text-white mb-0">$93,438.78</h2>'+
                            '<span class="text-white op-5">Monthly revenue</span>'+
                        '</div>'+
                    '</div>'+
                '</div>';

                $("#"+slotIdSelected).parent().append(IndicatorSelected);
                $("#"+slotIdSelected).remove();
                reInitializeChards();
        break;


        case "3":
            var IndicatorSelected =
                '<div class="card w-100 overflow-hidden mb-0">'+
                    '<a href="javascript:void(0);" class="config-node-added"></a>'+
                    '<div class="card-body">'+
                        '<div class="d-flex align-items-center">'+
                            '<div>'+
                                '<h5 class="fw-normal mb-0 text-muted">'+
                                    'Monthly Sales'+
                                '</h5>'+
                                '<h2 class="mb-0">3246</h2>'+
                            '</div>'+
                            '<div class="ms-auto">'+
                                '<span class="btn btn-lg btn-warning btn-circle d-flex align-items-center justify-content-center">'+
                                    '<i data-feather="shopping-bag"></i>'+
                                '</span>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div id="monthly-sales"></div>'+
                '</div>';

                $("#"+slotIdSelected).parent().append(IndicatorSelected);
                $("#"+slotIdSelected).remove();
                reInitializeChards();
        break;


        case "6":
            var IndicatorSelected =
            '<div class="card w-100 mb-0">'+
                '<a href="javascript:void(0);" class="config-node-added"></a>'+
                '<div class="card-body">'+
                    '<div class="d-md-flex align-items-center">'+
                        '<div>'+
                            '<h3 class="card-title">Products Performance</h3>'+
                            '<h6 class="card-subtitle mb-0">'+
                                'Ample Admin Vs Pixel Admin'+
                            '</h6>'+
                        '</div>'+
                        '<div class="ms-auto mt-3 mt-md-0">'+
                            '<select class="form-select theme-select border-0" aria-label="Default select example">'+
                                '<option value="1">March 2021</option>'+
                                '<option value="2">March 2022</option>'+
                                '<option value="3">March 2023</option>'+
                            '</select>'+
                        '</div>'+
                    '</div>'+
                    '<div class="table-responsive mt-4">'+
                        '<table class="table mb-0 text-nowrap varient-table align-middle fs-3">'+
                            '<thead>'+
                                '<tr>'+
                                    '<th scope="col" class="px-0 text-muted">Assigned</th>'+
                                    '<th scope="col" class="px-0 text-muted">Name</th>'+
                                    '<th scope="col" class="px-0 text-muted">Priority</th>'+
                                    '<th scope="col" class="px-0 text-muted text-end">'+
                                        'Budget'+
                                    '</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td class="px-0">'+
                                        '<div class="d-flex align-items-center">'+
                                            '<img src="./assets/images/users/1.jpg" class="rounded-circle" width="35" alt="flexy" />'+
                                            '<div class="ms-3">'+
                                                '<h6 class="mb-0 fw-bold">Sunil Joshi</h6>'+
                                                '<span class="text-muted fs-9">Web Designer</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                    '<td class="px-0">Elite Admin</td>'+
                                    '<td class="px-0">'+
                                        '<span class="badge bg-info">Low</span>'+
                                    '</td>'+
                                    '<td class="px-0 text-dark font-weight-medium text-end">'+
                                        '$3.9K'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="px-0">'+
                                        '<div class="d-flex align-items-center">'+
                                            '<img src="./assets/images/users/2.jpg" class="rounded-circle" width="35" alt="flexy" />'+
                                            '<div class="ms-3">'+
                                                '<h6 class="mb-0 fw-bold">Andrew McDownland</h6>'+
                                                '<span class="text-muted fs-9">Project Manager</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                    '<td class="px-0">Real Homes WP Theme</td>'+
                                    '<td class="px-0">'+
                                        '<span class="badge bg-primary">Medium</span>'+
                                    '</td>'+
                                    '<td class="px-0 text-dark font-weight-medium text-end">'+
                                        '$24.5K'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="px-0">'+
                                        '<div class="d-flex align-items-center">'+
                                            '<img src="./assets/images/users/3.jpg" class="rounded-circle" width="35" alt="flexy" />'+
                                            '<div class="ms-3">'+
                                                '<h6 class="mb-0 fw-bold">Christopher Jamil</h6>'+
                                                '<span class="text-muted fs-9">SEO Manager</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                    '<td class="px-0">MedicalPro WP Theme</td>'+
                                    '<td class="px-0">'+
                                        '<span class="badge bg-warning">Hight</span>'+
                                    '</td>'+
                                    '<td class="px-0 text-dark font-weight-medium text-end">'+
                                        '$12.8K'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="px-0">'+
                                        '<div class="d-flex align-items-center">'+
                                            '<img src="./assets/images/users/3.jpg" class="rounded-circle" width="35" alt="flexy" />'+
                                            '<div class="ms-3">'+
                                                '<h6 class="mb-0 fw-bold">Christopher Jamil</h6>'+
                                                '<span class="text-muted fs-9">SEO Manager</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                    '<td class="px-0">MedicalPro WP Theme</td>'+
                                    '<td class="px-0">'+
                                        '<span class="badge bg-warning">Hight</span>'+
                                    '</td>'+
                                    '<td class="px-0 text-dark font-weight-medium text-end">'+
                                        '$12.8K'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="px-0">'+
                                        '<div class="d-flex align-items-center">'+
                                            '<img src="./assets/images/users/3.jpg" class="rounded-circle" width="35" alt="flexy" />'+
                                            '<div class="ms-3">'+
                                                '<h6 class="mb-0 fw-bold">Christopher Jamil</h6>'+
                                                '<span class="text-muted fs-9">SEO Manager</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</td>'+
                                    '<td class="px-0">MedicalPro WP Theme</td>'+
                                    '<td class="px-0">'+
                                        '<span class="badge bg-warning">Hight</span>'+
                                    '</td>'+
                                    '<td class="px-0 text-dark font-weight-medium text-end">'+
                                        '$12.8K'+
                                    '</td>'+
                                '</tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
            '</div>';

            console.log(slotIdSelected);
            console.log(indicatorId);

            $("#"+slotIdSelected).parent().append(IndicatorSelected);
            $("#"+slotIdSelected).remove();
            reInitializeChards();
        break;

        default:
            // code to be executed 
    }
});


function updatePlateAndDrawNewGrid(idGridComponentId) {
    $("#new-grid-layout-body .dashboard-empty-scenario").addClass("hidden-board");
    $(".new-dashboard-save-holder").removeClass("hidden-save-btn");
    // $(".row.angular-fundation-row").append( "<strong>Hello</strong>" );
    var idGenerated = new Date().getTime();

    switch(idGridComponentId) {
        case "1":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 d-flex align-items-stretch mb-4">'+
                                        '<a href="javascript:void(0)" id="grid-'+idGenerated+'-1" class="trigger-placeholder-card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" id="grid-'+idGenerated+'-2" class="trigger-placeholder-card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" id="grid-'+idGenerated+'-3" class="trigger-placeholder-card" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "1-b":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 d-flex align-items-stretch mt-4">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "2":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                '<div class="row">'+
                    '<div class="col-12 d-flex align-items-stretch">'+
                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "3":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                '<div class="row">'+
                    '<div class="col-12 d-flex align-items-stretch">'+
                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "3-b":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                '<div class="row">'+
                    '<div class="col-12 d-flex align-items-stretch">'+
                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "4":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                '<div class="row">'+
                    '<div class="col-12 d-flex align-items-stretch mb-4">'+
                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                        '</a>'+
                    '</div>'+
                    '<div class="col-12 d-flex align-items-stretch">'+
                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "5":
            var gridLayout = '<div class="col-lg-6 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "6":
            var gridLayout = '<div class="col-lg-3 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "7":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-8 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "7-b":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-8 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "8":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-8 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "8-b":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-8 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="3">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "9":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-4 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card doble-space" id="grid-'+idGenerated+'-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="2">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "10":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "11":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        case "11-b":
            var gridLayout = '<div class="col-lg-12 grid-primal-component mb-4" id="grid-'+idGenerated+'">'+
                                '<a href="javascript:void(0);" class="delete-grid-element"></a>'+
                                '<div class="row">'+
                                    '<div class="col-12 col-lg-6 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">'+
                                        '<a href="javascript:void(0)" class="trigger-placeholder-card" id="grid-'+idGenerated+'-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddIndicator" aria-controls="offcanvasRight" data-gauge-cat="1">'+
                                            '<img src="./assets/images/agregar-indicator.png" alt="agregar indicador">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
            $(".row.angular-fundation-row").append(gridLayout);
            break;


        default:
        // code to be executed 
    }  
}

function reInitializeChards() {
    setTimeout(() => {
            // -----------------------------------------------------------------------
        // Monthly Sales
        // -----------------------------------------------------------------------
        var option_monthly_sales = {
            series: [
            {
                name: "Monthly Sales",
                data: [35, 60, 30, 55, 40],
            },
            ],

            colors: ["#1a9bfc"],
            fill: {
            colors: "#1a9bfc",
            opacity: 0.05,
            type: "solid",
            },
            chart: {
            type: "area",
            height: 75,
            toolbar: {
                show: false,
            },
            foreColor: "#adb0bb",
            fontFamily: "'DM Sans',sans-serif",
            sparkline: {
                enabled: true,
            },
            },
            dataLabels: {
            enabled: false,
            },
            markers: {
            size: 0,
            },
            legend: {
            show: false,
            },
            stroke: {
            show: true,
            width: 2,
            curve: "smooth",
            },
            tooltip: {
            theme: "dark",
            },
        };
        var chart_monthly_sales = new ApexCharts(
            document.querySelector("#monthly-sales"),
            option_monthly_sales
        );
        chart_monthly_sales.render();

        // -----------------------------------------------------------------------
        // Feather icons
        // -----------------------------------------------------------------------
        feather.replace();
    }, 200);
}
