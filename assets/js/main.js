//borde on click//
const borde = () => {
  const foto = document.querySelector("#borde");
  console.log(foto.style.border);
  if (foto.style.border == "0px" || foto.style.border == "") {
    foto.style.border = "7px outset #c8c8c8";
    foto.style.borderRadius = "8%";
    foto.style.boxShadow = "0vh 0vh 30vh 0vh #77ccff";
  } else if (foto.style.border == "7px outset rgb(200, 200, 200)") {
    foto.style.border = "0px";
    foto.style.boxShadow = "0vh 0vh 0vh 0vh #c8c8c8";
  }
};

//verificar cantidad//
const verificar = () => {
  const cantidad1 = document.querySelector("#cantidad1").value;
  const cantidad2 = document.querySelector("#cantidad2").value;
  const cantidad3 = document.querySelector("#cantidad3").value;
  const verificar = parseInt(cantidad1) + parseInt(cantidad2) + parseInt(cantidad3);
  if(!isNaN(verificar)){
    console.log(verificar);
    if (verificar <= 10 && verificar > 0) {
      document.querySelector("#diez").innerHTML =
        "Cantidad de productos: " +
        verificar +
        " / 10 Muy bien! <br> Puedes llevarlos contigo";
    } else if(verificar > 10) {
      document.querySelector("#diez").innerHTML ="Cantidad de productos: " + verificar +
        " / 10 <br> Hey!<br> Te dije que te las verías conmigo, <br> puedes llevar hasta 10";
    }
  }
  else {
    alert("Tienes que ingresar un número :D");
  }
};

//select password//
const ingresar = () => {
  const select1 = document.querySelector("#select1").value;
  const select2 = document.querySelector("#select2").value;
  const select3 = document.querySelector("#select3").value;
  const password = select1 + select2 + select3;
  console.log(password);
  if (password == "911") {
    document.querySelector("#ingresar").innerHTML = "Descubriste mi contraseña! Bienvenido. Password 1 Correcta";
    document.querySelector("#ingresar").style.color = "green";
  } 
  else if (password == "714") {
    document.querySelector("#ingresar").innerHTML = "Bien! Eres un genio! Bienvenido. Password 2 Correcta";
    document.querySelector("#ingresar").style.color = "green";
  }
  else {
    document.querySelector("#ingresar").innerHTML = "No, no, no... Intenta de nuevo Password Incorrecto";
    document.querySelector("#ingresar").style.color = "red";
  }
}



