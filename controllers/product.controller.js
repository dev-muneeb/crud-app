// controllers/products.js
const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err, product) {
        if (err) {
            return next(err);
        }
        res.status(200).send(product)
    })
};

exports.product_details = function (req, res) {
    Product.findOne({ _id: req.params.id }, function (err, product) {
        if (err) return next(err);
        res.status(200).send(product);
    })
};

exports.product_update = function (req, res) {
    Product.updateOne(
        { _id : req.params.id },
        { $set: req.body },
        function (err, product) {
            if (err) next(err);
            res.status(200).send(product);
        }
    );
};

exports.product_delete = function (req, res) {
    Product.findOneAndDelete({ _id:req.params.id }, function (err) {
        if (err) return next(err);
        res.status(200).send('Deleted successfully!');
    })
};

exports.product_list = function(req, res) {
    Product.find(
        function (err, product) {
            if (err) return next(err);
            res.status(200).send(product);
    })
};
