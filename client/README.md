# Mercado Pago - Frontend

Este repositorio contiene el frontend del proyecto **Mercado Pago**, desarrollado con tecnologías modernas para ofrecer una interfaz de usuario interactiva y dinámica.

## Tecnologías Utilizadas

- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas para una experiencia de navegación fluida.
- **Axios**: Cliente HTTP para la comunicación con el backend.
- **CSS Modules**: Estilos modulares para un diseño limpio y reutilizable.
- **Context API**: Manejo global del estado de la aplicación.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/): Gestores de paquetes.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Martin-Juncos/Mercado-Pago.git
   cd Mercado-Pago/client
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_PUBLIC_KEY=tu_public_key
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm start
   # o
   yarn start
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

```plaintext
client/
├── public/         # Archivos públicos
├── src/            # Código fuente
│   ├── components/ # Componentes reutilizables
│   ├── pages/      # Páginas principales
│   ├── context/    # Manejo del estado global
│   ├── styles/     # Archivos de estilos
│   └── utils/      # Funciones y utilidades
├── .env            # Variables de entorno
├── package.json    # Configuración del proyecto
└── README.md       # Documentación
```

## Funcionalidades Principales

- **Integración con API de Mercado Pago**: Interfaz para realizar pagos de manera segura.
- **Carrito de Compras**: Gestión de productos seleccionados por el usuario.
- **Autenticación**: Registro e inicio de sesión de usuarios.
- **Navegación Dinámica**: Rutas protegidas y públicas según el estado del usuario.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start` o `yarn start`: Inicia el servidor de desarrollo.
- `npm run build` o `yarn build`: Genera una versión optimizada para producción.
- `npm test` o `yarn test`: Ejecuta las pruebas unitarias (si están configuradas).

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y confirma los commits.
4. Envía un Pull Request.

## Licencia

Este proyecto está bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Puedes usarlo, modificarlo y distribuirlo libremente.

---

Para más información sobre el proyecto, revisa la [documentación del backend](../api/README.md).
