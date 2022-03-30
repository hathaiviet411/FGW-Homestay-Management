import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'login',
    },
    // {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     component: () => import('@/pages/dashboard/Dashboard.vue'),
    // },
    {
        path: '/typography',
        name: 'typography',
        component: () => import('@/pages/typography/Typography.vue'),
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('@/pages/icons/Icons.vue'),
    },
    {
        path: '/cards',
        name: 'cards',
        component: () => import('@/pages/cards/Card.vue'),
    },
    {
        path: '/simple-table',
        name: 'simple-table',
        component: () => import('@/pages/simple-table/SimpleTable.vue'),
    },
    {
        path: '/form-layouts',
        name: 'form-layouts',
        component: () => import('@/pages/form-layouts/FormLayouts.vue'),
    },
    {
        path: '/account-settings',
        name: 'pages-account-settings',
        component: () => import('@/pages/account-settings/AccountSettings.vue'),
    },
    {
        path: '/login',
        name: 'pages-login',
        component: () => import('@/pages/login/Login.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/register',
        name: 'pages-register',
        component: () => import('@/pages/register/Register.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/pages/error/Error.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '*',
        redirect: 'error-404',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
