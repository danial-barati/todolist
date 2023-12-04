document.getElementById('input_td').addEventListener('click',()=>{
    let k = document.getElementById('inp')
    let temp = k.value
    k.classList.remove('alert')
    if (
        temp == '' ||
        temp == ' ' ||
        temp == '\n' ||
        temp == null ||
        (temp.length < 3) 

    ) {
        setTimeout(() => {
            k.classList.add('alert')
        }, 200);
    }else{
        let _li = document.createElement('li')
        _li.innerHTML = temp
        _li.classList.add('lilist')
        document.getElementById('list').appendChild(_li)
        k.value = null
        k.focus()
    }
})