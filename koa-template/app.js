const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');
const morgan = require('koa-morgan')

const app = new Koa();
app.use(morgan('combined'))
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

const router = new Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

function query(sql) {
  console.log(sql)
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err)
        return
      }
      resolve(rows)
    })
  })
}

router.get('/', async (ctx, next) => {
  const { word } = ctx.request.query
  let sqlStr = 'select * from thread limit 100'
  if (word && word !== '') {
    sqlStr = `select * from thread where TITLE like '%${word}%'`
  }
  const posts = await query(sqlStr)
  await ctx.render('index', {
    posts: posts
  });
});
app
  .use(router.routes())
  .use(router.allowedMethods());
app.use(async (ctx, next) => {
  console.log('-----router2 before-------')
  next()
  console.log('-----router2 after-------')
})

const router2 = new Router()
router2.get('/home', (ctx, next) => {
  ctx.body = 'home'
})
app
  .use(router2.routes())
  .use(router2.allowedMethods());
const port = 7001
app.listen(port, () => {
  console.log(`✅  The server is running at http://localhost:${port}/`)
});
app.on('error', function (err) {
  console.log(err.stack);
});
