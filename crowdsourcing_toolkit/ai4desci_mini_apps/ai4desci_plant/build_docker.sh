#!/bin/bash


docker build . -t "ai4desci_plant"

docker tag ai4desci_plant dreambrooktech/ai4desci_plant:v0.1

docker push dreambrooktech/ai4desci_plant:v0.1

