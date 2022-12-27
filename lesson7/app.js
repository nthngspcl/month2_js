document.querySelector('.addBtn').onclick = function(){
    if(document.querySelector('input').value === ''){
        alert('Please enter a task');
    }else{
        (document.querySelector('.tasks').innerHTML 
        += `<div class="task">
            <span class="taskName">${document.querySelector('input').value}</span>
            <button class="delete">X</button>
        </div>`)
        document.querySelector('input').value = '';
        let currentTask = document.querySelectorAll('.delete');
        for (let i = 0; i < currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        let doneTask = document.querySelectorAll('.taskName');
        for (let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
    }
}