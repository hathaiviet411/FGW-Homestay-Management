import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import modules router
import login from './modules/login';
import dev from './modules/dev';

export const constantRoutes = [
    {
        path: '/',
        redirect: { name: 'Dev' },
        hidden: true,
    },
    login,
    dev,
];

export const asyncRoutes = [];

const createRouter = () => new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;

