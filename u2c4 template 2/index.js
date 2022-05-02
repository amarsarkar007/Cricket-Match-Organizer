// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("form")

form.addEventListener("submit",matchFunc)

var matchArr =JSON.parse(localStorage.getItem("schedule")) || []


function matchFunc(){

    event.preventDefault()

    matchObj = {
        matchNum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value
    }
    // console.log(matchObj)
    matchArr.push(matchObj)
    console.log(matchArr)

    localStorage.setItem("schedule",JSON.stringify(matchArr))


}