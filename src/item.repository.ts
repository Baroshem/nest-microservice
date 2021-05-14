import { EntityRepository, Repository } from "typeorm";
import { ItemEntity } from "./item.entity";

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {}