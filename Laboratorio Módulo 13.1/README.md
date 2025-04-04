# Laboratorio React - Módulo 13.1 - Movimientos

## Introducción

Este proyecto es parte del módulo 13.1 del laboratorio de React. El objetivo principal es implementar la pantalla de movimientos de una cuenta bancaria, integrando una API externa, el sistema de rutas y estilos personalizados usando React.

El desarrollo parte de un ejemplo previo proporcionado por el Bootcamp. Se ha adaptado y extendido para cumplir con los requisitos de esta práctica, incluyendo consumo de APIs, maquetación, y estructura modular.

## Funcionalidades implementadas

- Pantalla de movimientos accesible desde `/movements/:id`
- Componente `MovementListPage` que se encarga de cargar y renderizar los datos
- Componente `MovementListComponent` para mostrar los movimientos en una tabla
- Uso del layout principal de la aplicación (`App`)
- Llamadas a dos APIs: una para la información de la cuenta, otra para los movimientos
- Llamadas a API usando `accountId` como parámetro de consulta
- Transformación de los datos de la API a un formato de ViewModel
- Estilos aplicados a la tabla con soporte visual para valores negativos
- Routing configurado con `react-router-dom`
- Datos reales servidos desde un `json-server` local

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

Otros elementos relevantes:
- `.env`, `index.html`, `README.md`, `vite.config.ts`, `tsconfig.json`
- Carpetas: `public/`, `server/`, `config/`, `test/`, `dist/`, `node_modules/`

## Endpoint utilizado

```
GET http://localhost:3000/movements?accountId=1
```

## ViewModel

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

### Mapeo de API a ViewModel

```ts
{
  id: m.id,
  description: m.description,
  amount: `${m.amount.toFixed(2)} €`,
  balance: `${m.balance.toFixed(2)} €`,
  date: formatDate(m.transaction),
  valueDate: formatDate(m.realTransaction),
}
```

## Estilos clave

```css
.movements-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  table-layout: fixed;
  word-wrap: break-word;
}

.movements-table th,
.movements-table td {
  border: 1px solid var(--element-border-color);
  padding: 0.75rem;
  text-align: left;
}

.negative {
  color: red;
}

.movements-container {
  overflow-x: auto;
}
```

## Resultado

La página de movimientos muestra correctamente los datos formateados, incluyendo fechas legibles, importes en euros, y estilos aplicados. Se usó `json-server` para cargar los datos reales, y la maquetación se adaptó visualmente al diseño proporcionado.

![Resultado Movimientos](./public/assets/JS_13_1.png)
