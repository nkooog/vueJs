import {createRouter, createWebHistory} from "vue-router";

import {store} from "@/mixins.js";
import DashBoard from "@/components/dash/DashBoard.vue";
import Login from "@/components/login/Login.vue";
import axios from "axios";
import Accordion from "@/components/sample/Accordion.vue";

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		    path : '/dashBoard'
		,	name : 'DashBoard'
		,	component : DashBoard
		,	meta: { requiresAuth: true }
	},
	{
		path : '/accordion'
		,	name : 'Accordion'
		,	component : Accordion
		,	meta: { requiresAuth: true }
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { layout : 'no-layout'}
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes : routes
});


router.beforeEach((to, from, next) => {

	if (to.name === 'Login') {
		store.showLayout = false;
		next();
		return;
	}

	axios.post('/bcs/frme/sessionCheck', null).then((res) => {
		const result = res.data.result;
		if(result == 0 ) {
			store.showLayout = false;
			next({name : 'Login'});
		}else{
			store.showLayout = true;
			next();
		}
	}).catch((error) => {
		console.log(error);
	});
});

export default router