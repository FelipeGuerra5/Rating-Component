const container = document.getElementsByTagName("main")

// Structure build
function makeElement(dic) { // Accepts => id, text, classes=[], children=[], parent
    const element = document.createElement(dic['tag'])
    dic['id'] ? element.id = dic['id'] : "" 
    dic['text'] ? element.innerHTML = dic['text'] : ""
    dic['classes'] ? dic['classes'].forEach((item) => element.classList.add(item)) : ""
    dic['children'] ? dic['children'].forEach((item) => element.appendChild(item)) : ""
    dic['parent'] ? dic['parent'].appendChild(element) : ""
    return element
}


