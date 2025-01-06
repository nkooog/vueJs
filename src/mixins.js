import axios from "axios";
import { reactive } from "vue";

export const store = reactive ({
	showLayout : false,
	alertVisible: false,
	message: '',
});

export default {
	methods : {}
}

