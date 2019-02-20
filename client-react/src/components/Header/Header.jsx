import React from 'react';
import { Row, Col, DropdownButton, Dropdown, Button, FormControl, InputGroup } from 'react-bootstrap';
import './Header.css';

export const Header = () => {
	return (
		<header className="header">
			<Row>
				<Col className="col-1">
					<DropdownButton
						as={InputGroup.Prepend}
						variant="outline-secondary"
						title="5"
						id="input-group-dropdown-1"
						className="header__limit"
					>
						<Dropdown.Item href="#">5</Dropdown.Item>
						<Dropdown.Item href="#">10</Dropdown.Item>
						<Dropdown.Item href="#">15</Dropdown.Item>

					</DropdownButton>
				</Col>
				<Col>
					<FormControl aria-describedby="basic-addon1" className="header__search" placeholder="Search..." />
				</Col>
				<Col className="col-2">
					<Button className="header__button">Add user</Button>
				</Col>
			</Row>
		</header>
	)
}