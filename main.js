window.addEventListener('load',()=>{

    document.querySelector(".burger").addEventListener('click',()=>{
        console.log(document.querySelector(".menus").classList)
        document.querySelector(".menus").classList.toggle('display')
    })


    
})