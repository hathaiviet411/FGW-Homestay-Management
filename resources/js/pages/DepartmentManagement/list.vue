<template>
	<div class="department-management">
		<v-app>
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

				<v-row class="my-3 mx-3">
					<v-col cols="12">
						<v-card elevation="24" min-height="700">
							<v-card-title>
								<v-row>
									<v-col lg="10" sm="12">
										<v-text-field
											v-model="search"
											append-icon="mdi-magnify"
											:label="$t('BUTTON.SEARCH')"
											single-line
											hide-details
										/>
									</v-col>

									<v-col lg="2" sm="12" class="text-center">
										<v-btn color="#1e2a55" dark class="mt-3">
											<span style="color: #FFFFFF;">{{ $t('DEPARTMENT_MANAGEMENT.NEW_DEPARTMENT') }}</span>
										</v-btn>
									</v-col>
								</v-row>
							</v-card-title>

							<v-data-table
								:headers="headers"
								:items="items"
								:search="search"
								item-key="department_name"
								sort-by="department_name"
								:header-props="{
									sortByText: $t('BUTTON.SORT_BY'),
									sortIcon: null,
								}"
								:footer-props="{
									itemsPerPageText: $t('PAGINATION.DISPLAY_PER_PAGE'),
									itemsPerPageAllText: $t('PAGINATION.ALL'),
									itemsPerPageOption: [10, 20, 50, 100, -1]
								}"
							/>
						</v-card>
					</v-col>
				</v-row>
			</b-overlay>
		</v-app>
	</div>
</template>

<script>
export default {
    name: 'DepartmentManagementList',
    data() {
        return {
            DepartmentList: [],

            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            headers: [
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_NAME') + ' ⇅', sortable: true, value: 'department_name' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_ADDRESS'), sortable: false, value: 'department_address' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.TOTAL_STAFF') + ' ⇅', sortable: true, value: 'total_staff' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_MANAGER'), sortable: false, value: 'department_manager' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.ORGANIZED_DATE') + ' ⇅', sortable: true, value: 'organized_date' },
            ],

            items: [
                {
                    department_id: 1,
                    department_name: 'Ban Lễ Tân',
                    department_address: 'Toà A, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Nguyễn Văn Cừ',
                    organized_date: '2020-01-01',
                },
                {
                    department_id: 2,
                    department_name: 'Ban Vệ Sinh',
                    department_address: 'Toà B, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Nguyễn Bảo Linh',
                    organized_date: '2020-01-01',
                },
                {
                    department_id: 3,
                    department_name: 'Ban Quản Lý',
                    department_address: 'Toà C, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Trần Thị Hồng Linh',
                    organized_date: '2020-01-01',
                },
                {
                    department_id: 4,
                    department_name: 'Ban Dịch Vụ',
                    department_address: 'Toà D, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Vũ Thu Thuỷ',
                    organized_date: '2020-01-01',
                },
                {
                    department_id: 5,
                    department_name: 'Ban Kỹ Thuật',
                    department_address: 'Toà E, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Nguyễn Thanh Hoàn',
                    organized_date: '2020-01-01',
                },
                {
                    department_id: 6,
                    department_name: 'Ban An Ninh',
                    department_address: 'Toà F, Tầng 1',
                    total_staff: 15,
                    department_manager: 'Nguyễn Văn Cừ',
                    organized_date: '2020-01-01',
                },
            ],

            search: '',

            language: this.$store.getters.language,
        };
    },
    created() {
        this.getDepartmentList();
    },
    methods: {
        getDepartmentList() {
            console.log('Get Department List');
        },
    },
};
</script>

<style lang="scss" scoped>
  @import "@/scss/variables.scss";

  .department-management {
    max-height: 768px;

    ::v-deep th {
      font-weight: bolder !important;
      color: $white !important;
      background-color: $cloud-burst;
    }

    ::v-deep th {
      text-align: center !important;
    }

    ::v-deep td {
      text-align: center !important;
    }
  }

  @media (max-width: 768px) {
    .department-management {
      max-height: 100%;
    }
  }
</style>
