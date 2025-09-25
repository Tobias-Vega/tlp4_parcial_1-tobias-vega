interface IEquipo {
  detalles(): string
}

class Servidor implements IEquipo {
  
  constructor(
    private tipo: string,
    private nombre: string, 
    private ram: string, 
    private procesador: string
  ) {

  }

  detalles() {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {

  crearEquipo(type: string, nombre: string, ram: string, procesador: string): IEquipo
   {
    if (type === "Servidor") {
      return new Servidor(type, nombre, ram, procesador);
    }
    throw new  Error("Equipo no soportado");
  }
}

const factory = new EquipoFactory();

const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());