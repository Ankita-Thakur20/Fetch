// then catch

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response)=> response.json())
// .then((data)=>console.log(data))
// .catch(()=>{
//     console.log("something went wrong");
// })

// async await
const button=document.querySelector('button')
const ul=document.querySelector('ul')

const fetchtodos=(async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos')
    const data= await response.json();
    data.forEach(todo=>{
        let li=document.createElement('li')
        li.innerText=todo.title
        li.className="list-group-item";
        ul.appendChild(li);
        // console.log(todo.title)
    })
    // console.log(data);
})
// fetchtodos();
button.addEventListener('click',fetchtodos);