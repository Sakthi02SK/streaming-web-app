# Streaming Web App

This Streaming web app was developed by using React JS and Bootstrap. In this, I implemented the basic functions like Searching and Categorizing the video. For This app, I use 'https://ypapi.formz.in/api/public/videos' to get the Data of the video Content. It contains only the basic information like Thumbnail, Title, Channel Name, Channel pic, and some other details.

# How does it look like

### Desktop/PC view
![Alt text](https://github.com/Sakthi02SK/streaming-web-app/blob/main/pic.png)

### Mobile view
![Alt text](https://github.com/Sakthi02SK/streaming-web-app/blob/main/pic1.png)

## Problem I faced 
While fetching the 'https://ypapi.formz.in/api/public/videos' has been blocked by CROS policy, It runs in the localhost but after hosting the site in Netlify the error occurred. Locally I used a proxy to avoid the CROS policy error by adding ``` "proxy": "https://ypapi.formz.in" ``` in the package.json file

# How to run this code
### Step 1: 
Download nodejs from this site 'https://nodejs.org/en/download' or if ur a Linux user run this command on terminal ``` sudo apt-get install node ``` or ``` sudo snap install node ``` to install nodejs 

### Step 2:
Download this project code by using the command on cmd or terminal ``` git clone Sakthi02SK/streaming-web-app ```  and get into the project folder ``` cd streaming-web-app ```

### Step 3:
``` npm start``` to run this project and Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
