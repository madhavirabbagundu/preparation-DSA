//object literal

const obj = {
    name:"madhavi",
    age:20,
    mainData:{
        school:'masai',
        village:"thaticherla"
    },
    school:function(){
        console.log(this.age+"  "+ this.mainData.village)
    }

}
console.log(obj.name)
console.log(obj.mainData.school)
obj.school()

// instead of objects

const person = new Object({
    name:"madhu",
    age:21,
    data:function(){
        console.log(this.name+ " "+ this.age)
    }
})
console.log(person.name)
person.data();

// constructor function
function persons(){
    this.name = "swadha",
    this.age = 5
    this.study= function(){
     console.log(this.name+" "+this.age)
    }
}
const Persons1 = new persons()
Persons1.study();