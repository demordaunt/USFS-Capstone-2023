### @Emi Ford 27 Feb 2023
### run_docker.sh commands to build the docker image and run within container

 
#! /bin/bash

set -e

currentDir="$(pwd)"
dataDir="$currentDir"/../data
image="ef888/usfs_lichen_clearinghouse"

docker build -t $image .

#docker run -d --rm \
docker run -i -t --rm \
  --user $(id -u):$(id -g) \
  -v ${dataDir}:/data \
  -v /tmp:/tmp \
  $image

