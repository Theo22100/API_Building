import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/@entity/PersonEntity';
import { PersonDto } from 'src/@dto/person-dto';
import { Person } from 'src/@model/person-dto';

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

  async deletePerson(id: number): Promise<Person> {
    const result = await this.getPerson(id);
    await this.repository.delete(id);
    return result;
  }

  async createPerson(personDto: PersonDto): Promise<PersonEntity> {
    const newPerson = this.repository.create(personDto);
    return this.repository.save(newPerson);
  }
}
