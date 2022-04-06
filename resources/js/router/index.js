import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import modules router
import login from './modules/login';
import timesheet from './modules/timesheet';
import facilityManagement from './modules/facilityManagement';
import staffManagement from './modules/staffManagement';
import departmentManagement from './modules/departmentManagement';
import dev from './modules/dev';

export const constantRoutes = [
    {
        path: '/',
        redirect: { name: 'Dev' },
        hidden: true,
    },
    login,
    timesheet,
    facilityManagement,
    staffManagement,
    departmentManagement,
    dev,
];

export const asyncRoutes = [];

const createRouter = () => new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;

