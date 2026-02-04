var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, " : ").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
console.log("----------Connecting with Oracle----------");
var oracle = new Database();
oracle.ConnectionString = {
    UserName: "scott",
    Password: "tiger",
    Database: "empdb"
};
oracle.Connect();
console.log("----------Connecting with MySql----------");
var mysql = new Database();
mysql.ConnectionString = {
    host: 'localhost',
    user: "root",
    password: "1234",
    database: "studb"
};
mysql.Connect();
console.log("----------Connecting with MongoDB----------");
var mongo = new Database();
mongo.ConnectionString = {
    url: "mongodb://127.0.0.1:27017"
};
mongo.Connect();
