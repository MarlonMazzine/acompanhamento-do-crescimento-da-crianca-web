import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Alerta extends Component {
	render(mensagem) {
		return (
			<>
				<div class='alert alert-warning alert-dismissible fade show' role='alert'>
					${mensagem}
					<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
						<span aria-hidden='true'>&times;</span>
					</button>
				</div>
			</>
		);
	}
}
