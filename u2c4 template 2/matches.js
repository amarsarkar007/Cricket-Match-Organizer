// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))

var favarr =JSON.parse(localStorage.getItem("favourites")) || []

display(matchArr)

function display(data){

    document.querySelector("tbody").innerHTML = ""

    data.forEach(function(ele){

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = ele.matchNum
        var td2 = document.createElement("td")
        td2.innerText = ele.teamA
        var td3 = document.createElement("td")
        td3.innerText = ele.teamB
        var td4 = document.createElement("td")
        td4.innerText = ele.date
        var td5 = document.createElement("td")
        td5.innerText = ele.venue

        td6 = document.createElement("td")
        td6.innerText = "Add as Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            addfav(ele)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
    })
}

function addfav(ele){
    // console.log(ele)
    favarr.push(ele)

    localStorage.setItem("favourites", JSON.stringify(favarr))
}

document.querySelector("#filterVenue").addEventListener("change",venueFun)

function venueFun(){

    // console.log("venue function")

    var selected = document.querySelector("#filterVenue").value

    if(selected=="none")
    {
        display(matchArr)
    }

    else{

        var venueMatches = matchArr.filter(function(ele){
            return ele.venue == selected
        })
    
        display(venueMatches)
    

    }
    

}