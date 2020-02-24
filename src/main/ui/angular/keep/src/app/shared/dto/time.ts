export class Time {
    hour: number;
    minute: number;
    second: number;

    public setDefault(hour: number, minute: number, second: number): void {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    public compareTo(e1: Time): number {
      if(this.hour < e1.hour){
          return -1;
      }else if(this.hour > e1.hour){
          return 1;
      }

      if(this.minute < e1.minute){
          return -1;
      }else if(this.minute > e1.minute){
          return 1;
      }

      if(this.second < e1.second){
          return -1;
      }else if(this.second > e1.second){
          return 1;
      }
      
      return 0;
  }
}
