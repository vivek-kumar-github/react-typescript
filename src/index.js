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
    Personal: "lmn"
};
var bank_new = {
    NRI: "xyz",
    Personal: "jkl",
    Loan: true
};
//Static and non-static members
var StaticNonStatic = /** @class */ (function () {
    function StaticNonStatic() {
        this.n = 0;
        StaticNonStatic.s = StaticNonStatic.s + 1;
        this.n = this.n + 1;
    }
    StaticNonStatic.prototype.Print = function () {
        console.log("s = ".concat(StaticNonStatic.s, " n = ").concat(this.n));
    };
    StaticNonStatic.s = 0;
    return StaticNonStatic;
}());
var obj1 = new StaticNonStatic();
obj1.Print();
var obj2 = new StaticNonStatic();
obj2.Print();
var obj3 = new StaticNonStatic();
obj3.Print();
