# WebEng_Assignment1_Nasa

## Project Repository
The source code for this project is hosted on GitHub. You can find it [here](https://github.com/komalivikas/WebEng_Assignment1_Nasa).

## NASA API Endpoint

The project includes an endpoint to retrieve information from NASA's Astronomy Picture of the Day (APOD) API.

**Endpoint:** `http://localhost:8080/nasa/apod?date=2024-02-01&hd=true`

**Parameters:**
- `date` (required): The date for which you want the APOD. Format: YYYY-MM-DD.
- `hd` (optional): Set to `true` for high-definition images.

**Example Usage:**
```bash
curl -X GET 'http://localhost:8080/nasa/apod?date=2024-02-01&hd=true'
