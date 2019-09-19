// Constructor
function Book(title, author, year){
    this.title = title;
    this.author =  author;
    this.year = year;        
}

// Prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// Magazine Constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
const mag1 = new Magazine('Mag1', 'John Doe',2014,'Jan');

// if use magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1)