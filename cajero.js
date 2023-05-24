var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "abcd" },
  ];
  
  function iniciarSesion() {
    var seleccion = document.getElementById("cuentas").value;
    var password = document.getElementById("password").value;
  
    var cuenta = cuentas[seleccion];
  
    if (cuenta && cuenta.password === password) {
      mostrarOpciones(cuenta);
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
    }
  }
  
  function mostrarOpciones(cuenta) {
    document.getElementById("iniciar-sesion").style.display = "none";
    document.getElementById("opciones").style.display = "block";
  
    document.getElementById("saldo-actual").innerText =
      "Saldo actual: $" + cuenta.saldo;
  }
  
  function consultarSaldo() {
    var seleccion = document.getElementById("cuentas").value;
    var cuenta = cuentas[seleccion];
    alert("Saldo actual: $" + cuenta.saldo);
    document.getElementById("saldo-actual").innerText =
      "Saldo actual: $" + cuenta.saldo;
  }
  
  function ingresarMonto() {
    var seleccion = document.getElementById("cuentas").value;
    var cuenta = cuentas[seleccion];
  
    var monto = parseFloat(prompt("Ingrese el monto a ingresar:"));
    if (!isNaN(monto)) {
      if (monto > 0 && cuenta.saldo + monto <= 990) {
        cuenta.saldo += monto;
        alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuenta.saldo);
      } else if (monto <= 0) {
        alert("El monto debe ser mayor a 0.");
      } else {
        alert(
          "El monto ingresado supera el límite permitido. El saldo máximo es $990."
        );
      }
    } else {
      alert("Monto inválido. Intenta nuevamente.");
    }
  }
  
  function retirarMonto() {
    var seleccion = document.getElementById("cuentas").value;
    var cuenta = cuentas[seleccion];
  
    var monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (!isNaN(monto)) {
      if (
        monto > 0 &&
        cuenta.saldo - monto >= 10 &&
        cuenta.saldo - monto <= 990
      ) {
        cuenta.saldo -= monto;
        alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + cuenta.saldo);
      } else if (monto <= 0) {
        alert("El monto debe ser mayor a 0.");
      } else {
        alert(
          "Monto inválido. Asegúrate de que el monto cumpla con las restricciones."
        );
      }
    } else {
      alert("Monto inválido. Intenta nuevamente.");
    }
  }