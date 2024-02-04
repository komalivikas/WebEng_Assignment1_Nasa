package com.weng.assignment1;

import lombok.Data;

@Data
public class NasaApiResponse {
	private String date;
	private String explanation;
	private String hdurl;
	private String media_type;
	private String service_version;
	private String title;
	private String url;
	private String thumbnailUrl; // Useful if mediaType is "video" and thumbs=true

}
