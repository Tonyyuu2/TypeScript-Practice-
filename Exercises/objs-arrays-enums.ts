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

enum Role { ADMIN = 5, READ_ONLY = "READ_ONLY", AUTHOR = 200};


const person = {
  name: "Tony",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.READ_ONLY) {
  console.log('is READ_ONLY');
  
}