//type cannot be extended whereas interface can be.

export enum status {
    PENDING = "Pending",
    STARTED = "Started",
    FINISHED = "Finished"
}

export enum connectionStatus {
    CONNECTED = "Connected",
    DISCONNECTED = "Disconnected",
    PENDING = "Pending"
}

export type entry = {
    id: number; //Auto-incremented
    description?: string,
    recurring?: boolean,
    allottedTime?: number,
    spentTime?: number,
    status?: status, 
    date?: string;
    start?: string;
    end?: string;
    break?: number;
    project?: string;
};

//type for users
export type user = {
    id: number;
    username: string;
    password?: string;
    email: string;
    role: string;
};

export type project = {
    id: number;
    name: string;
    description: string;
    users: Array<user>;
};

// History type
export type history = {
    id: number;
    date: string;
    description: string;
    project: string;
    hours: number;
    user: string;
};

//Session type
export type session = {
    id: number;
    date: string;
    start: string;
    end: string;
    break: number;
    user: string;
};