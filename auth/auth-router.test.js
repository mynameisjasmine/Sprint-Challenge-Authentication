const db = require('../database/dbConfig.js');
const { add } = require('../users/users-model.js');



// it('should insert a new user', async function() {
// await add({ username: 'emmy', password: '123'});

// const users = await db('users');
// expect(users).toHaveLength(5)
// });


it('expects username to be in database', async function() {
    // await add({ username: 'penelope', password: '777'});

    const users = await db('users');
    expect(users[6].username).toBe('penelope');
})


it('expects username to be in database', async function() {
    // await add({ username: 'penelope', password: '777'});

    const users = await db('users');
    expect(users[6].username).toBe('penelope');
})
