#!/bin/bash


docker build . -t "ai4desci_hub_mainpage"

docker tag ai4desci_hub_mainpage dreambrooktech/ai4desci_hub_mainpage:v0.1

docker push dreambrooktech/ai4desci_hub_mainpage:v0.1

