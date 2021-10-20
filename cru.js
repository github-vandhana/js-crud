var tlist = ["name", "email", "phone", "experiance", "role"];
function display() {
    var table = document.createElement("TABLE");
    table.setAttribute("id", "tab");
    var row = document.createElement("TR");
    for (i = 0; i <= tlist.length - 1; i++) {
        var list = document.createElement("TH");
        list.setAttribute("id",`myrow${i+1}`);
        list.innerHTML=tlist[i];
        row.appendChild(list);
        table.appendChild(row);
    }
             
    
    fetch("http://localhost:4321/user")
  .then(response => response.json())
  .then(data => {
      console.log(data);

for(i=0;i<=data.length-1;i++){
    var drow = document.createElement("TR");
    var d1= document.createElement("TD");
    var d2= document.createElement("TD");
    var d3= document.createElement("TD");   
    var d4= document.createElement("TD");
    var d5= document.createElement("TD");
    var a = document.createElement('a');
    var a= document.createElement('BUTTON')
    var l= document.createElement("BUTTON");
   

    drow.setAttribute("id",`datarow${i+1}`);
    d1.setAttribute("id",`data1${i+1}`);
    d2.setAttribute("id",`data2${i+1}`);
    d3.setAttribute("id",`data3${i+1}`);
    d4.setAttribute("id",`data4${i+1}`);
    d5.setAttribute("id",`data5${i+1}`);
    a.setAttribute("href", `ur.html?${data[i]._id}`);
    l.setAttribute("id",data[i]._id);
    l.addEventListener("click",function(c){
        console.log(c);
    fetch(`http://localhost:4321/user/${c.target.id}`,{
        method:'DELETE'
    })
    setTimeout('location.reload()',10); 
        

    });


    d1.innerHTML=data[i].userName;
    d2.innerHTML=data[i].emaill;
    d3.innerHTML=data[i].phone;
    d4.innerHTML=data[i].role;
    d5.innerHTML=data[i].experience;
    a.innerHTML="edit";
    l.innerHTML="delete";



drow.appendChild(d1);
drow.appendChild(d2);
drow.appendChild(d3);
drow.appendChild(d4);
drow.appendChild(d5);
drow.appendChild(a);
drow.appendChild(l);

table.appendChild(drow);
}

  })

document.body.appendChild(table);

}


function store(e){
    e.preventDefault();
    var s=new FormData(document.querySelector('form'));
    var c=Object.fromEntries(s);
    console.log(c);
    fetch("http://localhost:4321/user",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(c)
    })
    
    
}

