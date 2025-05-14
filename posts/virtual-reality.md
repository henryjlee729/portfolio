---
title: 'Undergraduate Research Assistant in Virtual Reality'
date: 'May 15, 2025'
excerpt: 'Keywords: LiDAR, MeshLab, Poisson Surface Reconstruction, 3D'
cover_image: '/images/virtual-reality/unity.png'
---

# Virtual Reality Cave Simulation

For the spring 2025 semester, I was an undergraduate research assistant for a Earth and Planetary Sciences professor who wanted to build VR models.  I helped create a framework to develop virtual reality (VR) experiences that will recreate natural environments in VR from LiDAR data. The first application is for cave environments and will be deployed in an Earth, Atmospheric, and Planetary Sciences (EAPS) course.

## Purpose

Field trips are an essential part of courses in Earth, Atmospheric, and Planetary Sciences (EAPS). However, physical and financial constraints make it challenging to guarantee that students can visit all geological settings discussed in the EAPS curriculum. To address these issues and to have an alternative option, I helped create a virtual reality (VR) experience that will allow students from EAPS 353 Earth and Planetary Surface Processes to learn more about cave environments. While building the VR environment, I also assisted in building a framework to translate high-resolution spatial data from caves into a 3-dimensional model that will be used for the VR experience.​

![alt text](/images/virtual-reality/caves.png)

## LiDAR Data

To make a virtual reality cave experience, I used Light Detection and Ranging (LiDAR) data. LiDAR is a technology used to create high-resolution models of ground elevation. This data takes in the form of a point cloud data, which maps out a structure in 3D space. LiDAR data can be used to obtain high-resolution spatial information and can be optimized to provide an immersion experience in VR for the user. The LiDAR data of the Carlsbad Caverns in New Mexico is the first dataset being utilized for this VR experience. The goal is to transform the LiDAR data from a point cloud into a 3D model. Once the model is ready, it can be imported into a 3D engine like Unity and included into a VR headset.​

## From LiDAR to 3D Model

In the Carlsbad Cavern dataset, there are 10,000,000+ points in LiDAR data. However, to create a realistic version of the cave in VR, the LiDAR data require smoothening. I applied a method for interpolating all the points in the LiDAR data to generate a semi-continuous 3D model. Given the file's size, it was crucial for the conversion process to be efficient to decrease optimization time while improving the overall VR design. To achieve this, I used the Poisson Surface Reconstruction algorithm. Specifically, the LiDAR data was uploaded into MeshLab, where the Poisson Surface Reconstruction algorithm was utilized. MeshLab is an open-source software tool used for 3D mesh modeling. Following this process, the newly made 3D model is then uploaded to the Unity Engine to be showcased to a VR headset. ​

![alt text](/images/virtual-reality/lidar.png)

## Results and Future Work

With the entire process, a 3D model of the Carlsbad Caverns was successfully made. Despite the success of the overall process, there are still issues to be addressed. The 3D model did not include color, but the original LiDAR data contained RGB values that can be interpolated and transferred over to the 3D model. Additionally, increased computer power will enable producing even more realistic models for the VR experience. ​

![alt text](/images/virtual-reality/blender.png)

## My Role

There were two parts of the project: turning the LiDAR data into a 3D model and putting the 3D model into Unity to make it into a usable VR model.  I had the former task, where I had to figure out a way to turn 10,000,000 data points into a singular 3D model for VR.  It took some time to be able to figure out which software I needed to use to solve my problem (it also helped that I clearly defined what problem I needed to solve).

In April, with another person, we presented our work in a research conference called Celebrate Purdue's Thinkers, Creators, & Experimenters on April 10th, 2025. We had a poster and a Meta Quest 3 headset where people could experience a VR demo of the caverns in the Unity Engine.  Down below is a picture of me with the poster (ignore the lollipop in my mouth please).

![alt text](/images/virtual-reality/poster.png)