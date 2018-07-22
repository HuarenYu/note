# -*- coding: utf-8 -*-
import sqlite3

conn = sqlite3.connect('info.db')
c = conn.cursor()
print "Opened database successfully";

c.execute('''CREATE TABLE THREAD
       (ID INTEGER PRIMARY KEY   AUTOINCREMENT,
       TITLE           TEXT    NOT NULL,
       LINK            TEXT     NOT NULL);''')

print "Operation done successfully";
conn.commit()
conn.close()
