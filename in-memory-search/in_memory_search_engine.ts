/*
Implement an in-memory search engine where multiple documents could be stored 
under a particular namespace and search on them and 
sort the search results by passing the orderBy parameter.
*/

interface IDocDetails {
  name: string;
  rating: number;
  year: number;
}

interface IDocuments {
  [key: string]: IDocDetails[];
}

class InMemorySearchEngine {
  nameSpaceMovies: IDocuments;
  constructor() {
    this.nameSpaceMovies = {};
  }

  addDocuments(namespace: string, ...documents: IDocDetails[]) {
    const prevDocs = this.nameSpaceMovies[namespace];
    if (prevDocs) {
      this.nameSpaceMovies[namespace] = [...prevDocs, ...documents];
    } else {
      this.nameSpaceMovies[namespace] = documents;
    }
  }

  print() {
    console.log(this.nameSpaceMovies);
  }

  search(
    namespace: string,
    callback: (doc: IDocDetails) => boolean,
    { key, asc }: { key: string; asc: boolean }
  ): IDocDetails[] {
    // 1. get all movies for given namespace
    const allMovies = this.nameSpaceMovies[namespace];

    // 2. filter out movies using passed callback

    const filteredMovies = allMovies.filter(callback);

    // 3. sort filtered movies
    filteredMovies.sort((a: IDocDetails, b: IDocDetails) => {
      if (asc) {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
    return filteredMovies;
  }
}

const searchEngine = new InMemorySearchEngine();
searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.2, {
    key: "rating",
    asc: true,
  })
);
// searchEngine.print();
