import { Model, Table, Column } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model {
    @Column({ allowNull: false })
    first_name: string;

    @Column({ allowNull: false })
    last_name: string;

    @Column({ allowNull: false })
    username: string;

    @Column({ allowNull: false })
    email: string;

    @Column({ allowNull: false })
    password: string;

    @Column({ defaultValue: true })
    is_active: boolean;
}