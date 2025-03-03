import react from 'react'
import { Footer } from './Footer'
import { motion } from 'framer-motion';
import { Header } from './Header';

export const About = () => {
    return (
        <>
            <div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="06ab6c64-468c-b44e-1b8c-856deb96ba7f" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
                <a href="index.html" class="logo-link-wrapper w-nav-brand"><img width="Auto" height="Auto" alt="logo" src="images/iDesigner.png" loading="eager" srcset="images/iDesigner-p-500.png 500w, images/iDesigner.png 715w" sizes="(max-width: 991px) 66px, 5vw" class="logo" /></a>
                <div class="nav-container w-container">
                    <Header />
                    <div class="menu-button w-nav-button">
                        <div class="burger-icon w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div className="space-page-top"></div>
                    <motion.div data-w-id="77a23f5d-dc7c-c2f9-d18d-536935e52a2d"  initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }} className="about-hero-flex">
                        <div className="about-hero-wrapper">
                            <h5>Get To Know</h5>
                            <div className="about-hero-block">
                                <h1 className="font-huge">ABOUT</h1>
                            </div>
                            <p className="max-width-30rem">I specialize in creating visually captivating designs that transform your ideas into stunning visuals.</p>
                        </div><img width="540" height="540" alt="" src="images/vr-lady.jpg" loading="eager" srcSet="images/vr-lady-p-500.jpg 500w, images/vr-lady-p-800.jpg 800w, images/vr-lady.jpg 960w" sizes="(max-width: 479px) 80vw, (max-width: 767px) 420px, (max-width: 991px) 560.15625px, 39vw" className="hero-about-image" />
                    </motion.div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div className="space-7rem"></div>
                    <div className="metrics-wrapper">
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddef3" className="metrics-block">
                            <h2 className="metrics-text">124</h2>
                            <p>Customers</p>
                        </div>
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddef8" className="metrics-block">
                            <h2 className="metrics-text">7</h2>
                            <p>Awards</p>
                        </div>
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddefd" className="metrics-block">
                            <h2 className="metrics-text">85</h2>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="space-7rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-13-5rem w-container">
                    <div className="story-title-wrapper slide-up-animation">
                        <div className="title-flex-wrapper">
                            <h5>My</h5>
                            <h2 className="line-height">STORY</h2>
                        </div>
                        <div id="w-node-_69f5db77-235d-2a8b-939d-5b086945ea9a-3e336840" className="story-text-block">
                            <h5>GET TO KNOW</h5>
                            <p className="max-width-30rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <div className="space-2rem"></div>
                    <div className="story-grid">
                        <div id="w-node-_69f5db77-235d-2a8b-939d-5b086945eaa1-3e336840" className="story-content-wrapper slide-from-left-animation">
                            <p className="centered-from-mobile">Established in 2015, I embarked on a design journey fueled by a passion for technology and the internet&#x27;s potential to transform digital experiences.<br /><br />Starting from a small studio I believed in the internet&#x27;s transformative power, I&#x27;ve steadily grown and evolved into a proficient designer.<br /><br />Driven by a mission to elevate the web&#x27;s visual landscape, pixel by pixel, I&#x27;m committed to crafting exceptional digital experiences.<br /></p>
                        </div>
                        <div id="w-node-_69f5db77-235d-2a8b-939d-5b086945eaad-3e336840" className="story-text-wrapper slide-from-right-animation"><img width="480" height="480" alt="" src="images/ParallaxImage.jpg" loading="eager" srcSet="images/ParallaxImage-p-500.jpg 500w, images/ParallaxImage-p-800.jpg 800w, images/ParallaxImage-p-1080.jpg 1080w, images/ParallaxImage.jpg 1440w" sizes="(max-width: 767px) 80vw, (max-width: 991px) 480px, 33vw" className="image-absolute" /></div>
                    </div>
                    <div className="space-7rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div data-delay="4000" data-animation="slide" className="reviews-slider slide-up-animation w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                        <div className="mask w-slider-mask">
                            <div className="slide w-slide">
                                <div className="reviews-slide"><img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>I was blown away by his creativity in <br />creating a memorable brand identity. His <br />design work has helped us stand out.</h4><img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636ca00_Reviews3.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Davis Jones</h5>
                                        <h5 className="font-primary">entrepreneur</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="slide w-slide">
                                <div className="reviews-slide"><img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>It was a pleasure working on a design <br />project and I must say that the experience <br />exceeded all my expectations.</h4><img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636c9f7_Reviews1.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Jacob Black</h5>
                                        <h5 className="font-primary">Director</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="slide w-slide">
                                <div className="reviews-slide"><img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>I couldn&#x27;t be happier with the <br />results of our collaboration. He took <br />our vision and brought it to life.</h4><img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636ca05_Reviews2.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Maria Smith</h5>
                                        <h5 className="font-primary">Manager</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-arrow left w-slider-arrow-left">
                            <div className="reviews-icon w-icon-slider-left"></div>
                        </div>
                        <div className="reviews-arrow right w-slider-arrow-right">
                            <div className="reviews-icon w-icon-slider-right"></div>
                        </div>
                        <div className="slide-nav w-slider-nav w-round"></div>
                    </div>
                    <div className="space-4rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="title-flex">
                        <h1 data-w-id="0e5d0adf-3843-4287-2b23-42ae30264137">fAQ</h1>
                        <h5 className="max-width-20rem slide-from-right-animation">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </div>
                    <div className="space-4rem"></div>
                    <div className="faq-wrapper slide-up-animation">
                        <div className="faq-dropdown">
                            <div data-w-id="0e5d0adf-3843-4287-2b23-42ae3026413e" className="dropdown-toggle">
                                <div className="space-1rem"></div>
                                <div className="faq-flex">
                                    <h4 className="faq-question">What types of services do you offer?</h4>
                                    <div data-is-ix2-target="1" className="faq-icon" data-w-id="0e5d0adf-3843-4287-2b23-42ae30264143" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66e57311172b9a6012d4d709/66e57311172b9a6012d4d789_FAQ%20icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.5" data-duration="0" data-ix2-initial-state="0"></div>
                                </div>
                                <div className="space-1rem"></div>
                                <div className="dropdown-answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className="space-1rem"></div>
                            </div>
                        </div>
                        <div className="faq-dropdown">
                            <div data-w-id="0e5d0adf-3843-4287-2b23-42ae3026414a" className="dropdown-toggle">
                                <div className="space-1rem"></div>
                                <div className="faq-flex">
                                    <h4 className="faq-question">What do you need from me to start a project?</h4>
                                    <div data-is-ix2-target="1" className="faq-icon" data-w-id="0e5d0adf-3843-4287-2b23-42ae3026414f" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66e57311172b9a6012d4d709/66e57311172b9a6012d4d789_FAQ%20icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.5" data-duration="0" data-ix2-initial-state="0"></div>
                                </div>
                                <div className="space-1rem"></div>
                                <div className="dropdown-answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className="space-1rem"></div>
                            </div>
                        </div>
                        <div className="faq-dropdown">
                            <div data-w-id="0e5d0adf-3843-4287-2b23-42ae30264156" className="dropdown-toggle">
                                <div className="space-1rem"></div>
                                <div className="faq-flex">
                                    <h4 className="faq-question">How long does it take to complete a project?</h4>
                                    <div data-is-ix2-target="1" className="faq-icon" data-w-id="0e5d0adf-3843-4287-2b23-42ae3026415b" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66e57311172b9a6012d4d709/66e57311172b9a6012d4d789_FAQ%20icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.5" data-duration="0" data-ix2-initial-state="0"></div>
                                </div>
                                <div className="space-1rem"></div>
                                <div className="dropdown-answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className="space-1rem"></div>
                            </div>
                        </div>
                        <div className="faq-dropdown">
                            <div data-w-id="0e5d0adf-3843-4287-2b23-42ae30264162" className="dropdown-toggle">
                                <div className="space-1rem"></div>
                                <div className="faq-flex">
                                    <h4 className="faq-question">What is the cost of your services?</h4>
                                    <div data-is-ix2-target="1" className="faq-icon" data-w-id="0e5d0adf-3843-4287-2b23-42ae30264167" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66e57311172b9a6012d4d709/66e57311172b9a6012d4d789_FAQ%20icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.5" data-duration="0" data-ix2-initial-state="0"></div>
                                </div>
                                <div className="space-1rem"></div>
                                <div className="dropdown-answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className="space-1rem"></div>
                            </div>
                        </div>
                        <div className="faq-dropdown">
                            <div data-w-id="0e5d0adf-3843-4287-2b23-42ae3026416e" className="dropdown-toggle">
                                <div className="space-1rem"></div>
                                <div className="faq-flex">
                                    <h4 className="faq-question">Do you offer revisions?</h4>
                                    <div data-is-ix2-target="1" className="faq-icon" data-w-id="0e5d0adf-3843-4287-2b23-42ae30264173" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/66e57311172b9a6012d4d709/66e57311172b9a6012d4d789_FAQ%20icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.5" data-duration="0" data-ix2-initial-state="0"></div>
                                </div>
                                <div className="space-1rem"></div>
                                <div className="dropdown-answer">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className="space-1rem"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-7rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f1" className="cta-block">
                        <div className="cta-text-block">
                            <h5>Contact me</h5>
                            <div className="flex">
                                <h2 data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f6" className="cta-large">GET IN</h2><img data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f8" loading="eager" alt="icon" src="images/arrow_out.svg" className="arrow-image-small" />
                            </div>
                            <h2 data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f9" className="cta-large outline-white">TOUCH</h2>
                        </div>
                        <a href="contact.html" data-w-id="3beb919a-4aaa-f885-16a0-1c9b6601a3ec" className="button-with-circle-icon button-light w-inline-block">
                            <p className="button-text">Contact</p>
                            <p className="button-text-absolute">Contact</p>
                            <div className="button-arrow-wrapper button-light"><img width="Auto" height="Auto" alt="" src="images/arrow_outward.svg" loading="eager" className="arrow invert" /></div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section background-black">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div className="space-2rem"></div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d088998077f8" className="footer-top">
                        <div className="footer-block">
                            <a href="index.html" className="footer-logo-link-wrapper w-nav-brand"><img width="Auto" height="Auto" alt="logo" src="images/iDesigner.png" loading="eager" srcSet="images/iDesigner-p-500.png 500w, images/iDesigner.png 715w" sizes="(max-width: 479px) 99px, (max-width: 991px) 66px, 5vw" className="footer-logo" /></a>
                            <div className="socials-wrapper">
                                <a href="https://www.youtube.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/youtubeicon.png" loading="eager" srcSet="images/youtubeicon-p-500.png 500w, images/youtubeicon.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                                <a href="https://www.instagram.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/instagram.png" loading="eager" srcSet="images/instagram-p-500.png 500w, images/instagram.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                                <a href="https://www.tiktok.com/en/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/tiktok.png" loading="eager" srcSet="images/tiktok-p-500.png 500w, images/tiktok.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                            </div>
                            <p className="max-width-19vw font-white">Beautiful design has the power to captivate audiences</p>
                        </div>
                        <Footer />
                    </div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d0889980784b" className="footer-line"></div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d0889980784c" className="footer-bottom">
                        <p className="font-white">© 2024 iDESIGNER. All Rights Reserved. </p>
                        <div className="footer-flex">
                            <div className="footer-flex-bottom">
                                <p className="font-white">Powered By </p>
                                <a href="https://webflow.com/" target="_blank" className="w-inline-block">
                                    <p className="footer-bottom-text">Webflow</p>
                                </a>
                            </div>
                            <div className="footer-flex-bottom">
                                <p className="font-white">Built By  </p>
                                <a href="https://webflow.com/templates/designers/rick-mummery" target="_blank" className="w-inline-block">
                                    <p className="footer-bottom-text">Rick Mummery</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
