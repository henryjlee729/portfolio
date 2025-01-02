---
title: 'Concrete Engine Corporate Partners Project'
date: 'January 1, 2025'
excerpt: 'This post will cover my Fall 2024 Data Mine Corporate Partners project'
cover_image: '/images/concrete-engine/concrete-engine.jpg'
---

# Concrete Engine Corporate Partners Project

In Fall 2024, I have worked in a Corporate Partners project with Concrete Engine in Purdue University's Data Mine learning community.  As part of the collaboration project, I worked in an Agile environment where I picked up a task each week from the list of tasks.  After I complete my weekly task, I put it in the 'Complete' section and pick up a new one.  

In this project, I was working on different aspects in a customer console program.  The customer console is the program that allows a customer to create a job in a cloud service.  Customers only need to give the type of job and the duration and the program will allocate the amount of space for the requested job will be done on behalf on the customer.

## Purdue University: The Data Mine

To summarize, Purdue University’s Data Mine is a learning community where students perform data-driven research to create solutions to real-world problems. In the Corporate Partners Program, students collaborate with corporate partners under the supervision of a mentor.

## Concrete Engine

Concrete Engine is a cloud service that is focused on high-performance computing and artificial intelligence.  It has three components to its business: land, software, and hardware.  It utilizes modular, shipping-container-sized data centers with each unit being independent, meaning that the entire system will not go out in case of a failure or an outage occurs in one particular data center.  With the problems of climate change and the large amount of energy needed to maintain large-scale data centers, Concrete Engine emphasizes more distributed micro data centers rather than a few, large and centralized data centers.  These micro-centers are more focused on the carbon footprint by utilizing local green energy sources such as hydro and solar and reducing the amount of energy needed to power smaller data centers.  Additionally, the maintenance costs are cheaper because they do not require battery backup, generators, or chemical cooling to any of its data centers.

Concrete Engine also provides the hardware and infrastructure needed for a particular job for a customer.  It is a cheaper alternative because it offers a “run-time” charge instead of a “bill-time” charge.  On other cloud services, customers are the ones who need to select and prepare cloud infrastructure for their jobs in advance.  Concrete Engine eliminates that friction with its customer console where it can decide for the customer of how much computing power to use which can range from a single 15 TFLOP unit to many peta-flops depending on the type of job.  This means that the customer only needs to pay for the amount of computing power they are using based on a specific rate instead of having to manually determine the amount of computing power needed, which can be more exponentially expensive if more computing space is needed.

![alt text](/images/concrete-engine/ce-infographic.png)

For the software, all the customer needs to do is create a new job when hosting data.  As seen with the infographic above, this works by creating a job on the customer console, which will allow the orchestration layer to process and distribute the workload to the GPU and storage infrastructure in the containers.  The infrastructure (which are the GPU and storage systems), powered by carbon-neutral energy sources, will execute the tasks, and then the results will be returned to the customer, accessible via the customer console.

## The Project

This project involved me signing a non-disclosure act, which means that I cannnot show any critical parts of the project.  However, what I can do is generally describe what work I did in the project and what tools I used to work on the project.

As mentioned above, Concrete Engine focuses more on modular, smaller data centers intead of centralized and large data centers.  The customer console is the main program that allowed the customers to store ane do jobs in the program.  

![alt text](/images/concrete-engine/artifacts.png)

As followed by the Data Mine's structure, the project followed seven sprints in an Agile structure.  It is important to define a couple of definitions to get a better understanding (taken from <a href = "https://the-examples-book.com/crp/mentors/agile">here</a>.) of what each term in the image above seen.

- Product Backlog: The primary list of work that needs to be accomplished.
- Sprint Backlog: The list of tasks or items that the development team pulls from the product backlog to complete during a sprint.

The sprint backlog is the system the project used.  The customer console program is the product backlog.  Since the project lasted over an entire semester, it was more focused on getting each of the weekly tasks done rather than trying to develop something for each particular sprint (or every two weeks in the project).

The sprint backlog has several categories: 

- Not Assigned: Tasks that still need to do
- In Progress: Tasks that are currently being taken care of
- Dev Done: Tasks that are done but need some feedback
- Complete: Tasks that are completed with feedback

I had completed a list of tasks in the entire semester, which includes:

- Figured out how to implement authentication with OAuth in the customer console program
- Conducted market research on the amount of space utilized by different cloud services in Amazon Web Services, Microsoft's Azure, and Google Cloud Storage
- Researched a possible way to send data larger than 5 TB in Google Cloud Storage (was not successful due to the limits of Google Cloud Storage)
- Developed a customer model that utilized MongoDB
- Tested the customer model with some sample unit tests to ensure it was working

## Technologies Utilized

The project utilized a virtual machine that I used in Visual Studio Code.  I used an ssh key to login and to work from my laptop from anywhere at anytime.  Here is a small list of technologies utilized in the project:

- Notion (for the sprint backlog)
- Visual Studio Code (my IDE for the project)
- JavaScript (the main language used for the project)
- MongoDB (a database used to host information for Concrete Engine)

## Results

This project was different from the previous Corporate Partners project that I worked from the previous semester.  This project focused more on researching and developing a product rather than analyzing data.

Through this work, I learned how software engineers may follow a similar process in their jobs when they are completing their own tasks. The mentor for this project was especially helpful as he gave some useful insights into the tech industry and gave some feedback on the work I have done.