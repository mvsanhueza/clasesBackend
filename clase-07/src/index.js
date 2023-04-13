import express from 'express';


//--CONFIGURACION DE EXPRESS
const app = express();
const PORT = 4000;

app.use(express.json()) //Permite ejecutar JSON en mi app
app.use(express.urlencoded({extended: true})) // Permite poder realizar consultas en la URL (req.query)

const users = [
    {
        nombre: "Francisco",
        apellido: "Pugh",
        id: 1,
        cargo: "Profesor"
    },
    {
        nombre: "Alex",
        apellido: "Terrusi",
        id: 2,
        cargo: "Tutor"
    },
    {
        nombre: "Daniel",
        apellido: "Perco",
        id: 3,
        cargo: "Tutor"
    },
];

app.get("/user",(req,res)=>{
    res.send(users);
});

app.get("/user/:id", (req,res)=>{
    const user = users.find(user=>user.id === parseInt(req.params.id))
    res.send(user)
});

//En postman se escribe el codigo en Body - Raw para escribir el objeto
app.post("/user", (req,res) =>{
    const {nombre, apellido, id, cargo} = req.body //consulto datos enviados por postman
    users.push({nombre:nombre, apellido: apellido, id:id, cargo:cargo}) //Creo y guardo un nuevo objecto
    res.send("Usuario creado")
})

app.put("/user/:idUser", (req,res)=>{
    const idUser = parseInt(req.params.idUser);
    const {nombre, apellido, cargo} = req.body;

    const user = users.find(user=>user.id === idUser);

    if(user){
        user.nombre = nombre;
        user.apellido = apellido;
        user.cargo = cargo;
        res.send("Usuario actualizado") //Return implicito
    }
    
    res.send("Usuario no encontrado")    
})

app.delete("/user/:idUser",(req,res)=>{
    const indice = users.findIndex(user=>user.id === parseInt(req.params.idUser));
    users.splice(indice,1);
    res.send("Usuario eliminado")
})

app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
});





