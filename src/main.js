import { createApp } from 'vue'
import App from './App.vue'
import mixins from "@/mixins.js";
import router from "@/router/index.js";

createApp(App)
	.use(router)
	.use(mixins)
	.mount('#app')


