<template>
	<div class="relative m-auto md:w-8/12 sm:w-4/5 py-4 space-y-4">
		<!-- Dashboard Header start -->
		<div class="relative p-4 border border-4 rounded-lg">
			<h1 class="text-4xl font-bold">Sentiment Analysis</h1>
			<p class="text-base font-normal">Visualizing The Public Perception of The COVID-19 Vaccine Brands Using
Positive-to-Negative Sentiment Ratio</p>
		</div>
		<!-- Dashboard Header end -->

		<!-- Breadcrumb start -->
		<Breadcrumbs />
		<!-- Breadcrumb end -->

		<!-- Upload Section start -->
		<router-view />
		<!-- Upload Section end -->
	</div>
	<FloatingButton @click="handleClick()" />
	<Popup ref="popup" />
</template>

<script>
	import { defineComponent, onBeforeMount } from 'vue';

	import Breadcrumbs from '../components/Core/Breadcrumbs.vue';
	import CardUpload from '../components/Cards/CardUpload.vue';
	import FloatingButton from '../components/Core/FloatingButton.vue';
	import Popup from '../components/Core/Popup.vue'

	export default defineComponent({
		name: 'Main',
		components: {
			Breadcrumbs,
			CardUpload,
			FloatingButton,
			Popup
		},
		setup() {
			onBeforeMount(() => {
				let rawCookies = document.cookie.split('; ')
				let cookies = {}

				rawCookies.forEach((item, index) => {
					let cookie = item.split('=')
					cookies[cookie[0]] = cookie[1]
				})
				
				if(!('sessionid' in cookies)) {
					window.location.replace(import.meta.env.VITE_CLIENT_BASE_URL + '/session')
				}	
			}) 
		},
		methods: {
			handleClick() {
				this.$refs.popup.show = true
			}
		}
	});
</script>

<style>
	.w-80vw {
		width: 80vw;
	}
</style>