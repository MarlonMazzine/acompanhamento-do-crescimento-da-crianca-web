export const getMonthDifference = (patientBirthDate) => {
	const dateObject = new Date(patientBirthDate);
	var diffMonth = (new Date().getTime() - dateObject.getTime()) / 1000;
	diffMonth /= 60 * 60 * 24 * 7 * 4;

	return Math.round(diffMonth);
};
