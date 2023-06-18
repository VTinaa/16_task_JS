{

    let name = document.querySelector('.task4 input')
    let text = document.querySelector('.task4 textarea')
    let btn = document.querySelector('.task4 button')
    let box = document.querySelector('.task4 .comments')
    
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        createComment();
    });
    
    function createComment(){
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = name.value;
        div.insertAdjacentElement('beforeend',h3)
        let p = document.createElement('p')
        p.textContent = new Date().toLocaleDateString();
        div.insertAdjacentElement('beforeend',p)
        let ptext = document.createElement('p')
        ptext.textContent = text.value
        div.insertAdjacentElement('beforeend',ptext)
        box.insertAdjacentElement('beforeend',div);
    }
    
    
    }