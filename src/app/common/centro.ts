import * as firebase from 'firebase/app';

export class Centro {
    $key: string;
    active: boolean;
    name: string;
    state: string;
    city: string;
    cp?: number;
    address: string;
    reference?: string;
    type?: string;
    workingHour?: string;
    contacts?: Contact[];
    closeDate?: string;
    createdAt = firebase.database.ServerValue.TIMESTAMP;
}

export class Contact {
    id: number;
    contactName: string;
    phoneNumber: number;
}
