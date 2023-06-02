// Data
const users = [
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Design Patterns', 'Refactoring'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Design Patterns'],
    },
 ];

 const lookup = (login, property) => {

    // when doing the following the tests that should throw an error fail, I couldn't understand why
    
    let user = users.find(user => user.login === login);

    if(!user){
        throw new Error('Could not find user');
    }

    if(!(property in user)) {
        throw new Error('Could not find property');
    }
    
    return user[property];
 };

 console.assert(lookup("kent", "lastName") === "Beck");
 console.assert(lookup("norvig", "firstName") === "Peter");

 module.exports = { lookup };
