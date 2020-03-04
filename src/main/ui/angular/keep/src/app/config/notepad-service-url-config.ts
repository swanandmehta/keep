export class NotepadServiceUrlConfig {

    public static getSaveNoteUrl(): string {
        return '/keep/note';
    }

    public static getArchiveUrl() {
        return '/keep/note/archive';
    }
}
