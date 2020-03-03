export class LabelServiceUrlConfig {

  public static getGetAllUrl(userId: number) {
    return '/keep/label?userId='+userId;
  }

  public static getSaveLabelUrl() {
    return '/keep/label';
  }

  public static getValidateLabelNameUrl(userId: number, label: string){
    return '/keep/label?userId='+userId+'&label='+label;
  }

}
