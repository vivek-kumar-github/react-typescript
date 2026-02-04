interface Ioracle {
    UserName: string;
    Password: string;
    Database: string;
}
interface IMySql {
    host: string;
    user: string;
    password: string;
    database: string;
}
interface IMongoDb {
    url: string;
}
class Database<T> {
    public ConnectionString: T | null = null;
    public Connect() {
        for (let property in this.ConnectionString) {
            console.log(`${property} : ${this.ConnectionString[property]}`);
        }
    }
}
console.log(`----------Connecting with Oracle----------`);
let oracle = new Database<Ioracle>();
oracle.ConnectionString = {
    UserName: "scott",
    Password: "tiger",
    Database: "empdb"
}
oracle.Connect();
console.log(`----------Connecting with MySql----------`);
let mysql = new Database<IMySql>();
mysql.ConnectionString = {
    host: 'localhost',
    user: "root",
    password: "1234",
    database: "studb"
}
mysql.Connect();
console.log(`----------Connecting with MongoDB----------`);
let mongo = new Database<IMongoDb>();
mongo.ConnectionString = {
    url: "mongodb://127.0.0.1:27017"
}
mongo.Connect();