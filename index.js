alert(
  "Esta es la Segunda entrega de mi proyecto final: La idea es hacer una calculadora que calcula cuánto tiene que pagar cada uno en una cuenta de restaurant agregando la propina."
);

alert("Se usará todas las herramientas aprendidas hasta ahora en la cátedra");

// Definimos un array para guardar las cuentas calculadas
const cuentas = [];

// Función para calcular el monto individual
function calcularMontoIndividual() {
  let repetir = true;

  while (repetir) {
    // Solicitar el monto total de la cuenta
    let monto = parseFloat(
      prompt("¿Cuál es el valor total de la cuenta a pagar?")
    );

    // Validar el monto
    if (isNaN(monto) || monto <= 0) {
      alert(
        "El monto debe ser un número válido mayor a 0. Por favor, inténtalo de nuevo."
      );
      continue;
    }

    // porcentaje de propina
    let propina = parseFloat(
      prompt(
        "¿Qué porcentaje de propina te gustaría dejar? (Por ejemplo: escribe 15 para el 15%)"
      )
    );

    // Validar el porcentaje de propina
    if (isNaN(propina) || propina < 0) {
      alert(
        "El porcentaje de propina debe ser un número válido mayor o igual a 0. Por favor, inténtalo de nuevo."
      );
      continue;
    }

    // número de personas
    let personas = parseInt(
      prompt("¿Entre cuántas personas se dividirá la cuenta?")
    );

    // Validar el número de personas
    if (isNaN(personas) || personas <= 0) {
      alert(
        "El número de personas debe ser un número válido mayor a 0. Por favor, inténtalo de nuevo."
      );
      continue;
    }

    // Calcular el total con propina y el monto individual
    let totalConPropina = monto + monto * (propina / 100);
    let montoPorPersona = totalConPropina / personas;

    // Redondear los resultados a 2 decimales
    totalConPropina = totalConPropina.toFixed(2);
    montoPorPersona = montoPorPersona.toFixed(2);

    // Crear un objeto para almacenar los detalles de la cuenta
    const cuenta = {
      monto,
      propina,
      personas,
      totalConPropina,
      montoPorPersona,
    };

    // Guardar la cuenta en el array
    cuentas.push(cuenta);

    // Mostrar el resumen al usuario
    alert(`
      Check-out:
      - Monto total de la cuenta: $${monto.toFixed(2)}
      - Porcentaje de propina elegido: ${propina}%
      - Número de personas: ${personas}
      - Total a pagar (incluyendo propina): $${totalConPropina}
      - Cada persona debe pagar: $${montoPorPersona}
    `);

    // Preguntar si quieren hacer otra cuenta
    let otraOperacion;

    while (otraOperacion !== "si" && otraOperacion !== "no") {
      otraOperacion = prompt(
        "¿Querés realizar otra operación? (si/no)"
      ).toLowerCase();
      if (otraOperacion !== "si" && otraOperacion !== "no") {
        alert("Por favor, responde con 'si' o 'no'.");
      }
    }

    if (otraOperacion === "no") {
      repetir = false;
      mostrarCuentas();
      alert("Fin de simulación.");
    }
  }
}

// Función para mostrar todas las cuentas calculadas
function mostrarCuentas() {
  if (cuentas.length === 0) {
    alert("No hay cuentas registradas.");
    return;
  }

  const filtroPropinaAlta = cuentas.filter((cuenta) => cuenta.propina > 20);
  let mensaje = "Resumen de cuentas:\n";

  cuentas.forEach((cuenta, index) => {
    mensaje += `Cuenta ${index + 1}:\n`;
    mensaje += `  - Monto: $${cuenta.monto.toFixed(2)}\n`;
    mensaje += `  - Propina: ${cuenta.propina}%\n`;
    mensaje += `  - Personas: ${cuenta.personas}\n`;
    mensaje += `  - Total: $${cuenta.totalConPropina}\n`;
    mensaje += `  - Por persona: $${cuenta.montoPorPersona}\n\n`;
  });

  if (filtroPropinaAlta.length > 0) {
    mensaje += "\nCuentas con propina mayor al 20%:\n";
    filtroPropinaAlta.forEach((cuenta, index) => {
      mensaje += `  Cuenta ${index + 1}: Monto $${cuenta.monto.toFixed(
        2
      )}, Propina ${cuenta.propina}%.\n`;
    });
  }

  alert(mensaje);
}

// Iniciar la simulación
calcularMontoIndividual();
