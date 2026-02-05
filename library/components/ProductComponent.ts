import { ProductTemplate } from "../templates/ProductTemplate";
export class ProductComponent extends ProductTemplate {
    Name = "Samsung TV";
    Price = 53000.45;
    Qty = 5;
    CategoryName = "Electronics";
    Total() {
        return this.Qty * this.Price;
    }
    Print() {
        console.log(`Name = ${this.Name}\nPrice = ${this.Price}\nQty = ${this.Qty}\nCategory Name = ${this.CategoryName}\nTotal = ${this.Total()}`);
    }
}