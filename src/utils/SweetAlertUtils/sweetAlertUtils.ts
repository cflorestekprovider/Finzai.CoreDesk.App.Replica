import Swal from "sweetalert2";

export const showSuccessSweetAlert = (message: string) => {
    Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'nav-link btn-cloud-bordered bold',
        },
    });
};

export const showWarningSweetAlert = (message: string) => {
    Swal.fire({
        icon: "warning",
        title: message,
        showConfirmButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'nav-link btn-cloud-bordered bold',
        },
    });
};

export const showErrorSweetAlert = (message: string) => {
    Swal.fire({
        icon: "error",
        title: message,
        showConfirmButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'nav-link btn-cloud-bordered bold',
        },
    });
};

export const showInfoSweetAlert = (message: string) => {
    Swal.fire({
        icon: "info",
        title: "Información",
        html: `<div style="font-size: 14px; white-space: pre-line;">${message}</div>`,
        showConfirmButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'nav-link btn-cloud-bordered bold',
        },
    });
};

export const showConfirmationSweetAlert = async (message: string): Promise<boolean> => {
    const result = await Swal.fire({
        title: '¿Confirmar?',
        text: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'nav-link btn-cloud-bordered bold',
            cancelButton: 'nav-link btn-cloud-bordered bold me-2' 
        },
    });

    return result.isConfirmed;
};