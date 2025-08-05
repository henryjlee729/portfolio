---
title: 'Data Converter Application'
date: 'August 4, 2025'
excerpt: 'Keywords: Software Engineering, Python, Data Manipulation, PyCharm, pandas, Excel'
cover_image: '/images/data-converter/echopath.png'
---

# Data Converter Application

In Fall 2024, I was able to get a remote internship from Echopath LLC.  This remote internship allows me to work on my programming skills while getting advice and feedback from my mentor, both on career advice and the project itself.

## Echopath LLC

Echopath is an Indianapolis-based IT company that helps individuals and organizations manage their IT operations.  Founded in 2011, Echopath addresses several challenges and risks with critical aspects of IT such as security and backup.  They provide a comprehensive suite of IT services that can protect data and their systems.  To see more information, please visit their site <a href = "https://echopath.com/about-us/">here</a>.

## The Project

My first project involved building a financial dashboard for the company leadership that takes in CSV files (and Excel files for certain options) and appended them to an Excel file.  The CSV files had a specific structure that had to reformatted and added into an Excel file with several sheets.  The entire purpose of this project is important for every company: keep track of income and expense streams to ensure that the company systems are working as intended.

![alt text](/images/data-converter/menu.png)

As seen above in the image, once the program opens, there are eight options: append historical data (data added to the first sheet called Historical Data), append projected data (data added to the second sheet called Financial Data), append actual data (data added to the second sheet called Financial Data), abort changes, preview sheets, quit and open Excel file, and quit.  The way the program works is by selecting an option and then adding a specific file based on the type of data being added.

There are four types of CSV files being added: historical data, balance data, projected data, and actual data.  The historical data is a list of all of the data from previous years and acts as a record from previous years.  The balance data is a list of assets and liabilities for the company.  Both historical and projected data has the ability to take in Excel sheets as well as csv files but it is based on a specific format.  The projected data is data projecting the budget for an entire year while the actual data is meant to be used to compare how the budget is spent monthly.  For example, the actual data could show that the company saved some money in the first month, lost some money in the fifth month, and more.  

There are also three sheets utilized in the Excel file: Historical Data, Financial Data, and Audit Log.  There is more information about these sheets down below.

## The First Sheet:  Historical Data

The historical data sheet has six categories:

- Account (un-trimmed): The income/expense type
- Timeframe: Month and year
- Amount: How much of the income/expense
- Account: The income-expense type but trimmed
- Datenumber: Year and month (in the format of YYYYMM)
- Date: Month and year

As seen below, the structure of this sheet was requested as a part of the first sheet.

![alt text](/images/data-converter/first-sheet.png)

This is what the application would look like if historical data (income and expense data) was being added:

![alt text](/images/data-converter/historical-data.png)

## The Second Sheet: Balance Data

The balance data sheet follows the same structure as the historical data but with different values from different datasets.

This is what the application would look like if balance data (assets and liabilities data) was being added:

![alt text](/images/data-converter/balance-data.png)

## The Third Sheet: Financial Data

The financial data sheet has six categories:

- Account: The income/expense type for projected data
- Timeframe: Month and year for projected data
- Projected Amount: How much is projected to be for the income/expense
- Account: The income/expense type for actual data
- Timeframe: Month and year for actual data
- Actual Amount: How much was actually spent/made for the income/expense
- Difference: The difference between the projected and actual amounts

The first three columns were for the projected data while the next three columns were for the actual data.  Both of them were reformatted to match the three-column type.  The seventh column was requested to be added since it allows the leadership to see how much money they saved/lost based on their projected data and the actual amount for that specific income/expense type.  That way, it allowed them to make decisions based on this information.

This is what the application would look like if projected data was being added:

![alt text](/images/data-converter/projected-data.png)

This is what the application would look like if actual data was being added:

![alt text](/images/data-converter/actual-data.png)

## The Fourth Sheet: Audit Log

The audit log is meant to act as a record of what type of file has been added to the Excel file.  It has three columns:

- File Name: The name of the file being added
- Date & Time: The date and time at which the file was being added
- Data Type: The type of data being added (historical data, projected data, actual data)

## Aborting Unwanted Changes

The fifth option in the menu is a safety measure where if a user does not want to add their additions to the Excel file, they have the option to remove those changes and revert the Excel file from the previous session.  This all happens when the user opens up the prompt, where a backup Excel file is made and all of the new changes are added to the original Excel file.  If the user decides to abort changes, the program will close, the backup Excel file will become the original, and the original Excel file will be deleted.

This is what the application would look like if changes were aborted:

![alt text](/images/data-converter/abort-changes.png)

## Previewing Sheets

The sixth option in the menu allows a user to preview the sheets.  This is to give a visual aspect of what the output looks like.  THe user can choose based on what sheet they would like to view.

This is what the application would look like if sheets were previewed:

![alt text](/images/data-converter/preview-sheets.png)

## Safety Measures

Some safety measures have been added to the program to prevent it from crashing.  Some of the following safety measures include:

- Preventing the user from adding a duplicate file or file with the same data with hashcode
- Preventing the program from crashing if the Excel file is opened
- Preventing the user from adding actual data that does not have the corresponding projected data
- Preventing the program from crashing if a file has not been selected
- Made a basic confirm feature where it asks the user if the file they are adding is the file they want added or not

## Technologies Utilized

This project involved utilizing Python and PyCharm to read CSV files.  The project works by clicking on a Windows Batch script, which will reveal a window with several options.

I utilized the pandas library to read a CSV file and append the data to the Excel file.  I also utilized the tkinter library to showcase a file selector to make it easier to select a file and the openpyxl library to read and write into the Excel file. 

## Next Steps

I am done with the project, but if more time was allowed, the ultimate goal would be building a dashboard in the Excel file with graphs and trends based on the data inserted in the Excel file.  The dashboard follows Pineapple Consulting's dashboard as seen below:

![alt text](/images/data-converter/dashboard.png)