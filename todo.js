    inputText = document.querySelector(".text");
    
    
    
    list = document.querySelector(".list");
    arrTask = [];
    function getUncompletedTask(){
        let count = arrTask.filter((task)=>task.status ===  false).length;
        document.querySelector(".getCount").textContent = `${count} items left`;

    }
    inputText.addEventListener('keydown',(e)=>{
        if(e.key === "Enter"){
        addTask(inputText.value);
    }
    })
    function addTask(value){
        obj = {
            id:Date.now(),
            content:inputText.value,
            status:false,
        }
        console.log(obj);
        if(inputText.value === ''){
            alert("you must write something");
        }
        else{
        arrTask.unshift(obj);
        console.log({arrTask});
        renderList(arrTask);
        inputText.value = "";
        }
        getUncompletedTask();
    }
    function renderList(arrTask){
        list.textContent = "";
        arrTask.forEach(item => {
            li = document.createElement("li");
            check = document.createElement("input");
            span = document.createElement("span");
            li.textContent = item.content;
            list.appendChild(li);
            check.type = "checkbox";
            li.appendChild(check);
            check.id = item.id;
            check.checked = item.status;
            li.style.textDecoration = item.status ? 'line-through':'none';  
            check.onclick = ()=>{toggleTask(item.id)}
            check.className = "check-box";
            span.id = obj.id;
            span.className = "cross";
            span.textContent = '\u00d7'
            span.onclick = ()=> {deleteLElement(item.id)};
            li.appendChild(span);
        });
    }

    
   
function deleteLElement(id){
    const index = arrTask.findIndex(task=>task.id === id)
    arrTask.splice(index,1);
    renderList(arrTask);
    getUncompletedTask();
}

function toggleTask(id){
    arrTask.map(item=>{
        if(item.id === id ){
            item.status = !item.status;
        }
        getUncompletedTask();
        
    })
    // const index = arrTask.findIndex(task=>task.id == id)
    // console.log(index);
    // arrTask[index].status = !arrTask[index].status;
    // renderList();
    // check.checked = arrTask[index].status;
    // li.style.textDecoration = check.checked ? 'line-through':'none';
    renderList(arrTask);
}

clear = document.querySelector(".clear");
clear.addEventListener('click',()=>{
    arrTask = arrTask.filter((task) => task.status === false);
    renderList(arrTask);
});

completed = document.querySelector(".completed");

completed.addEventListener('click',()=>{
    arr1 = [];
    arrTask.filter((item)=>{
        if(item.status === true){
            arr1.push(item);
            arr1.filter((item)=>{
                if(item.status === false){
                    arr1.pop(item);
                }
            }
    )}
        renderList(arr1);
    })
})

active = document.querySelector(".active");
active.addEventListener('click',()=>{
    arr = []
    arrTask.filter((item)=>{
        if(item.status === false){
            arr.push(item);
        }
        renderList(arr);
    })
})

selectall = document.querySelector('.selectall');
selectall.addEventListener('click',()=>{
    renderList(arrTask);
})

mark = document.querySelector(".markcomplete");
mark.addEventListener('click',()=>{
    arrTask.map(item=>{
        item.status = !item.status;
        console.log(item);
    })
    

    renderList(arrTask);
    getUncompletedTask();
})

// function getUncompletedtasks(arrTask){
//     arrTask.filter(item=>item.status === false);
//     return arrTask.length;
// }

const categoryButtons = document.querySelectorAll(".foot button .but");
// console.log("hi");
categoryButtons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        categoryButtons.forEach(btn=>btn.classList.remove('selected'));
    e.target.classList.add('selected');
    });
});