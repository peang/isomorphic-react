var mongoose = require('mongoose');

var playgroundSchema = new mongoose.Schema({
    name: {type: String},
    slug: {type: String},
    description: {type: String},
    version: {type: String},
    endpoints: {type: Object},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: null}
});

var Playground = mongoose.model('Playground', playgroundSchema);

module.exports = Playground;