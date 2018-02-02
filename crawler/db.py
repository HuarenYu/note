# -*- coding: utf-8 -*-
import sqlite3

conn = sqlite3.connect('info.db')
print "Opened database successfully";
c = conn.cursor()
#c.execute("DROP TABLE THREAD")
c.execute('''CREATE TABLE THREAD
       (ID INTEGER PRIMARY KEY   AUTOINCREMENT,
       TITLE           TEXT    NOT NULL,
       LINK            TEXT     NOT NULL);''')
print "Table created successfully";
conn.commit()
conn.close()