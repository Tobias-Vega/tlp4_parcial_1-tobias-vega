type Equipo = {
  nombre: string;
  color: string;
  estado: string
}

class InventarioViejo {

  private listaEquipos: Equipo[]  = [];

  añadirEquipo(nombre: string, color: string, estado: string) {
    return this.listaEquipos.push({ nombre, color, estado });
  }

  obtenerEquipos() {
    return this.listaEquipos;
  }

}

class AdaptadorInventario {
  private inventarioViejo: InventarioViejo;

  constructor(service: InventarioViejo) {
    this.inventarioViejo = service;
  }

  agregarEquipo(nombre: string, color: string, estado: string, ) {
    return this.inventarioViejo.añadirEquipo(nombre, color, estado);
  }

  listarEquipos() {
    return this.inventarioViejo.obtenerEquipos();
  }

}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());