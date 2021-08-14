import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../../../style.css";

export default function SearchForm() {
	return (
		<>
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="mb-4">Lista de pacientes</h2>
					<form>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-numero-do-prontuario">Nº do prontuário:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-numero-do-prontuario"
										aria-describedby="basic-addon3"
										placeholder="Número do prontuário do paciente"
									/>
								</div>
							</div>
							<div className="col">
								<label htmlFor="input-numero-do-sus">Nº do SUS:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-numero-do-sus"
										aria-describedby="basic-addon3"
										placeholder="Número da carteirinha do SUS do paciente"
									/>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-nome-do-paciente">Nome:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-nome-do-paciente"
										aria-describedby="basic-addon3"
										placeholder="Informe aqui o nome do paciente"
									/>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-bithdate">Data de nascimento:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-bithdate"
										aria-describedby="basic-addon3"
										placeholder="Data de nascimento do paciente"
									/>
								</div>
							</div>
						</div>

						<div className="form-group row mt-4">
							<div className="col-sm-10">
								<button
									type="submit"
									className="btn btn-primary bg-default-color text-default-color pt-2 pb-2 pl-5 pr-5"
								>
									Filtrar
								</button>
								<button type="reset" className="btn btn-light ml-3 pt-2 pb-2 pl-5 pr-5">
									Limpar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
