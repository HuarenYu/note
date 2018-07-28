# -*- coding: utf-8 -*-
import requests
import sqlite3
from bs4 import BeautifulSoup

domain_name = 'https://c6.3vc.info/'

class Crawler(object):
    def __init__(self, start_url):
        self.start_url = start_url

    def spider(self, url):
        r = requests.get(url)
        r.encoding = 'gbk'
        html_doc = r.text
        soup = BeautifulSoup(html_doc, 'html.parser')
        return soup

    def get_dict(self):
        dc = {}
        for page in range(1, 200):
            url = self.start_url.format(page)
            soup = self.spider(url)
            h3 = soup.find_all('h3')
            for h3_ in h3:
                a = h3_.find_all('a', recursive=False)
                for a_ in a:
                    title = a_.get_text()
                    link = a_['href']
                    dc[title] = link
        return dc

if __name__ == '__main__':
    url = domain_name + 'thread0806.php?fid=16&search=&page={}'
    s = Crawler(url)
    dc = s.get_dict()
    #fo = open('data.txt', 'a+')
    conn = sqlite3.connect('info.db')
    c = conn.cursor()
    print "Opened database successfully"
    c.execute("DELETE FROM THREAD")
    print "clear thread table"
    for (n, k) in dc.items():
        #fo.write(n.encode('utf-8').strip() + '\n')
        #fo.write(k.encode('utf-8').strip() + '\n')
        c.execute("INSERT INTO THREAD (TITLE,LINK) VALUES ('{}','{}')".format(n.encode('utf-8').strip(), k.encode('utf-8').strip()))
        print 'insert a thread...'
    #fo.close()
    conn.commit()
    print "Records created successfully"
    conn.close()