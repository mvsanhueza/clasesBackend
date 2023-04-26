const socket = io();

const botonChat = document.getElementById('botonChat');
const parrafosMensajes = document.getElementById('parrafosMensajes');
const val = document.getElementById('chatBox');
let user;

Swal.fire({
  title: "Identificación de Usuario",
  text: "Por favor ingrese su nombre de usuario",
  input: "text",
  inputValidator: (valor) => {
    return !valor && 'Ingrese un valor válido';
  },
  allowOutsideClick: false,
}).then(resultado =>{
    user = resultado.value;
    console.log(user);
})

botonChat.addEventListener('click', ()=>{
    if(val.value.trim() > 0){ //Consultar si el input no está vacío
        socket.emit("mensaje",{usuario: user, mensaje:val.value})
        val.value = "";
    } 
})

socket.on("mensajes", arrayMensajes=>{
    parrafosMensajes.innerHTML = ""; //Para evitar duplicados,
    arrayMensajes.forEach(mensaje=>{
        parrafosMensajes.innerHTML += `<p>${mensaje.usuario} : ${mensaje.mensaje}</p>`
    })
})