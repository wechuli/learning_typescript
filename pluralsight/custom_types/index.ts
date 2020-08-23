interface IVehicle {
  model: string;
  manufacturer: string;
  wheels: string;
  move(direction: number, speed: number): boolean;
}




class Honda implements IVehicle {
  constructor(
    public model: string,
    public manufacturer: string,
    public wheels: string
  ) {}
  move(direction: number, speed: number): boolean {
    return true;
  }
}
