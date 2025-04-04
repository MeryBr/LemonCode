
# Laboratorio Módulo 13.1 - React Movimientos

Este laboratorio pertenece al módulo 13.1 del Bootcamp. El objetivo es construir una pantalla en React que mostrara claramente los movimientos bancarios de una cuenta, utilizando datos reales desde una API local (`json-server`).

## Funcionalidades implementadas

- Página dinámica que muestra los movimientos según la cuenta seleccionada (`/movements/:id`).
- Uso del layout base del proyecto con cabecera, navegación y pie de página.
- Consumo de datos reales desde dos endpoints:
  - Información general de la cuenta (`/account-list/:id`).
  - Listado detallado de movimientos (`/movements?accountId=1`).
- Captura del parámetro dinámico desde la URL con React Router y `useParams`.
- Gestión de peticiones HTTP mediante Axios.
- Uso de un ViewModel (`MovementVm`) para estructurar claramente los datos recibidos.
- Formateo específico para fechas y valores numéricos (día/mes/año y euros con comas decimales).
- Tabla estilizada con:
  - Filas alternas para facilitar la lectura.
  - Valores negativos claramente diferenciados con un espacio entre el signo menos y la cifra.
  - Diseño de cabecera según el estilo solicitado.
- Diseño responsive con scroll horizontal en pantallas pequeñas.
- Estructuración modular con componentes, estilos, ViewModels y mappers claramente separados.

## Endpoint utilizado

```
GET http://localhost:3000/movements?accountId=1
```

### Ejemplo de llamada con Axios

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

## Estructura del proyecto

```
src/
├── core/
│   ├── profile/
│   └── router/
├── layouts/
├── pages/
│   ├── account/
│   ├── account-list/
│   ├── login/
│   ├── movement-list/
│   └── transfer/
├── app.tsx
├── index.tsx
├── style.css
```

## Desarrollo y dificultades encontradas

Inicialmente se trabajó con datos mock para avanzar rápidamente en la estructura y la maquetación del componente. Posteriormente se integró con la API real (`json-server`). Uno de los principales desafíos fue manejar correctamente el `accountId` mediante `useParams` para asegurar la precisión en las llamadas a la API, además del mapeo y formato adecuado de los datos recibidos (fechas e importes).

En el aspecto visual, se dedicó tiempo a ajustar cuidadosamente la cabecera, los espacios entre secciones, el estilo del navbar y las filas alternas en la tabla. Además, se garantizó la correcta visualización en distintas resoluciones, prestando especial atención al diseño adaptable.


## Resultado visual

Se replicó la interfaz solicitada, logrando una vista funcional, estilizada y ajustada al diseño original.

![Resultado Movimientos](./public/assets/JS_13_1.png)
