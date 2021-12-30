import * as S from "../../styled";

export default function Loading(props) {
	if (!props.show) {
	    return null;
	}

	return (
		<>
			<div
				className="modal"
				tabIndex="-1"
                id="loading"
			></div>
			<S.ModalBackgound />
			<div className="modal-dialog modal-dialog-scrollable">
				<div className="modal-content">
					<div
						class="d-flex justify-content-center"
						style={{ position: "fixed", display: "block", top: "50%", left: "50%" }}
					>
						<div class="spinner-grow text-info" role="status"></div>
					</div>
				</div>
			</div>
		</>
	);
}
