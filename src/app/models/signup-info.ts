export class SignUpInfo {
    name: string;
    role: string[];
    password: string;

    constructor(name: string, password: string, role: string[]) {
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
