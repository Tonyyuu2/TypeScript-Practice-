// const person: {
//   name: string;
//   age: number;
// } = {}
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Tony",
//   age: 27,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// person.role.push('admin'); TS can't find this bug in a tuple
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Tony",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: Role.READ_ONLY
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.READ_ONLY) {
    console.log('is READ_ONLY');
}
