export class Validator {
    isRequired = (value) => {
        return value !== undefined && value.trim() !== '';
    };
    isValidFormat = (value, regularExpression) => {
        if (!this.isRequired(value)) {
            return false;
        }
        return regularExpression.test(value);
    };
    isEqualPassword = (password1, password2) => {
        return password2 == password1;
    };
    isValidAge = (age, minAnge) => {
        return age !== undefined && !isNaN(age) && age >= 18;
    };
}
