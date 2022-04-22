<template>
	<div class="border border-4 p-4 rounded-lg">
		<!-- Upload section start -->
		<DragDropFile />
	</div>
</template>

<script>
	import { defineComponent, ref } from 'vue';
	import axios from 'axios';

	import Toast from '../Core/Toast.vue';
	import DragDropFile from '../Core/DragDropFile.vue'

	export default defineComponent({
		name: 'CardUpload',
		components: {
			Toast,
			DragDropFile
		},
		data() {
			return {
				files: {
					'Pfizer': null,
					'Sinovac': null,
					'Astrazeneca': null,
					'Moderna': null
				},
				loading: false
			}
		},
	});
</script>