# Backend - Mercado Pago Integration

Este repositorio contiene el backend del proyecto de integración con Mercado Pago, desarrollado con Node.js y Express. Su propósito es gestionar las solicitudes, procesar pagos y manejar la lógica del servidor para la aplicación.

---

## 🚀 Características

- **Integración con Mercado Pago:** Implementación de pagos a través de la API de Mercado Pago.
- **API REST:** Endpoints diseñados para manejar las operaciones relacionadas con el flujo de pagos.
- **Seguridad:** Validación de datos y manejo de claves de acceso.
- **Modularidad:** Código organizado de manera clara y accesible.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para crear la API.
- **dotenv**: Gestión de variables de entorno.
- **Mercado Pago SDK**: Biblioteca oficial para integraciones de pagos.

## ⚙️ Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Martin-Juncos/Mercado-Pago.git
```

### 2. Instalar Dependencias

```bash
cd api
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente formato:

```env
PORT=3001
MERCADOPAGO_ACCESS_TOKEN=tu_access_token
```

### 4. Iniciar el Servidor

```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`.

---

## 📚 Endpoints

### 1. **GET /**

Verifica el estado del servidor.

- **Respuesta**:

```json
"Mercadopago API"
```

### 2. **POST /create_preference**

Crea una preferencia de pago en Mercado Pago.

- **Body**:

```json
{
  "title": "Producto",
  "quantity": 1,
  "unit_price": 100
}
```

- **Respuesta**:

```json
{
  "id": "id_de_la_preferencia"
}
```

---

## 🧪 Pruebas

Ejecuta las pruebas utilizando:

```bash
npm test
```

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](../LICENSE) para más información.

---

## 📩 Contacto

Si tienes dudas o sugerencias, no dudes en contactar a **Martin Juncos**.
