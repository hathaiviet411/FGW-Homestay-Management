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
				<vHeaderPage>{{ $t('PAGE_TITLE.FINANCIAL_YEAR_DATA') }}</vHeaderPage>
			</div>

			<div class="financial-year-data">
				<div class="financial-year-data__step">
					<vStep
						:steps="steps"
						:current-step="currentStep"
					/>
				</div>
				<div class="financial-year-data__content">
					<div class="zone-import">
						<div class="zone-import__title">
							<span>{{ $t('PAGE_TITLE.FINANCIAL_YEAR_DATA') }}</span>
						</div>
						<div class="zone-import__content">
							<div class="item-import">
								<input id="input-budget-data" type="file">
								<label for="">{{ $t('FINANCIAL_YEAR_DATA.LABEL_BUDGET_DATA') }}</label>
								<b-input-group>
									<b-form-input
										id="budget-data-file-name"
										v-model="DataImport['budget_data']"
										:placeholder="$t('FINANCIAL_YEAR_DATA.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-budget-data')">{{ $t('FINANCIAL_YEAR_DATA.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-monthly-fixed-data" type="file">
								<label for="">{{ $t('FINANCIAL_YEAR_DATA.LABEL_MONTHLY_FIXED_DATA') }}</label>
								<b-input-group>
									<b-form-input
										id="monthly-fixed-data-file-name"
										v-model="DataImport['monthly_fixed_data']"
										:placeholder="$t('FINANCIAL_YEAR_DATA.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-monthly-fixed-data')">{{ $t('FINANCIAL_YEAR_DATA.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>

							<div class="item-import">
								<input id="input-general-cost-data" type="file">
								<label for="">{{ $t('FINANCIAL_YEAR_DATA.LABEL_GENERAL_COST_DATA') }}</label>
								<b-input-group>
									<b-form-input
										id="general-cost-data-file-name"
										v-model="DataImport['general_cost_data']"
										:placeholder="$t('FINANCIAL_YEAR_DATA.PLACEHOLDER_SELECT_FILE')"
										:readonly="true"
									/>
									<b-input-group-prepend>
										<b-button @click="clickInputFile('input-general-cost-data')">{{ $t('FINANCIAL_YEAR_DATA.BUTTON_BROWSE') }}</b-button>
									</b-input-group-prepend>
								</b-input-group>
							</div>
						</div>
					</div>
				</div>
				<div class="zone-control">
					<b-button>{{ $t('FINANCIAL_YEAR_DATA.BUTTON_IMPORT') }}</b-button>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import vStep from '@/components/atoms/vStep';

export default {
    name: 'FinancialYearData',
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
                this.$t('FINANCIAL_YEAR_DATA.ONE_ST_TERM'),
                this.$t('FINANCIAL_YEAR_DATA.TWO_ND_TERM'),
            ],
            currentStep: 1,
            hasDescription: true,
            textNotDone: this.$t('FINANCIAL_YEAR_DATA.DESCRIPTION_NOT_DONE'),
            textDone: this.$t('FINANCIAL_YEAR_DATA.DESCRIPTION_DONE'),

            DataImport: {
                budget_data: null,
                monthly_fixed_data: null,
                general_cost_data: null,
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

    .financial-year-data {
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
                    background-color: $golden-tainoi;
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
                    border-top-color: $golden-tainoi;

                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;

                    .item-import {
                        margin: 10px 30px 20px 30px;

                        input[type="file"] {
                            display: none;
                        }

                        button {
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;

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
                    }
                }
            }
        }

        .zone-control {
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
        }
    }
}
</style>
