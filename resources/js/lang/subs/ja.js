export default {
    ROUTER: {
        MASTER_MANAGEMENT: 'マスタ管理',

        USER_MANAGEMENT: 'ユーザマスタ',
        USER_MANAGEMENT_LIST: 'ユーザマスタ',
        USER_MANAGEMENT_CREATE: 'ユーザマスタ',
        USER_MANAGEMENT_EDIT: 'ユーザマスタ',
        ACCOUNT_ITEM_MASTER: '勘定科目マスタ',
        ACCOUNT_ITEM_MASTER_LIST: '勘定科目マスタ',
        ACCOUNT_ITEM_MASTER_EDIT: '勘定科目マスタ',
        INSURANCE_RATE_MASTER: '保険料率マスタ',
        INSURANCE_RATE_MASTER_LIST: '保険料率マスタ',
        INSURANCE_RATE_MASTER_EDIT: '保険料率マスタ',
        CORPORATION_TAX_MASTER: '法人税率マスタ',
        CORPORATION_TAX_MASTER_LIST: '法人税率マスタ',
        CORPORATION_TAX_MASTER_EDIT: '法人税率マスタ',

        IMPORT_DATA: 'データインポート',

        FINANCIAL_YEAR_DATA: '通期データ',
        PREDICTION_DATA: '予測データ',
        CONFIRMED_DATA_IMPORT: '確定データ',

        INCOME_STATEMENT: '損益計算書',
        INCOME_STATEMENT_COMPARISON: '損益計算書-比較',

        DEV: 'Dev',
    },

    TOAST: {

        TITLE: {
            SUCCESS: '成功',
            WARNING: '警告',
            ERROR: 'エラー',
        },

        CONTENT: {
            LOGIN: {
                SUCCESS: '正常にログインしました',
                WRONG_ID_PASSWORD: 'ID、パスワードの間違った形式を入力しました',
                REQUIRE_USER_ID: 'ユーザIDを入力してください',
                REQUIRE_PASSWORD: 'パスワードを入力してください',
            },

            LOGOUT: {
                SUCCESS: '正常にログアウトしました',
            },

            USER_MANAGEMENT: {
                REQUIRED_USER_ROLE: 'ユーザー権限が必要です。',
                REQUIRED_BASE: '拠点が必要です。',
                REQUIRED_USER_ID: 'ユーザーIDが必要です。',
                REQUIRED_USER_NAME: 'ユーザー名が必要です。',
                REQUIRED_PASSWORD: 'パスワードが必要です。',
                REQUIRED_PASSWORD_LENGTH: 'パスワードは8文字以上である必要があります。',
                REQUIRED_NEW_PASSWORD: '新しいパスワードが必要です。',
                REQUIRED_NEW_PASSWORD_LENGTH: '新しいパスワードは8文字以上である必要があります。',
                VALIDATION_WAGE_INPUT: '工賃が無効です。もう一度確認してください。',
            },

            OTHER: {
                ERROR: '予期しないエラーが発生しました',
            },
        },

        I18N: {
            CHANGE_LANGUAGE: {
                SUCCESS: '言語を正常に変更します。',
                FAILED: '言語の変更に失敗しました。',
            },
        },
    },

    LOGIN: {
        ID: 'ユーザID',
        PASSWORD: 'パスワード',
        BUTTON_TEXT: 'ログイン',
    },

    PAGE_TITLE: {
        USER_MANAGEMENT: 'ユーザ管理',
        CORPORATION_TAX_MASTER: '法人税率マスタ',
        INSURANCE_RATE_MASTER: '保険料率マスタ',
        ACCOUNT_ITEM_MASTER: '勘定科目マスタ',

        CONFIRMED_DATA_IMPORT: '確定データ',
        FINANCIAL_YEAR_DATA: '通期データ',
        PREDICTION_DATA: '予測データ',

        INCOME_STATEMENT: '損益計算書',
        INCOME_STATEMENT_COMPARISON: '損益計算書-比較',

        PL: '損益計算書',
        PL_COMPARE: '損益計算書-比較',
    },

    USER_MANAGEMENT: {
        USER_ROLE: 'ユーザ権限',
        BASE: '拠点',
        DEPARTMENT: '拠点',
        USER_ID: 'ユーザID',
        USER_NAME: 'ユーザ名',
        PASSWORD: 'パスワード',
        NEW_PASSWORD: '新規パスワード',
    },

    CORPORATION_TAX_MASTER: {
        CORPORATE_TAX_RATE_NAME: '法人税率名',
        USER_ID: '税率',
        CORPORATE_TAX_RATE_FOR_DAISEI: 'ダイセー用法人税率(%)',
        EDIT: '編集',
        BUTTON_SAVE: '保存',
        BUTTON_BACK: '戻る',
    },

    INSURANCE_RATE_MASTER: {
        BUTTON_CHANGE_HISTORY: '変更履歴',

        KINDS: '種別',
        RATE_NAME: '料率名',
        CURRENT: '現在',
        CHANGE: '変更',
        APPLICABLE_DATE: '適用年月',
        EDIT: '編集',

        BUTTON_SAVE: '保存',
        BUTTON_BACK: '戻る',
    },

    ACCOUNT_ITEM_MASTER: {
        TABLE_HEADER_TYPE: '種別',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: '勘定科目',
        TABLE_HEADER_EDIT: '編集',
        TABLE_BODY_CAR: '自車',
        TABLE_BODY_TRUCK: '傭車',
        TABLE_BODY_CAR_GO: '荷役',
        TABLE_BODY_GENERAL_CROS: '一般管理費',
        TABLE_BODY_BUSINESS_OUTSITE: '営業外',
        TABLE_BODY_SPECAL_BENIFIT: '特別損益',

        BUTTON_EDIT: '編集',
        BUTTON_SAVE: '保存',
        BUTTON_BACK: '戻る',
    },

    CONFIRMED_DATA_IMPORT: {
        PLACEHOLDER_SELECT_FILE: 'ファイルを選択',
        BUTTON_BROWSE: '参照',
        BUTTON_IMPORT: 'インポート実行',
    },

    PREDICTION_DATA: {
        ONE_ST_PREDICTION: '予測１回目',
        TWO_ND_PREDICTION: '予測2回目',
        THREE_RD_PREDICTION: '予測3回目',
        FOUR_TH_PREDICTION: '予測4回目',
        CONFIRMED: '確定',

        PLACEHOLDER_SELECT_FILE: 'ファイルを選択',
        BUTTON_BROWSE: '参照',
        BUTTON_IMPORT: 'インポート実行',

        SALE_DETAILS_REGULAR: '売上明細 (定期便)',
        SALE_DETAILS_SPOT: '売上明細 (スポット便)',
        TRUCK_INCOME: '傭車 (収入)',
        TRUCK_COST: '傭車 (費用)',
        CARGO_IMCOME: '荷役 (収入)',
        CARGO_COST: '荷役 (費用)',
    },

    FINANCIAL_YEAR_DATA: {
        ONE_ST_TERM: '上期',
        TWO_ND_TERM: '下期',

        DESCRIPTION_NOT_DONE: 'インポート未完了',
        DESCRIPTION_DONE: 'インポート完了済み',

        LABEL_BUDGET_DATA: '予算データ',
        LABEL_MONTHLY_FIXED_DATA: '月額固定データ',
        LABEL_GENERAL_COST_DATA: '一般管理費データ',

        PLACEHOLDER_SELECT_FILE: 'ファイルを選択',
        BUTTON_BROWSE: '参照',
        BUTTON_IMPORT: 'インポート実行',
    },

    INCOME_STATEMENT: {
        ONE_ST_PREDICTION: '予測１回目',
        TWO_ND_PREDICTION: '予測2回目',
        THREE_RD_PREDICTION: '予測3回目',
        FOUR_TH_PREDICTION: '予測4回目',
        CONFIRMED: '確定',

        DESCRIPTION_NOT_DONE: '未着手',
        DESCRIPTION_DONE: '承認済み',

        LABEL_FUEL_PRICE: '燃料単価',
        LABEL_ROAD_USAGE_DISCOUNT_RATE: '道路使用料割引率',

        LABLE_EDIT: '編集',
        LABLE_UPDATE_HISTORY: '編集履歴',
        LABLE_APPROVE: '承認',
        LABLE_EXPORT: 'エクスポート',
        LABLE_CONFIRM: '確定',
        LABLE_COMMENT: 'コメント',

        TABLE_HEADER_TYPE: '種別',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: '勘定科目',
        TABLE_HEADER_PREDICTION: '予測',
        TABLE_HEADER_BUDGET_COMPARISON: '予算対比',
        TABLE_HEADER_LAST_YEAR_COMPARISON: '前年対比',
        TABLE_HEADER_LAST_MONTH_COMPARISON: '前月対比',
        TABLE_HEADER_LAST_TIME_COMPARISON: '前回対比(1回目)',
        TABLE_HEADER_NOTE: '備考',

        TABLE_HEADER_SALES_RATIO: '売上比(%)',
        TABLE_HEADER_BUDGET_RATIO: '予算比(%)',
        TABLE_HEADER_COMPARE_SAME_MONTH_LAST_YEAR: '前年同月対比',
        TABLE_HEADER_LAST_YEAR_RATIO: '前年比(%)',
        TABLE_HEADER_LAST_MONTH_RATIO: '前月比(%)',

        TABLE_BODY_CAR: '自車',
        TABLE_BODY_TRUCK: '傭車',
        TABLE_BODY_CAR_GO: '荷役',
        TABLE_BODY_GENERAL_COST: '一般管理費',
        TABLE_BODY_BUSSINES_OUT: '営業外',
        TABLE_BODY_SPECIAL_BENEFIT: '特別損益',
    },

    INCOME_STATEMENT_COMPARISON: {
        ONE_ST_PREDICTION: '予測１回目',
        TWO_ND_PREDICTION: '予測２回目',
        THREE_RD_PREDICTION: '予測３回目',
        FOUR_TH_PREDICTION: '予測４回目',
        CONFIRMED: '確定',

        DESCRIPTION_NOT_DONE: '未着手',
        DESCRIPTION_DONE: '承認済み',

        LABLE_PERIOD: '期間',
        NO_DATE_SELECTED: '選択してください',

        BUTTON_ALL_DEPARTMENT: '全拠点',
        BUTTON_CLEAR_ALL: '全クリア',
        BUTTON_APPLY: '適用する',

        TABLE_HEADER_TYPE: '種別',
        TABLE_HEADER_CODE: 'Code',
        TABLE_HEADER_ACCOUNT_ITEM: '勘定科目',
        TABLE_HEADER_TOTAL: '合計',
        TABLE_HEADER_BUDGET_COMPARISON: '予算対比',
        TABLE_HEADER_LAST_YEAR_COMPARISON: '前年対比',
        TABLE_HEADER_LAST_MONTH_COMPARISON: '前月対比',
        TABLE_HEADER_LAST_TIME_COMPARISON: '前月対比(1回目)',

        TABLE_BODY_CAR: '自車',
        TABLE_BODY_TRUCK: '傭車',
        TABLE_BODY_CAR_GO: '荷役',
        TABLE_BODY_GENERAL_COST: '一般管理費',
        TABLE_BODY_BUSSINES_OUT: '営業外',
        TABLE_BODY_SPECIAL_BENEFIT: '特別損益',
    },

    BUTTON: {
        PDF: '出力',
        REGISTER: '新規登録',
        CLEAR_ALL: '全クリア',
        APPLY: '適用する',
        DETAIL: '詳細',
        DELETE: '削除',
        BACK: '戻る',
        SAVE: '保存',
        EDIT: '編集',
        ADD: '追加する',
        MONTH_YEAR: '年月',
        BASE: '拠点',
    },

    FILTER: {
        TITLE: 'フィルタ',
        NO_DATE_SELECTED: '未選択',
        DATE_PICKER_LABEL_HELP: 'カーソルキーを使用してカレンダーの日付をナビゲートする',
    },

    TABLE: {
        EMPTY: 'データなし',
        NOT_COMPLETED: '未完了',
        COMPLETED: '完了',
    },

    MODAL: {
        DELETE_CONFIRMATION: '【{name}】を削除してよろしいですか?',
        YES: 'はい',
        NO: 'いいえ',
    },

    OVERLAY: {
        PLEASE_WAIT: '読み込み中',
    },

    PLACE_HOLDER: {
        PLEASE_SELECT: '選択してください',
        USER_ROLE: '選択してください',
        BASE: '選択してください',
        USER_ID: '入力してください',
        USER_NAME: '入力してください',
        PWD: '入力してください',
        NEW_PWD: '入力してください',
    },

    DATE: {
        YEAR: '年',
        MONTH: '月',
        DAY: '日',
    },

    NAVBAR: {
        LOGOUT: 'ログアウト',
    },

    DEV: {
        LANGUAGE: '言語',
        ENGLISH: '英語',
        JAPANESE: '日本語',
    },

    SPECIAL_CHARACTER: {
        DASH_ARROW: '➟',
    },

    PAGINATION: {
        DISPLAY_PER_PAGE: '1ページ毎の表示数',
    },

    STEP: {
        NOT_DONE: 'インポート未完了',
        DONE: 'インポート完了済み',
    },

    TEXT_COLLAPSE: 'オプション',
};
