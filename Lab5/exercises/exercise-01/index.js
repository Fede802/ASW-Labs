const express = require('express');
const bodyParser = require('body-parser');
const { User, Article, Comment } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.post('/users', (req, res) => {
   new User(req.body).save()
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ message: err.message }));
});        

app.get('/articles', (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.post('/articles', (req, res) => {
    new Article(req.body).save()
        .then(article => res.json(article))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/comments', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.post('/comments', (req, res) => {
    new Comment(req.body).save()
        .then(comment => res.json(comment))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
