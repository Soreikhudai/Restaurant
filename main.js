async function save(event) {
    try {
        event.preventDefault()
        const name = event.target.username.value
        const dishes = event.target.dish.value
        const amount = event.target.rate.value
        const tables = event.target.table.value
        const user = {
            name,
            dishes,
            amount,
            tables
        }
        await axios.post("https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data", user)
            .then((response) => {
                showOnScreen(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (error) {
        console.log(error)
    }
}



window.addEventListener("DOMContentLoaded", async () => {
    try {
        await axios.get("https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data")
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    showOnScreen(response.data[i])
                }
            })
            .catch((err) => console.log(err))
    }
    catch (error) {
        console.log(error)
    }
})



function showOnScreen(user) {
    try {
        document.getElementById("name").value = "";
        document.getElementById("item").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("tab").value = "";
        const tb = document.getElementById("tab")


        if (user.tables == 'table1') {
            let parentNode = document.getElementById("t1")
            let childHTML = document.createElement("li")
            childHTML.textContent = user.name + ' - ' + user.dishes + ' - ' + user.amount + ' - ' + user.tables;
            parentNode.appendChild(childHTML)
            let deleteBtn = document.createElement("input")
            deleteBtn.type = "button"
            deleteBtn.value = "delete"
            childHTML.appendChild(deleteBtn)
            parentNode = parentNode + childHTML;
            const editBtn = document.createElement("input")
            editBtn.type = "button"
            editBtn.value = "edit"
            childHTML.appendChild(editBtn)
            deleteBtn.onclick = async () => {

                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentNode.removeChild(childHTML)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
            editBtn.onclick = async () => {
                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentNode.removeChild(childHTML)
                        document.getElementById("name").value = "";
                        document.getElementById("item").value = "";
                        document.getElementById("amount").value = "";
                        document.getElementById("tab").value = "";
                    }).catch((err) => console.log(err))
            }


        }
        else if (user.tables == 'table2') {
            let parentEle = document.getElementById("t2")
            let childEle = document.createElement("li")
            childEle.textContent = user.name + ' - ' + user.dishes + ' - ' + user.amount + ' - ' + user.tables;
            let btn1 = document.createElement("input")
            btn1.type = "button"
            btn1.value = "delete"
            parentEle.appendChild(childEle)
            childEle.appendChild(btn1)
            parentEle = parentEle + childEle;
            const editBtn = document.createElement("input")
            editBtn.type = "button"
            editBtn.value = "edit"
            childEle.appendChild(editBtn)
            btn1.onclick = async () => {

                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentEle.removeChild(childEle)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
            editBtn.onclick = async () => {
                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentNode.removeChild(childHTML)
                        document.getElementById("name").value = "";
                        document.getElementById("item").value = "";
                        document.getElementById("amount").value = "";
                        document.getElementById("tab").value = "";
                    }).catch((err) => console.log(err))
            }
        }
        else if (user.tables == 'table3') {
            let parentEle = document.getElementById("t3")
            let childEle = document.createElement("li")
            childEle.textContent = user.name + ' - ' + user.dishes + ' - ' + user.amount + ' - ' + user.tables;
            let btn1 = document.createElement("input")
            btn1.type = "button"
            btn1.value = "delete"
            parentEle.appendChild(childEle)
            childEle.appendChild(btn1)
            parentEle = parentEle + childEle;
            const editBtn = document.createElement("input")
            editBtn.type = "button"
            editBtn.value = "edit"
            childEle.appendChild(editBtn)
            btn1.onclick = async () => {

                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentEle.removeChild(childEle)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
            editBtn.onclick = async () => {
                await axios.delete(`https://crudcrud.com/api/052bfea9c28349fd9a88883277c2f167/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentNode.removeChild(childHTML)
                        document.getElementById("name").value = "";
                        document.getElementById("item").value = "";
                        document.getElementById("amount").value = "";
                        document.getElementById("tab").value = "";
                    }).catch((err) => console.log(err))
            }
        }
        else {
            console.log(err)
        }


    }
    catch (err) {
        console.log(err)
    }
}
