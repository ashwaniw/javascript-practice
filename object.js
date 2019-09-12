// Create object
const BookProtos = {
    getSummary:  function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function (){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old.`
    }
}

const Book1 = Object.create(BookProtos, {
    title : {value: 'Book1'},
    author: {value: 'Shyam'},
    year: {value: '2015'}
})

console.log(Book1)