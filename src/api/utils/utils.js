export function flattenMessages(nestedMessages, prefix = '') {
	const flattened = Object.keys(nestedMessages).reduce((messages, key) => {
		let value = nestedMessages[key];
		let prefixedKey = prefix ? `${prefix}.${key}` : key;
		if (typeof value === 'string') {
			messages[prefixedKey] = value
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey))
		}
		return messages
	}, {});
	console.log(flattened);
	return flattened;
}