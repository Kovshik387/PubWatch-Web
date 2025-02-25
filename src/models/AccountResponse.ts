export default interface AccountResponse {
    id: string;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    accept: boolean;
    image: string;
    favorites: Favorite[];
};

export interface Account {
    id: string;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    accept: boolean;
    image: string;
    favorites: Favorite[];
}

export interface Favorite {
    name: string;
}