var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    var totalpopulation=0;
    var pop=data.map((ele)=>ele.population);
    var totpop=pop.reduce((a,b)=>a+b);
    console.log(totpop);
}