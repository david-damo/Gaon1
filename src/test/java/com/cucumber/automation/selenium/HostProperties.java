package com.cucumber.automation.selenium;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class HostProperties {

	public static HostProperties instance=new HostProperties();
	public static Properties hostConfig=new Properties();
	static {
		//InputStream in=Object.class.getResourceAsStream("/resources/application.properties");
		InputStream in=instance.getClass().getClassLoader().getResourceAsStream("application.properties");
		//Properties properties = new Properties();
		//InputStream in=instance.getClass().getClassLoader().getResourceAsStream("/application.properties");
		try {
			hostConfig.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
