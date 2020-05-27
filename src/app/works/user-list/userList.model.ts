import { IUserList } from "./userList.interface";

export class User implements IUserList{
    constructor(
        public login: string,
        public password: string,
        public email: string,
    ){}
}