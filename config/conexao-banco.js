const mysql = require("mysql2")

//criar uma variavel para conexao com o bancom
const conn  = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "supermercado",
    user: "root",
    password: "usbw"
})


conn.connect( (erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Conectado com sucesso");
    }

})

module.exports = conn;
