const db = require('../database/dbConfig.js');
const { add } = require('../users/users-model.js');




// it('should insert a new user', async function() {
// await add({ username: 'emmy', password: '123'});

// const users = await db('users');
// expect(users).toHaveLength(5)
// });


it('expects username to be in database', async function() {

    const users = await db('users');
    expect(users[6].username).toBe('penelope');
})



// describe('/api/login', () => {
// it('expects status to be ', async function() {

//     const users = await db('users');
//     expect(response.status).toBe(500);
// })

// })

