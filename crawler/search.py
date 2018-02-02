# -*- coding: utf-8 -*-
import sqlite3

conn = sqlite3.connect('info.db')
c = conn.cursor()
print "Opened database successfully";

cursor = c.execute("SELECT ID, TITLE, LINK  FROM THREAD WHERE TITLE LIKE '%%' LIMIT 10")
for row in cursor:
   print "ID = ", row[0]
   print "NAME = ", row[1]
   print "ADDRESS = ", row[2]

print "Operation done successfully";
conn.close()
