class Add {
  readonly type = 'Add';
  constructor(public payload: string) { }
}
class RemoveAll {
  readonly type = 'Remove All';
}
class RemoveOne {
  readonly type = 'Remove One';
  constructor(public payload: number) { }
}

type TodoActions = Add | RemoveAll | RemoveOne;

type ITodoState = {
  readonly todos: readonly string[];
}

export const todoReducer = (
  action: TodoActions,
  state: ITodoState = { todos: [] }
) => {
  switch (action.type) {
    case "Add": {
      // cast avoid compile err about payload
      // const payload = (<AddAction>action).payload;
      return {
        // Property 'payload' does not exist on type 'ITodoState'.
        // todos: [...state.todos, payload]
        todos: [...state.todos, action.payload]
      }
    }
    case "Remove All": {
      return { todos: [] };
    }
    case "Remove One": {
      return {
        todos: state.todos.filter((_, i) => i !== action.payload)
      }
    }
  }
}
