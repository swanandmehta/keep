import { Note } from './note';
import { Date } from 'src/app/shared/dto/date';
import { Time } from '@angular/common';

export class Reminder extends Note {

    date: Date;
    time: Time;
    repeat: string;

}
