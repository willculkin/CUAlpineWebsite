

# backend
## launch instructions
- install mongodb (for now locally(need to put into docker containers))
- sudo mongod --auth --port 27017 --dbpath /var/lib/mongodb
- ./mvnw spring-boot:run


## db config
- mongo
- db.createUser(
      {
        user: "myUserAdmin", <-- can be changed
        pwd: "abc123", <-- can be changed
        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
      }
    )
- relog with user and password mongo -u <___> -p <___>
- make user db.grantRolesToUser('newUsername',[{ role: "root", db: "dbname" }])

- login with mongo "test" -u "user" -p "password"
