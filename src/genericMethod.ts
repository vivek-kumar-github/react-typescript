interface IProduct {
    Name: string;
    Price: number;
    Stock: boolean;
}
interface IEmployee {
    FirstName: string;
    LastName: string;
    Designation: string;
}
class Service {
    public GetData<T>(data: T) {
        console.log(data);
    }
}
let tv = new Service();
tv.GetData<IProduct>({ Name: "TV", Price: 3500, Stock: true });
tv.GetData<IProduct[]>([{ Name: "Mobile", Price: 4500, Stock: false }]);