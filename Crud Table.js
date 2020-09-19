let superheros = [
    {
        "name" : "Parth",
        "age": 21,
        "city" : "Nashik",
        "salary" : 20000

    }
];



function display(superarray) {
  let tabledata = "";
  superarray.forEach(function (superhero,index) {
    let currow = `<tr>
<td>${index+1}</td>
<td>${superhero.name}</td>
<td>${superhero.age}</td>
<td>${superhero.city}</td>
<td>${superhero.salary}</td>
<td><button id="btn2" onClick="deletesupr(${index})">Delete</button></td>
</tr>`;
    tabledata += currow;
    index +1
  });
  document.getElementById("tdata").innerHTML = tabledata; 
}
display(superheros)

function addSuperHero(e){
  e.preventDefault();
  let superhero={}
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;

  superhero.name=name;
  superhero.age=Number(age);
  superhero.city=city;
  superhero.salary=salary;
  superheros.push(superhero);
  display(superheros)
  document.getElementById("form").reset();
}

function Searchf(){
  let SearchVlaue=document.getElementById("search").value;
  let Sear = superheros.filter(function(superhero){
    return superhero.name.toUpperCase().indexOf(SearchVlaue.toUpperCase())!=-1 || superhero.city.toUpperCase().indexOf(SearchVlaue.toUpperCase())!=-1
  });
  
  display(Sear);
}

function deletesupr(index){
  superheros.splice(index,1);
  display(superheros)
}