async function getTodos(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await resp.json()
    console.log(data);
}   

async function getSingleUser(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/2")
    const data = await resp.json()
    console.log(data);
}

function getPosts(){
    let loadedData = []
    let isLoading = true
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json()
        })
        .then((data)=>loadedData=data)
        .catch((err)=>console.log(err))
        .finally(()=>{
            isLoading=false
            console.log("Request is Done from Finaly");
            console.log(loadedData);
        })
    console.log("Request is Done");
}
getPosts()
// getSingleUser()
// getTodos()