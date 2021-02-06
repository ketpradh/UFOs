# UFOs by Ketaki
## Overview of the project
This project helps the user, Dana, build a webpage for information on UFO sightings. This webpage is built using HTML, Javascript and styled using the Bootstrap library.
This webpage includes a dynamic table that filters the UFO listings data based on user input criteria for date,city,state,etc. This dynamic handling is performed using javascript functions and event handling.
## Results
The webpage highlights the UFO listings in a table that can be filtered using the input criteria of date, city, state, country and shape,as shown - 
![Filters](https://github.com/ketpradh/UFOs/blob/main/Resources/Filters.PNG)
### Steps to filter data -
To filter based on a single input criteria of say city, enter the value in the filter under the filter heading and hit "Enter" on your keyboard.
- **Please note - input format for every input field is specified in the box. Pressing the Enter key is necessary to see updated results.**

Example - filter on city "Fresno" - gives results for city Fresno only.
![](https://github.com/ketpradh/UFOs/blob/main/Resources/Filter%20on%20city.PNG)
- You can also filter based on multiple criteria such as city, shape and date, or state and date, etc.

Example - filter on state=ca, date= 1/1/2010 and shape=light. - Gives results for California state on 1/1/2010 with light shape.
![](https://github.com/ketpradh/UFOs/blob/main/Resources/Filter%20on%20multiple%20criteria.PNG)
- **Please remember to clear the previous filter values if you don't to filter the new results based on them or reload the page by pressing the F5 key.**
## Summary
This is a good way to display and handle dynamic data in a webpage. However, this webpage has a few drawbacks as follows -
- The filter search is an exact search provided for input fields, so any typos may result in incorrect filtering and user reporting.
- The filter search does not perform any error handling for the input fields, if the user enters an incorrect format for the input values.
### Recommendations
- The javascript function used for filtering should handle the user input for typos and provide a perhaps wildcard('*') search to make the user experience better.
- The script should also include error handling such as provide the user with an error message if the input field format is incorrect. 

Example- If the user enters the date format as 2010/1/1 instead of 1/1/2010 by mistake. This can result in incorrect results.
- The script can be made flexible so that the filter works on entering the filter criteria and without user having to hit the Enter key everytime.
