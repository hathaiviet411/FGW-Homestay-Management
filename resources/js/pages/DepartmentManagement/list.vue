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
					<v-col :cols="isMobileMode === true ? '12' : '10'">
						<v-card elevation="24" min-height="700">
							<v-card-title>
								<v-text-field
									v-model="search"
									append-icon="mdi-magnify"
									:label="$t('BUTTON.SEARCH')"
									single-line
									hide-details
								/>
							</v-card-title>

							<v-data-table
								:headers="headers"
								:items="items"
								:search="search"
								item-key="department_name"
								sort-by="department_name"
								:header-props="{
									sortByText: $t('BUTTON.SORT_BY'),
								}"
								:footer-props="{
									itemsPerPageText: $t('PAGINATION.DISPLAY_PER_PAGE'),
									itemsPerPageAllText: $t('PAGINATION.ALL'),
									itemsPerPageOption: [10, 20, 50, 100, -1]
								}"
							/>
						</v-card>
					</v-col>

					<v-col v-if="isMobileMode === false" cols="2">
						<v-card elevation="12" max-width="210px" class="mx-auto py-2 px-2" min-height="700">
							<v-img :src="link" class="mx-auto" />
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
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_NAME'), align: 'start', sortable: true, value: 'department_name' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_ADDRESS'), align: 'start', sortable: false, value: 'department_address' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.TOTAL_STAFF'), align: 'start', sortable: true, value: 'total_staff' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.DEPARTMENT_MANAGER'), align: 'start', sortable: false, value: 'department_manager' },
                { text: this.$t('DEPARTMENT_MANAGEMENT.ORGANIZED_DATE'), align: 'start', sortable: true, value: 'organized_date' },
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

            img_link: '',

            isMobileMode: false,

            language: this.$store.getters.language,
        };
    },
    created() {
        window.addEventListener('resize', this.handleResizeResolution);
        this.handleResizeResolution();
        this.getDepartmentList();
        this.randomSideImage();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResizeResolution);
    },
    methods: {
        getDepartmentList() {
            console.log('Get Department List');
        },

        randomSideImage() {
            this.link = require('@/assets/images/art' + Math.floor((Math.random() * 10) + 1) + '.png');
        },

        handleResizeResolution() {
            var clientWidth = window.innerWidth;

            if (clientWidth <= 768) {
                this.isMobileMode = true;
            } else {
                this.isMobileMode = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
  @import "@/scss/variables.scss";

  .department-management {
    max-height: 768px;
  }

  @media (max-width: 768px) {
    .department-management {
      max-height: 100%;
    }
  }
</style>
