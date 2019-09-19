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

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised =  true;
}

// Instatiate an object
const Book2 = new Book('T1','Intoday',2010);
const Book3 = new Book('T2','Intoday_1',2019);

console.log(Book2);
Book2.revise(2015);
console.log(Book2);

