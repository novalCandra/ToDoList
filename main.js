// state
const textatea = document.getElementById("task");
const form = document.getElementById("form")
const valueTaskContent = document.getElementById("task_content");
const task = document.getElementById("value_task");
const deleteAll = document.getElementById("deleteAll");
const buttonMenu = document.getElementById("buttonMenu");
const listDropdown = document.getElementById("listDropdown")
// console.log(listDropdown)
textatea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (textatea.value.trim() === "") {
            return console.log("wajib diisi")
        }
        const checbox = document.createElement("div");
        const textData = document.createElement("p");
        const buttonDelete = document.createElement("button")
        buttonDelete.setAttribute("id", "deleteTask")
        textData.setAttribute("id", "idTask");
        textData.innerText = textatea.value
        buttonDelete.innerText = 'DELETE'
        buttonDelete.classList.add("delete")
        checbox.classList.add("contenTask")
        textatea.classList.add("coretan")
        // textData.classList.remove("coretan")
        checbox.innerHTML = `
        <input type="checkbox" name="task" id='task1'>
        `;
        valueTaskContent.appendChild(checbox)
        checbox.append(textData)
        checbox.append(buttonDelete)
        textatea.value = ""
    }
})

valueTaskContent.addEventListener("change", (e) => {
    console.log("coretan")
    if (e.target.type === "checkbox") {
        const text = e.target.parentElement.querySelector("p");
        text.classList.toggle("coretan")
    }
})
valueTaskContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    }
})

deleteAll.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    }
})

buttonMenu.addEventListener("click", () => {
    console.log("hello")
    listDropdown.classList.toggle("block")
})