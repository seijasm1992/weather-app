# Weather App 🌤️

Una aplicación moderna del clima desarrollada con React, Vite y TailwindCSS que muestra el pronóstico del tiempo actual, diario y por hora.

## 🚀 Características

- ✅ Búsqueda de ciudades en tiempo real
- ✅ Información del clima actual
- ✅ Pronóstico diario (7 días)
- ✅ Pronóstico por hora (24 horas)
- ✅ Detalles meteorológicos (humedad, viento, presión, visibilidad, etc.)
- ✅ Diseño moderno y responsivo
- ✅ Integración con WeatherAPI

## 🛠️ Tecnologías

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Build tool y servidor de desarrollo
- **TailwindCSS** - Framework de CSS
- **WeatherAPI** - API de datos meteorológicos
- **React Context** - Manejo de estado global

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/seijasm1992/weather-app.git
cd weather-app
```

2. Instala las dependencias:
```bash
cd weather-app
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
cd weather-app
npm run build
```

Los archivos de producción se generarán en `weather-app/dist/`

## 📝 Estructura del Proyecto

```
weather-app/
├── src/
│   ├── Components/      # Componentes React
│   ├── Context/         # Context API para estado global
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos
└── package.json
```

## 🌐 Deploy

La aplicación está configurada para desplegarse en Netlify. El archivo `netlify.toml` contiene la configuración necesaria.

## 📄 Licencia

MIT

## 👨‍💻 Autor

Desarrollado por [seijasm1992](https://github.com/seijasm1992)
