# Laboratorio Módulo 8.1 - Bucles

Estamos desarrollando un software hospitalario que permitirá realizar diversas operaciones sobre una lista de pacientes, utilizando bucles (`for`, `while`) para manipular y filtrar datos.

---

## Apartado 1: Filtrar pacientes

### a) Pacientes asignados a Pediatría
Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría.

```typescript
const obtenPacientesAsignadosAPediatria = (pacientes: Paciente[]): Paciente[] => {
    const pacientesPediatria: Paciente[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatría") {
            pacientesPediatria.push(pacientes[i]);
        }
    }

    return pacientesPediatria;
};
```

### b) Pacientes en Pediatría menores de 10 años
Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

```typescript
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Paciente[]): Paciente[] => {
    const resultado: Paciente[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatría" && pacientes[i].edad < 10) {
            resultado.push(pacientes[i]);
        }
    }

    return resultado;
};
```

---

## Apartado 2: Protocolo de urgencia

### c) Activar protocolo si es necesario
Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

```typescript
const activarProtocoloUrgencia = (pacientes: Paciente[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
            return true;
        }
    }

  return activarProctolo;
};
```

---

## Apartado 3: Reasignar pacientes

### d) Reasignar pacientes de Pediatría a Medicina de Familia
El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

```typescript
const reasignaPacientesAMedicoFamilia = (pacientes: Paciente[]): Paciente[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatría") {
      pacientes[i].especialidad = "Medicina de Familia"; 
    }
  }

  return pacientes; 
};
```

---

## Apartado 4: Comprobar pacientes de Pediatría

### e) ¿Se puede mandar al pediatra a casa?
Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.

```typescript
const hayPacientesEnPediatria = (pacientes: Paciente[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatría") {
            return true;
        }
    }

    return false;
};
```

---

## Apartado Opcional 5: Contar pacientes por especialidad

### f) Contar el número de pacientes por especialidad
Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología.

```typescript
interface NumeroPacientesPorEspecialidad {
    medicinaDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Paciente[]): NumeroPacientesPorEspecialidad => {
    const conteo: NumeroPacientesPorEspecialidad = {
        medicinaDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };

    for (let i = 0; i < pacientes.length; i++) {
        switch (pacientes[i].especialidad) {
            case "Medicina de Familia":
                conteo.medicinaDeFamilia++;
                break;
            case "Pediatría":
                conteo.pediatria++;
                break;
            case "Cardiología":
                conteo.cardiologia++;
                break;
        }
    }

    return conteo;
};
```
