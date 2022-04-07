import Layout from '@/layout';

const roomManagement = {
    path: '/room-management',
    component: Layout,
    redirect: { name: 'RoomManagementIndex' },
    name: 'RoomManagement',
    meta: {
        title: 'ROUTER.DEPARTMENT_MANAGEMENT',
        icon: 'fas fa-door-open',
    },
    children: [
        {
            path: 'index',
            name: 'RoomManagementIndex',
            meta: {
                title: 'ROUTER.DEPARTMENT_MANAGEMENT',
            },
            component: () => import(/* webpackChunkName: "RoomManagementIndex" */ '@/pages/RoomManagement/Index'),
        },
    ],
};

export default roomManagement;
