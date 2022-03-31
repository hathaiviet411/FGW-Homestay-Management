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
				<vHeaderPage>{{ $t('PAGE_TITLE.PL_COMPARE') }}</vHeaderPage>
			</div>

			<div class="page-pl-comparison">

				<vCollapse style="margin-top: 20px;">
					<template #zone-collapse>
						<div class="page-pl-comparison__step">
							<vStep
								:steps="steps"
								:current-step="currentStep"
								:has-description="hasDescription"
								:text-not-done="textNotDone"
								:text-done="textDone"
							/>
						</div>
					</template>
				</vCollapse>

				<div class="page-pl-comparison__control" style="margin-top: 20px;">
					<vHeaderFilter>
						<template #zone-filter>
							<b-row>
								<b-col>
									<span class="text-all-department">{{ $t('INCOME_STATEMENT_COMPARISON.BUTTON_ALL_DEPARTMENT') }}</span>
									<span class="text-clear-all">{{ $t('INCOME_STATEMENT_COMPARISON.BUTTON_CLEAR_ALL') }}</span>

									<b-row style="margin-top: 10px">
										<b-col cols="6">
											<b-input-group class="filter-period">
												<b-input-group-prepend is-text>
													{{ $t('INCOME_STATEMENT_COMPARISON.LABLE_PERIOD') }}
												</b-input-group-prepend>
												<b-form-datepicker
													v-model="period.start"
													:locale="locale"
													:date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
													:label-no-date-selected="$t('INCOME_STATEMENT_COMPARISON.NO_DATE_SELECTED')"
												/>
												<b-input-group-prepend is-text>
													<b>~</b>
												</b-input-group-prepend>
												<b-form-datepicker
													v-model="period.end"
													:locale="locale"
													:date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
													:label-no-date-selected="$t('INCOME_STATEMENT_COMPARISON.NO_DATE_SELECTED')"
												/>
											</b-input-group>
										</b-col>
									</b-row>

									<div class="list-department">
										<b-form-checkbox-group
											v-model="selectDepartment"
											:options="listDepartment"
										/>
									</div>

									<b-button>{{ $t('INCOME_STATEMENT_COMPARISON.BUTTON_APPLY') }}</b-button>
								</b-col>
							</b-row>
						</template>
					</vHeaderFilter>
				</div>
				<div class="page-pl-comparison__content">
					<div class="display-table-pl">
						<b-table-simple
							:id="'table-pl'"
							:bordered="true"
						>
							<b-thead>
								<b-tr>
									<b-th :rowspan="2" class="th-type">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_TYPE') }}
									</b-th>

									<b-th :rowspan="2">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_CODE') }}
									</b-th>

									<b-th :rowspan="2" class="th-account-item">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_ACCOUNT_ITEM') }}
									</b-th>

									<b-th :colspan="2">
										{{ 'Tokyo' }}
									</b-th>

									<b-th :colspan="2">
										{{ 'Ha Noi' }}
									</b-th>

									<b-th :colspan="2">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_TOTAL') }}
									</b-th>

									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_BUDGET_COMPARISON') }}
									</b-th>

									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_LAST_YEAR_COMPARISON') }}
									</b-th>

									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_LAST_MONTH_COMPARISON') }}
									</b-th>

									<b-th :colspan="4">
										{{ $t('INCOME_STATEMENT_COMPARISON.TABLE_HEADER_LAST_TIME_COMPARISON') }}
									</b-th>
								</b-tr>
								<b-tr>
									<b-th style="top: 49.5px;">{{ '2021年12月予測' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予測' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予測' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予算' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>
									<b-th style="top: 49.5px;">{{ '予算対比' }}</b-th>
									<b-th style="top: 49.5px;">{{ '予算比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予算' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>
									<b-th style="top: 49.5px;">{{ '前年同月対比' }}</b-th>
									<b-th style="top: 49.5px;">{{ '予算比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予算' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>
									<b-th style="top: 49.5px;">{{ '前月対比' }}</b-th>
									<b-th style="top: 49.5px;">{{ '予算比(%)' }}</b-th>

									<b-th style="top: 49.5px;">{{ '2021年12月予算' }}</b-th>
									<b-th style="top: 49.5px;">{{ '売上比(%)' }}</b-th>
									<b-th style="top: 49.5px;">{{ '前月対比' }}</b-th>
									<b-th style="top: 49.5px;">{{ '予算比(%)' }}</b-th>
								</b-tr>
							</b-thead>
							<b-tbody>
								<b-tr>
									<b-td :rowspan="CAR.length + 1">{{ $t('INCOME_STATEMENT.TABLE_BODY_CAR') }}</b-td>
								</b-tr>
								<b-tr v-for="tr in CAR.length" :key="`car-tr-${tr + 1}`">
									<template v-for="td in 24">
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
									<template v-for="td in 24">
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
									<template v-for="td in 24">
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
									<template v-for="td in 25">
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
									<template v-for="td in 24">
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
									<template v-for="td in 25">
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
									<template v-for="td in 24">
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
									<template v-for="td in 25">
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
									<template v-for="td in 24">
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
import vHeaderFilter from '@/components/atoms/vHeaderFilter';
import CONST_INCOMENT_STATEMENT from '@/const/income-statement';
import { randomNumber } from '@/utils/random';

export default {
    name: 'IncomeStateComparisonTableIndex',
    components: {
        vCollapse,
        vHeaderPage,
        vStep,
        vHeaderFilter,
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
                this.$t('INCOME_STATEMENT_COMPARISON.ONE_ST_PREDICTION'),
                this.$t('INCOME_STATEMENT_COMPARISON.TWO_ND_PREDICTION'),
                this.$t('INCOME_STATEMENT_COMPARISON.THREE_RD_PREDICTION'),
                this.$t('INCOME_STATEMENT_COMPARISON.FOUR_TH_PREDICTION'),
                this.$t('INCOME_STATEMENT_COMPARISON.CONFIRMED'),
            ],
            currentStep: 2,
            hasDescription: true,
            textNotDone: this.$t('INCOME_STATEMENT_COMPARISON.DESCRIPTION_NOT_DONE'),
            textDone: this.$t('INCOME_STATEMENT_COMPARISON.DESCRIPTION_DONE'),

            selectDepartment: [],
            listDepartment: [
                {
                    text: 'Tokyo',
                    value: 1,
                },
                {
                    text: 'Ha Noi',
                    value: 2,
                },
                {
                    text: 'TP. Ho Chi Minh',
                    value: 3,
                },
            ],

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

            period: {
                start: '',
                end: '',
            },
        };
    },
    computed: {
        locale() {
            return this.$store.getters.language;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.content-page {
    min-height: calc(100vh - 90px);

    .page-pl-comparison {
        &__step {
            position: relative;
            left: -40px;

            margin-top: 20px;
        }

        &__control {
            margin-top: 20px;

            span.text-all-department {
                border-top: 1px solid $black;
                border-bottom: 1px solid $black;

                font-weight: 500;

                margin-bottom: 10px;

                cursor: pointer;
                margin-right: 20px;
            }

            span.text-clear-all {
                border-top: 1px solid $black;
                border-bottom: 1px solid $black;

                font-weight: 500;

                margin-bottom: 10px;

                cursor: pointer;
            }

            .list-department {
                margin-top: 10px;
                margin-bottom: 10px;
            }

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

        &__content {
            margin-top: 20px;
            .display-table-pl {
                overflow: auto;
                height: calc(100vh - 370px);

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
                            width: 250px;
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
