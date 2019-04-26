var laserModule = (function(){
    "use strict"
   
    function laserMouseClickHandler(event){
        if(event.currentTarget.classList.contains("hovered")){
            closeLaser();
        }else{
            openLaser();
        }   
    }
    
    function sandboxClickHandler(event){
        if(event.currentTarget == event.target && event.target.nodeName === "BODY"){
            closeLaser();
        }
    }
    
    function closeLaser(){
        document.getElementById('laserContainer').classList.remove("hovered");
    }
    
    function openLaser(){
        document.getElementById('laserContainer').classList.add("hovered");
    }
    
    return {
        laserMouseClickHandler : laserMouseClickHandler,
        sandboxClickHandler : sandboxClickHandler
    };
}());