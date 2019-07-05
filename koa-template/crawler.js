const Crawler = require('crawler');
const { domain, ua } = require('./constants');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

const c = new Crawler({
    rateLimit: 3000,
    maxConnections: 1,
    userAgent: ua,
    forceUTF8: true,
    incomingEncoding: 'GBK',
    callback: function(err, res, done){
        if(err){
            console.error(err);
        }else{
            var $ = res.$;
            $('h3').each((index, el) => {
                const $this = $(el)
                const title = $this.text()
                const link = $this.find('a').attr('href')
                
                db.exec(`INSERT INTO THREAD (TITLE,LINK) VALUES ('${title}','${link}')`, (err, result) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    console.log('insert into:', link)
                })
            })
        }
        done();
    }
});
c.queue([...Array(99).keys()].map(n => n + 1).map(n => `${domain}${n}`));