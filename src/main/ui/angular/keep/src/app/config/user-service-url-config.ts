export class UserServiceUrlConfig {

    public static getValidateEmailUrl(email: string): string {
        let url = '/user/validate-email';
        url = url + '?';
        url = url + 'email=' + email;
        return url;
    }

    public static createUserUrl(): string {
        return '/user/save';
    }

    public static loginUserUrl(): string {
        return '/user/login';
    }

}
