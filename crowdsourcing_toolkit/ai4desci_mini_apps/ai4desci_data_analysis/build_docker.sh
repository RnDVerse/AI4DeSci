#!/bin/bash


docker build . -t "ai4desci_data_analysis"

docker tag ai4desci_data_analysis dreambrooktech/ai4desci_data_analysis:v0.1.1

docker push dreambrooktech/ai4desci_data_analysis:v0.1.1

