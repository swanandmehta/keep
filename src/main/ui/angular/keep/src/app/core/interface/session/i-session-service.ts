export interface ISessionService {

    saveValue(key: string, value: string): void;

    saveAll(update: Map<string, string>): void;

    getValue(key: string): string | undefined;

    getAll(): Map<string, string>;

    remove(key: string): void;

    removeAll(): void;

}
