let button =  document.querySelector('nav .container .button')

let sidebar = document.querySelector('.sidebar');
// <i class="bi bi-x"></i>
function rato () {
    sidebar.classList.toggle('active')
    

    if(sidebar.classList.contains('active') == true){
        
        button.innerHTML = '<i class="bi bi-x"></i>'
        
    } else{
        
        button.innerHTML = '<i class="bi bi-list"></i>'
    }



}

button.addEventListener("click", rato)
