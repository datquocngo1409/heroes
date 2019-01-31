export class Hero {
  id: any;
  name: string;

  // @ts-ignore
  constructor() {

  }

  // @ts-ignore
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// @ts-ignore
export let hero1 = new Hero(1, 'Dat');
