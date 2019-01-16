import travelData from "./travelData"
import traveList from "./travelList"

const travelDom = {
    articleBuilder(interests) {
// method to build html form, takes one argument it is an object from database
// creat HTML elements
let travelSection = document.createElement("section")
travelSection.setAttribute("id", `travel--${interests.placeId}`)
let travelName = document.createElement("h3")
travelName.textContent =`${interests.name}`
let travelDesc = document.createElement("h4")
travelDesc.textContent = `${interests.location}`;
let travelCost = document.createElement("p")
travelCost.textContent = `${interests.cost}`
let location = document.createElement("p")
location.textContent = `${interests.currentLocation}`



//edit button
let travelEdit = document.createElement("button")
travelEdit.textContent = "Edit"
travelEdit.addEventListener("click",()=>{
    let articleId = event.target.parentNode.id
      let travelId = articleId.split("--")[1]
      travelData.getData(travelId)
      .then(response => {
  //      newsEditForm.createAndAppendEditForm(articleId, response)
      })
})
//create delete Button
let travelDelete = document.createElement("button");
travelDelete.textContent = "Delete"
travelDelete.setAttribute("id", `travel--${interests.placeId} `)
// adding evetListener
travelDelete.addEventListener("click", ()=> {
    let travelId = event.target.id.split("--") [1]
    travelData.deleteArticle(travlId)
    .then(response => {
        traveList.travelHtmlAppending(travelId, response)
    })
})
        // append to the section
    travelSection.appendChild(travelName)
    travelSection.appendChild(travelDesc)
    travelSection.appendChild(travelCost)
    travelSection.appendChild(location)
    travelSection.appendChild(travelEdit)
    travelSection.appendChild(travelDelete)
    return 
    travelSection
    
    }
}


export default travelDom