/* eslint-disable prettier/prettier */
import { AddressEntity } from 'src/address/entities/Address.entity';
import { StateEntity } from 'src/state/entities/State.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity({ name: 'city'})
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'state_id', nullable: false})
  stateId: number;

  @Column({ name: 'name', nullable: false})
  name: string;

  @Column({ name: 'created_at', nullable: false})
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: false})
  updatedAt: Date;

  @OneToMany(() => AddressEntity, (address) => address.city)
  addresses?: AddressEntity[]

  @ManyToOne(() => StateEntity, (state) => state.cities)
  @JoinColumn({name:'state_id', referencedColumnName:'id'})
  state?:StateEntity
}
