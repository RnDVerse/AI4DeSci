#!/bin/bash


docker build . -t "ai4desci_galaxyzoo"

docker tag ai4desci_galaxyzoo dreambrooktech/ai4desci_galaxyzoo:v0.1.1

docker push dreambrooktech/ai4desci_galaxyzoo:v0.1.1

