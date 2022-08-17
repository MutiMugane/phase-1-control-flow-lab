function scuberGreetingForFeet(test){
  // Write your code here!

const free  = "This one is on me!";
const charge = "I will gladly take your thirty bucks.";
const no = "No can do.";


    let result ;
  if( test<=400){
        return free;
        console.log(free)}
        
  else if (test >=2000 && test <=2499) {
      return charge;
      console.log (charge)
  }
  else {
     return no;
      console.log (no);
  }
}

scuberGreetingForFeet()
const go = "Ok, sounds good.";
const nogo = "No go.";

function ternaryCheckCity(city){
  // Write your code here!
if (city === "NYC"){
  return go;
  console.log (go)
}
else {
  return nogo;
}
ternaryCheckCity()

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  const thanks = "Thank you so much.";
  const sawaTu = "Thank you.";
  const bye = "Bye.";

  if (tip === "generous"){
    return thanks;
      console.log (thanks)}

  else if (tip === "not as generous"){
     return sawaTu;
       console.log (sawaTu)
   }
   else {
     return bye;
   }
  }
  ;
  switchOnCharmFromTip()




