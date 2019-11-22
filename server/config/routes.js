const authorsController = require('../controllers/authors');

module.exports = app => {
    app.get('/api/authors/:id', authorsController.getOne);
    app.get('/api/authors', authorsController.index);
    app.post('/api/authors', authorsController.create);
    app.delete('/api/authors/:id', authorsController.delete);
    app.put('/api/authors/:id', authorsController.update);
}