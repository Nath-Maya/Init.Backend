//! HANDS OF LAB - CLASE 3

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
