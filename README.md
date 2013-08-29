# Yertle (with lib-stats)

An example of an asynchronous architecture for data collection, analysis and presentation. Consists of separate layers for data collection, analysis, and presentation. Think sorta Model-View-Controller (MVC). 

Yertle leverages existing, readily available and well-tested technologies, including: 
 * **RabbitMQ** w/ **Celery** for the asychronous components
 * **cron** for task scheduling
 * **Python** w/ **pandas** for data collection and analysis
 * **Mongodb** (and text flat files) for datastore and persistence
 * **Flask** for the web framework
 * **nginx** and **uWSGI** for depoyment
 * **d3.js** w/ XHR for visualizations in the front-end. 

## You might find Yertle useful if

You might find Yertle useful if you want to learn about or starting a project that involves: 

 * Periodically collecting data from external sources, like with APIs. 
 * Workflows involving long-running tasks or any task that must be performed asynchronously.
 * Output that is rendered and displayed on the web
 * etc. 

## How to use Yertle 

Think of this project as a demonstration and example of how to combine these technologies. It can be readily adapted to address many common use-cases. 

Use the project to understand how to architect a system that meets your needs. 
Use the documentation to implement exactly the components you need. 
Use the code as a working example and template to start from. 

## Working example

As a working example, I have implemented **"lib-stats"** which collects and displays information about open source python data analysis libraries. 

 * Uses the Github API to fetch and store information about certain libraries
 * Data is collected, asynchronously, once a day.
 * The results are stored in flat files or in mongodb
 * The stored information is used to render a simple visualization on the web using d3.js
