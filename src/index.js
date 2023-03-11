const rateBtns = document.querySelectorAll('button#rate')

let chosenRate = ""

rateBtns.forEach((item) => item.addEventListener('click', (i) => {
    chosenRate = i.target.innerHTML
    // insert in to section Storage
}))

function rateSubmited(rate) {
    console.log(rate)
    sessionStorage.setItem("rate", JSON.stringify(rate))
    window.location.href = '/Rating-Component/views/submited.html'
}

const submitBtn = document.querySelector('button.submit-btn')
submitBtn ? submitBtn.addEventListener('click', () => {
    chosenRate ? rateSubmited(chosenRate) : window.alert('Please choose a Rating.\nThank you!')
}) : ""
