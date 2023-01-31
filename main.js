function save(event){
    event.preventDefault()
    const amount=event.target.price.value
    const dishes=event.target.dish.value
    const tables=event.target.table.value
    const obj={
        amount,
        dishes,
        tables
    }
    axios.post("https://crudcrud.com/api/bd344a8a11f9467d97479db7b638b155/data", obj)
    .then((response)=>{
        showOnScreen(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/bd344a8a11f9467d97479db7b638b155/data")
    .then((response)=>{
        for(var i=0; i<response.data.length; i++){
            showOnScreen(response.data[i])
        }
    })
    .catch((err)=>console.log(err))
})


function showOnScreen(obj){
    var parentEle=document.getElementById("table1")
    
    const childEle=document.createElement("li")
    childEle.textContent=obj.amount + ' - ' + obj.dishes + ' - ' + obj.tables;
    parentEle.appendChild(childEle)

    const deleteBtn=document.createElement("input")
    deleteBtn.type="button"
    deleteBtn.value="Delete order"
    childEle.appendChild(deleteBtn)
    deleteBtn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/bd344a8a11f9467d97479db7b638b155/data/${obj._id}`)
        .then((response)=>{
         parentEle.removeChild(childEle)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}