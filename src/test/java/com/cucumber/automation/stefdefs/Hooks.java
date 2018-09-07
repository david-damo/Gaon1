package com.cucumber.automation.stefdefs;

import com.cucumber.automation.selenium.HostProperties;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

/**
 * Created by Sanjeev on 3/25/2018.
 */
public class Hooks {
    private static final Logger logger = Logger.getLogger("Log4JSettings");
    public static WebDriver driver;
    private static boolean initialized = false;
    //static AppBrowser browser=new AppBrowser();
    static HostProperties config=new HostProperties();

    @Before
    public void browserLauncher() throws MalformedURLException,InterruptedException {
        logger.info("Deleting cookies from browser and launching it.");
        if (!initialized){
            initialized = true;
            //driver = new FirefoxDriver();
            //setUp();
            driver.manage().deleteAllCookies();
        }
        driver=new FirefoxDriver();
        //driver.manage().deleteAllCookies();
    }
    @After
    public void embedScreenShotsAndCloseBrowser(Scenario scenario ){
        if(scenario.isFailed()){
            logger.info("Taking screenshot of "+scenario+" as it failed");
            byte[] screenshots=((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshots,"images/png");
            logger.info("Quiting the browser....");
            //driver.quit();
        }
        else{
            scenario.write("Scenario is Passed");
        }
    }
    public void setUp() throws InterruptedException{
        URL resource=Object.class.getResource("/IEDriverServer.exe");
        //System.out.println(resource.toString());
        File file=new File(resource.getPath());
        System.setProperty("webdriver.ie.driver", file.getPath());
        DesiredCapabilities cap=DesiredCapabilities.internetExplorer();
        cap.setCapability("initialBrowserUrl", config.hostConfig.getProperty("hostUrl"));
        cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
        cap.setCapability("ignoreZoomSetting", true);
        //cap.setCapability("nativeEvents", false);
        driver=new InternetExplorerDriver(cap);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
}
