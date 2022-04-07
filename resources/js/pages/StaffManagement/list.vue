<template>
	<div class="staff-management">
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
								item-key="staff_name"
								sort-by="staff_name"
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
						<v-card elevation="12" max-width="210px" class="mx-auto py-2 px-2" max-height="700">
							<v-img :src="link" class="mx-auto" min-height="100%" />
						</v-card>
					</v-col>
				</v-row>
			</b-overlay>

		</v-app>
	</div>
</template>

<script>
export default {
    name: 'StaffManagementList',
    data() {
        return {
            StaffList: [],

            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            headers: [
                { text: this.$t('STAFF_MANAGEMENT.STAFF_CODE'), align: 'start', sortable: true, value: 'staff_code' },
                { text: this.$t('STAFF_MANAGEMENT.FULL_NAME'), align: 'start', sortable: true, value: 'full_name' },
                { text: this.$t('STAFF_MANAGEMENT.EMAIL'), align: 'start', sortable: false, value: 'email' },
                { text: this.$t('STAFF_MANAGEMENT.DOB'), align: 'start', sortable: true, value: 'dob' },
                { text: this.$t('STAFF_MANAGEMENT.PARTICIPATED_DATE'), align: 'start', sortable: true, value: 'participated_date' },
                { text: this.$t('STAFF_MANAGEMENT.DEPARTMENT'), align: 'start', sortable: true, value: 'department' },
                { text: this.$t('STAFF_MANAGEMENT.ROLE'), align: 'start', sortable: true, value: 'role' },
                { text: this.$t('STAFF_MANAGEMENT.POSITION'), align: 'start', sortable: true, value: 'position' },
                { text: this.$t('STAFF_MANAGEMENT.CONTRACT_TYPE'), align: 'start', sortable: true, value: 'contract_type' },
                { text: this.$t('STAFF_MANAGEMENT.ADDRESS'), align: 'start', sortable: true, value: 'address' },
                { text: this.$t('STAFF_MANAGEMENT.PHONE_NUMBER'), align: 'start', sortable: false, value: 'phone_number' },
                { text: this.$t('STAFF_MANAGEMENT.IS_RETIRED'), align: 'start', sortable: true, value: 'is_retired' },
            ],

            items: [
                {
                    staff_code: 123124,
                    full_name: 'Nguyễn Văn Cừ',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban Lễ Tân',
                    role: 'Nhân viên',
                    position: 'Nhân viên lễ tân',
                    contract_type: 'Hợp đồng chính thức',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đang làm việc',
                },
                {
                    staff_code: 789124,
                    full_name: 'Nguyễn Bảo Linh',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban vệ sinh',
                    role: 'Nhân viên',
                    position: 'Nhân viên vệ sinh phòng',
                    contract_type: 'Hợp đồng bán thời gian',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đã nghĩ việc',
                },
                {
                    staff_code: 123612,
                    full_name: 'Nguyễn Văn Cừ',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban Lễ Tân',
                    role: 'Nhân viên',
                    position: 'Nhân viên lễ tân',
                    contract_type: 'Hợp đồng chính thức',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đang làm việc',
                },
                {
                    staff_code: 612442,
                    full_name: 'Nguyễn Bảo Linh',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban vệ sinh',
                    role: 'Nhân viên',
                    position: 'Nhân viên vệ sinh phòng',
                    contract_type: 'Hợp đồng bán thời gian',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đã nghĩ việc',
                },
                {
                    staff_code: 973123,
                    full_name: 'Nguyễn Văn Cừ',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban Lễ Tân',
                    role: 'Nhân viên',
                    position: 'Nhân viên lễ tân',
                    contract_type: 'Hợp đồng chính thức',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đang làm việc',
                },
                {
                    staff_code: 512372,
                    full_name: 'Nguyễn Bảo Linh',
                    email: 'Toà A, Tầng 1',
                    dob: '2020-01-01',
                    participated_date: '2020-01-01',
                    department: 'Ban vệ sinh',
                    role: 'Nhân viên',
                    position: 'Nhân viên vệ sinh phòng',
                    contract_type: 'Hợp đồng bán thời gian',
                    address: 'Thành Phố A, Tỉnh B, Tổ dân phố C, Số nhà D',
                    phone_number: '0987654321',
                    is_retired: 'Đã nghĩ việc',
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

        this.getStaffList();

        this.randomSideImage();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResizeResolution);
    },
    methods: {
        getStaffList() {
            console.log('Get Staff List');
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
</style>
