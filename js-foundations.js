// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".


divisble =()=>{
  if (num % 3 ===0){
  return num + "divisble by 3"
  }else{
  return num + " not divisble by 3"
 }
 console.log(divisble(15))
 // 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
 class helloMe{
  constructor(firstname, lastname, age){
    this.name = firstname
    this.lastname = lastname
    this.age= age
  }

  description(){
    return this.name + this.lastname + this.age
  }
}

var helloMe = newinfo('Brend','Diaz' 30)
console.log(newinfo.description())
}

 // 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
 var arr=["fruit", "bread", "juice", "bacon", "coffee" ]
 new_array = arr.slice("fruit","juice" , "coffee");
 console.log(new_array);         
console.log(arr)


 // 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
 alphabetSpup=(str)=>
 {
return str.split('').sort().join('');
 }
console.log(alphabetSoup("learn"));


 // 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
 
 var nums = [9, 5, 88, 2, 5, 42, 57]
 
 var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

var animalNum = nums.concat(nouns)
console.log(animalNum)
 
 // output should be: "9 ducks", etc
 const newArr =()=>{
 arr = arr.filter(function(value,index) { 
  if (index === 9, "ducks")
} 

console.log(newArr)
console.log(arr)
// [ 1, 2, 4, 5 ]
 
 //6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
 arr =[2,3,4,5,6]
 mult5=(arr)=>{
   newArr =arr.length *5 
   return newArr
 }