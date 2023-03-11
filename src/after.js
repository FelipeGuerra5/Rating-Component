// const container = document.getElementsByTagName("main")

// // Structure build
// function makeElement(dic) { // Accepts => id, text, classes=[], children=[], parent
//     const element = document.createElement(dic['tag'])
//     dic['id'] ? element.id = dic['id'] : "" 
//     dic['text'] ? element.innerHTML = dic['text'] : ""
//     dic['classes'] ? dic['classes'].forEach((item) => element.classList.add(item)) : ""
//     dic['children'] ? dic['children'].forEach((item) => element.appendChild(item)) : ""
//     dic['parent'] ? dic['parent'].appendChild(element) : ""
//     return element
// }


class RateResponse extends HTMLElement {
    constructor(rate) {
        super();
        this.shadow = this.attachShadow({ mode : "open" })
        this.rate = rate
    }

    connectedCallBack() {
        this.render(this.rate)
    }

    render(rate) {
        this.shadow.innerHTML = `
        <main id="main">
            <div class="pic">
                <img src="../images/illustration-thank-you.svg" alt="">
            </div>
            <p id="chosen-rate-display">${rate}</p>
            <h1>Thank you!</h1>
            <p>We Appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </main>
        `
    }
}

customElements.define('rate-response', RateResponse)