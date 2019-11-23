import { ISessionService } from './../../interface/session/i-session-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements ISessionService {

  private keep: Map<string, string> = new Map();

  constructor() {
    const sessionValue: string = sessionStorage.getItem('keep');

    if (sessionValue !== null || sessionValue !== undefined) {

      const saveValues: Map<string, string> = JSON.parse(sessionValue);
      saveValues.forEach((value: string, key: string) => {
        this.keep.set(key, value);
      });

    }

  }

  saveValue(key: string, value: string): void {
    this.keep.set(key, value);

    this.updateSessionStorage();
  }

  saveAll(update: Map<string, string>): void {
    update.forEach((value: string, key: string) => {
      this.keep.set(key, value);
    });

    this.updateSessionStorage();
  }

  getValue(key: string): string {
    return this.keep.get(key);
  }

  getAll() {
    const keepCopy: Map<string, string> = new Map();
    Object.assign(keepCopy, this.keep);
    return keepCopy;
  }

  remove(key: string): void {
    this.keep.delete(key);
  }
  removeAll(): void {
    this.keep = new Map<string, string>();
  }

  private updateSessionStorage(): void {
    sessionStorage.setItem('keep', JSON.stringify(this.keep));
  }

}
