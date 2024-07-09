// T => Type of item you want to store/retrive from the q
function Queue() {
    var items = [];
    this.enqueue = function (value) {
        items.push(value);
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.getItems = function () {
        return items;
    };
    this.size = function () {
        return items.length;
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
}
var q = new Queue();
console.log(q.dequeue(8988));
console.log(q.getItems());
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.getItems());
console.log("dequeue 1", q.dequeue());
console.log("dequeue 1", q.dequeue());
console.log(q.getItems());
// console.log(q.dequeue(8988));
// console.log(q.getItems());
