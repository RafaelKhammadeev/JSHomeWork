function unique(arr) {
    let uniqueCollection = [];
    let marker = 0;
    for (let elem of arr) {
        marker += 1;
        if (!arr.includes(elem, marker)){
            uniqueCollection.push(elem);
        }
    }
    return uniqueCollection
}

function unique1(arr) {
    let uniqueCollection = [];
    let marker = 0;
    for (let elem of arr) {
        marker += 1;
        if (!arr.includes(elem, marker)){
            uniqueCollection.push(elem);
        }
    }
    return uniqueCollection
}

let arr = [0, 1, 2, 3, 3, 'asdf', 'asdf', 'aqer', 1, 111, ];

console.log(unique(arr))

