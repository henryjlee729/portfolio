---
title: "JP Morgan Software Engineering @ Forage"
date: "July 8, 2024"
excerpt: "Keywords: Data Visualization, Python, PyCharm, Unit Testing, Node.js, Stock Price Analysis"
cover_image: "/images/forage/forage.jpg"
---

# JP Morgan & Forage

I conducted a virtual task simulation at JP Morgan's software engineering task at Forage. The idea of the simulation was to build dashboards to better identify under/over-valued stocks. This project introduced me several important skills: being introduced to Perspective (a part of JP Morgan's open source library), utilizing Python to construct a web application, sending an engineering ticket, and gaining insights on the world of software engineering.

## Internship Searching

In the summer of 2024, I did not have an internship since I was on vacation in South Korea from May 2024 to early Jul 2024. Although I have tried getting an internship during my freshman year, I did not have enough skills and experiences needed to be able to get the attention of recruiters. As a result, I was focused on getting more experience. I studied C++ and certain data structures while also getting a internship simulation with Forage. Forage is a good first step for me to get a feel on how internships might work while also working with real-world applications of software engineering.

## Tools

For the software engineering task, I was introduced to PyCharm and Perspective. PyCharm is an IDE that is similar to IntelliJ but it uses Python instead of Java. Perspective is an open source library made from JP Morgan which was used to generate a live graph feed.

![alt text](/images/forage/pycharm.jpg)

## Tasks

The simulation was done in three tasks:

1. Interface With A Stock Price Data Feed

   For the first task, I was given some Python code: a client class and a server class. After setting up my local development, running server3.py and client3.py (in this order) resulted in two things:

   1. The ratio in the client output is always 1
   2. The price of each stock is always the same as its bid

   This was not supposed to occur, so I was tasked with fixing three methods in client3.py: getDataPoint, getRatio, and Main. All of this was necessary so that the environment could be set up for the next tasks.

   Here is the output once everything was fixed correctly:

   ![alt text](/images/forage/task1.png)

   The getDataPoint function returned correct tuple of stock name, bid_price, ask_price and price. The getRatio function returned the ratio of the two stock prices.  
   The main function outputted correct stock info, prices and ratio

   Additionally, I added some unit tests as a way to test the functions.

   ![alt text](/images/forage/task1-unit-testing.png)

   My full work for this task can be seen <a href='https://github.com/LofiTea/forage-jpmc-swe-task-1'>here</a>.

2. Using JMPC Frameworks And Tools

   The next step was implementing Perspective in the interface. This step involved Typescript files since they were used to build the graph of stock prices. With the starter code provided, the initial graph is only printing duplicate data.

   ![alt text](/images/forage/task2-before.png)

   The idea with this task was to:

   1. Make the graph update continuously instead of having to click it a bunch of times. The graph should be a line graph whose y-axis is the stock’s top_ask_price and x-axis is the stock’s timestamp
   2. Remove/disregard the duplicate data

   To achieve these two goals, two files has to be edited: src/App.tsx and src/Graph.tsx. In App.tsx, the showGraph boolean property was added so that the graph is shown when the user clicks ‘Start Streaming Data’. Then, the renderGraph, showGraph, and getDataFromServer methods were modified. The results look something like this:

   ![alt text](/images/forage/task2-app-tsx-finish.png)

   In Graph.tsx, PerspectiveViewerElement was enabled and the componentDidMount method was edited. Additional attributes were added to the element: view, column-pivots, row-pivots, columns, and aggregates. Combining all of these chnages should result in the graph looking very different from the original.

   ![alt text](/images/forage/task2-after.png)

   My full work for this task can be seen <a href='https://github.com/LofiTea/forage-jpmc-swe-task-2'>here</a>.

3. Use Perspective To Create A Chart

   This task has two objectives to be completed:

   1. Tracking the ratio between two stocks over time and NOT the two stocks’ top_ask_price
   2. Plot the upper and lower bounds and show when they get crossed

   This is the inital look of the graph:

   ![alt text](/images/forage/task3-before.png)

   Graph.tsx and DataManipulator.ts will need to have some modifications. In Graph.tsx, the componentDidMount and componentDidUpdate methods were modified and the element had additional atttributes:

   ![alt text](/images/forage/task3-before-after.png)

   In DataManipulator.ts, the Row interface and the generateRow function was updated to process raw server data. The upper_bound, lower_bound, and trigger_alert attributes were added in as well to enhance the graph's visual look.

   The final graph should look like this after all of the changes were applied in this task:

   ![alt text](/images/forage/task3-after.png)

   My full work for this task can be seen <a href='https://github.com/LofiTea/forage-jpmc-swe-task-3'>here</a>.

## Important Info

It is important to use the commands 'python3 datafeed/server3.py' and 'npm start' to launch the web application.
