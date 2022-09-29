let tabla=[
    {cedula: "02100231", nombre:"Roiner",apellido:"Escobar", telefono:"3021232332", email:"roiner29@hotmail.com",barrio:"soledad",  direccion:"calle 10", sexo: "Masculino"},
    {cedula: "021658731", nombre:"Yeilin",apellido:"Escobar", telefono:"3114324002", email:"yeiescobar2549@hotmail.com",barrio:"soledad",  direccion:"calle 10", sexo: "Femenino"},
    {cedula: "02107871", nombre:"Keili",apellido:"Escobar", telefono:"3230077832", email:"keili2022@hotmail.com",barrio:"soledad",  direccion:"calle 10", sexo: "Femenino"},
]

const listar=()=>{
    let tbody=document.getElementById("tusuarios")
    let tablallena="";
    for(let i=0;i<tabla.length;i++){
        tablallena+="<tr><td>"+tabla[i].cedula+"</td><td>"+tabla[i].nombre+"</td><td>"+tabla[i].apellido+"</td><td>"+tabla[i].telefono+"</td> <td>"+tabla[i].email+"</td> <td>"+tabla[i].barrio+"</td> <td>"+tabla[i].direccion+"</td> <td>"+tabla[i].sexo+"</td> </tr>";
    }
    
    tbody.innerHTML=tablallena;

}

const validarCedula=(id)=>{ 
  
    let llave = false;

    for(let i=0;i<tabla.length;i++){
        if (tabla[i].cedula == id ) {
            llave=true;
        } 
    }
   
 return llave

}



const registrar=()=>{
    const cedula=document.getElementById("cedula").value
    const nombre=document.getElementById("nombre").value
    const apellido=document.getElementById("apellido").value
    const telefono=document.getElementById("telefono").value
    const email=document.getElementById("email").value
    const barrio=document.getElementById("barrio").value
    const direccion=document.getElementById("direccion").value  
    const sexo=document.getElementById("sexo").value  

    if (validarCedula(cedula)) {
        alert("cedula ya existente! por favor ingrese una nueva cedula")
        return
    }  

    if (!cedula.trim()) {
        alert("Ingrese la cedula")
        return
    }

    if (!nombre.trim()) {
        alert("Ingrese el nombre")
        return
    }
    if (!apellido.trim()) {
        alert("Ingrese el apellido")
        return
    }
    if (!telefono.trim()) {
        alert("Ingrese el telefono")
        return
    }      

    if (!email.trim()) {
        alert("Ingrese el email")
        return
    }  

    if (!barrio.trim()) {
        alert("Ingrese el barrio")
        return
    }  

    if (!direccion.trim()) {
        alert("Ingrese la direccion")
        return
    }  


    


    let tbody=document.getElementById("tusuarios")
    tbody.innerHTML+="<tr><td>"+cedula+"</td><td>"+nombre+"</td><td>"+apellido+"</td><td>"+telefono+"</td> <td>"+email+"</td> <td>"+barrio+"</td> <td>"+direccion+"</td> <td>"+sexo+"</td> </tr>";
    const nuevo={cedula:cedula,nombre:nombre,apellido:apellido, telefono: telefono, email: email, barrio: barrio, direccion:direccion, sexo:sexo}
    tabla.push(nuevo)
}