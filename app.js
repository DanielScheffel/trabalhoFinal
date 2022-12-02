const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const basePath = path.join(__dirname, 'layouts')

const app = new express()

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/forum', (req, res) => {
    res.render('forum')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registro', (req, res) => {
    res.render('registro')
})

app.get('/perfil/usuario', (req, res) => {
    res.render('perfil')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/usuario', (req, res) => {
    con.query('SELECT * FROM usuario', (err, result) => {
        console.log(result);
        res.send(result)
    })
})
// criando novo usuário
app.post('/usuario/create', (req, res) => {
    con.query(`insert into usuario (nome, email, senha) values ("${req.body.nome}", "${req.body.email}", "${req.body.senha}")`, (err, result) => {
        // console.log(result);
        res.send(result)
    })
})
// Selecionando a tabela do banco adminstrador
app.get('/admin', (req, res) => {
    con.query('SELECT * FROM adminstrador', (err, result) => {
        console.log(result)
        res.send(result)
    })
})

// criando novo admin
app.post('/usuario/admin/create', (req, res) => {
    con.query(`insert into adminstrador (nome, email, senha) values ("${req.body.nome}", "${req.body.email}", "${req.body.senha}")`, (err, result) => {
        res.send(result)
    })
})

// Selecionando a tabela do banco adminstrador
app.get('/video', (req, res) => {
    con.query('SELECT * FROM videos', (err, result) => {
        console.log(result)
        res.send(result)
    })
})

app.post('/video', (req, res) => {
    con.query(`insert into videos(nome, video) values ("${req.body.nome}", "${req.body.video}")`, (err, result) => {
        // console.log(result);
        res.send(result)
    })
})

app.listen('8080', () => {
    console.log('Rodando na porta 8080!')
})