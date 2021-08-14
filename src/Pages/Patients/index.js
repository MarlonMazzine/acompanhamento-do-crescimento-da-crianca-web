import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./Partials/SearchForm";
import "../../style.css";

export default function Patients() {
	/**
	 * AIG = Adequeado para Idade Gestacional
	 * PIG = Pequeno para Idade Gestacional
	 * GIG = Grande para Idade Gestacional
	 */

	const names = [
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Marlon Mazzine dos Santos Figueiredo"
	];

	return (
		<>
			<SearchForm />
			<div className="ml-2 mr-2">
				<div className="table-responsive">
					<table className="table table-hover table-striped table-bordered text-center">
						<thead className="bg-default-color">
							<tr>
								<th className="text-default-color">Prontuário</th>
								<th className="text-default-color">SUS</th>
								<th className="text-default-color">Nome</th>
								<th className="text-default-color">Nascimento</th>
							</tr>
						</thead>
						<tbody>
							{names.map((name, index) => {
								return (
									<tr className="pointer" key={index} onClick={() => alert(`Cliquei em ${name}`)}>
										<td className="align-middle">{index + 1}</td>
										<td className="align-middle">123456789123456</td>
										<td className="align-middle">{name}</td>
										<td className="align-middle">10/08/1993</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
