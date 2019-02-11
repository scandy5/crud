const express = require('express');
const low = require('lowdb');
const cors = require('cors');
const shortid = require('shortid');

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/users', function (req, res) {
	let allUsers = db.get('users').value();
	let { limit, page, search } = req.query;
	limit = Number(limit);
	page = Number(page);
	search = search;
	

	let filteredUsers = allUsers.filter(x => x.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
	
	res.send(filteredUsers.slice(page * limit, (page + 1) * limit));
});

app.post('/users', (req, res) => {
	const user = req.body;

	if (user.name && user.name.length > 0) {
		db.get('users')
			.push({
				...user,
				id: shortid.generate()
			})
			.write();
	} else {
		res.status(400);
		res.send('Please provide object with name');
	}

	res.end();
});

app.delete('/users/:id', (req, res) => {
	const id = req.params.id;

	db.get('users')
		.remove({ id })
		.write()
	res.end();
})


app.listen(port, function () {
	console.log(`Example app listening on port ${port}`);
});
