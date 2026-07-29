let board=[
"",
"",
"",
"",
"",
"",
"",
"",
""
];


let player="X";


const boardDiv=document.getElementById("board");


function draw(){

boardDiv.innerHTML="";


board.forEach((value,index)=>{

let cell=document.createElement("button");

cell.className="cell";

cell.innerHTML=value;


cell.onclick=function(){

if(board[index]==""){

board[index]=player;

player=player==="X"?"O":"X";

draw();

check();

}

};


boardDiv.appendChild(cell);


});


}



function check(){

fetch("http://localhost:5000/move",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

board:board

})

})


.then(response=>response.json())

.then(data=>{


if(data.winner){

document.getElementById("result").innerHTML=
"Winner: "+data.winner;

}

});


}



function restart(){

board=[
"",
"",
"",
"",
"",
"",
"",
"",
""
];

document.getElementById("result").innerHTML="";

draw();

}



draw();