import { Customers } from './Customers'

export interface Orders{
    id: number;
    customer: Customers;
    total: number;
    placed: Date;
    shipped?: Date;
}