import { Identifier } from './identifier-dto';
import { Building } from './building-dto';
import { CommonEquipment } from './common-equipment-dto';

export interface BuildingCommonEquipment extends Identifier {
  building: Building;
  equipment: CommonEquipment;
}
