alert(
  "Esta es la primera entrega de mi proyecto final: La idea es hacer una calculadora que calcula cuanto tiene que pagar cada uno en una cuenta de restaurant agregando la proprina."
);
alert(
  "Para esta primera version se supone que cada uno va a pagar la cuenta de una manera uniforme"
);
alert(
  "Se usará todas las herramientas aprendidas hasta ahora en la catedra"
);

// Inicio de simulacion

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
      continue; // Regresa al inicio del ciclo si hay algun error
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
      continue; // mismo objetivo del continue anterior
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
      continue; // mismo objetivo del continue anterior
    }

    // total con propina
    let totalConPropina = monto + monto * (propina / 100);
    let resultado = totalConPropina / personas;

    // Redondear los resultados a 2 decimales
    totalConPropina = totalConPropina.toFixed(2);
    resultado = resultado.toFixed(2);

    // Mostrar el resumen al usuario
    alert(`
          Check-out:
          - Monto total de la cuenta: $${monto.toFixed(2)}
          - Porcentaje de propina elegido: ${propina}%
          - Número de personas: ${personas}
          - Total a pagar (incluyendo propina): $${totalConPropina}
          - Cada persona debe pagar: $${resultado}
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
      repetir = false; // Salir del ciclo
      alert("Fin de simulación.");
    }
  }
}

// Llamar a la función
calcularMontoIndividual();
