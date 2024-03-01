export class CommonEquipmentDto {
  name: string;
  lastInspectionDate?: Date;

  constructor(name: string, lastInspectionDate?: Date) {
    this.name = name;
    this.lastInspectionDate = lastInspectionDate;
  }
}
