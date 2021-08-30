//Imports de los módulos
const fs = require("fs").promises;
const path = require("path");

const usersPath = path.resolve("users.json");
const helloPath = path.resolve("hello.txt");



const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
        try {
            let data = await fs.readFile(usersPath, "utf8");
            return data;
        } catch (error) {
            console.log(error.message)
        };

};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(helloPath, "Hello world!", (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo")
        }
    });
    
};

const addUser = (username) => {
    //Agregar un usuario en la lista users.json
    fs.readFile(usersPath, "utf8", function readFileCallback(err, data){
        if (err){
            console.log(err);
        }else{
            let obj = JSON.parse(data);
            obj.Push(username);
            let json = JSON.stringify(obj);
            fs.writeFile(usersPath, json, "utf8", callback);
        }
    });
}

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
