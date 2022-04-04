<template>
	<b-overlay
		:show="overlay.show"
		:variant="overlay.variant"
		:opacity="overlay.opacity"
		:blur="overlay.blur"
		:rounded="overlay.sm"
	>
		<template #overlay>
			<div class="text-center">
				<b-icon icon="arrow-clockwise" font-scale="3" animation="spin" />
				<p style="margin-top: 10px;">{{ $t('OVERLAY.PLEASE_WAIT') }}</p>
			</div>
		</template>

		<div class="content-page">
			<div class="header-page">
				<vHeaderPage>{{ $t('PAGE_TITLE.ACCOUNT_ITEM_MASTER') }}</vHeaderPage>
			</div>

			<div class="account-item-master">
				<div class="account-item-master__content">
					<div class="item-input">
						<label for="input-type">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_TYPE') }}</label>
						<b-form-input id="input-type" :disabled="true" :value="FormData['type']" />
					</div>

					<div class="item-input">
						<label for="input-code">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_CODE') }}</label>
						<b-form-input id="input-code" :disabled="true" :value="FormData['code']" />
					</div>

					<div class="item-input">
						<label for="input-account_item">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_ACCOUNT_ITEM') }}</label>
						<b-form-input id="input-account_item" v-model="FormData['account_item']" />
					</div>
				</div>

				<div class="account-item-master__control">
					<b-button @click="goToAccountItemMaster()">{{ $t('ACCOUNT_ITEM_MASTER.BUTTON_BACK') }}</b-button>
					<b-button>{{ $t('ACCOUNT_ITEM_MASTER.BUTTON_SAVE') }}</b-button>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';

const ROUTER = {
    ACCOUNT_ITEM_MASTER_LIST: '/master-management/account-item-master/list',
};

export default {
    name: 'AccountItemMasterEdit',
    components: {
        vHeaderPage,
    },
    data() {
        return {
            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            FormData: {
                type: '',
                code: '',
                account_item: '',
            },
        };
    },
    methods: {
        goToAccountItemMaster() {
            this.overlay.show = true;

            this.$router.push(ROUTER['ACCOUNT_ITEM_MASTER_LIST']);

            this.overlay.show = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);

    .account-item-master {
        margin: 20px 0 20px 0;

        &__content {
            width: 80%;
            margin: 0 auto;

            margin-top: 20px;

            .item-input {
                margin-bottom: 10px;
            }
        }

        &__control {
            text-align: center;
            margin-top: 50px;

            button {
                min-width: 150px;
                background-color: $golden-tainoi;

                &:hover {
                    opacity: .5;
                    background-color: $golden-tainoi !important;
                }

                &:active {
                    background-color: $golden-tainoi !important;
                }

                &:focus {
                    background-color: $golden-tainoi !important;
                }
            }

            button + button {
                margin: 0 30px 0 30px;
            }
        }
    }
}
</style>

