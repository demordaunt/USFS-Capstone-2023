### @Emi Ford 27 Feb 2023
### Dockerfile. Build the docker container to allow R and java 


FROM python:3.10 AS build 

####################################################################################
# Set environment variables
####################################################################################

#ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
#ENV PATH /opt/conda/bin:$PATH
#ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
#ENV TZ=America/Denver
WORKDIR /opt/app
RUN python -m venv /opt/app/venv

#COPY requirements.txt .
#RUN pip install -r requirements.txt

####################################################################################
# Install dependencies
####################################################################################

FROM node:14

RUN apt update \
	&& apt install -y software-properties-common \
	&& apt update -y \ 
	&& apt install -y python 3.10

WORKDIR /opt/app
COPY --from=build /opt/app/venv /venv

ENV PATH="/opt/app/venv/bin:$PATH"
ENV NODE_ENV=container

##################################################################################
# Install J Node Packages 
##################################################################################

COPY package-*.json .
RUN npm install

RUN npm install http-server -g

####################################################################################
# Install R packages
####################################################################################

#COPY install.R /
#RUN Rscript /install.R

####################################################################################
# Install USFS project  within the image
####################################################################################

RUN cd /tmp && \
    git clone https://github.com/demordaunt/USFS-Capstone-2023.git && \
    mkdir /USFS-2023 && \
    ls USFS-Capstone-2023/ && \
    mv /tmp/USFS-Capstone-2023/USFS_lichen_database_and_clearinghouse /USFS-2023 && \
    mv /tmp/USFS-Capstone-2023/data /USFS-2023 && \
    rm -rf /tmp/USFS-Capstone-2023 && \
    echo '#!/bin/bash\ncd /USFS-2023\npython -m USFS-2023 "$@"' > /usr/bin/USFS-2023 && \
    chmod +x /usr/bin/USFS-2023 && \
    chmod 777 /USFS-2023 -R && \
    #cd USFS-2023 && \
    echo "Done importing USFS Capstone 2023 code"

####################################################################################
# Copy files into the image
####################################################################################

COPY USFS_lichen_database_and_clearinghouse /
COPY data /
COPY entry.sh /

ENTRYPOINT bash /entry.sh

