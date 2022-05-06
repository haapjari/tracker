export interface Habit {
    id: number;
    habit: string;
    startDate: string;
    lastComplete: string;
    streak: number;
    active: boolean;
}

export interface User {
    uid: number;
    user: string;
    password: string;
    email: string;
    joinDate: string;
    habits: Habit[];
}
