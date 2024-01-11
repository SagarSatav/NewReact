# arr=[9,5,5,2,1,7,7,4,3,0]
# arr1=[9,0,2,1,5,0,2,8,5,9]

# def _sum(arr):
#     sum=0
#     for i in arr:
#         sum=sum+i
#     return sum
# if __name__=="__main__":
#     arr=[9,5,5,2,1,7,7,4,3,0]
#     ans=_sum(arr)
#     print(ans)
# n=int(input("enter lenth of array: "))
# arr=[]
# for i in range(n):
#     ele=int(input("enter element: "))
#     arr.append(ele)
# print(arr)

# sum=0

# for ele1 in arr:
#     sum=sum+ele1
# print(sum)

# n=int(input())
# arr=[]
# for i in range(n):
#     e=int(input())
#     arr.append(e)
# print(arr)
# sum=0
# for e1 in arr:
#     sum=sum+e1
# print(sum)



import mysql
import mysql.connector

mydb_config={
    "user":"root",
    "host":"localhost",
    "password":"root",
    "port":3306
}

mydb=mysql.connector.connect(**mydb_config)
my_cursor=mydb.cursor()
my_cursor.execute("CREATE DATABASE IF NOT EXISTS demo;")
my_cursor.execute("use demo;")
my_cursor.execute("create table if not exists random("
                  "id int auto_increment primary key,"
                  "name varchar(20),"
                  "surname varchar(20)"");")
mydb.commit()
                  
my_cursor.execute("insert into random (name,surname) values('sagar','satav');") 

mydb.commit()              
my_cursor.execute("select * from random;")
for row in my_cursor.fetchall():
    print(row)
print("----------------------------------------")
my_cursor.execute("update random set name='abc' where id =2;")
mydb.commit()
my_cursor.execute("select * from random;")
for row in my_cursor.fetchall():
    print(row)

print("---------------------------------------------------")
my_cursor.execute("delete from random where id>3;")
mydb.commit()
my_cursor.execute("select * from random;")
for row in my_cursor.fetchall():
    print(row)
print("--------------------------------------")
my_cursor.execute("drop table random;")
mydb.commit()
print("table dropped")
print("--------------------------------------")
my_cursor.execute("drop database demo;")
mydb.commit()
print("database dropped")