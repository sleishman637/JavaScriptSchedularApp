/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link savannah:dd47savannah@vfs.com}
 * @version:   1.0
 */
'use strict';

// import Schedule from "./Schedule.js"
// import Course from "./Course.js"

// export ... = something that can be imported to another module
// ... default = the default thing to export can be imported without {}
//      ... class = an Object definition (not an instance of an Object), we can make more
export default class App {

  	constructor() {
        this.daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday','friday'];
        document.querySelector("#schedule-grid").innerHTML = this.generateSchedule(this.daysOfTheWeek);
        this.eventMessage = "add button handled"

        this.todoItem = 0;

        document.querySelector("#todo-add-item-button").addEventListener("click", (event) => {
            //get the value of the text input
                this.addTodoItem(event);

            this.todoItem++;

            document.querySelector("#virtual-console").innerHTML = this.eventMessage;
        })
        


            // Initialize any app variables or code we will need

            // this.mySchedule = new Schedule();
            // let javaScriptCourse = new Course('JavaScript & jQuery', 0, "Thursday");
            // let designInterface = new Course('Interface Design', 2, "wednesday");

            // javaScriptCourse.setlocation("Home");
            // javaScriptCourse.assignInstructor("scott");

            //let savannahsSchedule =generateEmptySchedule();
        
          // Initialize any event handlers
    }

    addTodoItem(event){

            let todoText = document.querySelector('input[name="new-item"]').value;

            let markup =`<li id="item-${this.todoItem}">`;
            markup +=           `<input type = "checkbox" name= "item-done" value="false">`;
            markup +=           `<span class = "todo-text">${todoText}</span>`;
            markup +=    `</li>`;

            let listItem = document.querySelector(".todo-list");
            let currentElements = listItem.innerHTML;
            currentElements += markup;
            listItem.innerHTML = currentElements;
    }

    generateSchedule(daysOfTheWeek){
            // the code below builds this............ woooooo! 
            // <table>
               //<tbody>
                    //<tr><td></td><td>Monday</td><td>Tuesday</td><td>Wednesday</td><td>Thursday</td><td>Friday</td>></tr>
                    //<tr><td>AM</td><td id="monday-am"></td><td></td><td></td><td></td><td></td></tr>
                    //<tr><td>PM</td><td></td><td></td><td></td><td></td><td></tr>
                    //<tr><td>EVE</td><td></td><td></td><td></td><td></td><td></tr>
                //</tbody>
            // </table>
        
            let markup = "<table>"; 
            markup += "<tr><td></td>";
            for (let day of daysOfTheWeek) {
              markup += `<td id="${day}">${day}</td>`;
            }
            markup += "</tr>";

            for  (let timeslot of ['am','pm','eve']) {
                markup += this.generateScheduleRow( daysOfTheWeek , timeslot );
            }
            markup +="</tbody></table>";
            return markup;
    }

    generateScheduleRow( daysOfTheWeek, timeslot ){
        let markup = `<tr><td>${timeslot}</td>`;
        for (let day of daysOfTheWeek) {
            markup += `<td id="${day}-${timeslot}"></td>`;
        }
        markup += "</tr>";
        return markup;
    }

    run() {
            // just waiting around for something to happen...
    }
}

