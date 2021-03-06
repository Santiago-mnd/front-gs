# Deploy:

## Notas

Debido a que el deploy es un host gratuito, hay que esperar unos momentos para que inicie, pero sólo serán unos segundos.

Deploy general : https://backendgs.herokuapp.com


Utilicé create-react-app para poder iniciar de una manera más rápida en la parte frontend.

Agregué una carpeta dentro del src de este proyecto con los "bonus". Esta carpeta no afecta en nada al proyecto.
Sigo en el aprendizaje de los testeos, por lo cual he preferido no colocarlos hasta no tener un mejor entendimiento de éstos.

He dejado un correo listo para iniciar sesión y uno listo para el registro, aunque invito a que se registren ya que se pueden registrar nuevos usuarios, claro, puede ser con un correo no existente, pero con la sintaxis obligatoria de un correo.

Esto está hecho con la finalidad de poder guardar el último usuario que ha creado, o modificado algo y, así poder contactarle para mejorar la comunicación al saber qué ha hecho y por qué lo ha hecho.

Se podría agregar una capa de seguridad para que no cualquier persona se pueda registrar y acceder, pero, por practicidad y demostración, cualquier usuario puede registrarse.

## Tecnologías usadas:

#### STACK MERN

#### Front
- React
- React Redux
- React Router

#### Back
- Express
- NodeJS
- Mongoose

#### DB
- MongoDB

## Repositorio:
https://github.com/Santiago-mnd/backend-gs

## Servicios API:
### IMPORTANTE
Para poder acceder a la API se necesita una autenticación vía JWT, ésta se obtiene al hacer login con un usuario existente o, en su defecto, creando una cuenta.
[![Login example](https://i.postimg.cc/DZ9Q7SQ2/Screenshot-5.jpg "Login example")](https://i.postimg.cc/DZ9Q7SQ2/Screenshot-5.jpg/ "Login example")
Una vez hecho el login podrás acceder a los endpoints.
Si se hacen pruebas desde Postman, deberás ir a los headers para colocar tu JWT:
Key: x-token , Value: JWT:
[![Postman example](https://i.postimg.cc/KvtLTzfk/Screenshot-4.jpg "Postman example")](https://i.postimg.cc/KvtLTzfk/Screenshot-4.jpg "Postman example")

#### Peticiones AuthJWT:

url: https://backendgs.herokuapp.com/

Genera un nuevo Token, ya que éste expira 2 horas después de haberse creado. Desde la web se hace automáticamente.
GET: url/api/auth/renew

Petición para hacer el login. Necesita objeto JSON con el email y la password.

{
	email: 'example',
	password: 'example'
}

POST: url/api/auth

Petición para crear un nuevo usuario. Necesita objeto JSON con nombre, email y password.

{
	name: 'example'
	email: 'example',
	password: 'example
}

POST: url/api/auth/new-user

## Peticiones Products:
Obtiene todos los productos.
GET: url/api/products/

Crea un nuevo producto, se necesita mandar un objeto JSON con "name, description y price"

{
	name: 'example',
	description: 'example',
	price: number
}

POST: url/api/products/new-product

Actualiza un producto vía id. Requiere objeto JSON con los datos actualizados.
PUT: url/api/products/:id

Elimina un producto vía id.
DEL: url/api/products/:id

### Peticiones a plazos dados de alta:
Obtiene todos los plazos.
GET: url/api/deadlines

Crea un plazo. Necesita objeto JSON con las semanas.

{
	'weeks': 36
}

POST: url/api/deadlines/new-deadline

## Aún por terminar:

### En esta parte indico algunos procesos que no logré hacer funcionar.

- Update y eliminación de productos desde el frontend. (Desde backend listo)
- Creación de un plazo desde el frontend. (Desde backend listo)
- Generar de manera más dinámica las cotizaciones desde el frontend. 
