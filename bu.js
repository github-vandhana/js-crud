var datapath = document.location.href;
console.log(datapath);
var userdata = datapath.split("?")[1];
console.log(userdata)

function dataDisplay(){
    fetch(`http://localhost:4321/user/${userdata}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.getElementById("name").value = data.userName
        document.getElementById("td").value=data.email
        document.getElementById("po").value=data.phone
        document.getElementById("role").value=data.role
        document.getElementById("exp").value=data.experience


    })
}
function val(v){
    v.preventDefault();
    var s=new FormData(document.querySelector('form'));
    var c=Object.fromEntries(s);
    console.log(c);
    fetch(`http://localhost:4321/user/${userdata}`,{
        method:"PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(c)
    })
}