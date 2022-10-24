let word=[
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
     },
]

let correctword,timer;
let maxtime=30;
let pid1=document.getElementById("pid1");
let hint=document.getElementById('hint');
function tm(maxtime){
    clearInterval(timer);
timer= setInterval(() => {
    if(maxtime>0){
        maxtime--;
      return time.innerHTML=`<b>${maxtime}s</b>`;
    }
   clearInterval(timer);
   alert(`Time Off! ${correctword} was the correct word`);
   intigame();
},1000);}
let intigame=()=>{
    tm(maxtime);
let x=word[Math.floor(Math.random()*word.length)];
let y=x.word.split("");
for(var i=0;i<word.length;i++){
for(let i=y.length-1;i>0;i--){
 let j=Math.floor(Math.random()*(i+1));
 let temp=y[i];
 y[i]=y[j];
 y[j]=temp;
}
}
pid1.innerText=y.join("");
hint.innerText=x.hint;
correctword=x.word;
console.log(y,x.word);

}
intigame();
function refresh(){
    intigame(); 
    input.value="";
    // tm(30);
}
let dt;
let time=document.getElementById("time");
// setInterval(() => {
// refresh();
// }, 30000);

function check(){
    
    if(input.value.toLowerCase()==correctword){
        alert(`Congrats! ${correctword} was the correct word`);
        input.value="";
refresh();
    }
    else if(input.value==""){
       alert("Please! Firstly Enter any Word");
    }
    else{
        alert(`Sorry! ${input.value} does not match the correct word`);
        input.value="";
    }

}