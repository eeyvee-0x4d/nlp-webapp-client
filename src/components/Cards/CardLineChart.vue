<template>
	<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-ld rounded-lg">
		<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-grow flex-1">
					<h2 class=" text-base font-bold">
						{{ chartTitle }}
					</h2>
				</div>
			</div>
		</div>
		<div class="px-4 flex-auto">
			<div class="relative h-350-px">
				<LineChart :chartData="chartData" :plugins="[plugin]" />
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import { Chart, registerables} from 'chart.js';
	import { LineChart } from 'vue-chart-3';

	import axios from 'axios';

	Chart.register(...registerables);

	export default defineComponent({
		name: 'CardLineChart',
		components: {
			LineChart
		},
		props: {
			chartTitle: { type: String, default: "Line Chart"}
		},
		data() {
			const chartData = {
				labels: [],
				datasets: [
					{
						label: 'Positive',
					    data: [],
					    fill: false,
					    backgroundColor: "#66bd63",
					    borderColor: "#66bd63",
					    tension: 0.5
					},
					{
						label: 'Negative',
					    data: [],
					    fill: false,
					    backgroundColor: "#f46d43",
					    borderColor: "#f46d43",
					    tension: 0.5
					},
				],
				options: {
					maintainAspectRatio: true,
					responsive: true,
					tooltips: {
						mode: "index",
						intersect: false
					},
					hover: {
						mode: "nearest",
						intersect: true
					},
				},
			};

			const plugin = {
				id: 'custom_canvas_background_color',
				beforeDraw: (chart) => {
					const ctx = chart.canvas.getContext('2d')
					ctx.save()
					ctx.globalCompositeOperation = 'destination-over'
					ctx.fillStyle = '#ffffff'
					ctx.fillRect(0, 0, chart.width, chart.height);
					ctx.restore()

				}
			}


			return {
				chartData,
				plugin
			};
		}

	});
</script>