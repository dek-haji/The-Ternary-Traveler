import travelData from "./travelData";
import travelDom from "./travelCreateObj"

// // This module will get the data, build the HTML and append it to the DOM.

// This module gets data from fetch get request, build the HTML and append it to the DOM.
const traveList= {
    travelHtmlAppending(){
        travelData.getData()
        .then(parsedResponce => {
            // create new document fragment
            let travelDocFragment = document.createDocumentFragment()
            // loop through an array of object we get from get request
            parsedResponce.forEach(news => {
                // build html
                let travelHtml = travelDom.articleBuilder(interests)
                // append the html to the document fragment
                travelDocFragment.appendChild(travelHtml)
                // get a reference of our container in index.html
                let travelOutput = document.querySelector(".output")
                // clearing the dom
                while (travelOutput.firstChild) {
                    travelOutput.removeChild(travelOutput.firstChild);
                  }
                // append document fragment to the container
                travelOutput.appendChild(travelDocFragment)
            })
        })
    }
}


export default traveList