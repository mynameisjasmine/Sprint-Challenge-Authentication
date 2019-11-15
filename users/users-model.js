const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findBy,
    findById,
    // findByUsername
  };


  async function add(user) {
    console.log("inside add", user);
    const [id] = await db('users').insert(user)
    console.log(id);
    return findById(id)
    }

    function findBy(filter) {
    console.log("inside find by", filter);
    return db('users') 
    .where(filter) 
    }

    // function findBy(where) {
    //   console.log("inside find by", where);
    //   return db('users') 
    //   .where(where) 
    //   }
        
    function findById(id) {
    return db('users')
    .where({ id })
    .first(); 
    }

    // function findByUsername(username) {
    //   return findBy({username}).first()
    // }
    