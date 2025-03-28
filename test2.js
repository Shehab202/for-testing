let obj3={name:"mahmoud",sayHello:function(){
    return `hello ${this.name}`
}}
let obj4={
    name:"ali"
}
//!bindبتسوي نفس الوظيفه
//!ولكن في اختلافات 
//!اولا ان هي لازم تتخزن في متغير وبعدين تشغل المتغير ذات نفسه
//!لما تسوي bindالفانكشن بتنفصل عن الافانكشن الاصليه 
let x= obj3.sayHello.bind(obj4)
console.log(x());
