const person: {
    name: string,
    age: number,
    hobbies: string[]
} = {
    name: 'Raynaldo',
    age: 30,
    hobbies: ['Sports', 'Hiking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}