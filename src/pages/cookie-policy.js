import React from 'react'
import {Container} from 'reactstrap'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
};

const Privacy = () => (
    <Layout headData={headData}>
        <section className="page PrivacyPage">
            <div className="PrivacyPage__content">
                <Container fluid={true} className="py-4">
                    <Container>

                        <p><strong>Cookies and how they benefit you:</strong></p>
                        <p>Our website uses cookies, as almost all websites do, to help provide you with the best experience we can.
                            Cookies are small text files that are placed on your computer or mobile phone when you browse
                            websites.</p>
                        <p>To read our Privacy Policy please click <Link to="/privacy-policy/">HERE</Link>.</p>

                        <p><strong>ENCORE THEATRICAL PRODUCTIONS uses cookies for three main purposes:</strong></p>
                        <ul>
                            <li>To ensure the website works, in particular for online booking</li>
                            <li>To monitor website performance and help us make improvements in the future</li>
                            <li>To tailor our marketing, and use tools such as Google AdWords to communicate more effectively
                                through web advertising.
                            </li>
                        </ul>
                        <p><strong>Our cookies help us:</strong></p>
                        <ul>
                            <li>Make our website work as you’d expect</li>
                            <li>Save you having to login every time you visit the site</li>
                            <li>Remember your settings during and between visits</li>
                            <li>Improve the speed/security of the site</li>
                            <li>Allow you to share pages with social networks like Facebook</li>
                            <li>Continuously improve our website for you</li>
                            <li>Make our marketing more efficient (ultimately helping us to offer the service we do at the price we
                                do)
                            </li>
                        </ul>
                        <p><strong>We do not use cookies to:</strong></p>
                        <ul>
                            <li>Collect any sensitive information</li>
                            <li>Pass personally identifiable data to third parties</li>
                            <li>Pay sales commissions</li>
                        </ul>
                        <p>You can learn more about all the cookies we use below:</p>

                        <p><strong>Google Analytics</strong></p>
                        <p>This monitors how people use our site – for example the browser they use and the pages they visit. It’s
                            used to assess our website’s performance and to help us plan improvements.</p>


                        <p><strong>DoubleClick / Sizmek</strong></p>
                        <p>You may notice that sometimes after visiting our site you see increased numbers of adverts from us. This
                            is because we pay for these adverts, and the technology to do this is made possible by this cookie. We
                            use these adverts to encourage you to come back to our site. Don’t worry - we are unable to proactively
                            reach out to you as the whole process is entirely anonymised. These help us understand how well our
                            online adverts are encouraging browsers to view more
                            information about particular events on www.somethingbiglondon.co.uk and when an advert is displayed
                            on a third-party website, a Sizmek / Doubleclick cookie is placed on their machine, providing this
                            is enabled by their browser settings. If that browser then visits www.somethingbiglondon.co.uk, we
                            can see that the advert has been effective. More information about Sizmek’s or Doubleclick’s own
                            privacy policy and how to opt out can be found here on the <a className="color-red"
                                                                                          href="https://www.sizmek.com/"
                                                                                          target="_blank">Sizmek</a> / <a
                                className="color-red" href="https://marketingplatform.google.com/about/enterprise/"
                                target="_blank">Doubleclick</a> websites.

                        </p>
                        <p><strong>Facebook / Instagram / Twitter / Snapchat</strong></p>
                        <p>This communicates with Facebook / Instagram / Snapchat / Twitter activity on our website. In a similar
                            way to DoubleClick / Sizmek it allows us to reduce our costs (and keep our prices low) by using digital
                            adverts to encourage you to visit us. Don’t worry - we are unable to proactively reach out to you as the
                            whole process is entirely anonymised.
                        </p>
                        <p><strong>Session</strong></p>
                        <p>This cookie is a transient cookie (it is erased when you close the browser). It acts as a small amount
                            of memory to remember what you’ve done on past pages.
                        </p>

                        <p><strong>Granting us permission to use cookies</strong></p>
                        <p>If the settings on your software that you are using to view this website (your browser) are adjusted to
                            accept cookies we take this, and your continued use of our website, to mean that you are fine with this.
                            Should you wish to remove or not use cookies from our site you can learn how to do this below; however,
                            doing so will likely mean that our site will not work as you would expect.</p>
                        <p><strong>Our own cookies</strong></p>
                        <p>We use cookies to make our website work including:</p>
                        <ul>
                            <li>Remembering your search settings</li>
                        </ul>
                        <p><strong>Third party functions</strong></p>
                        <p>Our site, like most websites, includes functionality provided by third parties. A common example is an
                            embedded YouTube video. Disabling these cookies will likely break the functions offered by these third
                            parties.</p>
                        <p><strong>Social website cookies</strong></p>
                        <p>So you can easily “like” or share our content on the likes of Facebook and Twitter we have included
                            sharing buttons on our site.</p>
                        <p>The privacy implications of this will vary depending on the social network and will be dependent on the
                            privacy settings you have chosen on these networks.</p>
                        <p><strong>Anonymous visitor statistics cookies</strong></p>
                        <p>We use cookies to compile visitor statistics such as how many people have visited our website, what type
                            of technology they are using (e.g. Mac or Windows, which helps to identify when our site isn’t working
                            as it should for particular technologies), how long they spend on the site, what page they look at etc.
                            This helps us to continuously improve our website. These so called “analytics” programs also tell us if,
                            on an anonymous basis, how people reached this site (e.g. from a search engine) and whether they have
                            been here before; this helps us to put more money into developing our services for you instead of
                            marketing spend.</p>
                        <p><strong>We use advertising cookies</strong></p>
                        <p>Cookies are widely used in online advertising. Neither us, advertisers or our advertising partners can
                            gain personally identifiable information from these cookies. We only work with advertising partners who
                            work to accepted privacy standards such as <a href="http://www.youronlinechoices.com/goodpractice" target="_blank"
                               rel="noreferrer noopener">http://www.youronlinechoices.com/goodpractice</a></p>
                        <p>You can learn more about online advertising at http://www.youronlinechoices.com . You can opt-out of
                            almost all advertising cookies at http://www.youronlinechoices.com/uk/your-ad-choices although we would
                            prefer that you didn’t, as ultimately advertising helps keep much of the internet free. It is also worth
                            noting that opting out of advertising cookies will not mean you won’t see adverts, just simply that they
                            won’t be tailored to you any longer.</p>
                        <p><strong>We use:</strong></p>
                        <ul>
                            <li>DoubleClick – privacy policy owned by Google; Sizmek – privacy policy owned by Sizmek</li>
                            <li>Remarketing cookies</li>
                        </ul>
                        <p>You may notice that sometimes after visiting a site you see increased numbers of adverts from the site
                            you visited. This is because advertisers, including ourselves, pay for these adverts. The technology to
                            do this is made possible by cookies and as such we may place a so called “remarketing cookie” during
                            your visit. We use these adverts to offer special offers etc to encourage you to come back to our site.
                            Don’t worry - we are unable to proactively reach out to you as the whole process is entirely
                            anonymised. You can opt out of these cookies at any time as explained above.</p>
                        <p><strong>Managing cookies</strong></p>
                        <p>Cookies cannot be used by themselves to identify you. You can easily control and disable cookies through
                            your browser settings.</p>
                        <p>All browsers are different – for more information on cookies in general, visit the following external
                            links:</p>
                        <p><a className="color-red" href="http://www.aboutcookies.org/"
                              target="_blank">www.aboutcookies.org</a><br/>
                            <a className="color-red" href="http://www.youronlinechoices.eu/"
                               target="_blank">www.youronlinechoices.eu</a></p>
                        <p>Depending on the browser you are using, cookies can be managed according to the steps shown in the below
                            table.</p>
                        <p>Please be aware that by limiting or deleting cookies, your experience of our website might not be the
                            best it could be. If you have any questions about cookies, please contact the Data Protection
                            Manager admin@openairtheatre.com</p>
                        <p><strong>Turning cookies off</strong></p>
                        <p>You can usually switch cookies off by adjusting your browser settings to stop it from accepting cookies.
                            Doing so, however, will likely limit the functionality of this site - and a large proportion of
                            the world’s websites - as cookies are a standard part of most modern websites.</p>
                        <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about
                            cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org/" target="_blank"
                               rel="noreferrer noopener">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org/"
                                                                                        target="_blank"
                                                                                        rel="noreferrer noopener">www.allaboutcookies.org</a>.</p>
                        <p>To opt out of being tracked by Google Analytics across all websites visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener">http://tools.google.com/dlpage/gaoptout</a>.</p>
                        <p>It may be that your concerns around cookies relate to so called “spyware”. Rather than switching off
                            cookies in your browser you may find that anti-spyware software achieves the same objective by
                            automatically deleting cookies considered to be invasive. Learn more about managing cookies with
                            anti-spyware software.</p>

                        <Link to="/">Back to home</Link>
                    </Container>
                </Container>
            </div>
        </section>
    </Layout>
)

export default Privacy
