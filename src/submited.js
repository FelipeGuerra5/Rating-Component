console.log('Submited js fine')

function getRate() {
    const rate = JSON.parse(sessionStorage.getItem("rate"))
    console.log(rate)
    return rate
}

const rate = getRate()

function displayRate(rate) {
    const pReturn = document.querySelector('#rate-display')
    pReturn.innerHTML = `You selected ${rate} out of 5.`
}

displayRate(rate)