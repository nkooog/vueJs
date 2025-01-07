import axios from "axios";
import { reactive } from "vue";

export const store = reactive ({
	showLayout : false,
	alertVisible: false,
	message: '',
	user : JSON.parse(sessionStorage.getItem('user')),
});

export default {
	methods : {}
}

