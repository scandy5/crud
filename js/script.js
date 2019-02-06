import {AppBackend} from './AppBackend.js';
import {TableUsers} from './TableUsers.js';

(async function() {
	const backend = new AppBackend;
	const users = await backend.get({});
	const table = new TableUsers(users);
	
	table.render();
	
})();

document.body.onload = function () {
	setTimeout(function() {
		let preloader = document.getElementById('preloader');
		preloader.classList.toggle('done');
	}, 1000)
}