export class AppBackend {
	get({page = 1, search, limit = 5}) {
		return fetch(`https://5bf417c491c25b0013a3b9a2.mockapi.io/users?page=${page}&limit=${limit}`)
			.then((response) => response.json());
	}
	
	delete(id) {
		return fetch(`https://5bf417c491c25b0013a3b9a2.mockapi.io/users/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}

	// create(user) {
	// 	return fetch('https://5bf417c491c25b0013a3b9a2.mockapi.io/users', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(user)
	// 	});
	// }
}