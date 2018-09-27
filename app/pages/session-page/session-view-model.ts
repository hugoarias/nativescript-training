import { Observable} from 'data/observable';
import { Session, Speaker, RoomInfo } from '../../shared/interfaces';

export class SessionViewModel extends Observable implements Session{
    private _session: Session;
    private _favorite: boolean;
    constructor (source?: Session) {
        super();

        if(source) {
            this._session = source;
        }
    }

    get id(): string {
        return this._session.id;
    }

    get title (): string {
        return this._session.title;
    }

    get start (): string {
        return this._session.start;
    }

    get end(): string {
        return this._session.end;
    }

    get room (): string {
        return this._session.room;
    }

    get roomInfo (): RoomInfo {
        return this._session.roomInfo
    }

    get speakers (): Speaker[] {
        return this._session.speakers;
    }

    get description (): string {
        return this._session.description;
    }

    get descriptionShort (): string {
        return this._session.descriptionShort;
    }

    get calendarEventId (): string {
        return this._session.calendarEventId;
    }

    get isBreak (): boolean {
        return this._session.isBreak;
    }

    get favorite (): boolean {
        return this._favorite;
    }

    set favorite (value: boolean) {
        if (this._favorite !== value && !this._session.isBreak) {
            this._favorite = value;
            this.notify({
                object: this,
                eventName: Observable.propertyChangeEvent,
                propertyName: 'favorite',
                value: this._favorite
            });
        }
    }
}