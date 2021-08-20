import * as S from "../../../styled";

export default function SearchForm() {
	return (
		<>
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="mb-4">Lista de pacientes</h2>
					<form>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-sus-number">Nº do SUS:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-sus-number"
										aria-describedby="basic-addon3"
										placeholder="Número da carteirinha do SUS do paciente"
									/>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-patient-name">Nome:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-patient-name"
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
						<div className="form-group row mt-4 justify-content-between">
							<div className="col-sm-10">
								<S.InputSubmit className="btn text-default-color mr-3" type="submit">Filtrar</S.InputSubmit>
								<S.ButtonReset className="btn bg-default-color text-default-color mr-3" type="reset">
									Limpar
								</S.ButtonReset>
								<S.ButtonNewRegister className="btn text-default-color mr-3" type="submit">Adicionar</S.ButtonNewRegister>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
