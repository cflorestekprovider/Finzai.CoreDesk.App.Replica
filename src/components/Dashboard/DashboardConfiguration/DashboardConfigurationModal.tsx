import { useEffect, useState } from 'react';
import Button from '../../BasicComponents/Button/Button';
import { SaveBoardIcon } from '../../../api/models/IconsModels/IconsModels';
import { getWidgets, saveWidgetProfiles, getWidgetProfileByTenantId, getRolesByTenantId } from '../../../api/dashboard/Dashboard';
import { IndicatorSize } from '../../../api/models/WidgetsModel/WidgetsModel';
import Swal from 'sweetalert2';
import { useDashboardContext } from '../../../context/DashboardContext';

interface KPIItem {
    id: string;
    name: string;
}

interface Props {
    show: boolean;
    onClose: () => void;
}

const DashboardConfiguratorModal: React.FC<Props> = ({ show, onClose }) => {
    const [selectedKPIs, setSelectedKPIs] = useState<KPIItem[]>([]);
    const [kpiOptions, setKpiOptions] = useState<KPIItem[]>([]);
    const [selectedProfile, setSelectedProfile] = useState('');
    const [profiles, setProfiles] = useState<{ value: string; label: string }[]>([]);

    const { state } = useDashboardContext();
    const { tenantId, currentRoleName, isAdminRole, roleId } = state;

    // Obtener widgets
    useEffect(() => {
        const fetchWidgets = async () => {
            try {
                const [small, medium, large] = await Promise.all([
                    getWidgets(IndicatorSize.Small),
                    getWidgets(IndicatorSize.Medium),
                    getWidgets(IndicatorSize.Large),
                ]);
                const allWidgets = [...small, ...medium, ...large];

                const allMapped = allWidgets.map((widget: any) => ({
                    id: widget.id.toString(),
                    name: widget.title,
                }));

                setKpiOptions(allMapped);
            } catch (error) {
                console.error('Error al cargar widgets:', error);
            }
        };

        if (show) {
            fetchWidgets();
            setSelectedKPIs([]);
        }
    }, [show]);

    // Obtener roles 
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                if (isAdminRole) {
                    const roles = await getRolesByTenantId(tenantId);
                    const formatted = roles.map((r: any) => ({
                        value: r.id,
                        label: r.name
                    }));
                    setProfiles(formatted);
                }
            } catch (error) {
                console.error('Error al cargar roles:', error);
            }
        };

        if (show) {
            fetchProfiles();
        }
    }, [show, isAdminRole, tenantId]);

    // Obtener info de los perfiles
    useEffect(() => {
        const fetchSelectedWidgets = async () => {
            if (!selectedProfile || kpiOptions.length === 0) return;

            try {
                const currentWidgetIds = await getWidgetProfileByTenantId(tenantId, selectedProfile);

                const preSelected = kpiOptions.filter((widget) =>
                    currentWidgetIds.includes(parseInt(widget.id))
                );
                setSelectedKPIs(preSelected);
            } catch (error) {
                console.error('Error al cargar widgets del perfil:', error);
            }
        };

        fetchSelectedWidgets();
    }, [selectedProfile, kpiOptions]);


    const toggleKPI = (kpi: KPIItem) => {
        setSelectedKPIs((prev) =>
            prev.find((item) => item.id === kpi.id)
                ? prev.filter((item) => item.id !== kpi.id)
                : [...prev, kpi]
        );
    };

    const handleSave = async () => {
        try {
            const roleToUse = isAdminRole ? selectedProfile : roleId;

            if (!roleToUse) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Rol no detectado',
                    text: 'Selecciona un perfil antes de guardar.',
                    confirmButtonColor: '#3085d6'
                });
                return;
            }

            const widgetIds = selectedKPIs.map((kpi) => parseInt(kpi.id));
            await saveWidgetProfiles(tenantId, roleToUse, widgetIds);

            Swal.fire({
                icon: 'success',
                title: 'Guardado exitoso',
                text: 'La configuracion del dashboard se guardo correctamente.',
                confirmButtonColor: '#3085d6'
            });

            onClose();
        } catch (error) {
            console.error('Error al guardar la configuración:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrio un error al guardar la configuracion.',
                confirmButtonColor: '#d33'
            });
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-white z-50 overflow-y-auto transition-all duration-300 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <div className="relative max-w-4xl mx-auto px-6 py-2">
                <button
                    onClick={onClose}
                    className="absolute right-4 text-gray-500 text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow px-2"
                >
                    x
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-4 m-2">Configuraci&oacute;n de Dashboard</h2>

                <div className="mb-3 m-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Perfil detectado:</label>
                    <div className="text-base font-bold">
                        {currentRoleName || 'No definido'}
                    </div>
                </div>

                {isAdminRole && (
                    <div className="mb-3 m-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar perfil:</label>
                        <select
                            value={selectedProfile}
                            onChange={(e) => setSelectedProfile(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 m-3"
                        >
                            <option value="">Seleccione un perfil</option>
                            {profiles.map(profile => (
                                <option key={profile.value} value={profile.value}>
                                    {profile.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedProfile && (
                    <div className="mb-4 m-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Seleccionar Widgets</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {kpiOptions.map((kpi) => (
                                <div key={kpi.id} className="flex items-center space-x-2 text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={selectedKPIs.some((item) => item.id === kpi.id)}
                                        onChange={() => toggleKPI(kpi)}
                                    />
                                    <span className="ms-2">{kpi.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mb-4 m-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Orden actual de los Widgets seleccionados
                    </label>
                    {selectedKPIs.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-700">
                            {selectedKPIs.map((kpi) => (
                                <li key={kpi.id}>{kpi.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">Ning&uacute;n KPI seleccionado.</p>
                    )}
                </div>

                <div className="flex justify-end">
                    <Button
                        title="Guardar configuraci&oacute;n"
                        onClick={handleSave}
                        type="primaryButton"
                        id="saveConfiguration"
                        icon={<SaveBoardIcon />}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardConfiguratorModal;
