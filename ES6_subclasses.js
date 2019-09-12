class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

}

class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}

// instantiate object
var mag1 = new Magazine('Book 1', 'Shyam','2011','Sept');
console.log(mag1.getSummary());
