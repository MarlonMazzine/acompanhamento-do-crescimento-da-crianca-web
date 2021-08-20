import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUsers, faCalculator, faHome } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "../style.css";

export default function InitialPage() {
	if (document.location.pathname === "/") {
		return null;
	}

	$(function () {
		$('nav div ul li a[href^="' + document.location.pathname + '"]')
			.parent()
			.addClass("li-active font-weight-bold");
	});

	return (
		<>
			<nav className="navbar p-0 navbar-expand-lg navbar-light bg-default-color sticky-top">
				<a className="navbar-brand text-default-color ml-4" href="/inicio">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						fill="#F5F6F4"
						className="bi bi-calculator"
						viewBox="0 0 16 16"
					>
						<path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
						<path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
					</svg>
				</a>
				<button
					className="navbar-toggler text-default-color m-4"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="#F5F6F4"
						className="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
				<div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item menu">
							<a className="p-4 nav-link text-default-color" href="/inicio">
								<FontAwesomeIcon icon={faHome} /> Início
							</a>
						</li>
						<li className="nav-item menu">
							<a className="p-4 nav-link text-default-color" href="/pacientes">
								<FontAwesomeIcon icon={faUsers} /> Pacientes
							</a>
						</li>
						<li className="nav-item menu">
							<a className="p-4 nav-link text-default-color" href="/calculadora">
								<FontAwesomeIcon icon={faCalculator} /> Calculadora
							</a>
						</li>
						<li className="nav-item logout menu">
							<a className="p-4 nav-link text-default-color" href="/sair">
								Sair <FontAwesomeIcon icon={faSignOutAlt} />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
