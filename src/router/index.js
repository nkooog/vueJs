import {createRouter, createWebHistory} from "vue-router";

import DashBoard from "@/components/dash/DashBoard.vue";
import Alerts from "@/components/support/Alerts.vue";

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		    path : '/dashBoard'
		,	name : 'DashBoard'
		,	component : DashBoard
	},
	{
		path : '/alerts'
		,	name : 'Alerts'
		,	component : Alerts
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes : routes
})

export default router