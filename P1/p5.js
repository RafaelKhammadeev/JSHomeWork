const users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = (arr) => {
    return arr.reduce((result, current) => {
        result[current.id] = current;
        return result;
    }, {})
};

console.log(groupById(users))