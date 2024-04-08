/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App'; // Comentario: Importación de un componente de la aplicación, pero está comentado

import Cat from "./components/Cat"; // Importación del componente Cat desde la ruta ./components/cat

import {name as appName} from './app.json'; // Importación del nombre de la aplicación desde el archivo app.json

// Registro del componente Cat como el componente principal de la aplicación
AppRegistry.registerComponent(appName, () => Cat);
