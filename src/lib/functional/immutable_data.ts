export class MutableGlass {
  constructor(public content: string, private amount: number) {}
  takeDrink(value: number) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}
export class ImmutableGlass {
  constructor(public content: string, public amount: number) {}
  takeDrink(value: number) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}
