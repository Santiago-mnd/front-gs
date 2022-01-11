# Deploy:
Debido a que el deploy es un host gratuito, hay que esperar unos momentos para que inicie, pero sólo serán unos segundos.

Deploy general : https://backendgs.herokuapp.com

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

## Repositorio:
https://github.com/Santiago-mnd/backend-gs

#### DB
- MongoDB

## Notas
Utilicé create-react-app para poder iniciar de una manera más rápida.
Agregué una carpeta dentro del src de este proyecto con los "bonus". Esta carpeta no afecta en nada al proyecto.

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
- Update y eliminación de productos desde el frontend.
- Creación de un plazo desde el frontend.
- Generar de manera más dinámica las cotizaciones desde el frontend.
