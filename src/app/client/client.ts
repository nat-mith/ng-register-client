export interface IClient {
    name: string;
    cpf: number;
    phone: number;
    age?: number;
    email: string;
    address?: string;
    id: number;
}

export class Client implements IClient {
    public name: string;
    public cpf: number;
    public phone: number;
    public age?: number;
    public email: string;
    public address?: string;
    public id: number;

    constructor (data: IClient) {
        this.name = data.name;
        this.cpf = data.cpf;
        this.phone = data.phone;
        this.email = data.email;
        this.id = data.id;
        this.age = data.age;
        this.address = data.address;
    }
}