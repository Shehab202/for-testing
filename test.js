//modifed
let obj1 = {
  name: "shehab",
  //!ملحوظه هامه ال زيس لاتعمل مع الارو فانكشن لازم فانكشن عاديه
  saeyHello: function (message) {
    return `${message} ${this.name}`;
  },
};
let obj2 = {
  name: "meesk",
};
//!لو هتبعت برامتر ابعتيه بعد الاوبجيكت اللي عايز تشغله
console.log(obj1.saeyHello.call(obj2, "hh"));
//!لما يكون عندك فانكشن داخل اوبجيكت وعايز تستخدم الفانكشن مع اوبجكت تاني بتستخدم زيس ف الاوبجيكت الاول وبعدين تستخدم call
//*الفرق بين call,apply ان الارجيومينت بيتبعت في ارراي 
//*نفس الوظيفه بالظبط apply
console.log(obj1.saeyHello.apply(obj2, ["hh"]));