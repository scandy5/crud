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
	let { limit, page } = req.query;

	let users = (db.get('users'));
	limit = Number(limit);
	page = Number(page);

	if (limit > 0 && page > 0) {
		users = users.value().slice((page * limit) - 1, (page + 1) * limit);
	};

	res.send(users);
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
