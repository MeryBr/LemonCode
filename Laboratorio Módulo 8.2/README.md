# Laboratorio Módulo 8.2 - Array Methods

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

***USAREMOS ARRAY METHODS EN LUGAR DE BUCLES***

## Apartado 1

### a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};


### b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};


## Apartado 2

### c) Queremos activar el protocolo de urgencia si alguno de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};


## Apartado 3

### d) El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de médico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) =>
    paciente.especialidad === "Pediatra"
      ? { ...paciente, especialidad: "Medico de familia" }
      : paciente
  );
};


## Apartado 4

### e) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobamos si en la lista hay algún paciente asignado a pediatría.

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};


## Apartado OPCIONAL 5

### Queremos calcular el número total de pacientes que están asignados a la especialidad de Médico de familia, y lo que están asignados a Pediatría y a Cardiología.

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (contador, paciente) => {
      switch (paciente.especialidad) {
        case "Medico de familia":
          contador.medicoDeFamilia++;
          break;
        case "Pediatra":
          contador.pediatria++;
          break;
        case "Cardiólogo":
          contador.cardiologia++;
          break;
      }
      return contador;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );
};
