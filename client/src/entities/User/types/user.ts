export type User = {
    id: number;
    email:string;
    name: string;
    password: string;
    img: string;
}

export type UserWithoutId = Omit<User, 'id'>

export type UserId = User['id']