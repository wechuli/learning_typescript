interface IVehicle {
  model: string;
  manufacturer: string;
  wheels: string;
  move(direction: number, speed: number): boolean;
}

interface Employee {
  name: string;
  title: string;
  logID: () => string;
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

class Developer {
  public department: string;
  private _title: string;

  constructor(department: string, title: string) {
    this.department = department;
    this.title = title;
  }

  get title(): string {
    return this._title;
  }
  set title(newTitle: string) {
    this._title = newTitle.toLowerCase();
  }
  documentString(value: string): void {
    console.log(value);
  }
}

class WebDeveloper extends Developer {
  public favoriteEditor: string;

  constructor(department: string, title: string, favoriteEditor: string) {
    super(department, title);
    this.favoriteEditor = favoriteEditor;
  }
  writeTypeScript(): void {}
}
