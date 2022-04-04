import Layout from '@/layout';

const importData = {
    path: '/import-data',
    component: Layout,
    name: 'ImportData',
    meta: {
        title: 'ROUTER.IMPORT_DATA',
        icon: 'fas fa-file-csv',
    },
    redirect: { name: 'FinancialYearData' },
    children: [
        {
            path: 'financial-year-data',
            name: 'FinancialYearData',
            meta: {
                title: 'ROUTER.FINANCIAL_YEAR_DATA',
            },
            redirect: { name: 'FinancialYearDataImport' },
            component: () => import(/* webpackChunkName: "ImportData" */ '@/pages/ImportData/index'),
            children: [
                {
                    path: 'import',
                    name: 'FinancialYearDataImport',
                    meta: {
                        title: 'ROUTER.FINANCIAL_YEAR_DATA',
                    },
                    component: () => import(/* webpackChunkName: "FinancialYearDataImport" */ '@/pages/ImportData/FinancialYearData/index'),
                },
            ],
        },
        {
            path: 'preduction-data',
            name: 'PreductionData',
            meta: {
                title: 'ROUTER.PREDICTION_DATA',
            },
            redirect: { name: 'PredictionDataImport' },
            component: () => import(/* webpackChunkName: "ImportData" */ '@/pages/ImportData/index'),
            children: [
                {
                    path: 'import',
                    name: 'PredictionDataImport',
                    meta: {
                        title: 'ROUTER.PREDICTION_DATA',
                    },
                    component: () => import(/* webpackChunkName: "PredictionDataImport" */ '@/pages/ImportData/PredictionData/index'),
                },
            ],
        },
        {
            path: 'regular-data',
            name: 'RegularData',
            meta: {
                title: 'ROUTER.CONFIRMED_DATA_IMPORT',
            },
            redirect: { name: 'ConfirmedDataImport' },
            component: () => import(/* webpackChunkName: "ImportData" */ '@/pages/ImportData/index'),
            children: [
                {
                    path: 'import',
                    name: 'ConfirmedDataImport',
                    meta: {
                        title: 'ROUTER.CONFIRMED_DATA_IMPORT',
                    },
                    component: () => import(/* webpackChunkName: "ConfirmedDataImport" */ '@/pages/ImportData/ConfirmedDataImport/index'),
                },
            ],
        },
    ],
};

export default importData;
