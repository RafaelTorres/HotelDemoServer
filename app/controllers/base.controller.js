class BaseController {

	checkParams(params, whitelist) {
		if(typeof params === 'undefined') {
			return {};
		}

		let filtered = {};

		if (Array.isArray(params)) {
			filtered = params.map( (param) => {
				return this.filterParams(param, whitelist);
			});
		}else{
			filtered = this.filterParams(params, whitelist);
		}

		return filtered;
	}

	filterParams(params, whitelist) {
		const filtered = {};
		for (const key in params) {
			if (whitelist.indexOf(key) > -1) {
				filtered[key] = params[key];
			}
		}
		return filtered;
	}


	formatApiResponse(data, message = 'Success', status = 200) {
		return {
			status_code: status,
			message: message,
			data: data,
		};
	}

	formatApiError(err) {
		if (!err) {
			// eslint-disable-next-line no-console
			return console.error('Provide an error');
		}

		const formatted = {
			message: err.message,
		};

		if (err.errors) {
			formatted.errors = {};
			const errors = err.errors;
			for (const type in errors) {
				if (errors.hasOwnProperty(type)) {
					formatted.errors[type] = errors[type].message;
				}
			}
		}

		return formatted;
	}
}

export default BaseController;
