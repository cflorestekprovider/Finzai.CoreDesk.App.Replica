
export const LoadingInitialState: LoadingState = {
    visible: false,
    text: 'Solicitando información...',
    logo: `${import.meta.env.BASE_URL}assets/images/landing/finzai-logo-ed.png`
};

export interface LoadingState {
    visible: boolean;
    text:string;
    logo:string;
}
