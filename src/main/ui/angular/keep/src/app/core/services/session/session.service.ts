import { PremitiveTypeValidationUtil } from './../../util/premitive-type-validation-util';
import { ISessionService } from './../../interface/session/i-session-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements ISessionService {

  private keep: any = {};

  constructor() {
    const sessionValue: string | null = sessionStorage.getItem('keep');

    if (sessionValue !== null && sessionValue !== undefined) {

      const saveValues: any = JSON.parse(sessionValue);

      for (const key in saveValues) {
        if (PremitiveTypeValidationUtil.validateString(key) === true) {
          const value : string | undefined = saveValues[key];
          if(value !== undefined){
            this.keep[key] = value;
          }
        }

      }
    }

  }

  saveValue(key: string, value: string): void {
    this.keep[key] = value;

    this.updateSessionStorage();
  }

  saveAll(update: any): void {
    for(const key in update){
      this.keep[key] = update[key];
    }

    this.updateSessionStorage();
  }

  getValue(key: string): string | undefined {
    return this.keep[key];
  }

  getAll() {
    const keepCopy: any = {};
    Object.assign(keepCopy, this.keep);
    return keepCopy;
  }

  remove(key: string): void {
    this.keep.delete(key);
  }
  removeAll(): void {
    this.keep = {};
  }

  private updateSessionStorage(): void {
    const sessionJson: any = {};

    for(const key in this.keep){
      sessionJson[key] = this.keep[key];
    }

    sessionStorage.setItem('keep', JSON.stringify(sessionJson));
  }

}
