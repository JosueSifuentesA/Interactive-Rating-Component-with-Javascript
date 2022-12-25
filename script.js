const divRate1 = document.querySelector(".div_rate--1");
const divRate2 = document.querySelector(".div_rate--2");
const divRate3 = document.querySelector(".div_rate--3");
const divRate4 = document.querySelector(".div_rate--4");
const divRate5 = document.querySelector(".div_rate--5");
const button = document.querySelector(".main_buttonContainer");
const divRate = document.querySelectorAll(".div_rate");
const rateSpan = document.querySelectorAll(".rate_span");
let div = "";
let selectedTarget;

button.addEventListener("click",()=>{

    window.location.href=`http://localhost:3000/thank-you.html?${div}`;
    
})

controlHoover();


divRate1.addEventListener("click",(e)=>{

    div = "div=1"
    e.stopPropagation();
    restoreContainers(e);
    seleccionarItem(e);
    });

divRate2.addEventListener("click",(e)=>{
    div = "div=2";
    e.stopPropagation();
    restoreContainers(e);
    seleccionarItem(e);
});


divRate3.addEventListener("click",(e)=>{

    div = "div=3";
    e.stopPropagation();
    restoreContainers(e);    
    seleccionarItem(e);
    
    
});

divRate4.addEventListener("click",(e)=>{
    
    div = "div=4";
    e.stopPropagation();
    restoreContainers(e);

    seleccionarItem(e);
});

divRate5.addEventListener("click",(e)=>{
    
    div = "div=5";
    e.stopPropagation();   
    restoreContainers(e);
    seleccionarItem(e);
});

function newFunction(e){
    
    let dark = "#262f38";
    let gray = "#7c8798";
    
    let arrayRate = [];
    let arraySpan=[];
    
    for(let i  = 0 ; i<divRate.length;i++){

        arrayRate[i] = divRate[i];
        arraySpan[i] = rateSpan[i];

    }

    for(let i = 0 ; i < arrayRate.length;i++){

        if(selectedTarget == arrayRate[i] || selectedTarget == arraySpan[i]  ){
            let position = i ;
            arrayRate.splice(position,1);
            arraySpan.splice(position,1); 
        }
    
    }

    for(let i = 0 ; i < arrayRate.length;i++){
        if(e.target == arrayRate[i]){
            let child = e.target.childNodes;
            if(e.type == "mouseleave"){
                child[1].style.backgroundColor=dark;
                e.target.style.backgroundColor=dark;
            }

            if(e.type == "mouseover"){
                e.target.style.backgroundColor= gray;
                child[1].style.backgroundColor= gray;
            }
        }

        if(e.target == arraySpan[i]){
            
            let parent = e.target.parentNode;
            if(e.type == "mouseleave"){
                e.target.style.backgroundColor=dark;
                parent.style.backgroundColor=dark;
                
            }

            if(e.type == "mouseover"){
                e.target.style.backgroundColor=gray;
                parent.style.backgroundColor=gray;
            }
        }


    }

}

function controlHoover(){
    
    //div1
    
    divRate1.addEventListener("mouseover",(e)=>{
        
        newFunction(e);
        
    });
    
    divRate1.addEventListener("mouseleave",(e)=>{
        
        newFunction(e);
        
    })
    

    
    divRate2.addEventListener("mouseover",(e)=>{
        
        newFunction(e);
        
    });
    
    divRate2.addEventListener("mouseleave",(e)=>{
       newFunction(e);
        
    })
    

    divRate3.addEventListener("mouseover",(e)=>{
        
        newFunction(e);
        
    });
    
    divRate3.addEventListener("mouseleave",(e)=>{
        newFunction(e);
        
    })
    
    divRate4.addEventListener("mouseover",(e)=>{
        
        newFunction(e);
        
    });
    
    divRate4.addEventListener("mouseleave",(e)=>{
        newFunction(e);
        
    })

    divRate5.addEventListener("mouseover",(e)=>{
        
        newFunction(e);
        
    });
    
    divRate5.addEventListener("mouseleave",(e)=>{
        newFunction(e);
        
    })
    
}
      
function restoreContainers(e){
                

    /*
        Seleccionar de la lista la clase necesaria
        una vez seleccionada añadir en otra lista las clases restantes
        cambiar los estilos de las clases restantes.
    */
    


    let arrayDiv = [];
    let arraySpan = [];

    //Mete los elementos en el array
    for(let i = 0 ; i < divRate.length ; i++){
        arrayDiv[i] = divRate[i];
        arraySpan[i] = rateSpan[i];
    }

    //Recorre en busca de coincidencias
    for(let i = 0 ; i <= arrayDiv.length ; i++){

        if(e.target == arrayDiv[i] || e.target == arraySpan[i]){
            let position = i ;
            arrayDiv.splice(position,1);
            arraySpan.splice(position,1);
        }
        
    }
    
    //Cambia los estilos de los grupos restantes
    for(let i = 0 ; i < arrayDiv.length;i++){

        arraySpan[i].style.backgroundColor="#262f38";
        arraySpan[i].style.color="#959eac";
        arrayDiv[i].style.color="#959eac";
        arrayDiv[i].style.backgroundColor="#262f38";
        


    }


    
    
}
function seleccionarItem(e){
    e.stopPropagation();

    for(let i = 0  ; i < rateSpan.length;i++){
        
        if(e.target==rateSpan[i]){
    
            let parent = e.target.parentNode;
            parent.style.backgroundColor = "#fb7413";
            parent.style.color = "white";

            e.target.style.backgroundColor = "#fb7413";
            e.target.style.color = "white";
            selectedTarget = e.target;
            break;   
        }
        if(e.target==divRate[i]){

            let child = e.target.childNodes;

                
            child[1].style.backgroundColor="#fb7413";
            child[1].style.color = "white";
            e.target.style.backgroundColor = "#fb7413";
            e.target.style.color = "white";
            selectedTarget = e.target;
        }
        
    }

}



