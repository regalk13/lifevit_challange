# Reto React Native

[🇪🇸](https://github.com/regalk13/reactNative_challenge/blob/main/README.md) [🇺🇸](https://github.com/regalk13/reactNative_challenge/blob/main/README.md)

Esta aplicación consiste en el desarrollo móvil utilizando el framework de React Native, para el caso de una app médica, en donde se tiene una serie de sensores con conectividadBluetooth con diferentes proveedores. La aplicación se encarga del manejo de datos por el operario, al cual se le asigna una serie de pacientes, que a su vez, cada paciente tienen asignados unos sensores registrados desde la
aplicación central por su identificador MAC, permitiendo tomar de manera independiente los datos de ese sensor. Una vez capturada la información del paciente y confirmada su envío.

## Como correr la aplicación

La aplicación puede ser facilmente desplegada con ayuda de npx react-native, para más información vease este [documento](https://reactnative.dev/docs/environment-setup)

### Desplegala en vivo

Primero instala todas las dependencias necesarias (usa [INSTALL.MD](https://github.com/regalk13/reactNative_challenge/blob/main/INSTALL.md) para mas soporte): 
```
npm install
```

Para el uso de la API, necesitas el SECRET KEY, tienes que añadirlo en un archivo llamado .env, el cual debe estar en el principio del proyecto:

.env:
```env
SECRET=xxxxxx
```
(Si no se añade este archivo la subida de datos no funcionara!)

Para el siguiente paso necesitas un dispositivo en el cual probar la aplicación, puedes usar uno fisico o crear un ADB. Android Studio hace este proceso muy sencillo.

```
npx react-native start
```

Escoge la opción de android y la app se abrira en el dispositivo que tengas configurado.

### Instala el APK

Tambien puedes instalar el APK directamente en un dispositivo. Puedes encontrarla [aquí](https://github.com/regalk13/reactNative_challenge/releases/tag/1.0)

## Dispositivos y datos adquiridos View

Demostración de capacidad de conceptos:
- Funcionalidad de Vista Previa y de
Eliminación de los datos adquiridos
- Funcionalidad de envío del frame de datos
capturados al API y la confirmación de su
envío

<img src="https://github.com/regalk13/reactNative_challenge/blob/main/2023-08-14_07-45.png?raw=true" width=350>

En esta vista se usan multiples componentes, para generar el estilo de la misma. 

Por ejemplo (NavBar): 
```ts
const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icons_container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={16} color="#fff" />
        </Pressable>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={18} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.title_container}>
        <Image
          source={require('../iconos/logo.png')}
          style={{width: 120, height: 120}}
        />

        <View style={{display: 'flex'}}>
          <Text style={styles.text}>GESTIONA</Text>
          <Text style={{fontSize: 20, color: '#fff', lineHeight: 20}}>
            SALUD
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#0b73c2',
    maxHeight: 190,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  icons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    paddingBottom: 0,
  },

  title_container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 33,
    color: '#fff',
  },
});
```
La parte logica que maneja esta vista es el envío de información al servidor. Se hace por medio de un pressable, que llama la siguiente función:

```ts
  handlePress = () => {
    try {
      const pulsi = require('../Datasensores/pulsi.json');
      let oxy = pulsi['data']['blood_oxygen'];
      const tensio = require('../Datasensores/tensio.json');

      let sys = tensio['data']['high_pressure'];
      let dia = tensio['data']['low_pressure'];
      let pulso = tensio['data']['heart_rate'];
      let latitude = tensio['latitude'];
      let longitud = tensio['longitud'];

      const customData = require('../Datasensores/temp.json');
      let temp = customData['data']['temperature'];

      const raw = JSON.stringify({
        secret: SECRET,
        type: 'set',
        target: 'sensor',
        business_id: 1000,
        user_id: 5,
        patient_id: 11,
        device_id: 111,
        latitude: latitude,
        longitude: longitud,
        device_time: new Date().toISOString().slice(0, 19).replace('T', ' '), // '2021-05-04 12:00:00',
        data: {
          temperature: temp,
          high_pressure: sys,
          low_pressure: dia,
          heart_rate: pulso,
          blood_oxygen: oxy,
        },
      });

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: 'follow',
      };

      fetch('https://idco.com.co/sensors2/api.php', requestOptions)
        .then(response => response.text())
        .catch(error => console.log('API REQUEST', error));
      Alert.alert('Enviado', 'La información se ha enviado!');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'No fue enviado',
        'Un error evito que la información se enviara',
      );
    }
  };
```
El codigo toma los datos del .json, lo cual puede ser cambiado para que tome de una API de la misma manera. Y por ultimo envia los datos al servidor. <br><br>
![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/53a44787-6248-4a59-a9e9-c37b7ce151b7) <br><br>
Alerta con la información.

Por ultimo podemos revisar en https://idco.com.co/sensors2/view.php, la información subida:

![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/877de738-1604-4d95-8e04-65f389feb8c2)

## Captura de información (Tensiometro, Termometro, Oximetro)

![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/0a68175c-cce5-46c7-bbbc-e47239d482e1)
![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/4b107f74-8f1d-4952-a53f-47a2cc5dd0d9)
![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/3fc90eaf-c8d7-452e-b13e-6b6fbca70923)


Estas vistas se basan en diferentes componentes para generar los estilos necesitados, tambien añade datos del mismo .json abriendo el archivo y generando un objeto con los mismos datos.

## Ganadores

![image](https://github.com/regalk13/reactNative_challenge/assets/72028266/f0b527b7-aa36-46ae-8a49-01e5f280a15c)

## TO DO:

- Logeo a la aplicación (relacion paciente-operario, paciente-dispositivo)
- Manejo de datos locales (cache)
- Añadir las ventanas emergentes personalizadas 

