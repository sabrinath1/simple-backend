import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world ' }
})

Route.post('/auth', 'AuthController.store')
Route.delete('/auth', 'AuthController.destroy')
