class BrowserHistory {
  constructor(index = -1, routes = []) {
    this.index = index;
    this.routes = routes;
  }
  visit(url) {
    this.routes.push(url);
    console.log("Landing on route " + url);
    this.index++;
  }
  forward() {
    if (this.index < this.routes.length - 1) {
      this.index++;
      console.log(`Land forward to: ${this.routes[this.index]}`);
    } else {
      console.log("No route to go forward");
    }
  }
  back() {
    if (this.index > 0) {
      this.index--;
      console.log(`Land back to: ${this.routes[this.index]}`);
    } else {
      console.log("No route to go back");
    }
  }
  go(number) {
    if (!number) {
      throw "Number argument missing!";
    }
    const nextIndex = this.index + number;
    if (nextIndex > -1 && nextIndex < this.routes.length) {
      console.log(`Go to: ${this.routes[nextIndex]}`);
      this.index = nextIndex;
    }
  }
}

const bh = new BrowserHistory();
bh.visit("/a");
bh.visit("/b");
bh.visit("/c");
bh.visit("/d");
bh.back();
bh.forward();
bh.visit("/d");
bh.back();
bh.forward();
bh.go(-3);
