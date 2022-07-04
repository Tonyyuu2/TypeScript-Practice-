// const person: {
//   name: string;
//   age: number;
// } = {}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Tony",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push('admin'); TS can't find this bug in a tuple
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
