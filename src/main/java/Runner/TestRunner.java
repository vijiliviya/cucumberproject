package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\vraja\\workspace\\FreeCRMBDD\\src\\main\\java\\Features\\hooks.feature"
 ,glue={"StepDefinition"},format = { "pretty","html:test-output" ,
		 "json:jsonreport/cucumber.json","junit:juit_xmlreport/cucumber.xml"},
 dryRun = false, monochrome=true,strict=true
 )

public class TestRunner {

}
