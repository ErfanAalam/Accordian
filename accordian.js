const icon = document.querySelectorAll(".fa-solid")
const para = document.querySelectorAll('p')

let i;

for (i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", (e) => {
        
        para.forEach((p)=>{
            if (p.classList.contains("active")) {
                p.classList.toggle("active")
            }
        })
        e.target.parentElement.nextElementSibling.classList.toggle("active")

        if(e.target.classList.contains("fa-square-plus")){
            e.target.classList.remove("fa-square-plus")
            e.target.classList.add("fa-square-minus")
        }
        else{
            e.target.classList.remove("fa-square-minus")
            e.target.classList.add("fa-square-plus")
        }
    });

}




