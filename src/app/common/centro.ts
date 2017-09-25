export class Centro {
    $key: string;
    active: boolean;
    name: string;
    state: string;
    city: string;
    cp: number;
    address: string;
    reference: string;
    type?: string;
    workingHour?: string;
    contacts?: Contact[];
    closeDate?: string;
    createdAt: Date = new Date();
}

export class Contact {
    name: string;
    phoneNumber: number;
}
