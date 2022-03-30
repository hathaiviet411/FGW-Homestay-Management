export default {
    ROUTER: {
        MASTER_MANAGEMENT: 'Master Management',

        USER_MANAGEMENT: 'User Management',
        USER_MANAGEMENT_LIST: 'User Management List',
        USER_MANAGEMENT_CREATE: 'User Management Create',
        USER_MANAGEMENT_EDIT: 'User Management Edit',
        ACCOUNT_ITEM_MASTER: 'Account Item Master',
        ACCOUNT_ITEM_MASTER_LIST: 'Account Item List',
        ACCOUNT_ITEM_MASTER_EDIT: 'Account Item Edit',
        INSURANCE_RATE_MASTER: 'Insurance Rate Master',
        INSURANCE_RATE_MASTER_LIST: 'Insurance Rate Master List',
        INSURANCE_RATE_MASTER_EDIT: 'Insurance Rate Master Edit',
        CORPORATION_TAX_MASTER: 'Corporation Tax Master',
        CORPORATION_TAX_MASTER_LIST: 'Corporation Tax Master List',
        CORPORATION_TAX_MASTER_EDIT: 'Corporation Tax Master Edit',

        IMPORT_DATA: 'Import Data',

        FINANCIAL_YEAR_DATA: 'Financial Year Data',
        PREDICTION_DATA: 'Prediction Data',
        CONFIRMED_DATA_IMPORT: 'Confirmed Data Import',

        INCOME_STATEMENT: 'Income statement',
        INCOME_STATEMENT_COMPARISON: 'Income statement Comparison',

        DEV: 'Dev',
    },
    TOAST: {
        TITLE: {
            SUCCESS: 'Success',
            WARNING: 'Warning',
            ERROR: 'Error',
        },
        CONTENT: {
            LOGIN: {
                SUCCESS: 'Logged in successfully.',
                WRONG_ID_PASSWORD: 'You entered the wrong format of ID, Password.',
                REQUIRE_USER_ID: 'Please enter User ID',
                REQUIRE_PASSWORD: 'Please enter Password',
            },

            LOGOUT: {
                SUCCESS: 'You have successfully logged out.',
            },

            USER_MANAGEMENT: {
                REQUIRED_USER_ROLE: 'User role is required.',
                REQUIRED_BASE: 'Department is required.',
                REQUIRED_USER_ID: 'User ID is required.',
                REQUIRED_USER_NAME: 'User name is required.',
                REQUIRED_PASSWORD: 'Password is required.',
                REQUIRED_PASSWORD_LENGTH: 'Password length must be at least 8 characters.',
                REQUIRED_NEW_PASSWORD: 'New password is required.',
                REQUIRED_NEW_PASSWORD_LENGTH: 'New password must be at least 8 characters.',
            },

            OTHER: {
                ERROR: 'An unexpected error has occurred',
            },
        },

        I18N: {
            CHANGE_LANGUAGE: {
                SUCCESS: 'Change language successfully.',
                FAILED: 'Language change failed.',
            },
        },
    },

    LOGIN: {
        ID: 'User ID',
        PASSWORD: 'Password',
        BUTTON_TEXT: 'Login',
    },

    PAGE_TITLE: {
        USER_MANAGEMENT: 'User Management',
        CORPORATION_TAX_MASTER: 'Corporation Tax Master',
        INSURANCE_RATE_MASTER: 'Insurance Rate Master',
        ACCOUNT_ITEM_MASTER: 'Account Item Master',

        CONFIRMED_DATA_IMPORT: 'Confirmed Data Import',
        PREDICTION_DATA: 'Prediction Data',
        FINANCIAL_YEAR_DATA: 'Financial Year Data',

        PL: 'P/L',
        PL_COMPARE: 'P/L (Compare)',
    },

    USER_MANAGEMENT: {
        USER_ROLE: 'User Role',
        BASE: 'Base',
        DEPARTMENT: 'Department',
        USER_ID: 'User ID',
        USER_NAME: 'User Name',
        PASSWORD: 'Password',
        NEW_PASSWORD: 'New Password',
    },

    CORPORATION_TAX_MASTER: {
        CORPORATE_TAX_RATE_NAME: 'Corporate tax rate name',
        USER_ID: 'User ID',
        CORPORATE_TAX_RATE_FOR_DAISEI: 'Corporate tax rate for Daisei (%)',
        EDIT: 'Edit',
        BUTTON_SAVE: 'Save',
        BUTTON_BACK: 'Back',
    },

    INSURANCE_RATE_MASTER: {
        BUTTON_CHANGE_HISTORY: 'Change history',

        KINDS: 'Kinds',
        RATE_NAME: 'Rate name',
        CURRENT: 'Current',
        CHANGE: 'Change',
        APPLICABLE_DATE: 'Applicable date',
        EDIT: 'Edit',

        BUTTON_BACK: 'Back',
        BUTTON_SAVE: 'Save',
    },

    ACCOUNT_ITEM_MASTER: {
        TABLE_HEADER_TYPE: 'Type',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: 'Account item',
        TABLE_HEADER_EDIT: 'Edit',
        TABLE_BODY_CAR: 'Car',
        TABLE_BODY_TRUCK: 'Truck',
        TABLE_BODY_CAR_GO: 'Car go',
        TABLE_BODY_GENERAL_CROS: 'General cros',
        TABLE_BODY_BUSINESS_OUTSITE: 'Business outsite',
        TABLE_BODY_SPECAL_BENIFIT: 'Specal benifit',

        BUTTON_EDIT: 'Edit',
        BUTTON_BACK: 'Back',
        BUTTON_SAVE: 'Save',
    },

    CONFIRMED_DATA_IMPORT: {
        PLACEHOLDER_SELECT_FILE: 'Select file',
        BUTTON_BROWSE: 'Browse',
        BUTTON_IMPORT: 'Import',
    },

    PREDICTION_DATA: {
        ONE_ST_PREDICTION: '1st Prediction',
        TWO_ND_PREDICTION: '2nd Prediction',
        THREE_RD_PREDICTION: '3rd Prediction',
        FOUR_TH_PREDICTION: '4th Prediction',
        CONFIRMED: 'Confimation',

        PLACEHOLDER_SELECT_FILE: 'Select file',
        BUTTON_BROWSE: 'Browse',
        BUTTON_IMPORT: 'Import',

        SALE_DETAILS_REGULAR: 'Sale details (Regular)',
        SALE_DETAILS_SPOT: 'Sale details (Spot)',
        TRUCK_INCOME: 'Truck (Income)',
        TRUCK_COST: 'Truck (Cost)',
        CARGO_INCOME: 'Cargo (Income)',
        CARGO_COST: 'Cargo (Cost)',
    },

    FINANCIAL_YEAR_DATA: {
        ONE_ST_TERM: '1st Term',
        TWO_ND_TERM: '2nd Term',

        DESCRIPTION_NOT_DONE: 'インポート未完了',
        DESCRIPTION_DONE: 'インポート完了済み',

        LABEL_BUDGET_DATA: 'Budget data',
        LABEL_MONTHLY_FIXED_DATA: 'Monthly fixed data',
        LABEL_GENERAL_COST_DATA: 'General cost data',

        PLACEHOLDER_SELECT_FILE: 'Select file',
        BUTTON_BROWSE: 'Browse',
        BUTTON_IMPORT: 'Import',
    },

    INCOME_STATEMENT: {
        ONE_ST_PREDICTION: '1st Prediction',
        TWO_ND_PREDICTION: '2nd Prediction',
        THREE_RD_PREDICTION: '3rd Prediction',
        FOUR_TH_PREDICTION: '4th Prediction',
        CONFIRMED: 'Confimation',

        DESCRIPTION_NOT_DONE: '未着手',
        DESCRIPTION_DONE: '承認済み',

        LABEL_FUEL_PRICE: 'Fuel Price',
        LABEL_ROAD_USAGE_DISCOUNT_RATE: 'Road Usage Discount Rate',

        LABLE_EDIT: 'Edit',
        LABLE_UPDATE_HISTORY: 'Update History',
        LABLE_APPROVE: 'Approve',
        LABLE_EXPORT: 'Export',
        LABLE_CONFIRM: 'Confirm',
        LABLE_COMMENT: 'Comment',

        TABLE_HEADER_TYPE: 'Type',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: 'Account item',
        TABLE_HEADER_PREDICTION: 'Prediction',
        TABLE_HEADER_BUDGET_COMPARISON: 'Budget comparison',
        TABLE_HEADER_LAST_YEAR_COMPARISON: 'Last year comparison',
        TABLE_HEADER_LAST_MONTH_COMPARISON: 'Last month comparison',
        TABLE_HEADER_LAST_TIME_COMPARISON: 'Last time comparison',
        TABLE_HEADER_NOTE: 'Note',

        TABLE_HEADER_SALES_RATIO: 'Sales ratio (%)',
        TABLE_HEADER_BUDGET_RATIO: 'Budget ratio (%)',
        TABLE_HEADER_COMPARE_SAME_MONTH_LAST_YEAR: 'Compare same month last year',
        TABLE_HEADER_LAST_YEAR_RATIO: 'Last year ratio (%)',
        TABLE_HEADER_LAST_MONTH_RATIO: 'Last month ratio (%)',

        TABLE_BODY_CAR: 'Car',
        TABLE_BODY_TRUCK: 'Truck',
        TABLE_BODY_CAR_GO: 'Car go',
        TABLE_BODY_GENERAL_COST: 'General cost',
        TABLE_BODY_BUSSINES_OUT: 'Bussines out',
        TABLE_BODY_SPECIAL_BENEFIT: 'Special benefit',
    },

    INCOME_STATEMENT_COMPARISON: {
        ONE_ST_PREDICTION: '1st Prediction',
        TWO_ND_PREDICTION: '2nd Prediction',
        THREE_RD_PREDICTION: '3rd Prediction',
        FOUR_TH_PREDICTION: '4th Prediction',
        CONFIRMED: 'Confimation',

        DESCRIPTION_NOT_DONE: '未着手',
        DESCRIPTION_DONE: '承認済み',

        BUTTON_ALL_DEPARTMENT: 'All Department',
        BUTTON_CLEAR_ALL: 'Clear all',
        BUTTON_APPLY: 'Apply',

        LABLE_PERIOD: 'Period',
        NO_DATE_SELECTED: 'No date selected',

        TABLE_HEADER_TYPE: 'Type',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: 'Account item',
        TABLE_HEADER_TOTAL: 'Total',
        TABLE_HEADER_BUDGET_COMPARISON: 'Budget comparison',
        TABLE_HEADER_LAST_YEAR_COMPARISON: 'Last year comparison',
        TABLE_HEADER_LAST_MONTH_COMPARISON: 'Last month comparison',
        TABLE_HEADER_LAST_TIME_COMPARISON: 'Last time comparison(1st time)',

        TABLE_BODY_CAR: 'Car',
        TABLE_BODY_TRUCK: 'Truck',
        TABLE_BODY_CAR_GO: 'Car go',
        TABLE_BODY_GENERAL_COST: 'General cost',
        TABLE_BODY_BUSSINES_OUT: 'Bussines out',
        TABLE_BODY_SPECIAL_BENEFIT: 'Special benefit',
    },

    BUTTON: {
        PDF: 'PDF',
        REGISTER: 'Register',
        CLEAR_ALL: 'Clear All',
        APPLY: 'Apply',
        DETAIL: 'Detail',
        DELETE: 'Delete',
        BACK: 'Back',
        SAVE: 'Save',
        EDIT: 'Edit',
        MONTH_YEAR: 'Month Year',
        BASE: 'Base',
    },

    FILTER: {
        TITLE: 'Filter',
        NO_DATE_SELECTED: 'No date selected',
        DATE_PICKER_LABEL_HELP: 'Use cursor keys to navigate calendar dates',
    },

    TABLE: {
        EMPTY: 'No data',
        NOT_COMPLETED: 'Not Completed',
        COMPLETED: 'Completed',
    },

    MODAL: {
        DELETE_CONFIRMATION: 'Are you sure to delete 【{name}】?',
        YES: 'Yes',
        NO: 'No',
    },

    OVERLAY: {
        PLEASE_WAIT: 'Please Wait',
    },

    PLACE_HOLDER: {
        PLEASE_SELECT: '-- Please Select --',
        USER_ROLE: 'Please Select User Role',
        DEPARTMENT: 'Please Select Department',
        USER_ID: 'Please Enter User ID',
        USER_NAME: 'Please Enter User Name',
        PWD: 'Please Enter Password',
        NEW_PWD: 'Please Enter New Password',
    },

    DATE: {
        YEAR: 'Year',
        MONTH: 'Month',
        DAY: 'Day',
    },

    NAVBAR: {
        LOGOUT: 'Logout',
    },

    DEV: {
        LANGUAGE: 'Language',
        ENGLISH: 'English',
        JAPANESE: 'Japanese',
    },

    SPECIAL_CHARACTER: {
        DASH_ARROW: '➟',
    },

    PAGINATION: {
        DISPLAY_PER_PAGE: 'Per Page',
    },

    STEP: {
        NOT_DONE: 'インポート未完了',
        DONE: 'インポート完了済み',
    },

    TEXT_COLLAPSE: 'Collapse',
};
