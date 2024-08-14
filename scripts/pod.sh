#!/bin/bash

# Variables
APP_NAME=sageverse
CONTAINER_NAME=sageverse-container
POD_NAME=sageverse-pod

# Remove the existing container if it exists
podman rm -f $CONTAINER_NAME

# Build the Docker image
podman build -t $APP_NAME ..

# Remove the existing pod if it exists
podman pod rm -f $POD_NAME

# Create a new pod
podman pod create --name $POD_NAME -p 4321:4321

# Run the container in the pod
podman run -d --name $CONTAINER_NAME --pod $POD_NAME $APP_NAME