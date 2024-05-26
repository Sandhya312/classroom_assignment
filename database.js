

const knex = require("knex")({
    client:"mysql2",
    connection:{
        host: "bdepprqpznr8djq8ib2h-mysql.services.clever-cloud.com",
        user: "u9ywudhntzmbmeiy",
        password: "NLQzDJce9PVU19sD4g1x",
        database: "bdepprqpznr8djq8ib2h",
        port: 3306,
    },
    pool:{min:0,max:7},
})


knex.raw("select version()").then(()=>{
    console.log("connection to db successfull");
})
.catch((err)=>{
    console.log("error",err);
    throw new Error('db not connected: ',err);
})
module.exports = knex;