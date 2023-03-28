const StoreController = require('../controllers/store.controllers');

module.exports = (app) => {
    app.post('/api/store', StoreController.createStore);
    app.get('/api/store', StoreController.getAllStores);
    app.get('/api/store/:id', StoreController.getOneStore);
    app.put('/api/store/:id', StoreController.updateStore);
    app.delete('/api/store/:id', StoreController.deleteStore);
}