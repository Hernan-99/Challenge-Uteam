# Challenge UTeam

La prueba tecnica consisitia en desarrollar una REST API para gestionar consultas de personas en relacion a peliculas

## Tecnologías utilizadas

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/es)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

---

## Indice

1. [Instalación](#instalación)
2. [Requisitos](#requisitos)
3. [Configuración](#configuración)
4. [Uso](#uso)
5. [Rutas API](#rutas-api)
6. [Ejemplos de Peticiones](#ejemplos-de-peticiones)

### Instalacion

Pasos a seguir:

1. Clonar el repo: http...

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

2. Posicionarse en el directorio del proyecto:

```bash
cd nombre-app
```

3. Instalar dependencias

```bash
npm install
```

4. Iniciar server

```bash
npm run dev
```

### Requisitos

Tecnologias necesarias:

- Node.js (v16 o superior)
- npm (v7 o superior)

---

### Uso

Herramientas para realizar las peticiones a las rutas de la API:

- **Thunderclient** (utilizada).
- **Postman.**
- **Insomnia.**

Las solicitudes **POST**, **PUT** y **PATCH** deben enviarse en formato JSON.

- **POST:** todos los datos son requeridos
- **PUT:** para realizar actualizaciones totales.
- **POST:** para realizar actualizaciones parciales.

Las solicitu **GET** devuelven los datos de la API en formato JSON.

---

### Rutas API

#### Para users (personas)

##### GET /users

Recupera la lista completa de usuarios ordenados por apellido y nombre. Por default, hay un item cargado.

- Ejemplo de peticion:

**GET** | http://localhost:3000/users

**Respuesta**

```json
[
  {
    "id": 1,
    "first-name": "Pablo",
    "last-name": "lamberti",
    "birthdate": "1987-04-03",
    "has-insurance": false,
    "favourite-movies": [
      {
        "title": "The Lord of the Rings",
        "genre": "fantasy"
      },
      {
        "title": "Pulp Fiction",
        "genre": "action"
      }
    ]
  }
]
```

##### GET /users/1

Recupera un usuario por id.

- Ejemplo de peticion:

**GET** | http://localhost:3000/users/1

**Respuesta**

```json
[
  {
    "id": 1,
    "first-name": "Pablo",
    "last-name": "lamberti",
    "birthdate": "1987-04-03",
    "has-insurance": false,
    "favourite-movies": [
      {
        "title": "The Lord of the Rings",
        "genre": "fantasy"
      },
      {
        "title": "Pulp Fiction",
        "genre": "action"
      }
    ]
  }
]
```

##### GET /users/search?name="nombre_usuario"

Recupera un usuario por su nombre.

- Ejemplo de peticion:

**GET** | http://localhost:3000/users/search?name=pablo

**Respuesta**

```json
[
  {
    "id": 1,
    "first-name": "Pablo",
    "last-name": "lamberti",
    "birthdate": "1987-04-03",
    "has-insurance": false,
    "favourite-movies": [
      {
        "title": "The Lord of the Rings",
        "genre": "fantasy"
      },
      {
        "title": "Pulp Fiction",
        "genre": "action"
      }
    ]
  }
]
```

---

##### POST /users

Crea un nuevo usuario (persona).

- Se debe enviar un JSON con los datos del usuario:

- Ejemplo de peticion
  **POST** | http://localhost:3000/users

```json
{
  "first-name": "Jane",
  "last-name": "Doe",
  "birthdate": "2013-08-16",
  "has-insurance": true,
  "favourite-movies": [{ "title": "Son como niños", "genre": "comedia" }, {}]
}
```

---

##### PUT /users/:id

Actualiza toda la información de un usuario (persona) específico.

- Se debe enviar un JSON con los todos datos del usuario:

- Ejemplo de peticion
  **PUT** | http://localhost:3000/users

```json
{
  "first-name": "John",
  "last-name": "Doe",
  "birthdate": "1990-02-01",
  "has-insurance": false,
  "favourite-movies": ["Inception", "The Matrix", "Interstellar"]
}
```

##### PATCH /users/:id

Actualiza parcialmente la información de un usuario (persona) específico.

- Se debe enviar un JSON con los datos que se desean modificar del usuario:

- Ejemplo de peticion:
  **PATCH** | http://localhost:3000/users/1

```json
{
  "first-name": "Manuel"
}
```

---

##### DELETE /users/:id

Elimina un usuario (persona) en especifico segun el id.

- Se debe pasar el id en url

- Ejemplo de peticion:
  **DELETE** | http://localhost:3000/users/1

- Respuesta

```json
[]
```

---

---

---

#### Para movies (peliculas)

##### GET /users/:id/movies

Recupera todas las peliculas asiciadas al usuario con elid.

- Ejemplo de peticion

**GET** | http://localhost:3000/users/1/movies

- respuesta

```json
[
  {
    "title": "The Lord of the Rings",
    "genre": "fantasy"
  },
  {
    "title": "Pulp Fiction",
    "genre": "action"
  }
]
```

---

##### POST /users/:id/movies

Crea peliculas pera un usuario (persona) en particulas segun el id. Los datos deben enviarse en formato json.

- Ejemplo de peticion

**POST** | http://localhost:3000/users/1/movies

- respuesta

```json
{
  "title": "Inception",
  "genre": "sci-fi"
}
```

---

##### DELETE /users/:id/movies

Elimina peliculas pera un usuario (persona) en particulas segun el id. El id debe pasarse en la url

- Ejemplo de peticion

**DELETE** | http://localhost:3000/users/1/movies

- respuesta

```json
{
  "id": 1,
  "first-name": "pablo",
  "last-name": "lamberti",
  "birthdate": "1987-04-03",
  "has-insurance": false,
  "favourite-movies": [
    {
      "title": "The Lord of the Rings",
      "genre": "fantasy"
    }
  ]
}
```
