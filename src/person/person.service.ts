import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from 'src/@dto/create-person.dto';
import { UpdatePersonDto } from 'src/@dto/update-person.dto';
import { PersonEntity } from 'src/@entity/PersonEntity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<PersonEntity> {
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  async findAll(): Promise<PersonEntity[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<PersonEntity> {
    const person = await this.personRepository.findOne(id as any);
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return person;
  }

  async update(
    id: number,
    updatePersonDto: UpdatePersonDto,
  ): Promise<PersonEntity> {
    const person = await this.findOne(id);
    const updatedPerson = { ...person, ...updatePersonDto };
    return this.personRepository.save(updatedPerson);
  }

  async remove(id: number): Promise<void> {
    const result = await this.personRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
  }
}
