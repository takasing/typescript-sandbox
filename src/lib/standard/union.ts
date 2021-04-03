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
      // is string value in union?
      (newValue) => {
        // 'T' only refers to a type, but is being used as a value here.ts(2693)
        // console.log(newValue && newValue in T ? newValue : undefined)
        console.log('new', newValue, newValue as T);
      }
    );
  }
  pick(title: string): T | undefined {
    const t = this.restaurant.pick(title)?.title;
    return t as T;
  }
}
