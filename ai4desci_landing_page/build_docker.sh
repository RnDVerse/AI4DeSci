#!/bin/bash


docker build . -t "ai4desci_web_ui"

docker tag ai4desci_web_ui dreambrooktech/ai4desci_web_ui:v0.1.3

docker push dreambrooktech/ai4desci_web_ui:v0.1.3

