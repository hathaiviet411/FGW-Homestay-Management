import Layout from '@/layout';

const masterManagement = {
    path: '/master-management',
    component: Layout,
    redirect: { name: 'AccountItemMaster' },
    name: 'MasterManagement',
    meta: {
        title: 'ROUTER.MASTER_MANAGEMENT',
        icon: 'fas fa-cog',
    },
    children: [
        {
            path: 'account-item-master',
            name: 'AccountItemMaster',
            meta: {
                title: 'ROUTER.ACCOUNT_ITEM_MASTER',
            },
            redirect: { name: 'AccountItemMasterList' },
            component: () => import(/* webpackChunkName: "MasterManagement" */ '@/pages/MasterManagement/index'),
            children: [
                {
                    path: 'list',
                    name: 'AccountItemMasterList',
                    meta: {
                        title: 'ROUTER.ACCOUNT_ITEM_MASTER_LIST',
                    },
                    component: () => import(/* webpackChunkName: "AccountItemMasterList" */ '@/pages/MasterManagement/AccountItemMaster/List'),
                },
                {
                    path: 'edit/:id',
                    name: 'AccountItemMasterEdit',
                    meta: {
                        title: 'ROUTER.ACCOUNT_ITEM_MASTER_EDIT',
                    },
                    component: () => import(/* webpackChunkName: "AccountItemMasterEdit" */ '@/pages/MasterManagement/AccountItemMaster/Edit'),
                },
            ],
        },
        {
            path: 'insurance-rate-master',
            name: 'InsuranceRateMaster',
            meta: {
                title: 'ROUTER.INSURANCE_RATE_MASTER',
            },
            redirect: { name: 'InsuranceRateMasterList' },
            component: () => import(/* webpackChunkName: "MasterManagement" */ '@/pages/MasterManagement/index'),
            children: [
                {
                    path: 'list',
                    name: 'InsuranceRateMasterList',
                    meta: {
                        title: 'ROUTER.INSURANCE_RATE_MASTER_LIST',
                    },
                    component: () => import(/* webpackChunkName: "InsuranceRateMasterList" */ '@/pages/MasterManagement/InsuranceRateMaster/List'),
                },
                {
                    path: 'edit/:id',
                    name: 'InsuranceRateMasterEdit',
                    meta: {
                        title: 'ROUTER.INSURANCE_RATE_MASTER_EDIT',
                    },
                    component: () => import(/* webpackChunkName: "InsuranceRateMasterEdit" */ '@/pages/MasterManagement/InsuranceRateMaster/Edit'),
                },
            ],
        },
        {
            path: 'corporation-tax-master',
            name: 'CorporationTaxMaster',
            meta: {
                title: 'ROUTER.CORPORATION_TAX_MASTER',
            },
            redirect: { name: 'CorporationTaxMasterList' },
            component: () => import(/* webpackChunkName: "MasterManagement" */ '@/pages/MasterManagement/index'),
            children: [
                {
                    path: 'list',
                    name: 'CorporationTaxMasterList',
                    meta: {
                        title: 'ROUTER.CORPORATION_TAX_MASTER_LIST',
                    },
                    component: () => import(/* webpackChunkName: "CorporationTaxMasterList" */ '@/pages/MasterManagement/CorporationTaxMaster/List'),
                },
                {
                    path: 'edit/:id',
                    name: 'CorporationTaxMasterEdit',
                    meta: {
                        title: 'ROUTER.CORPORATION_TAX_MASTER_EDIT',
                    },
                    component: () => import(/* webpackChunkName: "CorporationTaxMasterEdit" */ '@/pages/MasterManagement/CorporationTaxMaster/Edit'),
                },
            ],
        },
        {
            path: 'user-management',
            name: 'UserManagement',
            meta: {
                title: 'ROUTER.USER_MANAGEMENT',
            },
            redirect: { name: 'UserManagementList' },
            component: () => import(/* webpackChunkName: "MasterManagement" */ '@/pages/MasterManagement/index'),
            children: [
                {
                    path: 'list',
                    name: 'UserManagementList',
                    meta: {
                        title: 'ROUTER.USER_MANAGEMENT_LIST',
                    },
                    component: () => import(/* webpackChunkName: "UserManagementList" */ '@/pages/MasterManagement/UserManagement/Index'),
                },
                {
                    path: 'create',
                    name: 'UserManagementCreate',
                    meta: {
                        title: 'ROUTER.USER_MANAGEMENT_CREATE',
                    },
                    component: () => import(/* webpackChunkName: "UserManagementCreate" */ '@/pages/MasterManagement/UserManagement/Create'),
                },
                {
                    path: 'edit/:id',
                    name: 'UserManagementEdit',
                    meta: {
                        title: 'ROUTER.USER_MANAGEMENT_EDIT',
                    },
                    component: () => import(/* webpackChunkName: "UserManagementEdit" */ '@/pages/MasterManagement/UserManagement/Edit.vue'),
                },
            ],
        },
    ],
};

export default masterManagement;
