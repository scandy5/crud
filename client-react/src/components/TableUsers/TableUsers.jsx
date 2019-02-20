import React from 'react';
import { Table } from 'react-bootstrap';
import { UserRow } from '../UserRow/UserRow';
import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';

export const TableUsers = () => {

	const users = [
		{
			id: '1',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
		{
			id: '2',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
		{
			id: '3',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
		{
			id: '4',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
		{
			id: '5',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
		{
			id: '6',
			name: 'Serhii',
			email: 'serhii@serhii.serhii',
			description: 'desc'
		},
	];

	return (
		<Table striped bordered hover className="table">
			<thead>
				<tr>
					<TableHeaderCell title="ID" order="desc" />
					<TableHeaderCell title="Name" />
					<TableHeaderCell title="Email" />
					<TableHeaderCell title="Description" />
					<td>Actions</td>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user, index) => {
						return <UserRow {...user} key={user.id} />
					})
				}
			</tbody>
		</Table>
	)
}