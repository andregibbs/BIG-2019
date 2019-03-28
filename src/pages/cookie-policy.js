import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const headData = {
    title: 'Privacy | White Xmas | Official Site',
    description: 'The official website for Irving Berlin’s WHITE CHRISTMAS The Musical at the Dominion Theatre. Starring Danny Mac and Dan Burton. Directed by Curve, Leicester’s Nikolai Foster and choreographed by Stephen Mear.',
};

const Privacy = () => (
    <Layout headData={headData}>
        <Container className="pt-5 mt-5 page">

            <Link to="/">Back to home</Link><br/><br/>
            <h1 className="privacy-title">Cookie Policy</h1>
            <p>Cookies and how they benefit you:</p>
            <p>Our website uses cookies, as almost all websites do, to help provide you with the best experience we can. Cookies are small text files that are placed on your computer or mobile phone when you browse websites.</p>
            <p>To read our Privacy Policy please click <Link to="privacy">HERE</Link><br/>White Christmas uses cookies for three main purposes:</p>
            <p>
            <ul>
            <li>To ensure the website works, in particular for online booking</li>
            <li>To monitor website performance and help us make improvements in the future</li>
            <li>To tailor our marketing, and use tools such as Google AdWords to communicate more effectively through web advertising.</li>
            </ul>
            </p>
            <p>Our cookies help us:</p>
            <ul>
            <li>Make our website work as you’d expect</li>
            <li>Save you having to login every time you visit the site</li>
            <li>Remember your settings during and between visits</li>
            <li>Improve the speed/security of the site</li>
            <li>Allow you to share pages with social networks like Facebook</li>
            <li>Continuously improve our website for you</li>
            <li>Make our marketing more efficient (ultimately helping us to offer the service we do at the price we do)</li>
            </ul>
            <p>We do not use cookies to:</p>
            <ul>
            <li>Collect any sensitive information </li>
            <li>Pass personally identifiable data to third parties</li>
            <li>Pay sales commissions</li>
            </ul>
           <p>You can learn more about all the cookies we use below:</p><br />
                <table className="cookie-table">
                    <thead>
                        <tr>
                            <th className="cookie" style={{ width: '30%'}}>COOKIE</th>
                            <th className="purpose" style={{ width: '70%' }}>PURPOSE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Google Analytics</td>
                            <td>This monitors how people use our site – for example the browser they use and the pages they visit. It’s used to assess our website’s performance and to help us plan improvements.</td>
                       </tr>
                        <tr>
                            <td>DoubleClick / Sizmek</td>
                            <td>You may notice that sometimes after visiting our site you see increased numbers of adverts from us. This is because we pay for these adverts, and the technology to do this is made possible by this cookie. We use these adverts to encourage you to come back to our site. Don’t worry - we are unable to proactively reach out to you as the whole process is entirely anonymised.<br/><br/> These help us understand how well our online adverts are encouraging browsers to view more information about particular events on <Link to="/">www.whitechristmastheusical.co.uk</Link> and when an advert is displayed on a third-party website, a Sizmek / Doubleclick cookie is placed on their machine, providing this is enabled by their browser settings.  If that browser then visits <Link to="/">www.whitechristmastheusical.co.uk</Link>, we can see that the advert has been effective. More information about Sizmek’s or Doubleclick’s own privacy policy and how to opt out can be found here on the Sizmek / Doubleclick website</td>
                        </tr>
                        <tr>
                            <td>Facebook / Instagram / Twitter / Snapchat</td>
                            <td>This communicates with Facebook / Instagram / Snapchat / Twitter activity on our website. In a similar way to DoubleClick / Sizmek it allows us to reduce our costs (and keep our prices low) by using digital adverts to encourage you to visit us. Don’t worry - we are unable to proactively reach out to you as the whole process is entirely anonymised.</td>
                        </tr>
                        <tr>
                            <td>Session</td>
                            <td>This cookie is a transient cookie (it is erased when you close the browser). It acts as a small amount of memory to remember what you’ve done on past pages</td>
                        </tr>
            
                    </tbody>
                </table>
                <br />
                <h4>Granting us permission to use cookies</h4>
                <p>We use cookies to make our website work including:</p>
                <p>Granting us permission to use cookies</p>
                <ul>
                <li>Remembering your search settings</li>
                </ul>
                <h4>Third party functions</h4>
                <p>Our site, like most websites, includes functionality provided by third parties. A common example is an embedded YouTube video. Disabling these cookies will likely break the functions offered by these third parties.</p>
                <h4>Social website cookies</h4>
                <p>So you can easily “like” or share our content on the likes of Facebook and Twitter we have included sharing buttons on our site. <br/>The privacy implications of this will vary depending on the social network and will be dependent on the privacy settings you have chosen on these networks.</p>
                <h4>Anonymous visitor statistics cookies</h4>
                <p>We use cookies to compile visitor statistics such as how many people have visited our website, what type of technology they are using (e.g. Mac or Windows, which helps to identify when our site isn’t working as it should for particular technologies), how long they spend on the site, what page they look at etc. This helps us to continuously improve our website. These so called “analytics” programs also tell us if, on an anonymous basis, how people reached this site (e.g. from a search engine) and whether they have been here before; this helps us to put more money into developing our services for you instead of marketing spend.</p>
                <h4>We use advertising cookies</h4>
                <p>Cookies are widely used in online advertising. Neither us, advertisers or our advertising partners can gain personally identifiable information from these cookies. We only work with advertising partners who work to accepted privacy standards such as <a href="http://www.youronlinechoices.com/uk/iab-good-practice-principles" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/uk/iab-good-practice-principles</a></p>
                <p>You can learn more about online advertising at <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>. You can opt-out of almost all advertising cookies at <a href="http://www.youronlinechoices.com/uk/your-ad-choices" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/uk/your-ad-choices</a> although we would prefer that you didn’t, as ultimately advertising helps keep much of the internet free. It is also worth noting that opting out of advertising cookies will not mean you won’t see adverts, just simply that they won’t be tailored to you any longer.</p>
                <h4>We use:</h4>
                <ul> 
                <li>DoubleClick – privacy policy owned by Google; Sizmek – privacy policy owned by Sizmek </li>
                <li>DoubleClick – privacy policy owned by Google; Sizmek – privacy policy owned by Sizmek </li>
                <li>Remarketing cookies</li>
                </ul>
                <p>You may notice that sometimes after visiting a site you see increased numbers of adverts from the site you visited. This is because advertisers, including ourselves, pay for these adverts. The technology to do this is made possible by cookies and as such we may place a so called “remarketing cookie” during your visit. We use these adverts to offer special offers etc to encourage you to come back to our site. Don’t worry -  we are unable to proactively reach out to you as the whole process is entirely anonymised. You can opt out of these cookies at any time as explained above.</p>
                <h4>Managing cookies</h4>
                <p>Cookies cannot be used by themselves to identify you. You can easily control and disable cookies through your browser settings.</p>
                <p>All browsers are different – for more information on cookies in general, visit the following external links:</p>
                 <p><a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a><br/>
                 <a href="http://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer">www.youronlinechoices.eu</a></p>
                 <p>Depending on the browser you are using, cookies can be managed according to the steps shown in the below table.</p>
                 <p>Please be aware that by limiting or deleting cookies, your experience of our website might not be the best it could be. If you have any questions about cookies, please contact the Data Protection Manager <a href="mailto:info@kenwright.com">info@kenwright.com</a></p>
                 <h4>Turning cookies off</h4>
                 <p>You can usually switch cookies off by adjusting your browser settings to stop it from accepting cookies. Doing so, however, will likely limit the functionality of this site -  and a large proportion of the world’s websites -  as cookies are a standard part of most modern websites.</p>
                 <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>. To opt out of being tracked by Google Analytics across all websites visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>.
                     It may be that your concerns around cookies relate to so called “spyware”. Rather than switching off cookies in your browser you may find that anti-spyware software achieves the same objective by automatically deleting cookies considered to be invasive. Learn more about managing cookies with anti-spyware software.</p>


        </Container>
    </Layout>
)

export default Privacy
