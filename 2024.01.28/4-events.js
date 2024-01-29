
// Events


const formInput = document.querySelector(".form-control")
const AddBtn = document.querySelector("#button-addon2")

AddBtn.addEventListener("click",(event)=>{

    console.log(event);
    console.log(event.target.textContent="ADD");
    console.log(event.target.style.color="red");

    // console.log(formInput.remove());
    // console.log("Burada istegimiz kodlari calistirailriiz");


})

// console.log(AddBtn);

formInput.addEventListener("input",(e)=>{
    console.log(e.target.value);

})

