async function save(event) {
    try {
        event.preventDefault()
        const dishes = event.target.dish.value
        const amount = event.target.price.value
        const tables = event.target.table.value
        const user = {
            amount,
            dishes,
            tables
        }
        await axios.post("https://crudcrud.com/api/d1ee1ee2f71e40b1aacd4016d35415ee/data", user)
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
        await axios.get("https://crudcrud.com/api/d1ee1ee2f71e40b1aacd4016d35415ee/data")
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

    document.getElementById("order").value = "";
    document.getElementById("rupees").value = "";
    document.getElementById("tableNo").value = "";
    const tb = document.getElementById("tableNo")


    if (user.tables == 'okay1') {
        let parentNode = document.getElementById("t1")
        let childHTML = document.createElement("li")
        childHTML.textContent = user.amount + ' - ' + user.dishes + ' - ' + user.tables;
        parentNode.appendChild(childHTML)
        let deleteBtn = document.createElement("input")
        deleteBtn.type = "button"
        deleteBtn.value = "delete"
        childHTML.appendChild(deleteBtn)
        parentNode = parentNode + childHTML;
        deleteBtn.onclick = async () => {
            try {
                await axios.delete(`https://crudcrud.com/api/d1ee1ee2f71e40b1aacd4016d35415ee/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentNode.removeChild(childHTML)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            catch (error) {
                console.log(error)
            }
        }


    }
    else if (user.tables == 'okay2') {
        let parentEle = document.getElementById("t2")
        let childEle = document.createElement("li")
        childEle.textContent = user.amount + ' - ' + user.dishes + ' - ' + user.tables;
        let btn1 = document.createElement("input")
        btn1.type = "button"
        btn1.value = "delete"
        parentEle.appendChild(childEle)
        childEle.appendChild(btn1)
        parentEle = parentEle + childEle;
        btn1.onclick = async () => {
            try {
                await axios.delete(`https://crudcrud.com/api/d1ee1ee2f71e40b1aacd4016d35415ee/data/${user._id}`)
                    .then((response) => {
                        console.log(response)
                        parentEle.removeChild(childEle)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    else {
        console.log(err)
    }

}



