import axios from "axios";

export default {
	methods : {
		async $api(url, method, data) {
			console.log('axios call');
			return (await axios({
				method : method,
				url,
				data
			}).catch(e => {
				console.log(e)
			})).data;
		}
	}
}

