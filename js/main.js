const cardAdvice = document.querySelector('.card-advice')
const cardTitle = document.querySelector('.card-title')
const cardBtn = document.querySelector('.card-btn')
// let countryData;
let url = "https://api.adviceslip.com/advice";

async function fetchadvicedata() {
  try {
    const response = await fetch(url);
    const data = await response.json()
    renderCountry(data)
  } catch (error) {
    console.log("xatolik",error)
  }
}

function renderCountry (data) {
    // cardAdvice.innerHTML = ""
    // console.log(data.slip)
    cardAdvice.innerHTML = `
    ${data.slip.advice}
    `
    cardTitle.innerHTML =`
    ADVICE #${data.slip.id}
    `
}

cardBtn.addEventListener('click',()=>{
  
    location.reload()
   
})
fetchadvicedata()



