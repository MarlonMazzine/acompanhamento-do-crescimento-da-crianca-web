export default function Modal(props) {
    const properties = [props.height, props.userName, props.weight]

	if (properties.includes(undefined)) {
        return null;
	} else {
		return (
			<>
				<div
					className="modal fade show"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								Tem certeza de que gostaria de salvar os seguintes dados para o paciente{" "}
								{props.userName}?
								<br />
								<br />
								Altura: {props.height}
								<br />
								<br />
								Peso: {props.weight}
							</div>
							<div className="modal-footer">
								<form action={`${process.env.REACT_APP_WEBSERICE_V1}/para outro lugar`} method="POST">
									<input value={props.patientId} name="patientId" hidden />
									<input value={props.height} name="height" hidden />
									<input value={props.wieght} name="wieght" hidden />
									<button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">
										Cancelar
									</button>
									<button type="submit" className="btn btn-primary">
										Salvar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
