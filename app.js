const express = require('express')
const path = require('path')

const connectDB = require('./database/db');
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const { create } = require('express-handlebars');

const AuthUser = require('./routers/create')
// const UserRoute = require('./routers/user')
const morgan = require('morgan')
const app = express()
const hbs = create({path: './views/layouts/main.hbs' });

dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json());

connectDB();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')))
//API
app.use('/api', AuthUser)
// app.use('/user', UserRoute)

app.listen(PORT, () => (console.log(`server is listening on: http://localhost:${PORT}`)))