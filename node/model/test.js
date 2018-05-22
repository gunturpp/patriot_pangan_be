var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    percobaan: {
        type: String
    }
});

var dataCoba = module.exports = mongoose.model('dataCoba', testSchema);

module.exports.createPercobaan = function(newsCoba, callback) {
    // var query = {isi: isi};
    newsCoba.save(callback);
}