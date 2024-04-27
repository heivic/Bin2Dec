const input = document.querySelector("input")


//a character limit
input.addEventListener("input", ()=>{
    input.value = input.value.substring (0, 8)
})

// just get 0 and 1 
function lettersOnly(input){
    var regex = /[^0-1]/gi;
    input.value = input.value.replace(regex,"");
}

function converter(num) {
    var bin = parseInt(num, 2)
    document.getElementById("res").innerText=bin

    if(isNaN(num)) {
        document.getElementById("res").innerText="0"
}
