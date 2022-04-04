import Layout from '@/layout';

const incomeStatement = {
    path: '/income-statement',
    component: Layout,
    name: 'IncomeStatement',
    meta: {
        title: 'ROUTER.INCOME_STATEMENT',
        icon: 'far fa-file-invoice-dollar',
    },
    redirect: { name: 'IncomeStatementTable' },
    children: [
        {
            path: 'income-statement-table',
            name: 'IncomeStatementTable',
            meta: {
                title: 'ROUTER.INCOME_STATEMENT',
            },
            redirect: { name: 'IncomeStatementTableIndex' },
            component: () => import(/* webpackChunkName: "IncomeStatement" */ '@/pages/IncomeStatement/index'),
            children: [
                {
                    path: 'index',
                    name: 'IncomeStatementTableIndex',
                    meta: {
                        title: 'ROUTER.INCOME_STATEMENT',
                    },
                    component: () => import(/* webpackChunkName: "IncomeStatementTableIndex" */ '@/pages/IncomeStatement/IncomeStatementTable/index'),
                },
            ],
        },
        {
            path: 'income-statement-comparison-table',
            name: 'IncomeStatementComparisonTable',
            meta: {
                title: 'ROUTER.INCOME_STATEMENT_COMPARISON',
            },
            redirect: { name: 'IncomeStatementComparisonTableIndex' },
            component: () => import(/* webpackChunkName: "IncomeStatement" */ '@/pages/IncomeStatement/index'),
            children: [
                {
                    path: 'index',
                    name: 'IncomeStatementComparisonTableIndex',
                    meta: {
                        title: 'ROUTER.INCOME_STATEMENT_COMPARISON',
                    },
                    component: () => import(/* webpackChunkName: "IncomeStatementComparisonTableIndex" */ '@/pages/IncomeStatement/IncomeStatementComparisonTable/index'),
                },
            ],
        },
    ],
};

export default incomeStatement;
