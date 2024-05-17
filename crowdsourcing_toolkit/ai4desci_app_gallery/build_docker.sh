#!/bin/bash


docker build . -t "ai4desci_app_gallery"

docker tag ai4desci_app_gallery dreambrooktech/ai4desci_app_gallery:v0.2

docker push dreambrooktech/ai4desci_app_gallery:v0.2

