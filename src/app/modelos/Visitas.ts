export class Visitas {
    id: number;
    matricula: number;
    dni: number;
    idlugar: number;
    fechavisita: number;

    constructor(
      id: number,
      matricula: number,
      dni: number,
      idlugar: number,
      fechavisita: number,
    ) {
      this.id = id;
      this.matricula = matricula;
      this.dni = dni;
      this.idlugar = idlugar;
      this.fechavisita = fechavisita;
    }
  }
  