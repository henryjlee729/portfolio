---
title: 'Shape Synthesis'
date: 'May 13, 2026'
excerpt: 'Keywords: C++, OpenGL, Machine Learning, Computer Graphics, 3D Modeling'
cover_image: '/images/shape-synthesis/menu.png'
---

# Shape Synthesis

In the spring semester of my junior year, I took CS 33400: Fundamentals of Computer Graphics. For our final project, me and one other teammate I explored the intersection of machine learning and computer graphics by building **Shape Synthesis**, a neural 3D shape generation pipeline capable of generating and visualizing new 3D objects.

The project combines generative AI techniques with traditional graphics rendering, allowing users to generate new 3D chair models and inspect them through an interactive OpenGL viewer.

## The Goal

Recent advances in machine learning have enabled neural networks to generate increasingly realistic 3D geometry. We wanted to better understand how these models work while building a complete graphics pipeline that could transform AI-generated outputs into visual, interactive 3D models. Our learning goals included: 
- Generate new 3D shapes using a neural network
- Convert generated point clouds into mesh geometry
- Display the resulting model in a real-time interactive viewer

## Technical Approach

The overall pipeline consists of three major stages:

### 1. Shape Generation

We trained a Variational Autoencoder (VAE) on a dataset of 3D chair point clouds. The model learns a compressed latent representation of object geometry and can generate entirely new chair designs by sampling random latent vectors.

### 2. Mesh Reconstruction

The generated point clouds are processed through several cleanup steps, including normalization, outlier removal, and normal estimation. Once processed, the points are converted into a triangular mesh using an alpha-shape surface reconstruction algorithm. This stage transforms the raw neural network output into a renderable 3D model.

### 3. Interactive Visualization

After reconstruction, the mesh is displayed using an OpenGL-based viewer that supports:

- Camera rotation
- Zoom controls
- Real-time rendering
- Interactive model inspection

This final stage connects the machine learning pipeline with a traditional graphics workflow and allows users to explore generated shapes interactively.

## My Contributions

For this project, responsibilities were divided between the machine learning and graphics components.

My primary contributions included:

- Implementing the point cloud rendering pipeline
- Developing mesh visualization functionality
- Building the interactive OpenGL viewer
- Integrating generated meshes into the graphics pipeline
- Creating camera controls for inspecting generated models

My teammate focused on training the VAE model and generating point cloud outputs.

## Results

The completed pipeline successfully generates new chair designs as point clouds and converts them into meshes for visualization.

The generated chairs maintain recognizable structural characteristics while still exhibiting variation from the training data. Mesh reconstruction significantly improves the visual quality of the generated models, making them easier to inspect and understand.

The interactive viewer allows users to rotate, zoom, and explore generated shapes in real time.

Below is the landing page used to generate new chair models:

![alt text](/images/shape-synthesis/menu.png)

After generation and reconstruction, the resulting mesh can be explored through the interactive viewer:

![alt text](/images/shape-synthesis/generate.png)

## Challenges

One challenge of the current system is the quality of the generated point clouds. Neural outputs can occasionally be noisy or incomplete, which impacts the mesh reconstruction stage and may introduce visual artifacts. Additionally, surface reconstruction is sensitive to parameter tuning, requiring a balance between smoothness and geometric detail.

## Future Work

Future improvements could include:

- Diffusion-based 3D generation models
- Support for multiple object categories
- Improved surface reconstruction techniques
- Enhanced shading and rendering effects
- Additional viewer interaction features

## Conclusion

Shape Synthesis was an exciting opportunity to combine machine learning with computer graphics. Through this project, I gained experience working with generative neural networks, geometry processing, OpenGL rendering, and interactive visualization systems. The project demonstrated how AI-generated content can be integrated into traditional graphics pipelines and provided valuable insight into the growing intersection between computer graphics and machine learning.

The link to the project repository is <a href="https://github.com/henryjlee729/shape-synthesis">here</a>, and a video demonstration of the project can be found <a href="https://youtu.be/WEoSTUP3NbY">here</a>. 

## Technical Report

The full technical paper can be read [here](/downloads/shape_synthesis.pdf).