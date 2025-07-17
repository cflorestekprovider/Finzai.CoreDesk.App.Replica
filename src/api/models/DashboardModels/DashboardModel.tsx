import Layout from "./LayoutModel";

interface DashboardModel {
    id?:number;
    name: string;
    userId: number;
    status: number;
    layouts: Layout[];
}

export default DashboardModel;