import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<Row>
				<Col></Col>
				<Col className="col-2">
					<Button variant="success" className="footer__button">
						Previous page
							</Button>
				</Col>
				<Col className="col-2">
					<Button variant="success" className="footer__button">
						Next page
							</Button>
				</Col>
			</Row>
		</footer>
	)
} 