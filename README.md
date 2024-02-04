# Nasa Api APOD Spring API Project

## Project Repository
The source code for this project is hosted on GitHub. You can find it [here](https://github.com/komalivikas/WebEng_Assignment1_Nasa).

## Introduction##

This project leverages the NASA APOD API to fetch and display information about space-related content. It consists of a Spring Boot application with a controller and service class for handling API requests.

**Project Structure:**

NasaController: This class contains the endpoint mappings for interacting with the NASA APOD API. It handles incoming requests and communicates with the NasaService to fetch data.

NasaService: The service class is responsible for interacting with the NASA APOD API. It utilizes a RestTemplate to make HTTP requests and handles the logic for parsing and processing API responses.

## NASA API Endpoint

The project includes endpoint to retrieve information from NASA's Astronomy Picture of the Day (APOD) API.

**Parameters:**
- `date` 		: The date for which we want the APOD. Format: YYYY-MM-DD.
- `startDate`	: Start date for fetching content in the format YYYY-MM-DD.
- `endDate`		: End date for fetching content in the format YYYY-MM-DD.
- `count`		: Number of entries to fetch. If not specified, defaults to 1.
- `hd`			: Specify true to retrieve high-definition content.
- `thumbs`		: Specify true to include thumbnail URLs for videos.

**Endpoint:**

Method: GET

- **Fetch the latest space-related content:**
http://localhost:8080/nasa/apod
![Alt Text](Images/nasa_apod.png)


- **Fetch content for a specific date:**
http://localhost:8080/nasa/apod?date=2024-02-04
![Alt Text](Images/nasa_apod_date.png)


- **Fetch content for multiple entries/ Range of dates:**
http://localhost:8080/nasa/apod?start_date=2024-02-01&end_date=2024-02-03
![Alt Text](Images/nasa_apod_startdate_enddate.png)


- **Fetch content for multiple entries for a given Count**
http://localhost:8080/nasa/apod?count=4
![Alt Text](Images/nasa_apod_count.png)


- **Fetch content for multiple entries with HD images:**
http://localhost:8080/nasa/apod?start_date=2024-01-04&end_date=2024-02-03&hd=true
![Alt Text](Images/nasa_apod_startenddate_withhdtrue.png)


- **Fetch content for a specific date with thumbnails:**
http://localhost:8080/nasa/apod?date=2024-01-10&thumbs=true
![Alt Text](Images/nasa_apod_date&thumbs_true.png)
