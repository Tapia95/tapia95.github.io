let visibleMenu = false;

function  showAndHideMenu()
{
    if(visibleMenu){
        document.querySelector("#nav").classList="";
        visibleMenu=false;
    }else{
        document.querySelector("#nav").classList="responsive";
        visibleMenu=true;
    }
}

function select(){
    document.querySelector("#nav").classList="";
    visibleMenu=false;

}

function skillsEffect(){
    var skills =document.querySelector("#skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >=300){
        let progress = document.querySelectorAll(".progress");
        progress[0].classList.add("html");
        progress[1].classList.add("boostrap");
        progress[2].classList.add("javascript");
        progress[3].classList.add("react");
        progress[4].classList.add("communication");
        progress[5].classList.add("teamwork");
        progress[6].classList.add("creativity");
        progress[7].classList.add("dedication");
        progress[8].classList.add("responsability");
         
    }
}

window.onscroll = function(){
    skillsEffect();
}

const $form = document.querySelector('#form');

$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept':'application/json'
        }
    })
    if(response.ok){
        this.reset();
        alert('Gracias por contactarme!');
    }
}