import { createWebHistory, createRouter} from "vue-router"
import Home from '../components/Home.vue';
import Main from '../layouts/Main.vue';
import CardUpload from '../components/Cards/CardUpload.vue';
import Visualization from '../views/Visualization.vue';

const routes = [
	{
		// path: '/',
		// name: 'Home',
		// component: Home,

		path: '/',
		redirect: import.meta.env.VITE_PROD_BASE_URL + 'upload/',
		name: 'Main',
		component: Main,
		children: [
			{
				path: import.meta.env.VITE_PROD_BASE_URL + 'upload/',
				component: CardUpload
			},
			{
				path: import.meta.env.VITE_PROD_BASE_URL + 'visualization/',
				component: Visualization
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(), routes
});

export default router;