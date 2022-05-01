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
			<Tab v-for="tab, index in tabs" :key="index" :title="tab.charAt(0).toUpperCase() + tab.slice(1)" ref="tab">
				<CardLineChart ref="lineChart" :chartTitle="tab.charAt(0).toUpperCase() + tab.slice(1) + ' Vaccine Sentiment Trend'"/>
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

	export default defineComponent({
		name: 'TabsWrapper',
		components: {
			Tabs,
			Tab,
			CardLineChart
		},
		data() {
			let tabs = ["overall", "pfizer", "sinovac", "astrazeneca", "moderna"];

			let isFetchingData = false;

			return {
				tabs,
				isFetchingData
			}
		},
		methods: {
			async fetchData() {

				this.isFetchingData = true;

				let response = await axios.get(import.meta.env.VITE_DJANGO_BASE_URL + '/sentiment_trend/',
					{
						withCredentials: true
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

					let URI = chart.toBase64Image('image/jpeg', 1)
				
					var image = new Image()
					image.src = URI

					let filename = `${this.$refs.tab[index].title} Vaccine Sentiment Trend.jpeg`

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
					// console.log(response.data)

					let i = 0
					for (let key in response.data) {
						let labels = []
						let data = []

						let sentiments = response.data[key][0]

						for (let key2 in sentiments) {
							labels.push(key2)
							data.push(sentiments[key2])
						}

						this.$refs.lineChart[i].chartData.labels = labels
						this.$refs.lineChart[i].chartData.datasets[0].data = data

						sentiments = response.data[key][1]
						labels = []
						data = []

						for (let key2 in sentiments) {
							labels.push(key2)
							data.push(sentiments[key2])
						}

						this.$refs.lineChart[i].chartData.labels = labels
						this.$refs.lineChart[i].chartData.datasets[1].data = data
						i++

						this.isFetchingData = false
					}
				})
				.catch()
		}
	});
</script>