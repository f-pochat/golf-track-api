import {Entity, PrimaryColumn, Column} from "typeorm";


export class Admin{

    user: string;

    password: string;

    role: string;


    constructor(user: string, password: string, role: string) {
        this.user = user;
        this.password = password;
        this.role = role;
    }
}