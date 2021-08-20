import * as DefaultGirlsValues0To24 from "./Girls/DefaultValuesGirl0To24Months";
import * as DefaultBoysValues0To24 from "./Boys/DefaultValuesBoy0To24Months";
import * as DefaultGirlsValues24To60 from "./Girls/DefaultValuesGirl24To60Months";
import * as DefaultBoysValues24To60 from "./Boys/DefaultValuesBoy24To60Months";
import * as DefaultGirlsValues61To228 from "./Girls/DefaultValuesGirl61To228Months";
import * as DefaultBoysValues61To228 from "./Boys/DefaultValuesBoy61To228Months";
import * as g from "./Gender";

export default function DefaultMonthsValues(monthDifference, patientGender) {
	switch (true) {
		case monthDifference <= 24 && monthDifference >= 0:
			switch (true) {
				case patientGender === g.male:
					return DefaultBoysValues0To24;
				case patientGender === g.female:
					return DefaultGirlsValues0To24;
				default:
					failIfInvalidGender();
			}

			break;
		case monthDifference > 24 && monthDifference <= 60:
			switch (true) {
				case patientGender === g.male:
					return DefaultBoysValues24To60;
				case patientGender === g.female:
					return DefaultGirlsValues24To60;
				default:
					failIfInvalidGender();
			}

			break;
		case monthDifference > 60 && monthDifference <= 228:
			switch (true) {
				case patientGender === g.male:
					return DefaultGirlsValues61To228;
				case patientGender === g.female:
					return DefaultBoysValues61To228;
				default:
					failIfInvalidGender();
			}

			break;
		default:
			throw new Error("Data de nascimento é inválida! Favor, revisar o cadastro do cliente.");
	}
}

function failIfInvalidGender() {
	throw new Error('Gênero inválido! Os gêneros suportados são: "Masculino" ou "Feminino".');
}
