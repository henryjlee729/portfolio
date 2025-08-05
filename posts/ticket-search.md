---
title: 'Ticket Search Utility'
date: 'August 5, 2025'
excerpt: 'Keywords: Python, Rust, Flask, Search, SQL, Databases, ConnectWise API'
cover_image: '/images/ticket-search/ticket-search-2.png'
---

# Ticket Search Utility

This is the second project developed in my internship.  This ticket search utility was used as a way to look up specific ticket and ticket notes based on a specific query.  The utility was built with HTML/CSS, JavaScript, Python, and SQL.  This project was used to streamline internal operations inside the company.  Since this project has sensitive company information, I cannot provide the source code.

## Step 1: Collect the Data

The first step involved collecting all of the ticket data.  This involved making API calls to the ConnectWise API with Rust to collect all ticket data and ticket notes data.  I had go through a maximum size of 1000 tickets per page and as a result, go through over 700+ pages to collect all of the data.  I had to wait a couple days before me and my mentor was able to get all of the data.

## Step 2: Use Databases

The second step involved getting all of the data from CSV files to a SQL database.  I used SQLite Studio to import the CSV files into the databases.  The search utility used this database to conduct SQL commands to filter through the data to find specific entries with the specific keyword.

## Step 3a: Develop the Frontend

The first half of the third step was building the frontend.  The ticket search utility would losely follow the structure of a Google Search, where there would be a search bar with filtering options.  This involved using HTML, CSS, and Flask to build a web application for the ticket search utility.

## Step 3b: Develop the Backend

The second half of the third step was building the backend.  The ticket search would take in data from the web application with JavaScript and send SQL commands to the database in Python.  The returned entries would then be sent back to JavaScript, which would then be displayed.  The structure of the returned data would display:

- Ticket Number
- Author Name
- Highlighted Part on the Query
- Link to Ticket

## Structure of the Web App

There are three parts of the web app:

1. Search Bar: The part where a user would look up a search query in the search bar

![alt text](/images/ticket-search/ticket-search.png)

2. Loading Page: The user would wait as the ticket search utility grabbed the relevant results

![alt text](/images/ticket-search/loading-screen.png)

3. Results Page: Specific tickets and ticket notes that contained the search query would be returned


