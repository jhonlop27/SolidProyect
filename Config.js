
function agregarCliente() {
  // Obtener el valor del nuevo cliente desde el cuadro de texto
  var nuevoCliente = document.getElementById('nuevoCliente').value;

  // Validar si se ingresó un cliente antes de agregarlo
  if (nuevoCliente.trim() !== '') {
    // Crear una nueva fila en la tabla
    var nuevaFila = document.createElement('tr');

    // Crear celdas para cada columna
    var celdaCliente = document.createElement('td');
    celdaCliente.textContent = nuevoCliente;

    // Puedes agregar más celdas según sea necesario

    // Agregar las celdas a la nueva fila
    nuevaFila.appendChild(celdaCliente);

    // Puedes agregar más celdas según sea necesario

    // Agregar la nueva fila a la tabla
    document.querySelector('#miTabla tbody').appendChild(nuevaFila);

    // Limpiar el cuadro de texto después de agregar el cliente
    document.getElementById('nuevoCliente').value = '';
  } else {
    // Mostrar un mensaje de error si no se ingresó un cliente
    alert('Por favor, ingrese un nuevo cliente.');
  }
}

