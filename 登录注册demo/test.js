// Person.prototype.parent = '李爸李妈'
// Person.prototype.hometown = '山东'
// function Person(name,age,sex) {
//   this.name = name,
//   this.age = age,
//   this.sex = sex
// }
// var LiLei = new Person('李雷',23,'男')

// for(let prop in LiLei){
//   console.log(prop);
// }

// Object.keys(LiLei).forEach(key=>{
//   console.log(key,LiLei[key]);
// })

var friend={
  firstName: 'Good',
  'lastName': 'Man',
  info:{
    age:22,
    tall:173
  },
  'address': undefined,
  'phone': ["1234567",undefined],
  'fullName': function(){
      return this.firstName + ' ' + this.lastName;
  }
};

var JSONfriend = JSON.stringify(friend);
console.log(JSONfriend);

var friendAfter = JSON.parse(JSONfriend);
console.log(friendAfter);