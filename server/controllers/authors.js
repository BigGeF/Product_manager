const mongoose = require('mongoose');

const Author = mongoose.model('Author');
module.exports = {
    index(_req, res) {
        Author.find()
            .then(authors => res.json({ authors }))
    },

    create(req, res) {
        Author.create(req.body)
            .then(data => res.json({ data }))
            .catch(e => res.json({ errors: e.errors }));
        console.log(this.data);
    },

    getOne(req, res) {
        Author.findById(req.params.id)
            .then(author => res.json({
                author
            }))
            .catch(e => res.json({
                errors: e.errors
            }));
    },

    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
            .then(author => res.json({
                status: "删完了"
            }))
            .catch(e => res.json({
                errors: e.errors
            }));
    },

    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                qty: req.body.qty,
                price: req.body.price
            }, { new: true, runValidators: true }).then(data => res.json({ data }))
            .catch(e => res.json({ errors: e.errors }));
    }
}