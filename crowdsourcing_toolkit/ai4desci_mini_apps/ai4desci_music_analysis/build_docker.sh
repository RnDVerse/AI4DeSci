#!/bin/bash


docker build . -t "ai4desci_music_analysis"

docker tag ai4desci_music_analysis dreambrooktech/ai4desci_music_analysis:v0.1

docker push dreambrooktech/ai4desci_music_analysis:v0.1

