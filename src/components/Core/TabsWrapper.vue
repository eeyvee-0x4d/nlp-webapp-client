<template>
	<div>
		<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-grow flex-1 flex flex-row justify-between">
					<h2 class=" text-base font-bold">
						Sentiments over time
					</h2>
					<a @click="handleClick(this)" class="">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
					</a>
				</div>
			</div>
		</div>
		<Tabs>
			<Tab v-for="tab, index in tabs" :key="index" :title="tab.charAt(0).toUpperCase() + tab.slice(1)" ref="tab" class="mb-4">
				<div v-if="isFetchingData" class="m-auto text-center font-bold text-base">
					<svg role="status" class="inline mr-2 w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
					<span>
						Loading data...
					</span>
				</div>			
 				<CardLineChart v-else ref="lineChart" :chartTitle="tab.charAt(0).toUpperCase() + tab.slice(1) + ' Vaccine Sentiment Trend'"/>
			</Tab>
		</Tabs>
	</div>
</template>

<script>
	import Tabs from './Tabs.vue';
	import Tab from './Tab.vue';
	import CardLineChart from '../Cards/CardLineChart.vue'

	import axios from 'axios';

	import { defineComponent, ref } from 'vue';
	import { Chart } from 'chart.js'
	import { LineChart } from 'vue-chart-3';

	export default defineComponent({
		name: 'TabsWrapper',
		components: {
			Tabs,
			Tab,
			CardLineChart,
			LineChart
		},
		data() {
			let tabs = ["Overall", "Pfizer", "Sinovac", "Astrazeneca", "Moderna"];

			let isFetchingData = false;

			return {
				tabs,
				isFetchingData,
			}
		},
		methods: {
			async fetchData() {

				this.isFetchingData = true;

				let sessionId = localStorage.getItem('sessionid')

				let response = await axios.get(import.meta.env.VITE_DJANGO_BASE_URL + '/sentiment_trend/',
					{
						withCredentials: true,
						params: {
							sessionid: sessionId
						}
					}
				)

				if (response.statusText !== "OK") {
						throw new Error(`HTTP error! status: ${response.status}`)
					};

				return await response;
			},
			handleClick(el) {
				let linecharts = document.querySelectorAll('#line-chart')
				
				linecharts.forEach((item, index) => {

					let chart = Chart.getChart(item)

					let URI = chart.toBase64Image('image/png', 1)
				
					var image = new Image()
					image.src = URI

					let filename = `${this.$refs.tab[index].title} Vaccine Sentiment Trend.png`

					var link = document.createElement("a");
					document.body.appendChild(link);
					link.setAttribute("href", URI);
					link.setAttribute("download", filename);
					link.click();
				})
			}
		},
		mounted() {
			this.fetchData()
				.then(response => {

					let i = 0
					for (let key in response.data) {
					
						let labels = []
						let positive_sentiments = []
						let negative_sentiments = []

						let sentiments = response.data[key][0]

						for (let key2 in sentiments) {
							labels.push(key2)
							positive_sentiments.push(sentiments[key2])
						}

						sentiments = response.data[key][1]

						for (let key3 in sentiments) {
							negative_sentiments.push(sentiments[key3])
						}

						this.$refs.lineChart[i].chartData.labels = labels
						this.$refs.lineChart[i].chartData.datasets[0].data = positive_sentiments
						this.$refs.lineChart[i].chartData.datasets[1].data = negative_sentiments

						i++
					}

				})
				.catch()

				this.isFetchingData = false

				// let linecharts = document.querySelectorAll('#line-chart')

				// const chart = Chart.getChart(linecharts[0])
				// chart.data.datasets[0] = [50, 50,50,50,50,50,50]
				// chart.update()
				// console.log(chart.data)
		}
	});
</script>