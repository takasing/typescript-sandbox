type Admin = {
  readonly id: string;
  readonly role: string;
};
type User = {
  readonly email: string;
};

export const redirectWithTypeGuard = (usr: Admin | User) => {
  // if ((<Admin>usr).role !== undefined) {
  if (isAdmin(usr)) {
    // Property 'role' does not exist on type 'User'
    // because of usr: Admin | User
    return routeToAdminPage(usr.role);
  } else {
    return routeToHomePage(usr.email);
  }
}

export const redirectWithIn = (usr: Admin | User) => {
  return "role" in usr ? routeToAdminPage(usr.role) : routeToHomePage(usr.email);
}

function routeToAdminPage(role: string) {
  return `do something: ${role}`;
}
function routeToHomePage(email: string) {
  return `do something: ${email}`;
}

// "is" user-defined type guard
// any, unknown, Unionの方の絞り込みができる
function isAdmin(usr: Admin | User): usr is Admin {
  return (<Admin>usr).role !== undefined;
}
