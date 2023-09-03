//create an empty array
var bucketList = [];

//create variable to select the list tag
var listContainer  = document.getElementById("list-container");

function addValues(){
    var value = document.getElementById("input-field").value;
    bucketList.push(value);
    displayList();
}


function displayList(){
    listContainer.innerHTML="";
    for(let i=0;i<bucketList.length; i++){
        var li = document.createElement('li');    
        li.innerHTML = bucketList[i]+`<span><img class="checked" onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"/></span>`; 
        li.className="list";
        listContainer.append(li);
    }
}




function reset(){
    bucketList = [];
    displayList();

}

function remove(i){
    bucketList.splice(i,1);
    displayList();
   
}

