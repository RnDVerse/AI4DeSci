#!/bin/bash


#docker build . -t "hub-ai4desci"

docker tag hub-ai4desci:v0.2.6 dreambrooktech/colab-ai4desci:v0.1

docker push dreambrooktech/colab-ai4desci:v0.1

