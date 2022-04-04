import Layout from '@/layout';

const facilityManagement = {
    path: '/facility-management',
    component: Layout,
    redirect: { name: 'FacilityManagementList' },
    name: 'FacilityManagement',
    meta: {
        title: 'ROUTER.FACILITY_MANAGEMENT',
        icon: 'fas fa-hand-receiving',
    },
    children: [
        {
            path: 'list',
            name: 'FacilityManagementList',
            meta: {
                title: 'ROUTER.FACILITY_MANAGEMENT',
            },
            component: () => import(/* webpackChunkName: "FacilityManagementList" */ '@/pages/FacilityManagement/List'),
        },
    ],
};

export default facilityManagement;
