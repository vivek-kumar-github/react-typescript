var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.GetData = function (data) {
        console.log(data);
    };
    return Service;
}());
var tv = new Service();
tv.GetData({ Name: "TV", Price: 3500, Stock: true });
tv.GetData([{ Name: "Mobile", Price: 4500, Stock: false }]);
