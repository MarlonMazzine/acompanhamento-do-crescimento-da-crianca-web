import SearchForm from "./Partials/SearchForm";
import "../../style.css";

export default function Patients() {
	/**
	 * AIG = Adequeado para Idade Gestacional
	 * PIG = Pequeno para Idade Gestacional
	 * GIG = Grande para Idade Gestacional
	 */

	const names = JSON.parse(sessionStorage.getItem("Patients"));

	return (
		<>
			<SearchForm />
			<div className="ml-2 mr-2">
				<div className="table-responsive">
					<table className="table table-hover table-striped table-bordered text-center">
						<thead className="bg-default-color">
							<tr>
								{/* <th className="text-default-color">Prontuário</th> */}
								<th className="text-default-color">SUS</th>
								<th className="text-default-color">Nome</th>
								<th className="text-default-color">Nascimento</th>
							</tr>
						</thead>
						<tbody>
							{names.map((name, index) => {
								return (
									<tr className="pointer" key={index} onClick={() => alert(`Cliquei em ${name}`)}>
										{/* <td className="align-middle">{name["id"]}</td> */}
										<td className="align-middle">{name["document"]}</td>
										<td className="align-middle">{name["userName"]}</td>
										<td className="align-middle">
											{new Date(name["birthdate"]).toLocaleDateString("pt-BR")}
										</td>
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
