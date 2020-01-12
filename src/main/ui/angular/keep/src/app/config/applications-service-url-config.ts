export class ApplicationsServiceUrlConfig {

    public static getAllApplications(userId: number): string {
        let url =  '/applications';
        url = url + '?';
        url = url + 'userId=' + userId;
        return url;
    }

}
