// enum Roles {
//   ADMIN,
//   READ_ONLY,
//   WRITE_ONLY,
//   READ_WRITE,
// }
// enum Roles {
//   ADMIN = "ADMIN",
//   READ_ONLY = "READ_ONLY",
//   WRITE_ONLY = "WRITE_ONLY",
//   READ_WRITE = "READ_WRITE",
// }
var Roles = {
    ADMIN: "ADMIN",
    READ_ONLY: "READ_ONLY",
    WRITE_ONLY: "WRITE_ONLY",
    READ_WRITE: "READ_WRITE",
};
var user = {
    // This is an object
    name: "john",
    age: 30,
    gender: "male",
    role: Roles.ADMIN,
};
// console.log(Roles[0]); // ADMIN
if (user.role === Roles.ADMIN) {
    console.log("This user is an admin");
}
console.log(user);
