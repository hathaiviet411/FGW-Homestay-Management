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
				<vHeaderPage>{{ $t('PAGE_TITLE.CORPORATION_TAX_MASTER') }}</vHeaderPage>
			</div>

			<div class="corporation-tax-master">
				<div class="corporation-tax-master__content">
					<div class="input-content">
						<label for="for-daisei">
							{{ $t('CORPORATION_TAX_MASTER.CORPORATE_TAX_RATE_FOR_DAISEI') }}
						</label>
						<b-form-input id="for-daisei" v-model="FormData.corporate_tax_rate_for_daisei" type="number" />
					</div>
				</div>

				<div class="corporation-tax-master__control">
					<b-button @click="goToCorporationTaxMaster()">{{ $t('CORPORATION_TAX_MASTER.BUTTON_BACK') }}</b-button>
					<b-button @click="handleSave()">{{ $t('CORPORATION_TAX_MASTER.BUTTON_SAVE') }}</b-button>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';

const ROUTER = {
    CORPORATION_TAX_MASTER: '/master-management/corporation-tax-master/list',
};

export default {
    name: 'CorporationTaxMasterEdit',
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
                corporate_tax_rate_for_daisei: null,
            },
        };
    },
    methods: {
        goToCorporationTaxMaster() {
            this.overlay.show = true;

            this.$router.push(ROUTER['CORPORATION_TAX_MASTER']);

            this.overlay.show = false;
        },
        handleSave() {
            this.overlay.show = true;

            setTimeout(() => {
                this.overlay.show = false;
            }, 3000);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);
    .corporation-tax-master {
        &__content {
            margin: 0 auto;

            margin-top: 150px;

            width: 80%;

            .input-content {
                label {
                    font-weight: 500;
                }

                margin-top: 20px;
                margin-bottom: 20px;
            }
        }

        &__control {
            text-align: center;
            margin-top: 50px;

            button {
                min-width: 150px;
                background-color: $green-haze;

                &:hover {
                    opacity: .5;
                    background-color: $green-haze !important;
                }

                &:active {
                    background-color: $green-haze !important;
                }

                &:focus {
                    background-color: $green-haze !important;
                }
            }

            button + button {
                margin: 0px 30px 0 30px;
            }
        }
    }
}
</style>
