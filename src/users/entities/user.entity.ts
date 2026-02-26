import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    lastName: string;

    @Column({ type: 'varchar', length: 255 })
    docType: string;

    @Column({ type: 'varchar', length: 255 })
    docNumber: string;

    @Column({ type: 'varchar', length: 55 })
    miTest: string;

    @Column({ type: 'varchar', length: 255 })
    miTest2: string;
}
