export class UserServiceUrlConfig {

    public static getValidateEmailUrl(email: string): string {
        return 'user/validate-email?email=' + email;
    }

}
