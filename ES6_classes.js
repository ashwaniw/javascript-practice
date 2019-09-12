class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }

    revise(newYear){
        this.year = newYear;
        this.revisesed = true;
    }
}

// instantiate object
var Book1 = new Book('Book 1', 'Shyam','2011');
console.log(Book1);

Book1.revise(2017);
console.log(Book1);