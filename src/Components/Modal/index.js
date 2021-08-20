import InsertNewWeightAndHeight from "../../Helpers/InsertNewWeightAndHeight";

export default function Modal(props) {
	const properties = [props.height, props.userName, props.weight, props.patientId];

	if (properties.includes("")) {
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
								<button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">
									Cancelar
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={async () => {
										await InsertNewWeightAndHeight(props.patientId, props.weight, props.height);
									}}
								>
									Salvar
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
