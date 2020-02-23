export class PremitiveTypeValidationUtil {

    public static validateString(str: string): boolean {
        if (str !== null && str !== undefined && str !== '') {
            return true;
        }

        return false;
    }

    public static validateNumber(num: number): boolean {
        if (num !== null && num !== undefined) {
            return true;
        }

        return false;
    }

    public static convertStringToBool(value: string): boolean{
        if(value === 'true' || value === 'True'){
            return true;
        }else if(value === 'false' || value === 'False') {
            return false;
        }

        return false;
    }

}
