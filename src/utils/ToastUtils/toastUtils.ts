import { toast } from 'react-toastify';

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
    });
}


export const showWarningToast = (message: string) => {
    toast.warning(message, {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
    });
};

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
    });
};

export const showInfoToast = (message: string) => {
    toast.info(message, {
    position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
    });
  };