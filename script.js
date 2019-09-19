// Object Literal
const book1 = {
    title : 'Book 1',
    publisher: 'India Today',
    from : "India",
    year: "2011",
    getSummary : function(){
        return `${this.title} is written by ${this.publisher} in ${this.year}`;
    }
}

//console.log(book1.getSummary());
// Constructor
function Book(title, author, year){
    this.title = title;
    this.author =  author;
    this.year = year;
        this.getSummary = function(){
            return `${this.title} was written by ${this.author} in ${this.year}`
        }
}

// Instatiate an object
const Book2 = new Book('T1','Intoday',2018);
const Book3 = new Book('T2','Intoday_1',2019);

console.log(Book2.getSummary());

function person(){
	this.firstname = "jeevan";
	this.lastname = "ram";
	this.getfullname = function(){
		alert ('hello friends');
	}	
}

var person1 = new person();

for(var prop in person1){
	console.log(prop);
}

function valUndefined(a,b){	
	if(a < 0 || b < 0){
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));	
}

console.log(valUndefined(2, 3));