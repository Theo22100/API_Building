import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/@entity/PersonEntity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    protected readonly repository: Repository<PersonEntity>,
  ) {}

  getPersons(): Promise<PersonEntity[]> {
    return this.repository.find();
  }

  async getPerson(id: number): Promise<PersonEntity> {
    return this.repository.findOneBy({ id });
  }

  async deletePerson(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
