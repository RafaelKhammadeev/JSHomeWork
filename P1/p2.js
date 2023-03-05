const peopleInformation = [{name: "Петя", surname: "Иванов", id: 1},
                            {name: "Рафаэль", surname: "Хаммадеев", id: 2}];

const fullNameCreate = (arr) => {
    return arr.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}))
}

console.log(fullNameCreate(peopleInformation))



