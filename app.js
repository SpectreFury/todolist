const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value != ""){
        const newLi = document.createElement("li");
        newLi.textContent = input.value;
        ul.append(newLi);
        input.value = "";      
    }
    

})

ul.addEventListener("click", (e) => {
    e.target.remove();
})
