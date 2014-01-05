#!/bin/bash

set -e

sudo apt-get install python-software-properties
sudo apt-get install software-properties-common
sudo apt-get install nodejs
sudo npm install -g grunt-cli

#sudo apt-get install git
#git clone https://github.com/Jawap/node-bootstrap-website.git

npm install

grunt
