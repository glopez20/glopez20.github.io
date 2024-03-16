const STATES = {
  CREATED: "NUEVO",
  READY: "LISTO",
  WAITING: "EN ESPERA",
  RUNNING: "EN EJECUCIÓN",
  TERMINATED: "TERMINADO",
};

class Process {
  #id;
  #nombre;
  #prioridad;
  #tiempo_ejecucion;
  #subprocesos;
  #estado;

  constructor(id, nombre, prioridad, tiempo_ejecucion) {
    this.#id = id;
    this.#nombre = nombre;
    this.#prioridad = prioridad;
    this.#tiempo_ejecucion = tiempo_ejecucion;
    this.#estado = STATES.CREATED;
  }

  get_id() {
    return this.#id;
  }

  get_nombre() {
    return this.#nombre;
  }

  get_prioridad() {
    return this.#prioridad;
  }

  get_tiempo_ejecucion() {
    return this.#tiempo_ejecucion;
  }

  get_subprocesos() {
    return this.#subprocesos;
  }

  get_estado() {
    return this.#estado;
  }
}
