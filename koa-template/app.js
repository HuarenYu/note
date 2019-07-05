const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');

const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

const router = new Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

function query(sql) {
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
app.listen(7001);
app.on('error', function (err) {
  console.log(err.stack);
});