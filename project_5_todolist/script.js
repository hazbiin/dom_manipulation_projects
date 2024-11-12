// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listerners 
addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if(inputTask.value === ""){
        alert("please enter a task!");
    }else{
        taskContainer.appendChild(task);
    }
    inputTask.value = "";


    checkButton.addEventListener("click",function(){
        // console.log(checkButton.parentElement);
        // checkButton.parentElement.style.textDecoration = "line-through";

        if(li.classList.contains('strike-through-task')){
           li.classList.remove('strike-through-task'); 
        } else {
            li.classList.add('strike-through-task'); 
        }
    });

    deleteButton.addEventListener("click", function(e){
        // task.style.display = "none";
        
        let target = e.target;
        console.log(target);
        // console.log(target.parentElement);
        // console.log(target.parentElement.parentElement);
        // console.log(target.classList);
        // target.parentElement.parentElement.remove();

        // if(target.classList.contains('deleteTask')){
        //     target.parentElement.remove();
        // } else {
        //     target.parentElement.parentElement.remove();
        // }

        if(target.matches('button')){
            target.parentElement.remove();
        } else {
            target.parentElement.parentElement.remove();
        }
    });
});