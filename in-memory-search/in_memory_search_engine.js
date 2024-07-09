/*
Implement an in-memory search engine where multiple documents could be stored
under a particular namespace and search on them and
sort the search results by passing the orderBy parameter.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var InMemorySearchEngine = /** @class */ (function () {
    function InMemorySearchEngine() {
        this.nameSpaceMovies = {};
    }
    InMemorySearchEngine.prototype.addDocuments = function (namespace) {
        var documents = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            documents[_i - 1] = arguments[_i];
        }
        var prevDocs = this.nameSpaceMovies[namespace];
        if (prevDocs) {
            this.nameSpaceMovies[namespace] = __spreadArray(__spreadArray([], prevDocs, true), documents, true);
        }
        else {
            this.nameSpaceMovies[namespace] = documents;
        }
    };
    InMemorySearchEngine.prototype.print = function () {
        console.log(this.nameSpaceMovies);
    };
    InMemorySearchEngine.prototype.search = function (namespace, callback, _a) {
        var key = _a.key, asc = _a.asc;
        // 1. get all movies for given namespace
        var allMovies = this.nameSpaceMovies[namespace];
        // 2. filter out movies using passed callback
        var filteredMovies = allMovies.filter(callback);
        // 3. sort filtered movies
        filteredMovies.sort(function (a, b) {
            if (asc) {
                return a[key] - b[key];
            }
            return b[key] - a[key];
        });
        return filteredMovies;
    };
    return InMemorySearchEngine;
}());
var searchEngine = new InMemorySearchEngine();
searchEngine.addDocuments("Movies", { name: "Avenger", rating: 8.5, year: 2017 }, { name: "Black Adam", rating: 8.7, year: 2022 }, { name: "Jhon Wick 4", rating: 8.2, year: 2023 }, { name: "Black Panther", rating: 9.0, year: 2022 });
console.log(searchEngine.search("Movies", function (e) { return e.rating > 8.2; }, {
    key: "rating",
    asc: true,
}));
// searchEngine.print();
