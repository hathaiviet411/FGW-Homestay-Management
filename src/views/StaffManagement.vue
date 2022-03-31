<template>
	<b-card title="Create Awesome 🙌">
		<b-card-text>This is your second page.</b-card-text>

		<b-card-text>
			Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot
			cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart
			marzipan bonbon. Gingerbread jelly-o dragée chocolate.
		</b-card-text>

		<b-form-input v-model="Staff.user_id" placeholder="User ID" class="mt-1" />

		<b-form-input
			v-model="Staff.full_name"
			placeholder="Full name"
			class="mt-1"
		/>

		<b-form-input v-model="Staff.age" placeholder="Age" class="mt-1" />

		<b-form-input
			v-model="Staff.dob"
			placeholder="Date of birth"
			class="mt-1"
		/>

		<b-form-input
			v-model="Staff.position"
			placeholder="Position"
			class="mt-1"
		/>

		<b-form-input v-model="Staff.role" placeholder="Role" class="mt-1" />

		<b-form-input
			v-model="Staff.contract_type"
			placeholder="Contract Type"
			class="mt-1"
		/>

		<b-input-group
			class="input-group-merge"
		>
			<b-input-group-prepend is-text class="mt-1">
				<feather-icon
					class="cursor-pointer"
					icon="MapPinIcon"
				/>
			</b-input-group-prepend>
			<b-form-input
				v-model="Staff.email"
				placeholder="Email address"
				class="mt-1"
			/>
		</b-input-group>

		<b-input-group
			class="input-group-merge"
		>
			<b-input-group-prepend is-text class="mt-1">
				<b-icon icon="phone" />
			</b-input-group-prepend>
			<b-form-input
				v-model="Staff.phone_number"
				placeholder="Phone number"
				class="mt-1"
			/>
		</b-input-group>

		<b-input-group
			class="input-group-merge"
		>
			<b-input-group-prepend is-text class="mt-1">
				<b-icon icon="shield-lock-fill" />
			</b-input-group-prepend>
			<b-form-input v-model="Staff.address" placeholder="Address" class="mt-1" />
		</b-input-group>

		<b-input-group
			class="input-group-merge"
		>
			<b-input-group-prepend is-text class="mt-1">
				<feather-icon
					class="cursor-pointer"
					icon="MapPinIcon"
				/>
			</b-input-group-prepend>
			<b-form-input
				v-model="Staff.national_identification_number"
				placeholder="National Identification Number"
				class="mt-1"
			/>
		</b-input-group>

	</b-card>
</template>

<script>

export default {
    name: 'StaffManagementIndex',
    data() {
        return {
            Staff: {
                user_id: '',
                full_name: '',
                age: '',
                dob: '',
                position: '',
                role: '',
                contract_type: '',
                email: '',
                phone_number: '',
                address: '',
                national_identification_number: '',
            },
        };
    },
};
</script>

<style></style>
