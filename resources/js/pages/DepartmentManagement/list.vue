<template>
	<div>
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

			<div class="department-management-content">
				<span>Department Management</span>
			</div>
		</b-overlay>
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
</style>
