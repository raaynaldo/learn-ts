// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string] //tuples
// } = {
//     name: 'Raynaldo',
//     age: 30,
//     hobbies: ['Sports', 'Hiking'],
//     role: [2, 'author'] //tuples
// };

enum Gender { MALE, FEMALE };

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //tuples
    gender: number
} = {
    name: 'Raynaldo',
    age: 30,
    hobbies: ['Sports', 'Hiking'],
    role: [2, 'author'], //tuples
    gender: Gender.MALE
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person)
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}