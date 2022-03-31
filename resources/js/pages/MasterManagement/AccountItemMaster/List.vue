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
					<b-table-simple
						id="table-account-item-master"
						:bordered="true"
					>
						<b-thead>
							<b-tr>
								<b-th class="th-type">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_TYPE') }}</b-th>
								<b-th class="th-code">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_CODE') }}</b-th>
								<b-th class="th-account-item">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_ACCOUNT_ITEM') }}</b-th>
								<b-th class="th-edit">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_HEADER_EDIT') }}</b-th>
							</b-tr>
						</b-thead>
						<b-tbody>
							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_CAR') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`car-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>

							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_TRUCK') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`truck-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>

							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_CAR_GO') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`car-go-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>

							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_GENERAL_CROS') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`general-cros-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>

							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_BUSINESS_OUTSITE') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`business-outside-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>

							<b-tr>
								<b-td :rowspan="TABLE_FAKE.length + 1">{{ $t('ACCOUNT_ITEM_MASTER.TABLE_BODY_SPECAL_BENIFIT') }}</b-td>
							</b-tr>
							<b-tr v-for="item in TABLE_FAKE" :key="`specal-benifit-${item.code}`">
								<b-td>{{ item['code'] }}</b-td>
								<b-td>{{ item['account_item'] }}</b-td>
								<b-td>
									<i class="fas fa-pencil-alt" @click="goToAccountItemMasterEdit(item['id'])" />
								</b-td>
							</b-tr>
						</b-tbody>
					</b-table-simple>
				</div>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';
import { validateNumberMoreThanZero } from '@/utils/validate';

const ROUTER = {
    ACCOUNT_ITEM_MASTER_EDIT: '/master-management/account-item-master/edit',
};

export default {
    name: 'AccountItemMasterList',
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

            TABLE_FAKE: [
                {
                    id: 1,
                    code: '001',
                    account_item: '001',
                },
                {
                    id: 2,
                    code: '002',
                    account_item: '001',
                },
                {
                    id: 3,
                    code: '003',
                    account_item: '001',
                },
                {
                    id: 4,
                    code: '004',
                    account_item: '001',
                },
                {
                    id: 5,
                    code: '005',
                    account_item: '001',
                },
            ],
        };
    },
    methods: {
        goToAccountItemMasterEdit(id) {
            if (validateNumberMoreThanZero(id)) {
                this.overlay.show = true;

                this.$router.push(`${ROUTER['ACCOUNT_ITEM_MASTER_EDIT']}/${id}`);

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

    .account-item-master {
        margin: 20px 0 20px 0;

        &__content {
            table {
                thead {
                    tr {
                        th {
                            background-color: $green-haze;
                            color: $white;
                            text-align: center;
                            vertical-align: middle;
                        }

                        th.th-type {
                            width: 50px;
                        }

                        th.th-code {
                            width: 150px;
                        }

                        th.th-edit {
                            width: 100px;
                        }
                    }
                }

                tbody {
                    tr {
                        td {
                            text-align: center;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
}
</style>
