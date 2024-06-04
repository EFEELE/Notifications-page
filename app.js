function read(event){
   let element = event.currentTarget;
   element.classList.remove('unread');
}

function allRead(){
    let elmentsUnRead = document.getElementsByClassName('unread');

    while(elmentsUnRead){
        elmentsUnRead[0].classList.remove('unread')   
    }

}