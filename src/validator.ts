export class Validator {
  isRequired: Function = (value: string): boolean => {
    return value !== undefined && value.trim() !== '';
  };

  isValidFormat: Function = (
    value: string,
    regularExpression: RegExp
  ): boolean => {
    if (!this.isRequired(value)) {
      return false;
    }

    return regularExpression.test(value);
  };

  isEqualPassword: Function = (password1: string, password2: string) => {
    return password2 == password1;
  };

  isValidAge: Function = (age: number, minAnge: number): boolean => {
    return age !== undefined && !isNaN(age) && age >= 18;
  };
}
