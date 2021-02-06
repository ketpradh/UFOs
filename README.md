# UFOs by Ketaki
## Overview of the project
This project helps the user, Dana, to build a webpage that gives information on UFO sightings. This webpage is built using HTML, Javascript and styled using Bootstrap library.
This webpage includes a dynamic table that filters the UFO listings data based on user input for date,city,state,etc. This dynamic handling is performed using javascript functions and event handling.
## Results
The webpage highlights the UFO listings in a table that can be filtered using the inpt criteria of date, city, state, country and shape,as shown - 
![Filters](https://github.com/ketpradh/UFOs/blob/main/Resources/Filters.PNG)
### Steps to filter data -
- To filter based on a single field, enter the value in the Input box and hit "Enter" on your keyboard.
**Please note - input format for every input field is specified in the box. Every field Hitting Enter is necessary to see updated results.**
Example - filter on city "Fresno" - gives results for only city Fresno
![](https://github.com/ketpradh/UFOs/blob/main/Resources/Filter%20on%20city.PNG)
- You can also filter based on multiple criteria such as city, shape and date, or state and date, etc.
Example - filter on state=ca, date= 1/1/2010 and shape=light. - Gives results for California state on 1/1/2010 with light shape.
![](https://github.com/ketpradh/UFOs/blob/main/Resources/Filter%20on%20multiple%20criteria.PNG)
## Summary
This is a good way to display and handle dynamic data in a webpage. However, this has a few drawbacks as follows -
- The filter search is an exact search provided for input fields, so any typos may result in incorrect filtering and user reporting.
- The filter search does not perform any error handling for the input fields.
### Recommendations
- The app.js script used for filtering should handle the user input for typos and provide a perhaps wildcard('*') search to make the user experience better.
- The script should also include error handling such as provide the user with an success/error message if the input field format is incorrect.
- The script can be made flexible so that the filter works on entering the filter criteria and without user having to hit the Enter key everytime.
