import BusinessAddress from "../../../components/Layouts/Dataentry/MoralPerson/BusinessAddress/BusinessAddress";
import BusinessData from "../../../components/Layouts/Dataentry/MoralPerson/BusinessData/BusinessData";
import BusinessLegal from "../../../components/Layouts/Dataentry/MoralPerson/BusinessLegal/BusinessLegal";
import BusinessPartners from "../../../components/Layouts/Dataentry/MoralPerson/BusinessPartners/BusinessPartners";
import BusinessProperty from "../../../components/Layouts/Dataentry/MoralPerson/BusinessProperty/BusinessProperty";
import BusinessReference from "../../../components/Layouts/Dataentry/MoralPerson/BusinessReference/BusinessReference";
import BusinessTaxData from "../../../components/Layouts/Dataentry/MoralPerson/BusinessTaxData/BusinessTaxData";
import { AddressIcon, LegalIcon, PropertyIcon, ReferencesIcon, TaxDataIcon, UserIcon } from "../IconsModels/IconsModels";
import { TabModel } from "./TabModelPF";

const TabsModelPM: TabModel[] = [
    {
        title: 'Datos Generales',
        translationKey: "dataentry.tabs.general_data",
        icon: <UserIcon />,
        referenciaTab: 'businessDataTab',
        isActive: true,
        tab: <BusinessData />
    },
    {
        title: 'Domicilio',
        translationKey: "dataentry.tabs.address",
        icon: <AddressIcon />,
        referenciaTab: 'businessAddressDataTab',
        isActive: false,
        tab: <BusinessAddress />
    },{
        title: 'Propiedades',
        translationKey: "dataentry.tabs.properties",
        icon: <PropertyIcon />,
        referenciaTab: 'businessJobDataTab',
        isActive: false,
        tab: <BusinessProperty />
    },{
        title: 'Socios',
        translationKey: "dataentry.tabs.stockholders",
        icon: <PropertyIcon />,
        referenciaTab: 'businessPartnerDataTab',
        isActive: false,
        tab: <BusinessPartners />
    },{
        title: 'Representantes Legales',
        translationKey: "dataentry.tabs.legal_representatives",
        icon: <LegalIcon />,
        referenciaTab: 'businessReferenceDataTab',
        isActive: false,
        tab: <BusinessLegal />
    },{
        title: 'Datos Fiscales',
        translationKey: "dataentry.tabs.tax_data",
        icon: <TaxDataIcon />,
        referenciaTab: 'businessTaxDataTab',
        isActive: false,
        tab: <BusinessTaxData />
    },{
        title: 'Referencias Personales',
        translationKey: "dataentry.tabs.references",
        icon: <ReferencesIcon />,
        referenciaTab: 'businessReferencesTab',
        isActive: false,
        tab: <BusinessReference />
    }
];

export default TabsModelPM;