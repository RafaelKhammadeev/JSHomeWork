const sortByAge = (a, b) => {
    const aAge = a.age
    const bAge = b.age
    if (aAge > bAge) return 1;
    if (aAge === bAge) return 0;
    if (aAge < bAge) return -1;

}

const users = [
    {id: 'john', name: "John Smith", age: 1},
    {id: 'ann', name: "Ann Smith", age: 231},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

users.sort(sortByAge)
console.log(users)