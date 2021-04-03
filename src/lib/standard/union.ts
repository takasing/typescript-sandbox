export type Sandwich = 'BaconEgg' | 'BagelToast' | 'BLT';

type Menu = {
  title: string;
  value: string;
};
export class Restaurant {
  menus: Menu[];
  serve: (newValue: string | undefined) => void;
  constructor(menus: Menu[], serve: (newValue: string | undefined) => void) {
    this.menus = menus;
    this.serve = serve;
  }

  pick(title: string) {
    return this.menus.find((m) => m.title === title);
  }
}

export class SandwichRestaurant<T extends string> {
  restaurant: Restaurant;
  constructor(menu: { title: T; value: string }[]) {
    this.restaurant = new Restaurant(
      menu.map((m) => ({
        title: m.title,
        value: m.value,
      })),
      (newValue) => console.log('new', newValue)
    );
  }
  pick(title: string) {
    return this.restaurant.pick(title);
  }
}
