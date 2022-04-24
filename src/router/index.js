import { createWebHistory, createRouter} from "vue-router"
import Home from '../components/Home.vue';
import Main from '../layouts/Main.vue';
import Session from '../layouts/Session.vue'
import CardUpload from '../components/Cards/CardUpload.vue';
import Visualization from '../views/Visualization.vue';

const routes = [
	{
		path: '/',
		redirect: '/upload/',
		name: 'Main',
		component: Main,
		children: [
			{
				path: '/upload/',
				component: CardUpload
			},
			{
				path: '/visualization/',
				component: Visualization
			}
		]
	},
	{
		path: '/session',
		name: 'Session',
		component: Session
	}
];

const router = createRouter({
	history: createWebHistory(), routes
});

export default router;