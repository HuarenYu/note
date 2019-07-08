const Crawler = require('crawler');
const { domain, ua } = require('./constants');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test1.db');

const c = new Crawler({
    rateLimit: 5000,
    maxConnections: 1,
    userAgent: ua,
    forceUTF8: true,
    incomingEncoding: 'GBK',
    callback: function(err, res, done){
        if(err){
            console.error(err);
        }else{
            console.log(new Date().toLocaleString(), res.options.uri)
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
                })
            })
        }
        done();
    }
});
c.queue([...Array(200).keys()].map(n => n + 1).map(n => `${domain}${n}`));