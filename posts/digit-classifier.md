---
title: 'Digit Classifier'
date: 'July 24, 2025'
excerpt: 'Keywords: Python, Neural Networks, MNIST, Tensorflow, Jupyter, Flask'
cover_image: '/images/digit-classifier/mnist.png'
---

# Digit Classifier

The recent trend of artificial intelligence and machine learning became more mainstream when ChatGPT by Open-AI was introduced in 2022, changing how large language models were introduced to the public.  ChatGPT uses several different machine learning pipelines, including very large neural networks and the transformer.  Since I am interested in machine learning in general, I am pursuing a machine intelligence track at my university.  To start dipping my toes in this area, I started with a very basic digit classifier project to test out how it works by developing a basic framework and using a developed model.  I will be taking the model from <a href = "https://github.com/ZahraMohit/mnist-digit-classification">here</a>.  

## Model Process

I used a neural network to identify digits form 0 to 9 using the MNIST dataset, which is a publicly well-known and available dataset of handwritten digits.  I first imported all of the required libraries needed to train and test the neural network and visualize the validation part.  For the neural network, I originally used scikit-learn but switched to tensorflow to improve the accuracy.

![alt text](/images/digit-classifier/step-1.png)

The second step is to load the dataset and divide it into training and testing datasets.  To confirm the data was successfully loaded in, the first image and label of the training dataset was loaded and displayed.

![alt text](/images/digit-classifier/step-2.png)

Next, the data was normalized so that both the training and testing datasets had float-pointing values form 0 to 1 to make the training and testing process earlier.  Channel dimensions were also added to greyscale the images in both datasets.

![alt text](/images/digit-classifier/step-3.png)

After that, the actual model is being built.  This is a convolutional neural network (CNN) model with two Conv2D layers to identify patterns in the data, two MaxPooling2D layers to downsample and downsize the data, a fully flattened layer, and dense layers to learn higher-level combinations and to produce a prediction for a digit.

![alt text](/images/digit-classifier/step-4.png)

The model is then trained through the training dataset with 5 epochs, which measures the accuracy, loss, validation accuracy, and validation loss.

![alt text](/images/digit-classifier/step-5.png)

To visualize the model accuracy and model loss, matplotlib is used to make a graph for the statistics for each epoch. 

![alt text](/images/digit-classifier/step-6.png)

The model is then evaluated on the test set to assess its performance and ensure that it generalizes well, without underfitting or overfitting.

![alt text](/images/digit-classifier/step-7.png)

Finally, the model is then exported as a .keras file.

![alt text](/images/digit-classifier/step-8.png)

## Examples

I made a Flask web application to able to test the actual model with real-time handwritten digits.  Here are some examples from each digit:

![alt text](/images/digit-classifier/digit-0.png)

![alt text](/images/digit-classifier/digit-1.png)

![alt text](/images/digit-classifier/digit-2.png)

![alt text](/images/digit-classifier/digit-3.png)

![alt text](/images/digit-classifier/digit-4.png)

![alt text](/images/digit-classifier/digit-5.png)

![alt text](/images/digit-classifier/digit-6.png)

![alt text](/images/digit-classifier/digit-7.png)

![alt text](/images/digit-classifier/digit-8.png)

![alt text](/images/digit-classifier/digit-9.png)


## Future Steps?

If I spend more time on this project, I would do two things:

1. Improve the Model's Accuracy

The model already performs generally well when it comes to the MNIST dataset but it could definitely use more data to train on and even improve.

2. Improve the Web App Model

Right now, the web app takes in a handwritten digit and sends it to the model.  While testing, it is not as accurate as the testing set but it does a good enough of a good job that it can recognize the digits a majority of the time.  However, I would like to make sure that the model can recognize handwritten digits even if it didn't come from the MNIST dataset.

## Link

The link to the repo is <a href = "https://github.com/henryjlee729/digit-classifier">here</a>. where the app can be deployed by downloading the source code and running app.py, starting the Flask website.  Note that the Jupyter notebook that I made has comments on it as I went through each line of code and studied what it did.