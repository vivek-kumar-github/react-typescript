//Functions
function ProductDetails(id: number, name?: string) {
    if (name == undefined) {
        console.log("Id = " + id);
    } else {
        console.log(`Id = ${id} Name = ${name}`);
    }
}
ProductDetails(10);
ProductDetails(10, "Mobile");

//Contracts
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

//Extending contracts
interface Bank_Version1 {
    NRI: string;
    Personal: string
}
interface Bank_Version2 extends Bank_Version1 {
    Loan: boolean;
}
let bank_legacy:Bank_Version1 = {
    NRI: "Abc",
    Personal: "jdj"
}
let bank_new:Bank_Version2 = {
    NRI: "xyz",
    Personal: "dhfb",
    Loan: true
}