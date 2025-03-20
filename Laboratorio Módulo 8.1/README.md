# Laboratorio Módulo 8.1 - Bucles  

Este ejercicio consiste en trabajar con una lista de pacientes de un hospital, utilizando bucles `for` para recorrer y modificar los datos.  

---

## Apartado 1: Filtrar pacientes  

### a) Pacientes asignados a Pediatría  
Obtener la lista de pacientes que están en la especialidad de Pediatría.  

```typescript
const obtenerPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    let resultado: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            resultado.push(pacientes[i]);
        }
    }
    return resultado;
};

```

### b) Pacientes en Pediatría menores de 10 años
Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

```typescript
const obtenerPacientesPediatriaMenoresDe10 = (pacientes: Pacientes[]): Pacientes[] => {
    let resultado: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
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
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
            return true;
        }
    }
    return false;
};
```

---

## Apartado 3: Reasignar pacientes

### d) Reasignar pacientes de Pediatría a Medicina de Familia
El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

```typescript
const reasignarPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientes[i].especialidad = "Medico de familia";
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
const existenPacientesPediatria = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
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
```
