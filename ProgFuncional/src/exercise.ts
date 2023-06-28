const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

//Mapealo a un arreglo de strings: firstName-lastName: role
const usersMap = users.map(function (user) {
    return `${user.firstName}-${user.lastName}: ${user.role}`;
});

//Filtra aquellos usuarios con role de Full Stack Resident
const fullStackUsers = users.filter(function (user) {
    return user.role === 'Full Stack Resident';
})

/*Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
con los objetos usuarios que tienen dicho role*/

const usersByRoles = users.reduce((finalObj: { [key: string]: any[] }, user) => {
    if (finalObj[user.role]) {
        finalObj[user.role].push(user);
    } else {
        finalObj[user.role] = [user];
    }
    return finalObj;
}, {});