# Mercado Pago Integration

Este repositorio contiene una integración con la plataforma de pagos Mercado Pago. Permite realizar pagos de manera simple y segura utilizando la API de Mercado Pago.

## ¿Cómo Funciona?

### Visión General

Este proyecto está diseñado para facilitar los pagos en tu aplicación utilizando Mercado Pago. Aquí te explicamos los pasos básicos:

- **Configuración de Mercado Pago**: Configura tu cuenta de Mercado Pago y obtén tus credenciales (clave pública y token de acceso).
- **Inicialización**: Inicializa la biblioteca de Mercado Pago en tu aplicación con tu clave pública.
- **Procesamiento de Pagos**: Utiliza las API de Mercado Pago para procesar pagos desde tu aplicación, gestionando las respuestas y estados de pago.

## Configuración del Proyecto

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Martin-Juncos/Mercado-Pago.git
cd Mercado-Pago
```

### 2. Instalar Dependencias

Instala las dependencias necesarias utilizando npm:

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Mercado Pago:

```
VITE_MERCADOPAGO_PUBLIC_KEY=tu_clave_publica_de_mercadopago
VITE_MERCADOPAGO_ACCESS_TOKEN=tu_token_de_acceso_de_mercadopago
```

Reemplaza `tu_clave_publica_de_mercadopago` y `tu_token_de_acceso_de_mercadopago` con tus credenciales reales.

### 4. Iniciar el Proyecto

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## ¿Cómo Probarlo?

Para probar la integración de Mercado Pago:

1. **Configura un Producto para la Prueba**: Asegúrate de tener un producto configurado en tu aplicación para realizar una transacción de prueba.
2. **Realiza una Transacción de Prueba**: Utiliza la funcionalidad de tu aplicación para realizar una compra, simulando el proceso de pago.
3. **Verifica el Pago**: Asegúrate de que el pago se procese correctamente y verifica las respuestas de la API de Mercado Pago.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, revisa el archivo [LICENSE](LICENSE).

## Contacto

Para cualquier duda o consulta, por favor abre un issue en el repositorio o contacta a [Martin Juncos](https://github.com/Martin-Juncos).

Made by Prof. Martin with a lot of 💖 and ☕
