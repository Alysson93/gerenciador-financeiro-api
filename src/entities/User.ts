import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export default class User {

	@PrimaryColumn()
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

}
