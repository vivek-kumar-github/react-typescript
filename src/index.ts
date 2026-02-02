function ProductDetails(id: number, name?: string) {
    if (name == undefined) {
        console.log("Id = " + id);
    } else {
        console.log(`Id = ${id} Name = ${name}`);
    }
}
ProductDetails(10);
ProductDetails(10, "Mobile");

interface ProductContract {
    readonly Name: string;
    Price: number;
    Stock: boolean;
    Qty: number;
    category?: string; //optional property
}

let product: ProductContract = {
    Name: "Samsung Tv",
    Price: 5400.43,
    Stock: true,
    Qty: 5
}
console.log(product);