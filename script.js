document.querySelector("#todoInput").value = "";
function populateTodoList(todos) {

  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
todos.forEach(ele => {

const liEl=document.createElement("li");
liEl.textContent=ele.task;
list.append(liEl);
const span=document.createElement("span");
liEl.append(span);
const i1=document.createElement("i");
const i2=document.createElement("i");
span.append(i1,i2);
liEl.classList.add("list-group-item" ,"d-flex", "justify-content-between", "align-items-center");
span.classList.add("badge" ,"bg-primary", "rounded-pill");
i1.classList.add("fa", "fa-check");
i2.classList.add("fa", "fa-trash");

i1.addEventListener("click",(e)=>{

if(liEl.style.textDecoration === "line-through"){
  liEl.style.textDecoration="none";
  liEl.classList.remove("completed");

}else{
  liEl.style.textDecoration="line-through";
  liEl.classList.add("completed");
}

})

i2.addEventListener("click",(e)=>{

  liEl.remove();

})

});

}

let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];




populateTodoList(todos);







const form=document.querySelector("form");
const dive=document.querySelector("form div");
dive.classList.add("first-input");
const diveEl=document.createElement("div");
dive.insertAdjacentElement("afterend",diveEl);
const lable=document.createElement("label");
lable.setAttribute("for","datepicker");
lable.textContent="Deadline: "
lable.style.marginBottom="0.5rem";
lable.classList.add("lable-control");

const inputDate=document.createElement("input");
inputDate.setAttribute("type","date");
inputDate.setAttribute("id","datepicker");
inputDate.classList.add("form-control");
diveEl.append(lable,inputDate);



function addNewTodo(event) {

  event.preventDefault();


const input=document.querySelector("#todoInput");
let list = document.getElementById('todo-list');


if(input.value.trim()===""){
return;
}
const linew=document.createElement("li");
const textDo=document.createElement("span");
const textDate=document.createElement("span");
textDo.textContent=input.value;
// textDate.textContent=
// inputDate.value===""? "No due date" : ` Due  ${inputDate.value}`
const today=new Date();
today.setHours(0, 0, 0, 0);


if (inputDate.value==="") {
  textDate.textContent= "No due date"
  }else{
    const deadline=new Date(inputDate.value);  
    deadline.setHours(0,0,0,0);   
    const diff=deadline-today;
    const left=Math.ceil(diff/(1000*60*60*24));
    textDate.style.color="darkblue";
  if (left>0) {
    textDate.textContent=`${left} days left.`;

  }else if (left===0){
  
    textDate.textContent=`Due today.😮`;
  }else{
   textDate.textContent=`Missing😱`;
    textDate.style.color="red";
  }
  
  }
  linew.append(textDo,textDate);


list.append(linew);
const span=document.createElement("span");
linew.append(span);
const i1=document.createElement("i");
const i2=document.createElement("i");
span.append(i1,i2);
linew.classList.add("list-group-item" ,"d-flex", "justify-content-between", "align-items-center");
span.classList.add("badge" ,"bg-primary", "rounded-pill");
i1.classList.add("fa", "fa-check");
i2.classList.add("fa", "fa-trash");

i1.addEventListener("click",(e)=>{

  if(linew.style.textDecoration === "line-through"){
   linew.style.textDecoration="none";
    linew.classList.remove("completed");
  }else{
    linew.style.textDecoration="line-through";
    linew.classList.add("completed");
  }
  
  })
  
  i2.addEventListener("click",(e)=>{
  
    linew.remove();
  
  })
input.value="";
inputDate.value = "";
}

const btn=document.querySelector(".btn");
btn.addEventListener("click",addNewTodo);
let list = document.getElementById('todo-list');
const buttonDeleteAll=document.createElement("button");
list.insertAdjacentElement("afterend",buttonDeleteAll);
buttonDeleteAll.classList.add("btn-primary", "mt-4","btn")
buttonDeleteAll.textContent="Delete all Completed";






function deleteAllCompletedTodos() {
  // Write your code here...
  const children=document.querySelectorAll("#todo-list li");
children.forEach((val)=>{
  if(val.classList.contains("completed")){
    val.remove();
  }
  

  })


}


buttonDeleteAll.addEventListener("click",deleteAllCompletedTodos);








