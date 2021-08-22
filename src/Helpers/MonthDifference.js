export const getMonthDifference = (patientBirthDate) => {
	const dateObject = new Date(patientBirthDate);
	const today = new Date();
	var months = (today.getFullYear() - dateObject.getFullYear()) * 12;
	months -= dateObject.getMonth();
	months += today.getMonth();

	return Math.round(months);
};
