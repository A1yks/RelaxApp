export interface LoginBody {
    email: string;
    password: string;
}

export interface RegisterBody extends LoginBody {
    name: string;
}
