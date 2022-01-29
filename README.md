## Your First App

On a new Change ticket page when an Agent enters a backdate date (less than current date) in the ‘Planned Start Date’ field the custom app will execute following activities:
• Display alert notification message: “Planned Start Date can’t be less than today’s date” and reset the 'Planned Start Date' field value to todays date.


### Files and Folders
    .
    ├── README.md                     A file for your future self and developer friends to learn about app
    ├── app                           A folder to put all files needed for frontend components
    │   ├── index.html                A landing page for the user to use the app
    │   ├── scripts                   JavaScript to handle app's frontend components business logic
    │   │   └── app.js
    │   └── styles                    A folder of all the styles for app
    │       ├── images                A folder to put all the images
    │       │   ├── icon.svg
    │       │   └── rocket.svg
    │       └── style.css
    ├── config                        A folder to hold all the app's configuration files
    │   └── iparams.json
    └── manifest.json                 A JSON file holding meta data for app to run on platform
