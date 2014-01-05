#!/bin/bash

set -e

sudo apt-get install python-software-properties
sudo apt-get install software-properties-common
sudo apt-get install nodejs
sudo apt-get install git
sudo npm install -g grunt-cli

git clone https://github.com/Jawap/node-bootstrap-website.git

cd ./node-bootstrap-website

npm install

grunt
