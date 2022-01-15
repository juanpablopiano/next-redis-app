export const debouncex = func => {
	let timer;
	return (...args) => {
		const context = this;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			func.apply(context, args);
		}, 500);
	};
};

export function debounce(func, wait) {
	let timer;
	return function (...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => func(...args), wait);
	};
}
