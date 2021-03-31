const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //tuples
} = {
    name: 'Raynaldo',
    age: 30,
    hobbies: ['Sports', 'Hiking'],
    role: [2, 'author'] //tuples
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}