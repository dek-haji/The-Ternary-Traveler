const travelData = {
    getData() {
        return fetch("http://localhost:8088/interests")
        .then(Response => Response.json())
    },
    postNewTravel(newUser) {
        return fetch("http://localhost:8088/interests", {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    },
    // delete fetch call, takes one argument (id) to target which article we are deleting
    deleteArticle(travelId) {
      return fetch(`http://localhost:8088/interests/${travelId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
      })
    },
    getNews(travelId) {
        return fetch(`http://localhost:8088/interests/${travelId}`)
        .then(response => response.json())
      },
      // edit fetch call
      putExistingNews(travelId, travelToEdit) {
        return fetch(`http://localhost:8088/news/${travelId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(travelToEdit)
        })
          }
    }








export default travelData