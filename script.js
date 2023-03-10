//Solving problems using array functions on the rest countries' data 
//(https://restcountries.com/v2/all).

//a.Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

var res=result.filter((ele)=>ele.countries==="Asia")
console.log(res);

}

//b.)Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

var res=result.filter((ele)=>ele.population<200000)
console.log(res);
var final=res.map((ele)=>ele.name);
console.log(final);

}

//c.)Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    result.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);
})
}




//d).Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.filter((ele)=>ele.population).reduce((a,b)=>a+b.population,0);
    console.log(res);
}


//e.)Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var cusd=result.filter((x)=>{
    for(var i in x.currencies){
      if(x.currencies[i].code==="USD"){
        return true;
      }
    }
  }).map((ele)=>ele.name);
  console.log(cusd);
}



