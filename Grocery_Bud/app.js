const submitBtn = document.querySelector('.submit-btn')
const clearBtn = document.querySelector('.clear-btn')

const notify = document.querySelector('.notify')
const content = document.querySelector('.input-content')
const listItems = document.querySelector('.list-items')

let items = []
function getHtmlContent(){
    let html = items.map((value, index) => {
        return `<li class="item" data-id="${index}">
                    <span class="item-content">${value}</span>
                    <div class="btn-function">
                        <button class="item-btn edit-btn" onclick="editItem(this)">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="item-btn remove-btn" onclick="removeItem(this)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </li>`
    })

    return html.join('')
}

function getParentElement(element, className){
    if(element == null)
        return null
    let temp = element.parentElement
    while(temp != null){
        if(temp.classList.contains(className)){
            return temp
        }
        temp = temp.parentElement;
    }

    return null
}
function clearNotify(){
    setTimeout(() => {
        notify.textContent = ""
        notify.classList.remove('add')
        notify.classList.remove('remove')
    }, 2000);
}
function setNotify(removeClass, addClass, textContent){
    notify.textContent = textContent
    notify.classList.remove(removeClass)
    notify.classList.add(addClass)
}
function removeItem(target){
    let element = getParentElement(target, 'item')
    if(element == null)
        return
    let index = parseInt(element.dataset.id)
    items.splice(index,1)
    updateHtmlContent()
    setNotify(removeClass ='add', addClass ='remove', textContent = "Item is removed")
    if(items.length == 0)
        clearBtn.classList.remove('enable')
    clearNotify()
    content.value = ""
}
function editItem(target){
    let element = getParentElement(target, 'item')
    if(element == null)
        return
    let index = parseInt(element.dataset.id)
    content.value = items[index]
    content.focus()
    content.dataset.id = index
    const e = document.querySelector(`.item[data-id = "${index}"]`)
    e.classList.remove('edit')
    e.classList.add('edit')
}
function addItem(s){
    items.push(s)
    clearBtn.classList.add('enable')
    setNotify(removeClass = 'remove', addClass = 'add', textContent = "Item is added to list")
    clearNotify()
}
function updateHtmlContent(){
    listItems.innerHTML = getHtmlContent()
}
function updateItem(index, value){
    items[index] = value
}
submitBtn.addEventListener('click', function() {
    let s = content.value
    if(s == ""){
        setNotify(removeClass = 'add', addClass = 'remove', textContent = "Please enter input value")
        clearNotify()
        return
    }
    if(!content.hasAttribute('data-id')){
        addItem(s)
    }
    else{
        updateItem(parseInt(content.dataset.id), s)
        content.removeAttribute('data-id')
    }
    updateHtmlContent()
    content.value = ""
})
clearBtn.addEventListener('click', function() {
    items = []
    content.value = ""
    updateHtmlContent()
    clearBtn.classList.remove('enable')
})


