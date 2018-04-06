console.log((howLong(howFar,howFast)));
for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= i; j++) {
            console.log(i+""+j+"="+(ij));
    }
}
for (var i = 1; i<= 12; i++) {
    console.log("7"+i+"="+(i))
}
var notes = ["C", "D", "E", "F", "G", "A",];
console.log(notes);
notes[2] = "C";
console.log(notes);
notes.push("C");
console.log(notes);
console.log(notes[0]);
console.log(notes[3]);
console.log(notes[6]);

for (var n=1; n<=12; n++) {
  for (i=1; i<=12; i++){
    console.log(n + ' x ' + i +' = ' + n*i);
  }
}
var cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi", "Ford"];
(var car [0])='Toyota';
car.push('Saab');
var age=17;
var permitPassed =true;
if(age >21){
  console.log('You may drink alc');
}
else if(age>=18){
  console.log('youre legally an adult');
}
else if(age >=17 && permitPassed){
  console.log('go home youre too young');
}
  else if(age >=17){
    console.log('study for your permit please')
}
else if(age <=16 && permitPassed){
  console.log('go drive to mcdonlalds with your mom');
}
else if(age <=16)
console.log('study for your permit');

var me = {
    firstName: "Davian",
    middleName: "Dont worry about",
    lastName: "Perez-Silva",
    hometown: "Lebanon",
    favoriteColor: "Red",
    hobbies: ["Basketball", "Football", "Lifting", "Napping"]
};
console.log(me.firstName+" "+me.middleName+" "+me.lastName+" is from "+me.hometown+". His favorite color is "+me.favoriteColor+" and he enjoys:");
for (i = 0; i < me.hobbies.length; i++) {
    console.log(me.hobbies[i]);
}
