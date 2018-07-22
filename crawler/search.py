# -*- coding: utf-8 -*-
import sqlite3

conn = sqlite3.connect('info.db')
c = conn.cursor()
print "Opened database successfully";

cursor = c.execute("SELECT ID, TITLE, LINK  FROM THREAD WHERE TITLE LIKE '%白嫩%' ORDER BY ID DESC LIMIT 1000")
for row in cursor:
   #print "ID = ", row[0]
   print "NAME = ", row[1].encode('GBK', 'ignore')
   print "https://c6.3vc.info/" + row[2].strip(' \t\n\r')

print "Operation done successfully";
conn.close()
