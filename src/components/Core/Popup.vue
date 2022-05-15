<template>
	<div v-if="show" class="flex flex-col bg-gray-600 max-w-xs p-4 fixed bottom-4 right-4 border rounded-lg shadow-lg text-sm text-white">
		<button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-gray-600 text-white-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" data-collapse-toggle="toast-success" aria-label="Close" @click="handleClose()">
	        <span class="sr-only">Close</span>
	        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
	    </button>
		<p>Recommended Resources</p>
		<br>
		<ul class="list-decimal list-inside">
			<li><a class="hover:underline" href="https://rapidminer.com" target="_blank">Rapid Miner - Tool for Data Science</a></li>
			<li><a class="hover:underline" href="https://www.kaggle.com" target="_blank">Kaggle.com - Public datasets</a></li>
			<li><a class="hover:underline" href="https://github.com/eeyvee-0x4d/cs-thesis" target="_blank">Other datasets</a></li>
		</ul>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'

	export default defineComponent({
		name: 'Popup',
		data() {
			return {
				show: false
			}
		},
		methods: {
			handleClose() {
				this.show = false
			}
		}
	})
</script>