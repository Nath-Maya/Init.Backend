//! HANDS OF LAB - CLASE 3
/*
Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
*/

class TicketManager {
  constructor() {
    this.eventos = [];
    this.precioBaseDeGanancias = 0;
  }

  //Metodo

  getEventos() {
    return this.eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    //Al precio se le incrementa un 0.15 del valor inicial
    precio += precio * 0.15;

    //verifica la longitur de eventos y le suma 1
    const eventoId = this.eventos.length + 1;

    const participantes = [];

    const evento = {
      id: eventoId,
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes,
    };

    this.eventos.push(evento);
  }

  agregarUsuario(eventoId, usuarioId) {
    const eventoEncontrado = this.eventos.find(
      (evento) => evento.id === evento.id
    );
    //si el evento no fue encontrado
    if (!eventoEncontrado) {
      console.log("el evento con el id proporcionado no existe");
      return;
    }

    const participantes = eventoEncontrado.participantes;

    const usuarioRegistrado = participantes.includes(usuarioId);

    if (usuarioRegistrado) {
      console.log("El usuario esta registrado en el evento");

      return;
    }

    participantes.push(usuarioId);
    console.log("usuario ha sido registrdo");
  }

  ponerEventoGira(eventoId, nuevaLocalidad, nuevaFecha) {
    const eventoEncontrado = this.eventos.find(
      (evento) => evento.id === eventoId
    );

    if (!eventoEncontrado) {
      console.log("evento con el id proporcionado no existe");
      return;
    }

    const eventoCopiado = { ...eventoEncontrado };
    eventoCopiado.id = this.eventos.length + 1;
    eventoCopiado.lugar = nuevaLocalidad;
    eventoCopiado.fecha = nuevaFecha;
    eventoCopiado.participantes = [];
    this.eventos.push(eventoCopiado);

    console.log("el evento ha sido puesto en gira correctamente");
  }
}

const ticketManager = new TicketManager();

//* ---- Agregar eventos

ticketManager.agregarEvento(
  "concierto de rock",
  "estadio river",
  1000,
  2000,
  new Date("2023-09-15")
);
ticketManager.agregarEvento(
  "concierto de Romeo",
  "El campin",
  4000,
  1500,
  new Date("2023-10-25")
);

//* -----Obtener eventos
const eventos = ticketManager.getEventos();

//*-----Agregar usuarios

ticketManager.agregarUsuario(1, "Usuario1");
ticketManager.agregarUsuario(2, "Usuario2");

//*----- Poner evento en gira

ticketManager.ponerEventoGira(1, "Colombia", new Date("2024-02-09"));

//Obtener los eventos despues de poner en gira
const eventosActualizados = ticketManager.getEventos();

console.log("eventos: ", eventosActualizados);
