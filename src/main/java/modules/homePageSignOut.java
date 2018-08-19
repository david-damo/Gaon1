package modules;

import pages.SignOutPageEbay;
import junit.framework.Assert;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

/**
 * Created by Sanjeev on 3/26/2018.
 */
public class homePageSignOut {
    public static void UserProfile(WebDriver driver) throws Exception {
        SignOutPageEbay.userProfileLink.click();

    }
    ///////////////////////////////
    public static void toBeDeleted(WebDriver driver) throws Exception {
        Thread.sleep(5000);
        String s1="hello";
       // SignOutPageEbay.signOut.click();
        try{
            Assert.assertEquals(s1,"Hello");
        }catch(AssertionError e){
            System.out.println("failed : "+e);
            //return;
        }
        //((JavascriptExecutor)driver).executeScript("arguments[0].cli‌​ck()", SignOutPageEbay.signOut);
        //fail("ComparisonFailure expected");
    }
    ////////////////////////////////
    public static void UserSignOut(WebDriver driver) throws Exception {
        Thread.sleep(5000);
        SignOutPageEbay.signOut.click();
    }

}
