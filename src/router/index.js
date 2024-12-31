import {createRouter, createWebHistory} from "vue-router";

import DashBoard from "@/components/dash/DashBoard.vue";
import Login from "@/components/login/Login.vue";

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
	const isAuthenticated = !!localStorage.getItem('user'); // 예: 로컬 스토리지에 사용자 정보 저장
	if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
		console.log('ttt');
		next({ name: 'Login' });
	} else {
		next();
	}
});

export default router