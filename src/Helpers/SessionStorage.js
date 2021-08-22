export const getStoragePatients = () => {
    const sessionPatientsStorage = sessionStorage.getItem("Patients");
	return sessionPatientsStorage === '' ? [] : JSON.parse(sessionPatientsStorage);
}

export const getStorageAuthenticationInformations = () => {
    const sessionPatientsStorage = sessionStorage.getItem("AuthenticationInformations");

    if (sessionPatientsStorage !== '') {
        return JSON.parse(sessionPatientsStorage)
    }

    throw new Error("Você não está autorizado para acessar esta página.");
	// return sessionPatientsStorage !== '' ? JSON.parse(sessionPatientsStorage) : throw new Error();
}