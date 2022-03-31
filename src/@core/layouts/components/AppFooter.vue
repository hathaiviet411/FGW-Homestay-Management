<template>
	<p class="clearfix mb-0">
		<span class="float-md-left d-block d-md-inline-block mt-25">
			COPYRIGHT  © {{ new Date().getFullYear() }}
			<b-link
				class="ml-25"
				href="#"
			>
				<span>HSIMS</span>
			</b-link>
			<span class="d-none d-sm-inline-block">, GCH18846 - FGW - Final Project</span>
		</span>

		<span class="float-md-right d-none d-md-block">hathaiviet411@gmail.com
			<feather-icon
				icon="MailIcon"
				size="21"
				class="text-danger stroke-current"
			/>
		</span>
	</p>
</template>

<script>
import { BLink } from 'bootstrap-vue';

export default {
    components: {
        BLink,
    },
};
</script>
