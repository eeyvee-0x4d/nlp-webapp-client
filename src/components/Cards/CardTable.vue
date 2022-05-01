<template>
	<div class="relative w-full p-4">
		<div class="rounded-t mb-0 bg-transparent">
			<div class="flex flex-wrap items-center">
				<div class="relative pb-4 w-full max-w-full flex-grow flex-1 flex flex-row justify-between">
					<h2 class=" text-base font-bold">
						{{ title }}
					</h2>
					<a @click="handleClick($event)" class="">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
					</a>
				</div>
			</div>
		</div>
		<div class="max-h-96 overflow-auto">
			<table class="w-full table-auto text-left text-sm">
				<!-- start table header -->
				<thead class="text-center">
					<tr>
						<th>Data</th>
						<th>Tweet</th>
						<th>Brand</th>
						<th>Sentiment</th>
					</tr>				
				</thead>
				<!-- end table header -->
				<!-- start table body -->
				<tbody class="">
					<tr v-for="item, index in data">
						<td>{{ item['Created-At'] }}</td>
						<td>{{ item['Text'] }}</td>
						<td>{{ item['Brand'] }}</td>
						<td>{{ (item['Sentiment'] === 1) ? "Positive" : "Negative" }}</td>
					</tr>
				</tbody>
				<!-- end table body -->
				<!-- start table footer -->
				<tfoot>
					
				</tfoot>
				<!-- end table footer -->
			</table>
		</div>
		<div class="py-2 flex justify-end">
			<button class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center" @click="loadMore($event)">
				Load more
			</button>
		</div>
	</div>
</template>

<script>
	import { defineComponent, ref } from "vue";

	import axios from 'axios';

	export default defineComponent({
		name: 'CardTable',
		components: {
		},
		props: {
			title: { type: String, dafault: "Title"}
		},
		methods: {
			async fetchData() {
				let response = await axios.get(import.meta.env.VITE_DJANGO_BASE_URL + '/all_data/', 
					{
						withCredentials: true,
						params: {
							page_number: this.page_number++,
							page_size: this.page_size
						}
					}
				)

				if (response.statusText !== "OK") {
						throw new Error(`HTTP error! status: ${response.status}`)
					};

				return await response;
			},
			async export_file() {
				let response = await axios.get(import.meta.env.VITE_DJANGO_BASE_URL + '/export_file',
					{
						withCredentials: true,		
					}
				)

				if (response.statusText !== "OK") {
						throw new Error(`HTTP error! status: ${response.status}`)
					};

				return await response;
			},
			handleClick() {
				// this.export_file()
				// .then((response) => {
				// 	console.log(response)
				// })
				// .catch()
				var link = document.createElement("a");
			    document.body.appendChild(link);
				link.setAttribute("href",import.meta.env.VITE_DJANGO_BASE_URL + '/export_file');
		        link.setAttribute("download", 'Vaccine Sentiments.csv');
		        link.click();
			},
			loadMore() {
				this.fetchData()
				.then((response) => {
					// this.data = Object.assign(this.data, JSON.parse(response.data))
					this.data = {
						...this.data,
						...JSON.parse(response.data)
					}
					console.log(this.data)
				})
				.catch()
			}
		},
		data() {
			return {
				data: {},
				page_number: 1,
				page_size: 20
			}
		},
		beforeMount() {
			this.fetchData()
				.then((response) => {
					this.data = (JSON.parse(response.data))
					// console.log(this.data)
				})
				.catch()
		},
		mounted() {
			// this.fetchData()
			// 	.then((response) => {
			// 		// console.log(response)
			// 	})
			// 	.catch()
		}
	});
	
</script>

<style>
	th {
		border:  1px solid #ddd;
		padding: .5rem;
	}

	td {
		border:  1px solid #ddd;
		padding: 0.5rem;
	}
</style>