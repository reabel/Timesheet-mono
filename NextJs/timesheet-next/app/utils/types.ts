//type cannot be extended whereas interface can be.
export type entry = {
    id: number;
    description?: string,
    recurring?: boolean,
    allotedTime?: number,
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
    password: string;
    email: string;
    role: string;
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