//Functions
function ProductDetails(id, name) {
    if (name == undefined) {
        console.log("Id = " + id);
    }
    else {
        console.log("Id = ".concat(id, " Name = ").concat(name));
    }
}
ProductDetails(10);
ProductDetails(10, "Mobile");
var product = {
    Name: "Samsung Tv",
    Price: 5400.43,
    Stock: true,
    Qty: 5
};
console.log(product);
var bank_legacy = {
    NRI: "Abc",
    Personal: "jdj"
};
var bank_new = {
    NRI: "xyz",
    Personal: "dhfb",
    Loan: true
};
