const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer,
})

const FileModel = mongoose.model('FileModel', fileSchema)

module.exports = FileModel;