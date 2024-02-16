import { Identifier } from 'src/@model/identifier-dto';
import { DataSource } from 'typeorm';

export abstract class BaseService<TModel extends Identifier> {
  protected models: TModel[] = [];

  constructor(protected readonly dataSource: DataSource) {}

  async saveEntities(...models: TModel[]): Promise<TModel[]> {
    let result: TModel[];
    await this.dataSource.transaction(async (manager) => {
      result = await Promise.all(
        models?.map(async (m) => await manager.save(m)),
      );
    });
    return result;
  }
  async saveEntity(model: TModel): Promise<TModel> {
    const result = (await this.saveEntities(model))?.[0];
    return result;
  }
}
