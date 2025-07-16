import { ReactNode } from "react";
import { AddressIcon, BillsIcon, JobIcon, LegalIcon, PropertyIcon, ReferencesIcon, RelationShipIcon, UserIcon } from "../IconsModels/IconsModels";
import CustomerData from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerData/CustomerData";
import CustomerAddress from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerAddress/CustomerAddress";
import CustomerJob from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerJob/CustomerJob";
import CustomerReference from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerReference/CustomerReference";
import CustomerProperty from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerProperty/CustomerProperty";
import CustomerRelationShip from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerRelationship/CustomerReference";
import CustomerBills from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerBills/CustomerBills";
import CustomerLegal from "../../../components/Layouts/Dataentry/PhysicalPerson/CustomerLegal/CustomerLegal";

export interface TabModel {
    title: string;
    icon: ReactNode;
    referenciaTab: string;
    isActive: boolean;
    tab: ReactNode;
}

const TabsModelPF: TabModel[] = [
    {
        title: 'Datos Cliente',
        icon: <UserIcon />,
        referenciaTab: 'customerTab',
        isActive: true,
        tab: <CustomerData />
    },
    {
        title: 'Domicilio',
        icon: <AddressIcon />,
        referenciaTab: 'customerAddressTab',
        isActive: false,
        tab: <CustomerAddress />
    },{
        title: 'Empleos',
        icon: <JobIcon />,
        referenciaTab: 'customerJobTab',
        isActive: false,
        tab: <CustomerJob />
    },{
        title: 'Propiedades',
        icon: <PropertyIcon />,
        referenciaTab: 'customerPropertyTab',
        isActive: false,
        tab: <CustomerProperty />
    },{
        title: 'Referencias Personales',
        icon: <ReferencesIcon />,
        referenciaTab: 'customerReferenceTab',
        isActive: false,
        tab: <CustomerReference />
    },{
        title: 'Relaciones',
        icon: <RelationShipIcon />,
        referenciaTab: 'customerRelationShipTab',
        isActive: false,
        tab: <CustomerRelationShip />
    },{
        title: 'Gastos',
        icon: <BillsIcon />,
        referenciaTab: 'customerBillsTab',
        isActive: false,
        tab: <CustomerBills />
    },{
        title: 'Representante Legal',
        icon: <LegalIcon />,
        referenciaTab: 'addressDataTab',
        isActive: false,
        tab: <CustomerLegal />
    }
];

export default TabsModelPF;