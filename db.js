import mysql from "mysql";

export const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password12345",
    database:"blog"
})
