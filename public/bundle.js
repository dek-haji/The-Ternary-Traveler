(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _travelAppender = _interopRequireDefault(require("./travelAppender"));

var _travelData = _interopRequireDefault(require("./travelData"));

var _travelEventListener = _interopRequireDefault(require("./travelEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_travelData.default.getData();

_travelData.default.postNewTravel();

_travelAppender.default.travelAppendLogin();

_travelEventListener.default.submitTravelEntry();

},{"./travelAppender":2,"./travelData":3,"./travelEventListener":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
   </div>`;
  }

};
var _default = travelPage;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const travelData = {
  getData() {
    return fetch("http://localhost:8088/interests").then(Response => Response.json());
  },

  postNewTravel(newUser) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
  },

  // delete fetch call, takes one argument (id) to target which article we are deleting
  deleteArticle(travelId) {
    return fetch(`http://localhost:8088/interests/${travelId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  getNews(travelId) {
    return fetch(`http://localhost:8088/interests/${travelId}`).then(response => response.json());
  },

  // edit fetch call
  putExistingNews(travelId, travelToEdit) {
    return fetch(`http://localhost:8088/news/${travelId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(travelToEdit)
    });
  }

};
var _default = travelData;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _travelData = _interopRequireDefault(require("./travelData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const travelEvent = {
  submitTravelEntry() {
    //target the save button
    let button = document.getElementById("submit");
    button.addEventListener("click", travelEvent.submitEventListener);
  },

  submitEventListener() {
    let TravellerName = document.querySelector(".username__Input").value;
    let travellDescription = document.querySelector(".description").value;
    let costTravel = document.querySelector(".cost").value;
    let location = document.getElementById("scroll").value; //       // add user input into an object that will be passed into the database

    let newEntry = {
      name: TravellerName,
      description: travellDescription,
      cost: costTravel,
      currentLocation: location
    };

    _travelData.default.postNewTravel(newEntry).then(allTravel => {
      _travelData.default.getData();
    });
  }

};
var _default = travelEvent;
exports.default = _default;

},{"./travelData":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3RyYXZlbEFwcGVuZGVyLmpzIiwiLi4vc2NyaXB0cy90cmF2ZWxEYXRhLmpzIiwiLi4vc2NyaXB0cy90cmF2ZWxFdmVudExpc3RlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7OztBQUVBLG9CQUFXLE9BQVg7O0FBQ0Esb0JBQVcsYUFBWDs7QUFDQSx3QkFBVyxpQkFBWDs7QUFDQSw2QkFBWSxpQkFBWjs7Ozs7Ozs7O0FDUEEsTUFBTSxVQUFVLEdBQUc7QUFDZjtBQUNBLEVBQUEsaUJBQWlCLEdBQUc7QUFDaEIsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsR0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFwQjtBQXlCSDs7QUE3QmMsQ0FBbkI7ZUFxQ2UsVTs7Ozs7Ozs7OztBQ3JDZixNQUFNLFVBQVUsR0FBRztBQUNmLEVBQUEsT0FBTyxHQUFHO0FBQ04sV0FBTyxLQUFLLENBQUMsaUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUgsR0FKYzs7QUFLZixFQUFBLGFBQWEsQ0FBQyxPQUFELEVBQVU7QUFDbkIsV0FBTyxLQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDNUMsTUFBQSxNQUFNLEVBQUMsTUFEcUM7QUFFNUMsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZtQztBQUs1QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMc0MsS0FBcEMsQ0FBWjtBQU9ILEdBYmM7O0FBY2Y7QUFDQSxFQUFBLGFBQWEsQ0FBQyxRQUFELEVBQVc7QUFDdEIsV0FBTyxLQUFLLENBQUUsbUNBQWtDLFFBQVMsRUFBN0MsRUFBZ0Q7QUFDMUQsTUFBQSxNQUFNLEVBQUUsUUFEa0Q7QUFFMUQsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWDtBQUZpRCxLQUFoRCxDQUFaO0FBTUQsR0F0QmM7O0FBdUJmLEVBQUEsT0FBTyxDQUFDLFFBQUQsRUFBVztBQUNkLFdBQU8sS0FBSyxDQUFFLG1DQUFrQyxRQUFTLEVBQTdDLENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVELEdBMUJZOztBQTJCYjtBQUNBLEVBQUEsZUFBZSxDQUFDLFFBQUQsRUFBVyxZQUFYLEVBQXlCO0FBQ3RDLFdBQU8sS0FBSyxDQUFFLDhCQUE2QixRQUFTLEVBQXhDLEVBQTJDO0FBQ3JELE1BQUEsTUFBTSxFQUFFLEtBRDZDO0FBRXJELE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGNEM7QUFLckQsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxZQUFmO0FBTCtDLEtBQTNDLENBQVo7QUFPRzs7QUFwQ1EsQ0FBbkI7ZUE4Q2UsVTs7Ozs7Ozs7Ozs7QUM5Q2Y7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGlCQUFpQixHQUFHO0FBQ2hCO0FBQ0EsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFdBQVcsQ0FBQyxtQkFBNUM7QUFDSCxHQUxlOztBQU1oQixFQUFBLG1CQUFtQixHQUFFO0FBQ2xCLFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQyxLQUEvRDtBQUNBLFFBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsS0FBaEU7QUFDQSxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxLQUFqRDtBQUNBLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLEtBQWpELENBSmtCLENBTWxCOztBQUNDLFFBQUksUUFBUSxHQUFHO0FBQ1gsTUFBQSxJQUFJLEVBQUUsYUFESztBQUVYLE1BQUEsV0FBVyxFQUFFLGtCQUZGO0FBR1gsTUFBQSxJQUFJLEVBQUUsVUFISztBQUlYLE1BQUEsZUFBZSxFQUFFO0FBSk4sS0FBZjs7QUFNQSx3QkFBVyxhQUFYLENBQXlCLFFBQXpCLEVBQ0MsSUFERCxDQUNNLFNBQVMsSUFBRztBQUNkLDBCQUFXLE9BQVg7QUFDSCxLQUhEO0FBTUM7O0FBekJXLENBQXBCO2VBNkJtQixXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHRyYXZlbFBhZ2UgZnJvbSBcIi4vdHJhdmVsQXBwZW5kZXJcIlxuaW1wb3J0IHRyYXZlbERhdGEgZnJvbSBcIi4vdHJhdmVsRGF0YVwiXG5pbXBvcnQgdHJhdmVsRXZlbnQgZnJvbSBcIi4vdHJhdmVsRXZlbnRMaXN0ZW5lclwiXG5cbnRyYXZlbERhdGEuZ2V0RGF0YSgpXG50cmF2ZWxEYXRhLnBvc3ROZXdUcmF2ZWwoKVxudHJhdmVsUGFnZS50cmF2ZWxBcHBlbmRMb2dpbigpXG50cmF2ZWxFdmVudC5zdWJtaXRUcmF2ZWxFbnRyeSgpXG5cbiIsImNvbnN0IHRyYXZlbFBhZ2UgPSB7XG4gICAgLy8gYWRkaW5nIExvZ2luIHBhZ2UgdG8gdGhlIGRvbVxuICAgIHRyYXZlbEFwcGVuZExvZ2luKCkge1xuICAgICAgICBsZXQgdHJhdmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcbiAgICAgICAgdHJhdmVsLmlubmVySFRNTCA9IGA8ZGl2XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhdXRoIGhpZGRlblwiPlxuICAgIDxmaWVsZHNldD5cbiAgICAgIE5hbWU6XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1c2VybmFtZV9fSW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lSW50cmVzdFwiPiA8L2JyPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgIERlc2NyaXB0aW9uOlxuICAgICAgPGlucHV0IGNsYXNzPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjXCI+IDwvYnI+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgQ29zdDpcbiAgICAgIDxpbnB1dCBjbGFzcz1cImNvc3RcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3N0XCI+IDwvYnI+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJsb2NhdGlvblwiPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2NhdGlvblwiPiBQbGFjZTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBpZCA9IFwic2Nyb2xsXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24+TG9uZG9uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+UGFyaXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj5CZXJsaW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD4gPC9icj5cbiAgICAgICAgICA8YnV0dG9uIGlkID1cInN1Ym1pdFwiPiBTYWZlIDwvYnV0dG9uPlxuICA8L3NlY3Rpb24+XG4gICA8L2Rpdj5gXG4gICAgfVxufVxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgdHJhdmVsUGFnZSIsImNvbnN0IHRyYXZlbERhdGEgPSB7XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ludGVyZXN0c1wiKVxuICAgICAgICAudGhlbihSZXNwb25zZSA9PiBSZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgICBwb3N0TmV3VHJhdmVsKG5ld1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ludGVyZXN0c1wiLCB7XG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8gZGVsZXRlIGZldGNoIGNhbGwsIHRha2VzIG9uZSBhcmd1bWVudCAoaWQpIHRvIHRhcmdldCB3aGljaCBhcnRpY2xlIHdlIGFyZSBkZWxldGluZ1xuICAgIGRlbGV0ZUFydGljbGUodHJhdmVsSWQpIHtcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ludGVyZXN0cy8ke3RyYXZlbElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0TmV3cyh0cmF2ZWxJZCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9pbnRlcmVzdHMvJHt0cmF2ZWxJZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICB9LFxuICAgICAgLy8gZWRpdCBmZXRjaCBjYWxsXG4gICAgICBwdXRFeGlzdGluZ05ld3ModHJhdmVsSWQsIHRyYXZlbFRvRWRpdCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9uZXdzLyR7dHJhdmVsSWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmF2ZWxUb0VkaXQpXG4gICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB0cmF2ZWxEYXRhIiwiaW1wb3J0IHRyYXZlbERhdGEgZnJvbSBcIi4vdHJhdmVsRGF0YVwiO1xuXG5jb25zdCB0cmF2ZWxFdmVudCA9IHtcbiAgICBzdWJtaXRUcmF2ZWxFbnRyeSgpIHtcbiAgICAgICAgLy90YXJnZXQgdGhlIHNhdmUgYnV0dG9uXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRyYXZlbEV2ZW50LnN1Ym1pdEV2ZW50TGlzdGVuZXIpO1xuICAgIH0sXG4gICAgc3VibWl0RXZlbnRMaXN0ZW5lcigpe1xuICAgICAgIGxldCBUcmF2ZWxsZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VybmFtZV9fSW5wdXRcIikudmFsdWU7XG4gICAgICAgbGV0IHRyYXZlbGxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgbGV0IGNvc3RUcmF2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvc3RcIikudmFsdWU7XG4gICAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JvbGxcIikudmFsdWU7XG5cbiAgICAgICAvLyAgICAgICAvLyBhZGQgdXNlciBpbnB1dCBpbnRvIGFuIG9iamVjdCB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIGxldCBuZXdFbnRyeSA9IHtcbiAgICAgICAgICAgIG5hbWU6IFRyYXZlbGxlck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdHJhdmVsbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29zdDogY29zdFRyYXZlbCxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfTtcbiAgICAgICAgdHJhdmVsRGF0YS5wb3N0TmV3VHJhdmVsKG5ld0VudHJ5KVxuICAgICAgICAudGhlbihhbGxUcmF2ZWwgPT57XG4gICAgICAgICAgICB0cmF2ZWxEYXRhLmdldERhdGEoKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHRyYXZlbEV2ZW50Il19
