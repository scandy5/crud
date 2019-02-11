import { AppBackend } from "./AppBackend.js";


export class TableUsers {
	constructor(users) {
		this.users = users;
		this.page = 1;
		this.appBackend = new AppBackend();
		this.search = '';

		document.getElementById("users_search").addEventListener("keyup", async (event) => {
			// 13 - 'enter' key
			if (event.which === 13) {
				this.search = event.target.value;
				await this.loadUsers();
				this.render();
				console.log(this.search);
				
			}
		});

		document.addEventListener('click', async (event) => {

			if (event.target.matches('.btn-danger')) {
				await this.appBackend.delete(event.target.dataset.id);
				await this.loadUsers();
				this.render();
			}

			if (event.target.matches('.next')) {
				this.page++;
				await this.loadUsers();
				this.render();
			}

			if (event.target.matches('.previous')) {
				this.page--;
				await this.loadUsers();
				this.render();
			}

			if (event.target.matches('.limit-10')) {
				this.selectedLimit = event.target.innerHTML;
				await this.loadUsers();
				this.render();
				await this.giveActiveClasseToCurrentLimit(this.selectedLimit);
			}

			if (event.target.matches('.limit-15')) {
				this.selectedLimit = event.target.innerHTML;
				await this.loadUsers();
				this.render();
				await this.giveActiveClasseToCurrentLimit(this.selectedLimit);
			}

			if (event.target.matches('.limit-5')) {
				this.selectedLimit = event.target.innerHTML;
				await this.loadUsers();
				this.render();
				await this.giveActiveClasseToCurrentLimit(this.selectedLimit);
			}

			if (event.target.matches('#add-user')) {
				let userName = await document.querySelector('.input-name').value;
				let userEmail = await document.querySelector('.input-email').value;
				let userDescription = await document.querySelector('.input-description').value;

				await this.appBackend.create({
					name: userName,
					email: userEmail,
					description: userDescription
				});
				await this.loadUsers();
				this.render();
			}
		});
	}

	async giveActiveClasseToCurrentLimit(limit) {
		document.getElementById('limit-5').classList.remove('active');
		document.getElementById('limit-10').classList.remove('active');
		document.getElementById('limit-15').classList.remove('active');
		document.getElementById(`limit-${limit}`).classList.add('active');
	}

	async loadUsers() {
		if (this.page <= 1) {
			this.page = 1;
		}

		this.users = await this.appBackend.get({
			page: this.page,
			limit: this.selectedLimit,
			search: this.search
		});
	};


	renderUsers() {
		return this.users.map((user) => {
			return `
					<tbody>
						<tr>
							<th scope="row">${user.id}</th>
							<td>${user.name}</td>
							<td>${user.email}</td>
							<td>${user.description}</td>
							<td><button class="btn btn-danger" data-id="${user.id}">Delete</button></td>
						</tr>
					</tbody>
					`
		}).join('');
	}

	render() {
		document.querySelector('.table-container').innerHTML = `
			<table class="table">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">name</th>
						<th scope="col">email</th>
						<th scope="col">description</th>
						<th></th>
					</tr>
				</thead>
			${this.renderUsers()}
		 	</table>
		 	<nav aria-label="Page navigation example" style="margin-right: 20px">
				<ul class="pagination justify-content-end">
					<li class="page-item" id="previous">
						<a class="page-link previous" href="#" tabindex="-1" aria-disabled="true">Previous</a>
					</li>
					<li>
						<a class="page-link next" href="#">Next</a>
					</li>
				</ul>
			</nav>
		`
	};
}