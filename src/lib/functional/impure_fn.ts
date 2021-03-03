const COST_OF_ITEM = 19;
// output not derived solely from inputs
export const cartTotal = (quantity: number) => {
  return COST_OF_ITEM * quantity;
};
const generateId = () => {
  return Math.floor(Math.random() * 1000);
};
// same input, different output
export const createUser = (name: string, age: number) => {
  return {
    id: generateId(),
    name: name,
    age: age,
  };
};
// side effects
let id = 0;
export const createFoodItem = (name: string) => {
  return { id: ++id, name };
};
// side effects #2 (no output)
export const logger = (msg: string) => {
  console.log(msg);
};
