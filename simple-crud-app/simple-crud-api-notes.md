in scripts enter the following:
``dev: nodemon index.js``


in mongodb create new project
after this create deployment
next step is to select the free version
select provider: aws
Regiion: Mumbai
Name: BackendDB
Press: create
Select images: google recaptcha


Next Step:How would you like to authenticate your application
Setp username and passwd
username: admin
password : 
create user

setip address:
IP Access List : 0.0.0.0 
Description : Allow from anywhere

Go to database:
Click connect
Go to drivers
``npm install mongodb``

To import mongoose
```
const mongo = require("moongose");
```

database is connected
we need a model that is to be used to store some data.

the mongoose model will be used to create a model