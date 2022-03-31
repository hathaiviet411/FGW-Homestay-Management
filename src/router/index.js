import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            redirect: 'login',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [
                    {
                        text: 'Home',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/staff-management',
            name: 'staff-management',
            component: () => import('@/views/StaffManagement.vue'),
            meta: {
                pageTitle: 'Staff Management',
                breadcrumb: [
                    {
                        text: 'Staff Management',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '/error-404',
            name: 'error-404',
            component: () => import('@/views/error/Error404.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '*',
            redirect: 'error-404',
        },
    ],
});

router.afterEach(() => {
    const appLoading = document.getElementById('loading-bg');
    if (appLoading) {
        appLoading.style.display = 'none';
    }
});

export default router;
