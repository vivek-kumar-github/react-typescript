var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Template
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
        this.Name = null;
        this.Price = 0;
        this.Qty = 0;
    }
    return ProductTemplate;
}());
//Component
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 45000.44;
        _this.Qty = 2;
        return _this;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        console.log("Name = ".concat(this.Name, "\nPrice = ").concat(this.Price, "\nQty = ").concat(this.Qty, "\nTotal = ").concat(this.Total()));
    };
    return ProductComponent;
}(ProductTemplate));
//Instance
var obj4 = new ProductComponent();
obj4.Print();
