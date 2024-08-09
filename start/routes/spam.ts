import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/', 'SpamsController.store').as('store'),
    Route.get('/:phoneNumber', 'SpamsController.isSpam').as('isSpam')
}).prefix('/spams')