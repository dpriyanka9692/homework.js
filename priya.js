//For in
//In for in loop it returns the index value of the elements.
const array1 = [5,7,4,6,2,3,9]
for(let indexValues in array1)
console.log(indexValues)

//For of
//here for of returns the elements of the array.

for (let values of array1)
console.log(values)

//For each
//For each return undefined means nothing we have to pass the output manually.
const languages = ['c','c++','java','python','ruby','react','angular']
const langReturn = languages.forEach((item) => {
    // return item
    console.log(item)
})
// console.log(langReturn);

//Filter
const number = [2,4,6,8,5,8,6,1,4,5,8]
// const newArray = number.filter((item)=>{
//     return item>5;
// })
// console.log(newArray);

const myNumbs = [] 
number.forEach( (num) =>{
    if(num>6){
        myNumbs.push(num)
    }
})
console.log(myNumbs);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const findGenre = books.filter( (gn) => gn.genre === 'History')
//   console.log(findGenre);

  const editionBook = books.filter ((bn) => {return bn.publish >= 1994 && bn.edition >= 2007})
  console.log(editionBook);

  //Map method

const numSeries = [1,2,3,4,5,6,7]
const changeData = numSeries.map( (data) => {
     return data + 2;
 })
console.log(numSeries);
 console.log(changeData);
 
 //chaining
const newArray = numSeries
.map((data) => data + 2 )
.map((data) => data * 10)
.filter( (data) => data >40)
console.log(newArray);

//Reduce method

const reduceSeries = [1,2,3,4,5]
const myTotal = reduceSeries.reduce(function changeSeries(accumulator,currentValue){
    console.log(accumulator : ${accumulator} and  ${currentValue})
    return accumulator + currentValue
},5)    

console.log(myTotal);

//using arrow function
const myTotal1 = reduceSeries.reduce((acc,currVal) => acc+currVal,0)
console.log(myTotal1)















