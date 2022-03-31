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
				<vHeaderPage>{{ $t('PAGE_TITLE.INSURANCE_RATE_MASTER') }}</vHeaderPage>
			</div>

			<div class="insurance-rate-master">
				<div class="insurance-rate-master__content">
					<div class="item-input">
						<label for="input-kinds">{{ $t('INSURANCE_RATE_MASTER.KINDS') }}</label>
						<b-form-input id="input-kinds" :disabled="true" :value="FormData['kinds']" />
					</div>

					<div class="item-input">
						<label for="input-rate-name">{{ $t('INSURANCE_RATE_MASTER.RATE_NAME') }}</label>
						<b-form-input id="input-rate-name" :disabled="true" :value="FormData['rate_name']" />
					</div>

					<div class="item-input">
						<label for="input-current">{{ $t('INSURANCE_RATE_MASTER.CURRENT') }}</label>
						<b-form-input id="input-current" :disabled="true" :value="FormData['current']" />
					</div>

					<div class="item-input">
						<label for="input-change">{{ $t('INSURANCE_RATE_MASTER.CHANGE') }}</label>
						<b-form-input id="input-change" v-model="FormData['change']" />
					</div>

					<div class="item-input">
						<label for="input-change">{{ $t('INSURANCE_RATE_MASTER.APPLICABLE_DATE') }}</label>
						<b-form-select id="input-change" v-model="FormData['applicable_date']" :options="options" />
					</div>
				</div>
				<div class="insurance-rate-master__control">
					<b-row>
						<b-col cols="12" sm="12" md="6" lg="6">
							<b-button @click="goToInsuranceRateMaster()">{{ $t('INSURANCE_RATE_MASTER.BUTTON_BACK') }}</b-button>
						</b-col>
						<b-col cols="12" sm="12" md="6" lg="6">
							<b-button>{{ $t('INSURANCE_RATE_MASTER.BUTTON_SAVE') }}</b-button>
						</b-col>
					</b-row>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';

const ROUTER = {
    INSURANCE_RATE_MASTER: '/master-management/insurance-rate-master/list',
};

export default {
    name: 'InsuranceRateMasterEdit',
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

            options: [
                {
                    value: '2022-02',
                    text: '2022-02',
                },
                {
                    value: '2022-03',
                    text: '2022-03',
                },
                {
                    value: '2022-04',
                    text: '2022-04',
                },
            ],

            FormData: {
                kinds: '',
                rate_name: '',
                current: '',
                change: '',
                applicable_date: '2022-02',
            },
        };
    },
    methods: {
        goToInsuranceRateMaster() {
            this.overlay.show = true;

            this.$router.push(ROUTER['INSURANCE_RATE_MASTER']);

            this.overlay.show = false;
        },
    },
};
</script>
<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);

    .insurance-rate-master {
        &__content {
            margin: 0 auto;

            width: 80%;

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
                margin-bottom: 20px;
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
        }
    }
}
</style>

