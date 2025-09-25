export class Configuracion {

  private static instancia: Configuracion;

  private constructor(){}

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.obtenerInstancia()) {
      this.instancia = new Configuracion();
    }

    return this.instancia;
  }
}