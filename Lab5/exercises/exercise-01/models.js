const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exercise01');

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    rate: {type: Number, min:0, max:5},
    author: userSchema
});

const commentSchema = new mongoose.Schema({
    content: String,
    article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
});

const User = mongoose.model('User', userSchema);
const Article = mongoose.model('Article', articleSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { User, Article, Comment };
