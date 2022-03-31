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
				<vHeaderPage>{{ $t('PAGE_TITLE.PREDICTION_DATA') }}</vHeaderPage>
			</div>

			<div class="prediction-data">
				<div class="prediction-data__step">
					<vStep :steps="steps" :current-step="currentStep" />
				</div>
				<div class="prediction-data__content">
					<div class="zone-import">
						<div class="zone-import__title">
							<span>{{ $t('PAGE_TITLE.PREDICTION_DATA') }}</span>
						</div>
						<div class="zone-import__content">
							<div class="item-import">
								<input id="input-sale-details-regular" type="file">
								<label for="sale-details-regular">{{ $t('PREDICTION_DATA.SALE_DETAILS_REGULAR') }}</label>
								<b-input-group>
									<b-form-input
										id="sale-details-regular-file-name"
										v-model="DataImport['sales_details_regular']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-sale-details-regular')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-sale-details-spot" type="file">
								<label for="sale-details-spot">{{ $t('PREDICTION_DATA.SALE_DETAILS_SPOT') }}</label>
								<b-input-group>
									<b-form-input
										id="sale-details-spot-file-name"
										v-model="DataImport['sales_details_spot']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-sale-details-spot')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-truck-income" type="file">
								<label for="truck-income">{{ $t('PREDICTION_DATA.TRUCK_INCOME') }}</label>
								<b-input-group>
									<b-form-input
										id="truck-income-file-name"
										v-model="DataImport['truck_income']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-truck-income')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-truck-cost" type="file">
								<label for="truck-cost">{{ $t('PREDICTION_DATA.TRUCK_COST') }}</label>
								<b-input-group>
									<b-form-input
										id="truck-const-file-name"
										v-model="DataImport['truck_const']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-truck-cost')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-cargo-income" type="file">
								<label for="cargo-income">{{ $t('PREDICTION_DATA.CARGO_INCOME') }}</label>
								<b-input-group>
									<b-form-input
										id="cargo-income-file-name"
										v-model="DataImport['cargo_income']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-cargo-income')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-cargo-cost" type="file">
								<label for="cargo-cost">{{ $t('PREDICTION_DATA.CARGO_COST') }}</label>
								<b-input-group>
									<b-form-input
										id="cargo-const-file-name"
										v-model="DataImport['cargo_const']"
										:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-cargo-cost')">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>
						</div>
					</div>
				</div>

				<div class="zone-control">
					<b-button>{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_IMPORT') }}</b-button>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import vStep from '@/components/atoms/vStep';

export default {
    name: 'PredictionData',
    components: {
        vHeaderPage,
        vStep,
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

            steps: [
                this.$t('PREDICTION_DATA.ONE_ST_PREDICTION'),
                this.$t('PREDICTION_DATA.TWO_ND_PREDICTION'),
                this.$t('PREDICTION_DATA.THREE_RD_PREDICTION'),
                this.$t('PREDICTION_DATA.FOUR_TH_PREDICTION'),
                this.$t('PREDICTION_DATA.CONFIRMED'),
            ],
            currentStep: 2,

            DataImport: {
                sales_details_regular: null,
                sale_details_spot: null,
                truck_income: null,
                truck_cost: null,
                cargo_income: null,
                cargo_cost: null,
            },
        };
    },
    methods: {
        clickInputFile(id) {
            const INPUT_FILE = document.getElementById(id);

            INPUT_FILE.click();
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);

    .prediction-data {
        margin: 0 auto;

        &__step {
            width: 85%;
            margin: 0 auto;
            margin-top: 20px;

        }

        &__content {
            width: 90%;
            margin: 0 auto;
            margin-top: 20px;

            .zone-import {
                &__title {
                    display: flex;
                    background-color: $green-haze;
                    color: $white;
                    padding: 10px 15px;

                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;

                    span {
                        font-weight: 500;
                    }
                }

                &__content {
                    border: 2px solid $black;
                    border-top-color: $green-haze;

                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;

                    .item-import {
                        margin: 10px 30px 20px 30px;

                        input#input-sale-details-regular,
                        input#input-sale-details-spot,
                        input#input-truck-income,
                        input#input-truck-cost,
                        input#input-cargo-income,
                        input#input-cargo-cost {
                            display: none;
                        }

                        label {
                            font-weight: 500;
                        }

                        button {
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;

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
        }

        .zone-control {
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
        }
    }
}
</style>
