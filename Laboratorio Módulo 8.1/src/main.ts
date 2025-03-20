type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  { id: 1, nombre: "John", apellidos: "Doe", sexo: "Male", temperatura: 36.8, frecuenciaCardiaca: 80, especialidad: "Medico de familia", edad: 44 },
  { id: 2, nombre: "Jane", apellidos: "Doe", sexo: "Female", temperatura: 36.8, frecuenciaCardiaca: 70, especialidad: "Medico de familia", edad: 43 },
  { id: 3, nombre: "Junior", apellidos: "Doe", sexo: "Male", temperatura: 36.8, frecuenciaCardiaca: 90, especialidad: "Pediatra", edad: 8 },
  { id: 4, nombre: "Mary", apellidos: "Wien", sexo: "Female", temperatura: 36.8, frecuenciaCardiaca: 120, especialidad: "Medico de familia", edad: 20 },
  { id: 5, nombre: "Scarlett", apellidos: "Somez", sexo: "Female", temperatura: 36.8, frecuenciaCardiaca: 110, especialidad: "Cardiólogo", edad: 30 },
  { id: 6, nombre: "Brian", apellidos: "Kid", sexo: "Male", temperatura: 39.8, frecuenciaCardiaca: 80, especialidad: "Pediatra", edad: 11 },
];

// Apartado 1: Filtrar pacientes

const obtenerPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let resultado: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push(pacientes[i]);
    }
  }
  return resultado;
};

const obtenerPacientesPediatriaMenoresDe10 = (pacientes: Pacientes[]): Pacientes[] => {
  let resultado: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      resultado.push(pacientes[i]);
    }
  }
  return resultado;
};

// Apartado 2: Protocolo de urgencia

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      return true;
    }
  }
  return false;
};

// Apartado 3: Reasignar pacientes

const reasignarPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

// Apartado 4: Comprobar si hay pacientes en Pediatría

const existenPacientesPediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }
  return false;
};

// Apartado 5 (Opcional): Contar pacientes por especialidad

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const contarPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let conteo = { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      conteo.medicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      conteo.pediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      conteo.cardiologia++;
    }
  }

  return conteo;
};

// Pruebas
console.log("Pacientes en Pediatría:", obtenerPacientesPediatria(pacientes));
console.log("Pacientes en Pediatría menores de 10 años:", obtenerPacientesPediatriaMenoresDe10(pacientes));
console.log("¿Activar protocolo de urgencia?", activarProtocoloUrgencia(pacientes));
console.log("Pacientes reasignados a Médico de Familia:", reasignarPacientesPediatria(pacientes));
console.log("¿Hay pacientes en Pediatría?", existenPacientesPediatria(pacientes));
console.log("Número de pacientes por especialidad:", contarPacientesPorEspecialidad(pacientes));
