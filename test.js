if(!sessionStorage.getItem('test')){
    sessionStorage.setItem('test',sessionStorage.getItem('test')+1)
}

function getTest(){
    console.log(sessionStorage.getItem('test'))
}