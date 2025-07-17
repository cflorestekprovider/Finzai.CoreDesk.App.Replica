import LoadingOverlay from 'react-loading-overlay-ts';
import { useLoadingContext } from '../../context/LoadingContext';
import './Loading.css';  // Importa el CSS para la animación

const Loading: React.FC = () => {
    const { state } = useLoadingContext();

    return (
        state.visible && (
            <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: 9999 }}>
                <LoadingOverlay
                    active={state.visible}
                    spinner={
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                src={state.logo}
                                alt="Logo"
                                style={{ objectFit: 'contain', marginBottom: 20 }}
                                className="loading-logo"
                            />
                            <span  className="loading-logo" style={{ color: '#333333', fontSize: 18 }}>{state.text}</span>
                        </div>
                    }
                    styles={{
                        overlay: (base:any) => ({
                            ...base,
                            background: 'rgba(255, 255, 255, 0.8)'
                        }),
                        wrapper: {
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 9999
                        }
                    }}
                >
                    <div style={{ height: '100vh', width: '100vw' }} />
                </LoadingOverlay>
            </div>
        )
    );
};

export default Loading;
