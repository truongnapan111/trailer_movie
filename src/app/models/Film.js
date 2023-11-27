const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Film = new Schema(
    {
        name: { type: String, unique: true },
        category: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name' },
        videoId: { type: String },
        createdAt: { type: Date, default: Date.now },
        updateAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Film', Film);
