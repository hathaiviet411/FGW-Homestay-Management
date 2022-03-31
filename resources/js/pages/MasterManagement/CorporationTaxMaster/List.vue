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
					<b-table
						:fields="fields"
						:items="items"
						:no-sort-reset="true"
						show-empty
						responsive
						bordered
					>
						<template #head(edit)>
							{{ $t('CORPORATION_TAX_MASTER.EDIT') }}
						</template>
						<template #cell(edit)="data">
							<i class="fas fa-pencil-alt" @click="goToCorporationTaxMasterEdit(data.item.id)" />
						</template>
						<template #empty="">
							<span>{{ $t('TABLE.EMPTY') }}</span>
						</template>
					</b-table>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import { validateNumberMoreThanZero } from '@/utils/validate';

const ROUTER = {
    CORPORATION_TAX_MASTER_EDIT: '/master-management/corporation-tax-master/edit',
};

export default {
    name: 'CorporationTaxMasterList',
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
                    corporate_tax_rate_name: 'ダイセー用法人税率',
                    user_id: 34,
                },
                {
                    id: 2,
                    corporate_tax_rate_name: '社内用法人税率',
                    user_id: 20,
                },
            ],
        };
    },
    computed: {
        fields() {
            return [
                { key: 'corporate_tax_rate_name', label: this.$t('CORPORATION_TAX_MASTER.CORPORATE_TAX_RATE_NAME') },
                { key: 'user_id', label: this.$t('CORPORATION_TAX_MASTER.USER_ID') },
                { key: 'edit', label: '' },
            ];
        },
    },
    methods: {
        goToCorporationTaxMasterEdit(id) {
            if (validateNumberMoreThanZero(id)) {
                this.overlay.show = true;

                this.$router.push(`${ROUTER['CORPORATION_TAX_MASTER_EDIT']}/${id}`);

                this.overlay.show = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';
.corporation-tax-master {
    &__content {
        margin: 0 auto;

        margin-top: 20px;

        ::v-deep table {
            thead {
                tr {
                    th {
                        text-align: center;
                        vertical-align: middle;
                        background-color: $green-haze;
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
</style>
