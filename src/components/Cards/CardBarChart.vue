<template>
	<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-ld rounded-lg divide-y divide-solid">
		<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-grow flex-1 flex flex-row justify-between">
					<h2 class=" text-base font-bold">
						{{ chartTitle }}
					</h2>
					<a @click="handleClick(this)" class="">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
					</a>
				</div>
			</div>
		</div>
		<div class="px-4 flex-auto">
			<div class="relative h-350-px">
				<div v-if="fetchingData" class="m-auto text-center font-bold text-base">
					<svg role="status" class="inline mr-2 w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
					<span>
						Loading data...
					</span>
				</div>
				<div v-else>
					<div class="flex flex-auto py-4 place-content-evenly divide-x">
						<div class="relative px-2">
							<p class="text-base font-bold text-left"> Overall </p>
							<p class="text-sm text-left"> Positive sentiments: <br/> <strong> {{ dataSummary.Overall[0] }} ({{ dataSummary.Overall[1] }}%)</strong> </p>
							<p class="text-sm text-left"> Negative sentiments: <br/> <strong> {{ dataSummary.Overall[2] }} ({{ dataSummary.Overall[3] }}%)</strong> </p>
						</div>
						<div class="relative px-2">
							<p class="text-base font-bold text-left"> Pfizer </p>
							<p class="text-sm text-left"> Positive sentiments: <br/> <strong> {{ dataSummary.Pfizer[0] }} ({{ dataSummary.Pfizer[1] }}%) </strong> </p>
							<p class="text-sm text-left"> Negative sentiments: <br/> <strong> {{ dataSummary.Pfizer[2] }} ({{ dataSummary.Pfizer[3] }}%) </strong> </p>						
						</div>
						<div class="relative px-2">
							<p class="text-base font-bold text-left"> Sinovac </p>
							<p class="text-sm text-left"> Positive sentiments: <br/> <strong>{{ dataSummary.Sinovac[0] }} ({{ dataSummary.Sinovac[1] }}%) </strong> </p>
							<p class="text-sm text-left"> Negative sentiments: <br/> <strong>{{ dataSummary.Sinovac[2] }} ({{ dataSummary.Sinovac[3] }}%) </strong> </p>						
						</div>
						<div class="relative px-2">
							<p class="text-base font-bold text-left"> Astrazeneca </p>
							<p class="text-sm text-left"> Positive sentiments: <br/> <strong> {{ dataSummary.Astrazeneca[0] }} ({{ dataSummary.Astrazeneca[1] }}%) </strong> </p>
							<p class="text-sm text-left"> Negative sentiments: <br/> <strong> {{ dataSummary.Astrazeneca[2] }} ({{ dataSummary.Astrazeneca[3] }}%) </strong> </p>
						</div>
						<div class="relative px-2">
							<p class="text-base font-bold text-left"> Moderna </p>
							<p class="text-sm text-left"> Positive sentiments: <br/> <strong> {{ dataSummary.Moderna[0] }} ({{ dataSummary.Moderna[1] }}%) </strong> </p>
							<p class="text-sm text-left"> Negative sentiments: <br/> <strong> {{ dataSummary.Moderna[2] }} ({{ dataSummary.Moderna[3] }}%) </strong> </p>
						</div>
					</div>
					<BarChart id="barChart" :chartData="chartData"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import { Chart, registerables } from "chart.js";
	import { BarChart } from 'vue-chart-3';

	import axios from 'axios';

	Chart.register(...registerables);

	export default defineComponent({
		name: 'CardBarChart',
		components: {
			BarChart,
		},
		props: {
			chartTitle: { type: String, default: 'Chart Title'}
		},
		methods: {
			async fetchData() {
				this.fetchingData = true

				let response = await axios.get(import.meta.env.VITE_DJANGO_BASE_URL + '/sentiment_overview/',
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
				let chart = Chart.getChart('bar-chart')
				chart.ctx.fillStyle = "#ffffff"
				const URI = chart.toBase64Image('image/png', 1)
				
				var image = new Image()
				image.src = URI

				var link = document.createElement("a");
			    document.body.appendChild(link);
				link.setAttribute("href", URI);
		        link.setAttribute("download", 'Vaccine Sentiments.png');
		        link.click();			
		    }
		},
		data() {
			const chartData = {
				labels: [],
				datasets: [
					{
						label: "Positive",
						backgroundColor: "#66bd63",
						borderColor: "#66bd63",
						barThickness: 40,
						fill: false,
						data: []
					},
					{
						label: "Negative",
						backgroundColor: "#f46d43",
						borderColor: "#f46d43",
						barThickness: 40,
						fill: false,
						data: []
					},
				],
				options: {
					maintainAspectRatio: false,
					responsive: true,
					tooltips: {
						mode: "index",
						intersect: false
					},
					hover: {
						mode: "nearest",
						intersect: true
					},
					animation: {
						onComplete: function() {
							console.log("Hello")						
						}
					},
				},
				plugins: [
					{
						id: 'custom_canvas_background_color',
						beforeDraw: (chart) => {
							const ctx = chart.canvas.getContext('2d');
						    ctx.save();
						    ctx.fillStyle = 'lightGreen'
						    ctx.restore()
						}
					}
				]
			};

			let dataSummary ={
				'Overall': [],
				'Pfizer': [],
				'Sinovac': [],
				'Astrazeneca': [],
				'Moderna': []
			}

			let fetchingData = false;

			return {
				chartData,
				fetchingData,
				dataSummary
			};
		},
		mounted() {
			this.fetchData()
				.then(response => {
					// console.log(response)

					// this.chartData = {
					// 	labels: [],
					// 	datasets: [
					// 		{
					// 			label: "Positive",
					// 			data: []
					// 		},
					// 		{
					// 			label: "Negative",
					// 			data: []
					// 		}
					// 	]
					// };

					for (let key in response.data) {
						this.chartData.labels.push(key)
						this.chartData.datasets[0].data.push(response.data[key].positive)
						this.chartData.datasets[1].data.push(response.data[key].negative)

						let posPercentage = ((response.data[key].positive / (response.data[key].positive + response.data[key].negative)) * 100).toFixed(2);
						let negPercentage = ((response.data[key].negative / (response.data[key].positive + response.data[key].negative)) * 100).toFixed(2);

						this.dataSummary[key] = [response.data[key].positive, posPercentage, response.data[key].negative, negPercentage]
					}

					// response.data.forEach(item => {
						
					// 	if(item.sentiments !== null) {
					// 		this.chartData.labels.push((item.name.charAt(0).toUpperCase() + item.name.slice(1)))
					// 		this.chartData.datasets[0].data.push(item.sentiments[0]['positive'])
					// 		this.chartData.datasets[1].data.push(item.sentiments[0]['negative'])

					// 		let posPercentage = ((item.sentiments[0]['positive'] / (item.sentiments[0]['positive'] + item.sentiments[0]['negative'])) * 100).toFixed(2);
					// 		let negPercentage = ((item.sentiments[0]['negative'] / (item.sentiments[0]['positive'] + item.sentiments[0]['negative'])) * 100).toFixed(2);

					// 		this.dataSummary[item.name] = [posPercentage, negPercentage];
					// 	}
					// 	else {
					// 		this.chartData.labels.push((item.name.charAt(0).toUpperCase() + item.name.slice(1)))
					// 		this.chartData.datasets[0].data.push(0)
					// 		this.chartData.datasets[1].data.push(0)

					// 		this.dataSummary[item.name] = [null, null];
					// 	}
					// });
				
					this.fetchingData = false
				})
				.catch()
		}
	});
</script>