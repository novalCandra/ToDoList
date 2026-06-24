// state TODOLIST
const textatea = document.getElementById("task");
const form = document.getElementById("form")
const valueTaskContent = document.getElementById("task_content");
const task = document.getElementById("value_task");
const deleteAll = document.getElementById("deleteAll");
const buttonMenu = document.getElementById("buttonMenu");
const listDropdown = document.getElementById("listDropdown")
const tanggal = document.getElementById("date");
textatea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (textatea.value.trim() === "" || tanggal.value === "") {
            return alert("wajib diisi")
        }
        const checbox = document.createElement("div");
        const textData = document.createElement("p");
        const buttonDelete = document.createElement("button")
        const textdataTanggal = document.createElement("span");
        const inputChecbox = document.createElement("input")
        // opsi level
        const selectLevel = document.getElementById("option_value");
        const level = selectLevel.value
        inputChecbox.type = "checkbox";
        buttonDelete.setAttribute("id", "deleteTask")
        textData.setAttribute("id", "idTask");
        textData.innerText = textatea.value;
        textdataTanggal.innerText = tanggal.value;
        textdataTanggal.style.color = "white";
        buttonDelete.innerText = 'DELETE';
        buttonDelete.classList.add("delete");
        checbox.classList.add("contenTask");
        textatea.classList.add("coretan");
        inputChecbox.classList.add("checkbox", level);
        valueTaskContent.appendChild(checbox)
        checbox.appendChild(inputChecbox)
        checbox.append(textData)
        checbox.append(textdataTanggal)
        checbox.append(buttonDelete)
        textatea.value = ""
        tanggal.value = ""
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
    listDropdown.classList.toggle("block")
})
