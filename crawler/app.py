# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search")
def search():
    key_words = request.args.get('key_words', '')
    items = []
    conn = sqlite3.connect('info.db')
    c = conn.cursor()
    cursor = c.execute("SELECT ID, TITLE, LINK  FROM THREAD WHERE TITLE LIKE ?", ('%'+key_words+'%',))
    for row in cursor:
       #print "ID = ", row[0]
       #print "NAME = ", row[1].encode('GBK', 'ignore')
       #print "https://c6.3vc.info/" + row[2].strip(' \t\n\r')
       items.append({ "title": row[1], "link": "https://c6.3vc.info/" + row[2].strip(' \t\n\r') })
    conn.close()
    return render_template("search.html", items = items)