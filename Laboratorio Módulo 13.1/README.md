# Bootcamp JS 2 - Laboratorio Módulo 13.1 - React Movimientos

## Punto de partida

Este módulo parte de un ejemplo anterior del Bootcamp. El objetivo es implementar una página de movimientos reales de una cuenta bancaria utilizando React.

## Funcionalidad implementada

- Página accesible desde la ruta `/movements/:id`
- Uso del layout principal de la aplicación con Header, Navbar y Footer
- Navbar con subrayado dinámico para la ruta activa
- Dos llamadas a API:
  - `/account-list/:id` para obtener la información de la cuenta
  - `/movements?accountId=1` para recuperar los movimientos
- Uso de `useParams` para obtener dinámicamente el `accountId`
- Peticiones a la API realizadas con Axios utilizando parámetros de consulta
- Creación de un ViewModel (`MovementVm`) para estructurar los datos
- Implementación de un mapper para transformar datos de API al ViewModel
- Maquetación y estilado de la tabla de movimientos de acuerdo al diseño de referencia
- Estilos personalizados:
  - Cabecera con fondo oscuro
  - Visualización del alias, IBAN y saldo disponible
  - Tabla con diseño tipo "zebra" (líneas alternas)
  - Celdas con borde blanco
- Estructura modular del proyecto con separación en carpetas
- Diseño responsive adaptado al diseño original

## Endpoint utilizado

```
GET http://localhost:3000/movements?accountId=1
```

### Ejemplo de uso de Axios

```ts
import Axios from "axios";
import { Movement } from "./movements.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
```

## ViewModel utilizado

```ts
export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  date: string;
  valueDate: string;
}
```

## Resultado visual

Se ha replicado el diseño del ejemplo proporcionado por el profesor.  
La página de movimientos muestra correctamente los datos formateados y estilizados de manera profesional.

![Resultado Movimientos](./public/assets/JS_13_1.png)
