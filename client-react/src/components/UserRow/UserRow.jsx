import React from 'react';
import { Button } from 'react-bootstrap';
import './UserRow.css';

export class UserRow extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditMode: false
		}
	}

	toggleMode = () => {
		this.setState({
			isEditMode: !this.state.isEditMode
		});
	};

	render() {
		const { id, name, email, description } = this.props;
		const { isEditMode } = this.state;


		return (
			<tr>
				<td>{id}</td>
				<td>{isEditMode ? <input type="text" value={name} /> : name}</td>
				<td>{isEditMode ? <input type="text" value={email} /> : email}</td>
				<td>{isEditMode ? <input type="text" value={description} /> : description}</td>
				<td>
					{
						isEditMode
							?
							<div className="button-wrapper">
								<Button variant="primary" className="button button_save" onClick={this.toggleMode}>Save</Button>
							</div>
							:
							<div className="button-wrapper">
								<Button variant="primary" className="button button_edit" onClick={this.toggleMode}>Edit</Button>
								<Button variant="danger" className="button button_delete">Delete</Button>
							</div>
					}
				</td>
			</tr>
		)
	}
}

