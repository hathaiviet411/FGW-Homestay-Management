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
				<vHeaderPage>{{ $t('PAGE_TITLE.PL') }}</vHeaderPage>
			</div>

			<div class="page-pl">
				<vCollapse>
					<template #zone-collapse>
						<div class="page-pl__step">
							<vStep
								:steps="steps"
								:current-step="currentStep"
								:has-description="hasDescription"
								:text-not-done="textNotDone"
								:text-done="textDone"
							/>
						</div>
						<div class="page-pl__control">
							<b-row>
								<b-col cols="12" sm="12" md="12" lg="6">
									<b-row>
										<b-col cols="12" sm="12" md="6" lg="6">
											<div class="fuel-price">
												<label for="input-fuel-price">{{ $t('INCOME_STATEMENT.LABEL_FUEL_PRICE') }}</label>
												<b-form-input id="input-fuel-price" v-model="fuel_price" />
											</div>
										</b-col>
										<b-col cols="12" sm="12" md="6" lg="6">
											<div class="road-usage-discount-rate">
												<label for="input-road-usage-discount-rate">{{ $t('INCOME_STATEMENT.LABEL_ROAD_USAGE_DISCOUNT_RATE') }}</label>
												<b-form-input id="input-road-usage-discount-rate" v-model="road_usage_discount_rate" />
											</div>
										</b-col>
									</b-row>
								</b-col>
								<b-col cols="12" sm="12" md="12" lg="6">
									<b-button :class="{ 'active-btn': tabName === 'edit' }" @click="tabName = 'edit'">
										<i class="fas fa-pen" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_EDIT') }}</span>
									</b-button>
									<b-button :class="{ 'active-btn': tabName === 'history' }" @click="tabName = 'history'">
										<i class="fas fa-history" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_UPDATE_HISTORY') }}</span>
									</b-button>
									<b-button :class="{ 'active-btn': tabName === 'approve' }" @click="tabName = 'approve'">
										<i class="fas fa-check-circle" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_APPROVE') }}</span>
									</b-button>
									<b-button :class="{ 'active-btn': tabName === 'export' }" @click="tabName = 'export'">
										<i class="fas fa-file-download" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_EXPORT') }}</span>
									</b-button>
									<b-button :class="{ 'active-btn': tabName === 'confirm' }" @click="tabName = 'confirm'">
										<i class="fas fa-check-circle" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_CONFIRM') }}</span>
									</b-button>
									<b-button :class="{ 'active-btn': tabName === 'comment' }" @click="tabName = 'comment'">
										<i class="fas fa-comment-alt-dots" />
										<span>{{ $t('INCOME_STATEMENT.LABLE_COMMENT') }}</span>
									</b-button>
								</b-col>
							</b-row>
						</div>
					</template>
				</vCollapse>

				<div class="page-pl__content">
					<div class="display-table-pl">
						<b-table-simple
							:id="'table-pl'"
							:bordered="true"
						>
							<b-thead>
								<b-tr>
									<b-th :rowspan="2" class="th-type">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_TYPE') }}
									</b-th>
									<b-th :rowspan="2">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_CODE') }}
									</b-th>
									<b-th :rowspan="2" class="th-account-item">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_ACCOUNT_ITEM') }}
									</b-th>
									<b-th :colspan="2">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_PREDICTION') }}
									</b-th>
									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_BUDGET_COMPARISON') }}
									</b-th>
									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_YEAR_COMPARISON') }}
									</b-th>
									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_MONTH_COMPARISON') }}
									</b-th>
									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_TIME_COMPARISON') }}
									</b-th>
									<b-th :rowspan="2">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_NOTE') }}
									</b-th>
								</b-tr>
								<b-tr>
									<b-th style="top: 49.5px;">
										2021年12月予測
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_SALES_RATIO') }}
									</b-th>

									<b-th style="top: 49.5px;">
										2021年12月予測
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_SALES_RATIO') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_BUDGET_COMPARISON') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_BUDGET_RATIO') }}
									</b-th>

									<b-th style="top: 49.5px;">
										2020年12月仮締め
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_SALES_RATIO') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_COMPARE_SAME_MONTH_LAST_YEAR') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_YEAR_RATIO') }}
									</b-th>

									<b-th style="top: 49.5px;">
										2021年11月仮締め
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_SALES_RATIO') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_MONTH_COMPARISON') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_MONTH_RATIO') }}
									</b-th>

									<b-th style="top: 49.5px;">
										2021年12月1回目
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_SALES_RATIO') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_TIME_COMPARISON') }}
									</b-th>
									<b-th style="top: 49.5px;">
										{{ $t('INCOME_STATEMENT.TABLE_HEADER_LAST_MONTH_RATIO') }}
									</b-th>
								</b-tr>
							</b-thead>
							<b-tbody>
								<b-tr>
									<b-td :rowspan="CAR.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_CAR') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in CAR.length" :key="`car-tr-${tr + 1}`">
									<template v-for="td in 21">
										<b-td v-if="[16, 54, 55].includes(tr) && td === 1" :key="`car-tr-${tr + 1}-td-${td + 1}`" :colspan="2" class="highlight">
											<span>{{ CAR[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[16, 54, 55].includes(tr) && td >= 3" :key="`car-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>

										<b-td v-if="![16, 54, 55].includes(tr)" :key="`car-tr-${tr + 1}-td-${td + 1}`">
											<template v-if="td === 1">
												<span>{{ CAR[tr - 1]['code'] }}</span>
											</template>
											<template v-if="td === 2">
												<span>{{ CAR[tr - 1]['account_item'] }}</span>
											</template>
											<template v-if="![1, 2].includes(td)">
												<span> {{ randomNumber() }} </span>
											</template>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<b-td :rowspan="TRUCK.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_TRUCK') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in TRUCK.length" :key="`truck-tr-${tr + 1}`">
									<template v-for="td in 21">
										<b-td v-if="[2, 5, 6].includes(tr) && td === 1" :key="`truck-tr-${tr + 1}-td-${td + 1}`" :colspan="2" class="highlight">
											<span>{{ TRUCK[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[2, 5, 6].includes(tr) && td >= 3" :key="`truck-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>

										<b-td v-if="![2, 5, 6].includes(tr)" :key="`truck-tr-${tr + 1}-td-${td + 1}`">
											<template v-if="td === 1">
												<span>{{ TRUCK[tr - 1]['code'] }}</span>
											</template>
											<template v-if="td === 2">
												<span>{{ TRUCK[tr - 1]['account_item'] }}</span>
											</template>
											<template v-if="![1, 2].includes(td)">
												<span> {{ randomNumber() }} </span>
											</template>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<b-td :rowspan="CAR_GO.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_CAR_GO') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in CAR_GO.length" :key="`car-go-tr-${tr + 1}`">
									<template v-for="td in 21">
										<template v-if="tr === 1 && td === 1">
											<b-td :key="`car-go-tr-${tr + 1}-td-${td + 1}`" :rowspan="4">
												<span>{{ CAR_GO[tr]['code'] }}</span>
											</b-td>
										</template>
										<template v-if="[1, 2, 3, 4].includes(tr) && td === 2">
											<b-td :key="`car-go-tr-${tr + 1}-td-${td + 1}`">
												<span>{{ CAR_GO[tr - 1]['account_item'] }}</span>
											</b-td>
										</template>
										<template v-if="[1, 2, 3, 4].includes(tr) && td > 2">
											<b-td :key="`car-go-tr-${tr + 1}-td-${td + 1}`">
												<span> {{ randomNumber() }} </span>
											</b-td>
										</template>
										<b-td v-if="[5, 16, 17].includes(tr) && td === 1" :key="`truck-tr-${tr + 1}-td-${td + 1}`" :colspan="2" class="highlight">
											<span>{{ CAR_GO[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[5, 16, 17].includes(tr) && td >= 3" :key="`truck-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>
										<template v-if="![1, 2, 3, 4, 5, 16, 17].includes(tr)">
											<b-td :key="`general-tr-${tr + 1}-td-${td + 1}`">
												<template v-if="td === 1">
													<span>{{ CAR_GO[tr - 1]['code'] }}</span>
												</template>
												<template v-if="td === 2">
													<span>{{ CAR_GO[tr - 1]['account_item'] }}</span>
												</template>
												<template v-if="![1, 2].includes(td)">
													<span> {{ randomNumber() }} </span>
												</template>
											</b-td>
										</template>
									</template>
								</b-tr>

								<b-tr v-for="tr in OTHER.length" :key="`other-tr-${tr + 1}`">
									<template v-for="td in 22">
										<template v-if="tr === 9 && td === 1">
											<b-td :key="`other-tr-${tr + 1}-td-${td + 1}`" :colspan="3">
												<b-form-select v-model="selected" :options="options" />
											</b-td>
										</template>
										<template v-if="tr === 9 && td > 3">
											<b-td :key="`other-tr-${tr + 1}-td-${td + 1}`">
												<span> {{ randomNumber() }} </span>
											</b-td>
										</template>
										<template v-if="![9].includes(tr)">
											<template v-if="td === 1">
												<b-td :key="`other-tr-${tr + 1}-td-${td + 1}`" :colspan="3" :class="{ 'highlight': [1, 3, 7, 12].includes(tr) }">
													<span>{{ OTHER[tr - 1]['account_item'] }}</span>
												</b-td>
											</template>

											<template v-if="td > 3">
												<b-td :key="`other-tr-${tr + 1}-td-${td + 1}`">
													<span> {{ randomNumber() }} </span>
												</b-td>
											</template>
										</template>
									</template>
								</b-tr>

								<b-tr>
									<b-td :rowspan="GENERAL_COST.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_GENERAL_COST') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in GENERAL_COST.length" :key="`general-tr-${tr + 1}`">
									<template v-for="td in 21">
										<b-td v-if="[37].includes(tr) && td === 1" :key="`general-tr-${tr + 1}-td-${td + 1}`" :colspan="2" class="highlight">
											<span>{{ GENERAL_COST[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[37].includes(tr) && td >= 3" :key="`general-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>

										<b-td v-if="![37].includes(tr)" :key="`general-tr-${tr + 1}-td-${td + 1}`">
											<template v-if="td === 1">
												<span>{{ GENERAL_COST[tr - 1]['code'] }}</span>
											</template>
											<template v-if="td === 2">
												<span>{{ GENERAL_COST[tr - 1]['account_item'] }}</span>
											</template>
											<template v-if="![1, 2].includes(td)">
												<span> {{ randomNumber() }} </span>
											</template>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<template v-for="td in 22">
										<b-td v-if="td === 1" :key="`operating-income-td-${td + 1}`" :colspan="3" class="highlight">
											<span>営業利益</span>
										</b-td>

										<b-td v-if="td > 3" :key="`operating-income-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<b-td :rowspan="BUSSINESS_OUT.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_BUSSINES_OUT') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in BUSSINESS_OUT.length" :key="`bussines-tr-${tr + 1}`">
									<template v-for="td in 21">
										<b-td v-if="[1, 2, 3].includes(tr) && td === 1" :key="`bussines-tr-${tr + 1}-td-${td + 1}`" :colspan="2" :class="{ 'highlight': [3].includes(tr) }">
											<span>{{ BUSSINESS_OUT[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[1, 2, 3].includes(tr) && td >= 3" :key="`bussines-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>

										<b-td v-if="![1, 2, 3].includes(tr)" :key="`bussines-tr-${tr + 1}-td-${td + 1}`">
											<template v-if="td === 1">
												<span>{{ BUSSINESS_OUT[tr - 1]['code'] }}</span>
											</template>
											<template v-if="td === 2">
												<span>{{ BUSSINESS_OUT[tr - 1]['account_item'] }}</span>
											</template>
											<template v-if="![1, 2].includes(td)">
												<span> {{ randomNumber() }} </span>
											</template>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<template v-for="td in 22">
										<b-td v-if="td === 1" :key="`ordinary-profit-td-${td + 1}`" :colspan="3" class="highlight">
											<span>経常利益</span>
										</b-td>

										<b-td v-if="td > 3" :key="`ordinary-profit-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>
									</template>
								</b-tr>

								<b-tr>
									<b-td :rowspan="SPECIAL_BENEFIT.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_SPECIAL_BENEFIT') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in SPECIAL_BENEFIT.length" :key="`special-tr-${tr + 1}`">
									<template v-for="td in 21">
										<b-td v-if="[1, 2, 3].includes(tr) && td === 1" :key="`special-tr-${tr + 1}-td-${td + 1}`" :colspan="2" :class="{ 'highlight': [3].includes(tr) }">
											<span>{{ SPECIAL_BENEFIT[tr - 1]['account_item'] }}</span>
										</b-td>

										<b-td v-else-if="[1, 2, 3].includes(tr) && td >= 3" :key="`special-tr-${tr + 1}-td-${td + 1}`">
											<span> {{ randomNumber() }} </span>
										</b-td>

										<b-td v-if="![1, 2, 3].includes(tr)" :key="`special-tr-${tr + 1}-td-${td + 1}`">
											<template v-if="td === 1">
												<span>{{ SPECIAL_BENEFIT[tr - 1]['code'] }}</span>
											</template>
											<template v-if="td === 2">
												<span>{{ SPECIAL_BENEFIT[tr - 1]['account_item'] }}</span>
											</template>
											<template v-if="![1, 2].includes(td)">
												<span> {{ randomNumber() }} </span>
											</template>
										</b-td>
									</template>
								</b-tr>
							</b-tbody>
						</b-table-simple>
					</div>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import vStep from '@/components/atoms/vStep';
import vCollapse from '@/components/atoms/vCollapse';
import CONST_INCOMENT_STATEMENT from '@/const/income-statement';
import { randomNumber } from '@/utils/random';

export default {
    name: 'IncomeStateTableIndex',
    components: {
        vCollapse,
        vHeaderPage,
        vStep,
    },
    data() {
        return {
            randomNumber,

            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            steps: [
                this.$t('INCOME_STATEMENT.ONE_ST_PREDICTION'),
                this.$t('INCOME_STATEMENT.TWO_ND_PREDICTION'),
                this.$t('INCOME_STATEMENT.THREE_RD_PREDICTION'),
                this.$t('INCOME_STATEMENT.FOUR_TH_PREDICTION'),
                this.$t('INCOME_STATEMENT.CONFIRMED'),
            ],
            currentStep: 2,
            hasDescription: true,
            textNotDone: this.$t('INCOME_STATEMENT.DESCRIPTION_NOT_DONE'),
            textDone: this.$t('INCOME_STATEMENT.DESCRIPTION_DONE'),

            fuel_price: '',
            road_usage_discount_rate: '',

            tabName: 'edit',

            FilterColTable: {
                budget_comparison: true,
                last_year_comparison: true,
                last_month_comparison: true,
                last_time_comparison: true,
            },

            CAR: CONST_INCOMENT_STATEMENT['CAR'],
            TRUCK: CONST_INCOMENT_STATEMENT['TRUCK'],
            CAR_GO: CONST_INCOMENT_STATEMENT['CAR_GO'],
            GENERAL_COST: CONST_INCOMENT_STATEMENT['GENERAL_COST'],
            BUSSINESS_OUT: CONST_INCOMENT_STATEMENT['BUSSINESS_OUT'],
            SPECIAL_BENEFIT: CONST_INCOMENT_STATEMENT['SPECIAL_BENEFIT'],
            OTHER: CONST_INCOMENT_STATEMENT['OTHER'],

            selected: 1,
            options: [
                {
                    value: 1,
                    text: '法人税等充当額(ダイせー用)',
                },
                {
                    value: 2,
                    text: '法人税等充当額(社内用)',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);

    .page-pl {
        margin-top: 20px;

        &__step {
            position: relative;
            left: -40px;

            margin-top: 20px;
        }

        &__control {
            margin-top: 20px;

            .card {
                border: 1px solid $mystic;
                box-shadow: 0 0 37px rgba(8,21,66,0.05);
                -webkit-box-shadow: 0 0 37px rgba(8,21,66,0.05);

                margin-bottom: 10px;
            }

            .item-control {
                line-height: 75px;
                text-align: center;

                font-size: 1.2rem;
                font-weight: 600;

                span {
                    margin-left: 1rem;
                }
            }

            button {
                margin-top: 32px;
            }

            button.active-btn {
                background-color: $green-haze;
                border-radius: 0.25rem;

                color: $white;
            }
        }

        &__content {
            margin-top: 20px;
            .display-table-pl {
                overflow: auto;
                height: calc(100vh - 430px);

                table#table-pl {
                    thead {
                        position: sticky;
                        top: 0;

                        th {
                            text-align: center;
                            vertical-align: middle;

                            min-width: 100px;

                            background-color: $green-haze;
                            color: $white;
                        }

                        th.th-type {
                            width: 50px;
                            min-width: 50px;
                        }

                        th.th-account-item {
                            width: 150px;
                            min-width: 250px;
                        }
                    }

                    tbody {
                        tr {
                            &:hover {
                                td {
                                background-color: $green-haze !important;
                                color: $white;
                                }
                            }
                        }

                        td {
                            text-align: center;
                            vertical-align: middle !important;
                            padding: 0;
                        }

                        td.highlight {
                            background-color: $iceberg;
                        }
                    }
                }
            }
        }
    }
}
</style>
