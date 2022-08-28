let choise = prompt("What do you want to do?");
const storage = ['Welcome'];
while(choise!=='quit'){
    if(choise === 'new'){
        var addon = prompt("what is the todo?")
        storage.push(addon);
    }
    else if(choise ==='list'){
        console.log("****************");
        for(let i =0;i<storage.length;i++){
            console.log(i+":"+storage[i]);
        }
        console.log("****************");
    }
    else if(choise === 'delete'){
        const indexNo = prompt('enter the index number to delete');
        storage.splice(indexNo,1); 
    }
    else{
    choise = prompt("Please enter a valid input");
    }
    choise = prompt("What do you want to do?");
}
