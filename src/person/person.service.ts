import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/@entity/PersonEntity';
import { PersonDto } from 'src/@dto/person-dto';

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

  async createPerson(personDto: PersonDto): Promise<PersonEntity> {
    const newPerson = this.repository.create(personDto);
    return this.repository.save(newPerson);
  }
}
