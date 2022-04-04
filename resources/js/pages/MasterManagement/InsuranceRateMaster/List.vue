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
					<div class="zone-change-history">
						<b-row>
							<b-col>
								<b-button>{{ $t('INSURANCE_RATE_MASTER.BUTTON_CHANGE_HISTORY') }}</b-button>
							</b-col>
						</b-row>
					</div>

					<div class="zone-table">
						<b-table
							:fields="fields"
							:items="items"
							:no-sort-reset="true"
							show-empty
							responsive
							bordered
						>
							<template #cell(edit)="data">
								<i class="fas fa-pencil-alt" @click="goToInsuranceRateMasterEdit(data.item.id)" />
							</template>
							<template #empty="">
								<span>{{ $t('TABLE.EMPTY') }}</span>
							</template>
						</b-table>
					</div>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import { validateNumberMoreThanZero } from '@/utils/validate';

const ROUTER = {
    INSURANCE_RATE_MASTER_EDIT: '/master-management/insurance-rate-master/edit',
};

export default {
    name: 'InsuranceRateMasterList',
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

            items: [
                {
                    id: 1,
                    kinds: '社会保険',
                    rate_name: '健康年金料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
                {
                    id: 2,
                    kinds: '社会保険',
                    rate_name: '厚生年金料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
                {
                    id: 3,
                    kinds: '社会保険',
                    rate_name: '児童拠出料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
                {
                    id: 4,
                    kinds: '社会保険',
                    rate_name: '介護保険料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
                {
                    id: 5,
                    kinds: '労働保険',
                    rate_name: '雇用料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
                {
                    id: 6,
                    kinds: '労働保険',
                    rate_name: '労災料率',
                    current: '0.04920',
                    change: '0.04920',
                    applicable_date: '2022-2',
                },
            ],
        };
    },
    computed: {
        fields() {
            return [
                { key: 'kinds', label: this.$t('INSURANCE_RATE_MASTER.KINDS') },
                { key: 'rate_name', label: this.$t('INSURANCE_RATE_MASTER.RATE_NAME') },
                { key: 'current', label: this.$t('INSURANCE_RATE_MASTER.CURRENT') },
                { key: 'change', label: this.$t('INSURANCE_RATE_MASTER.CHANGE') },
                { key: 'applicable_date', label: this.$t('INSURANCE_RATE_MASTER.APPLICABLE_DATE') },
                { key: 'edit', label: this.$t('INSURANCE_RATE_MASTER.EDIT') },
            ];
        },
    },
    methods: {
        goToInsuranceRateMasterEdit(id) {
            if (validateNumberMoreThanZero(id)) {
                this.overlay.show = true;

                this.$router.push(`${ROUTER['INSURANCE_RATE_MASTER_EDIT']}/${id}`);

                this.overlay.show = false;
            }
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
            .zone-change-history {
                margin-top: 20px;
                text-align: right;

                button {
                    min-width: 150px;
                    margin-bottom: 20px;
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

            .zone-table {
                ::v-deep table {
                    thead {
                        tr {
                            th {
                                text-align: center;
                                vertical-align: middle;
                                background-color: $golden-tainoi;
                                color: $white;
                            }
                        }
                    }

                    tbody {
                        tr {
                            td {
                                text-align: center;
                                vertical-align: middle;

                                i {
                                    &:hover {
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
