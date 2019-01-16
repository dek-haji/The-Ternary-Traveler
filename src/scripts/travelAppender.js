const travelPage = {
    // adding Login page to the dom
    travelAppendLogin() {
        let travel = document.querySelector(".input");
        travel.innerHTML = `<div
    <section class="auth hidden">
    <fieldset>
      Name:
      <input class="username__Input" type="text" name="nameIntrest"> </br>
      </fieldset>
      <fieldset>
      Description:
      <input class="description" type="text" name="desc"> </br>
      </fieldset>
      <fieldset>
      Cost:
      <input class="cost" type="text" name="cost"> </br>
      </fieldset>
      <section class="location">
      <fieldset>
          <label for="location"> Place</label>
          <select id = "scroll">
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
          </select> </br>
          <button id ="submit"> Safe </button>
  </section>
   </div>`
    }
}






export default travelPage