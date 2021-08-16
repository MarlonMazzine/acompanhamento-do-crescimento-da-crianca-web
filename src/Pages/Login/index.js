import { useState } from 'react';
import FetchGet from '../../Helpers/FetchGet';
import FetchPost from '../../Helpers/FetchPost';
import * as S from './styled';

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const testando = async (e) =>{
		e.preventDefault();
		// const login = JSON.stringify({
		// 	login: userName,
		// 	password: password
		// })
		const login = JSON.stringify({
			login: 'marlonmazzine',
			password: 'perereca1993',
		});
		// const URL = process.env.REACT_APP_CORS_TO_ANYWHERE + process.env.REACT_APP_WEBSERICE_V1 + '/login'
		const URL_LOGIN = process.env.REACT_APP_WEBSERICE_V1 + '/login'
		const header = {
			'Content-Type': 'application/json'
		}

		localStorage.setItem('AutheticationToken', await new FetchPost().getTextResponse(URL_LOGIN, login, header));

		const URL_DOCTORS = process.env.REACT_APP_WEBSERICE_V1 + '/doctors'
		const header2 = {
			'Authorization': localStorage.getItem('AutheticationToken')
		}

		localStorage.setItem('Doctors', await new FetchGet().getTextResponse(URL_DOCTORS, header2));
	}

	return (
		<>
			<S.Container>
				<S.FormContent onSubmit={testando}>
					<h1 style={{ marginBottom: '40px' }}>Login</h1>
					<S.Input
						type='text'
						placeholder='Usuário'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						// required
					/>
					<S.Input
						type='password'
						placeholder='Senha'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						// required
					/>
					<S.InputSubmit type='submit' value='Entrar' />
				</S.FormContent>
			</S.Container>
		</>
	);
}
