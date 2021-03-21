Name of Project - Covid-19 Live Statistics
Made By- IMT2020056 Rudransh Dixit and IMT2020059 Manas Agrawal

#Note : Software is best experienced on Full screen. The app is 800 * 600 in area the rest area is left empty.
# Idea Of project

Covid-19 started to spread in India near March of 2020 and has been spreading till now. The idea of this project came from the fact that to tackle the problem of pandemic we need to know more about the patterns in the spread of Covid. This project is an attempt to study the spread of Covid-19 using a statistical approach.  We have calculated graph of each of the states of India and the whole country itself in monthly fashion. These graphs can help us better understand the spread of Covid-19 in India and be prepared for future.

# How we made it
To implement our idea we used a library of JS know as Chart.js. Chart.js takes in the label list which shows the label in the bottom of the chart and takes in the data corresponding to the label. This creates a graph with X-axis containing the label and Y-axis containing the values ranging from 0 to the value greater than the max value that data take. Then it plots the data corresponding to the labels and gives us a nice readable chart in the line form. 
We use this Chart.js module to plot the data that we get from various API's. 
The first API we use is https://api.rootnet.in/covid19-in/stats/latest.json, this API gives us the total cases in all over India and also presents the data of each state and union territory, the data provided by this API is upto date and is the total sum of all registered cases, people recovered and all people died during due to Covid-19 till today.
The second API we used is https://api.covid19india.org/states_daily.json, this API gives the data of every state according to each day from March 2020 to till date. We use this data to make monthly graphs of data. We start by adding the data of each month and storing it with respect to the type(i.e. all cases, recovered or dead) then we make the graph of this data and add it in GUI that we have created using canvas. 
The third API we used is https://api.covid19india.org/data.json, this API starts giving data from 30 Jan 2020 to till date, it contains data according to each day of all over India, using this we create a monthly graph of all cases in India, recovered and deaths.

# Problems we faced during development
Some problems we faced and tried to overome are-
1. We wanted to get the data we recieved from our API as global variable but that issue was not solved using this approach so we covered all our code into functions and passed these function into the call back function of the request we made from API's. This allowed our code to access the data of we requested from the APIs.
2. While making GUI part we faced the problem of handling the various states at once, first thing we did to approach this problem was to create a separate page function for every state. This approach was time consuming and if we made a change at one page we had to change the same thing on every page. So we tackeled this problem by creating a page template and using that page template function to make the pages. This even helped us later when we implemented the data graph of every state, as now we only had to add this functionality to the template and it would work for every state.
# What we learnt from the project

This project taught us a lot about software development and the feel of it. The problems we faced here are really good learning experience and will help us in becoming better developers and use better techniques to program in future. This project also taught us a great deal about what API's are and how should we handle them, also how important understanding and working with API's is for developing software.