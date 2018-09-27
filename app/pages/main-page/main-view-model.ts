import { Observable } from 'data/observable';
import { Session } from '~/shared/interfaces'

export class MainViewModel extends Observable {
    private _tempSession: Array<Session> = new Array<Session>();

    constructor() {
        super();
    }

    get sessions() : Array<Session> {
        return this._tempSession;
    }

    toogleFavorite () {

    }

    init () {
        var sessionsArray: Array<Session> = [
            {
                id: '1',
                title: 'session 1',
                start: '2016-10-03T12:00:00Z',
                end: '2016-10-03T13:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 1 desc',
                descriptionShort: 'session 1 short desc',
                calendarEventId: '',
                isBreak: false
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-10-03T13:00:00Z',
                end: '2016-10-03T14:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 2 desc',
                descriptionShort: 'session 2 short desc',
                calendarEventId: '',
                isBreak: true
            },
            {
                id: '3',
                title: 'session 3',
                start: '2016-10-03T14:00:00Z',
                end: '2016-10-03T15:00:00Z',
                room: 'room2',
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 desc',
                descriptionShort: 'session 3 short desc',
                calendarEventId: '',
                isBreak: false
            }
        ];

        for(var i = 0; i < sessionsArray.length; i++) {
            this._tempSession.push(sessionsArray[i]);
        }
    }
}