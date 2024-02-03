package com.weng.assignment1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@RestController
public class NasaController {
	@Value("${nasa.api.key}") // added this to application.properties
	private String nasaApiKey;
	private static final Logger logger = LoggerFactory.getLogger(NasaController.class);

	private final String NASA_APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

	@GetMapping("/nasa/apod")
	public NasaApiResponse getNasaApod(@RequestParam("date") String date,
			@RequestParam(value = "hd", required = false) Boolean hd) {
		String apiUrl = String.format("%s?api_key=%s&date=%s&hd=%s", NASA_APOD_ENDPOINT, nasaApiKey, date, hd);
		RestTemplate restTemplate = new RestTemplate();
		try {
			return restTemplate.getForObject(apiUrl, NasaApiResponse.class);
		} catch (RestClientException e) {
			logger.error("Error calling NASA APOD API", e);
			return new NasaApiResponse();
		}
	}
} 
 