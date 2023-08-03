<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="shortcut icon" href="favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <script defer="defer" src="./js/libs/dynamicAdapt_dev-preserve-order.js"></script>
    <script defer="defer" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script defer="defer" src="./js/main.js"></script>
    <title>Social</title>
</head>

<body class="body">
    <section class="disclamer">
        <div class="disclamer__container">
            <div class="disclamer__block">
                <div class="disclamer__age">
                    <div class="age-value">
                        <p>21+</p>
                    </div>
                    <p>only</p>
                </div>
                <div class="disclamer__terms">
                    <p>Social casino: every game is free!</p> <a class="popup-link" href="#disclamer">See Disclaimer</a>
                    <p>&nbsp;and</p> <a class="popup-link" href="#terms">terms & conditions</a>
                </div>
                <div class="lang" style="display: none;">
                    <p>En</p>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.20711 7.79289L14.2929 1.70711C14.9229 1.07714 14.4767 0 13.5858 0L1.41421 0C0.523309 0 0.0771427 1.07714 0.707108 1.70711L6.79289 7.79289C7.18342 8.18342 7.81658 8.18342 8.20711 7.79289Z"
                            fill="#EDC169" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <!-- <div class="logo-image">          <picture><source srcset="./img/logo.webp" type="image/webp"><img src="./img/logo.png" alt="logo"></picture>        </div>        <p class="logo-text">          FreeSlotCasino        </p>-->
                </div>
                <nav class="header__nav" data-da=".menu,920">
                    <ul>
                        <li><a class="header__nav-link ancor-link" data-goto=".features" href="#">why we</a></li>
                        <li><a class="header__nav-link ancor-link" data-goto=".games" href="#">free games</a></li>
                        <li><a class="header__nav-link popup-link getContactForm" href="#contact">contact us</a></li>
                        <li><a class="header__nav-link popup-link" href="#terms">terms</a></li>
                    </ul>
                </nav>
                <div class="header__buttons" data-da=".menu,920,last"> 
                    <a id="loginBtn" class="button button_border popup-link" href="#login">Sign in</a> 
                    <a id="registrationBtn" class="button button_fill popup-link" href="#registration">Sign up</a> 
                </div>
                <div class="account"> <button class="account__button"> <svg class="acc-icon" width="30" height="30"
                            viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M400 333.333C473.638 333.333 533.333 273.638 533.333 200C533.333 126.362 473.638 66.6666 400 66.6666C326.362 66.6666 266.667 126.362 266.667 200C266.667 273.638 326.362 333.333 400 333.333Z"
                                stroke="#EDC169" stroke-width="50" />
                            <path
                                d="M666.583 600C666.667 594.527 666.667 588.967 666.667 583.333C666.667 500.49 547.277 433.333 400 433.333C252.724 433.333 133.333 500.49 133.333 583.333C133.333 666.177 133.333 733.333 400 733.333C474.367 733.333 527.993 728.11 566.667 718.78"
                                stroke="#EDC169" stroke-width="50" stroke-linecap="round" />
                        </svg> <svg class="close-acc-icon" width="20" height="20" viewBox="0 0 525 525" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.5 15.5C24.8764 6.12648 37.5918 0.860718 50.85 0.860718C64.1082 0.860718 76.8237 6.12648 86.2 15.5L263 192.3L439.8 15.5C449.23 6.39213 461.86 1.35242 474.97 1.46634C488.08 1.58026 500.621 6.83871 509.891 16.1091C519.161 25.3795 524.42 37.9201 524.534 51.03C524.648 64.1398 519.608 76.7699 510.5 86.2L333.7 263L510.5 439.8C519.608 449.23 524.648 461.86 524.534 474.97C524.42 488.08 519.161 500.621 509.891 509.891C500.621 519.161 488.08 524.42 474.97 524.534C461.86 524.648 449.23 519.608 439.8 510.5L263 333.7L86.2 510.5C76.7699 519.608 64.1398 524.648 51.03 524.534C37.9201 524.42 25.3795 519.161 16.1091 509.891C6.83871 500.621 1.58026 488.08 1.46634 474.97C1.35242 461.86 6.39213 449.23 15.5 439.8L192.3 263L15.5 86.2C6.12648 76.8237 0.860718 64.1082 0.860718 50.85C0.860718 37.5918 6.12648 24.8764 15.5 15.5Z"
                                fill="#EDC169" />
                        </svg> </button>
                    <div class="account__info">
                        <div class="account__content" data-da=".menu,576">
                            <div class="account__row">
                                <p class="account__row-title">User:</p>
                                <p id="accUserrName" class="account__row-text"></p>
                            </div>
                            <div class="account__row">
                                <p class="account__row-title">Email:</p>
                                <p id="accUserEmail" class="account__row-text"></p>
                            </div> <a class="button button_border" id="exit" href="#">Log out</a>
                        </div>
                    </div>
                </div>
                <div class="header__burger"> <span></span> </div>
            </div>
        </div>
        <div class="mobile-menu">
            <div class="menu"></div>
        </div>
    </header>
    <main class="main">
        <section class="offer">
            <div class="offer__container">
                <div class="offer__content">
                    <div class="offer__side">
                        <h1 class="offer__title">test your game skills with best online social <span>Casino games</span>
                        </h1>
                        <a data-goto=".games" href="#" class="main-button offer__button ancor-link">Play now</a>
                    </div>
                    <div class="offer__side">
                        <picture>
                            <source srcset="./img/zeus.webp" type="image/webp"><img class="zeus" src="./img/zeus.png"
                                alt="zeus">
                        </picture>
                        <picture>
                            <source srcset="./img/roll.webp" type="image/webp"><img class="roll" src="./img/roll.png"
                                alt="roll">
                        </picture>
                        <picture>
                            <source srcset="./img/merlin.webp" type="image/webp"><img class="merlin"
                                src="./img/merlin.png" alt="merlin">
                        </picture>
                    </div>
                    <picture>
                        <source srcset="./img/Lightning.webp" type="image/webp"><img class="dec-image-1"
                            src="./img/Lightning.png" alt="decor">
                    </picture>
                    <picture>
                        <source srcset="./img/Lightning.webp" type="image/webp"><img class="dec-image-2"
                            src="./img/Lightning.png" alt="decor">
                    </picture>
                    <picture>
                        <source srcset="./img/Lightning.webp" type="image/webp"><img class="dec-image-3"
                            src="./img/Lightning.png" alt="decor">
                    </picture>
                </div>
            </div>
        </section>
        <section class="features">
            <div class="features__container">
                <h2 class="section-title features__title">
                    Why Play Online Slots Here?
                </h2>
                <div class="features__items">
                    <div class="features__item">
                        <picture>
                            <source srcset="./img/features/first.webp" type="image/webp"><img
                                src="./img/features/first.png" alt="free casino" class="features__icon">
                        </picture>
                        <p class="features__text">Full free casino slots</p>
                    </div>
                    <div class="features__item">
                        <picture>
                            <source srcset="./img/features/second.webp" type="image/webp"><img
                                src="./img/features/second.png" alt="free casino" class="features__icon">
                        </picture>
                        <p class="features__text">Latest online slots games</p>
                    </div>
                    <div class="features__item">
                        <picture>
                            <source srcset="./img/features/thirth.webp" type="image/webp"><img
                                src="./img/features/thirth.png" alt="free casino" class="features__icon">
                        </picture>
                        <p class="features__text">Selected by experts</p>
                    </div>
                    <div class="features__item">
                        <picture>
                            <source srcset="./img/features/fourth.webp" type="image/webp"><img
                                src="./img/features/fourth.png" alt="free casino" class="features__icon">
                        </picture>
                        <p class="features__text">BEST QUALITY</p>
                    </div>
                </div>
                <div class="features__block">
                    <div class="features__image">
                        <picture>
                            <source srcset="./img/features/block.webp" type="image/webp"><img
                                class="features__img-content" src="./img/features/block.png"
                                alt="Don't waste money. Just enjoy it!">
                        </picture>
                        <picture>
                            <source srcset="./img/features/FISHKA.webp" type="image/webp"><img class="features-dec"
                                src="./img/features/FISHKA.png" alt="dec">
                        </picture>
                    </div>
                    <div class="features__desc">
                        <h3 class="t-title features__block-title">Don't waste money. Just enjoy it!</h3>
                        <p class="features__par">
                            This is a free social casino that offers a wide selection of games without using real money.
                            We have
                            created an extensive list of the best free online social games to help you choose which ones
                            to
                            play. Here you will find popular and new games, as well as classic options. Whether you are
                            looking
                            for games to pass the time or a new virtual world to get lost in for over 100 hours, there
                            is
                            something for everyone on this site. So click the link to access the best collection of free
                            online
                            social games.
                        </p>
                        <div class="features__marks">
                            <picture>
                                <source srcset="./img/features/d.webp" type="image/webp"><img src="./img/features/d.png"
                                    alt="diamonds">
                            </picture>
                            <picture>
                                <source srcset="./img/features/t.webp" type="image/webp"><img src="./img/features/t.png"
                                    alt="diamonds">
                            </picture>
                            <picture>
                                <source srcset="./img/features/h.webp" type="image/webp"><img src="./img/features/h.png"
                                    alt="diamonds">
                            </picture>
                            <picture>
                                <source srcset="./img/features/c.webp" type="image/webp"><img src="./img/features/c.png"
                                    alt="diamonds">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="games">
            <div class="games__container">
                <h2 class="section-title games__title">Best Online Social Casino Games</h2>
                <div class="games__filters">
                    <!-- filters container -->
                </div>
                <div class="games__grid">
                    <!-- Game template -->
                    <!-- <a href="#" class="games__game game">
                <div class="game__mark">
                    <p>new</p>
                </div>
                <div class="game__image">
                    <img src="./img/games/1_SaddleUp.webp" alt="SaddleUp">
                </div>
                <div class="game__content-wrapper">
                    <div class="game__heading">
                        <h3 class="game__title">Saddle Up</h3>
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.32854e-06 12.5L25 12.5M25 12.5L13.5802 1M25 12.5L13.5802 24" stroke="#EDC169"
                                stroke-width="2" />
                        </svg>
                    </div>
                    <p class="game__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat velit ac nisi euismod
                        ornare.
                    </p>
                </div>
            </a> -->
                </div>
                <button class="main-button games__show-more">Show more</button>
            </div>
        </section>
        <section class="brands">
            <div class="brands__container">
                <h2 class="section-title brands__title">
                    Our brands
                </h2>

                <!-- Slider main container -->
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="brands__item">
                                <picture>
                                    <source srcset="./img/brands/1.webp" type="image/webp"><img src="./img/brands/1.png"
                                        alt="">
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brands__item">
                                <picture>
                                    <source srcset="./img/brands/2.webp" type="image/webp"><img src="./img/brands/2.png"
                                        alt="">
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brands__item">
                                <picture>
                                    <source srcset="./img/brands/3.webp" type="image/webp"><img src="./img/brands/3.png"
                                        alt="">
                                </picture>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brands__item">
                                <picture>
                                    <source srcset="./img/brands/4.webp" type="image/webp"><img src="./img/brands/4.png"
                                        alt="">
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </section>
        <section class="subscribe">
            <div class="subscribe__container">
                <h2 class="section-title subscribe__title">Join our vip club!</h2>
                <div class="subscribe__wrapper">
                    <div class="subscribe__desc">
                        <h3 class="t-title features__block-title">Subscribe to our newsletter</h3>
                        <p class="features__par">
                            Stay updated with the latest news and exclusive offers from our free social casino.
                            Subscribe now to
                            never miss out on exciting events, new game releases, and special promotions. Join our
                            community
                            today and be the first to know all the happenings in our world of fun and entertainment.
                            Sign up for
                            our newsletter and embark on a thrilling journey with us!
                        </p>
                        <div class="subscribe__form">
                            
                        </div>
                    </div>
                    <div class="features__image subscribe__image">
                        <picture>
                            <source srcset="./img/sub-zeus.webp" type="image/webp"><img class="subscribe__img"
                                src="./img/sub-zeus.png" alt="Don't waste money. Just enjoy it!">
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__wrapper">
                <div class="footer__side">
                    <p class="footer__disclamer-title">DISCLAIMER</p>
                    <p class="footer__disclamer-text"> <span class="site-title" style="text-transform: uppercase"></span> Casino is intended for use by
                        persons 21 years of age
                        or older and is for entertainment purposes only. <span class="site-title" style="text-transform: uppercase"></span> Casino does not contain any in-app
                        purchase options and no monetary value is exchanged in <span class="site-title" style="text-transform: uppercase"></span> Casino.
                        Success in <span class="site-title" style="text-transform: uppercase"></span>
                        Casino games does not mean success in gambling and playing for real money. <span
                            class="site-title"></span> Casino
                        discourages gambling and real money gambling is not possible on any of the <span
                            class="site-title"></span> Casino
                        games. <a class="popup-link" href="#terms">Terms of Use</a>. </p>
                </div>
                <div class="footer__side">
                    <ul class="footer__menu">
                        <li><a class="popup-link getContactForm" href="#contact">Contact us</a></li>
                        <li><a class="popup-link" href="#terms">Terms & conditions</a></li>
                        <li><a class="popup-link" href="#pr">Privacy policy</a></li>
                    </ul>
                    <div class="disclamer__age">
                        <div class="age-value">
                            <p>21+</p>
                        </div>
                        <p>only</p>
                    </div>
                </div>
            </div>
            <p class="footer__rights">All right reserved © 2023</p>
        </div>
    </footer>
    <div class="game-popup">
        <div class="game-popup__body">
            <div class="game-popup__content">
                <div class="popup__close">
                    <div class="game-popup__close"></div>
                </div>

                <p class="game-popup__title"></p>
                <p class="game-popup__desc" data-da=".accorddion-instr,768">

                </p>
                <div class="accordion">
                    <div class="accordion-header">
                        <p>Instruction</p>
                        <svg width="13" height="53" viewBox="0 0 53 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.5" y="0.538055" width="65" height="8" transform="rotate(45 6.5 0.538055)"
                                fill="#EDC169" />
                            <rect x="0.843262" y="86.8051" width="65" height="8"
                                transform="rotate(-45 0.843262 86.8051)" fill="#EDC169" />
                        </svg>
                    </div>
                    <div class="accorddion-instr"></div>
                </div>
                <div class="game-popup__frame">
                    <div class="iframe">

                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="registration" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Registration</p>
                <div class="reg-form"></div>
            </div>
        </div>
    </div>

    <div id="login" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Log in</p>
                <div class="login-form">

                </div>
            </div>
        </div>
    </div>

    <div id="cookies" class="popup popup_cookie">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">We use cookie</p>
                <p class="popup__cookies-text">
                    We use our own and third-party cookies to personalize content and to analyze web traffic.
                </p>
                <a href="#pr" class="popup__cookies-link popup-link">Read more about cookies.</a>
                <div class="popup__buttons">
                    <a id="yesCookies" class="button button_fill" href="#">Accept cookies</a>
                    <a id="noCookies" class="button button_border" href="#">Reject</a>
                </div>
            </div>
        </div>
    </div>

    <div id="contact" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Contact us</p>
                <div class="contact__form">

                </div>
            </div>
        </div>
    </div>

    <div id="terms" class="popup popup_terms">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Terms & conditions</p>
                <div class="popup__terms">
                    <ul class="popup__terms-list">
                        <li>
                            <p>- We can change these conditions at any time. We suggest you check here from time to time
                                for any updates. </p>
                        </li>
                        <li>
                            <p>- <span class="site-title" style="text-transform: uppercase"></span> is not a real casino operator or an internet gambling
                                provider in any form. It is an Internet portal for offering social casino games, which
                                are free of charge, providing information on the industry. </p>
                        </li>
                        <li>
                            <p>- We allow participating only people above the age of 18 years old - underage visitors
                                are restricted. </p>
                        </li>
                        <li>
                            <p>- We do not represent any courtship of internet gambling clients. We do not have a
                                gambling website and do not express any warranty or guarantee. </p>
                        </li>
                        <li>
                            <p>- We are not responsible for any errors or omissions contained on the website. We reserve
                                the right to make changes to the website at any time without delay. In addition, <span
                                    class="site-title"></span> does not guarantee the accuracy, validity, reliability or
                                completeness of any information, text, graphics, external links or other items contained
                                on this website.</p>
                        </li>
                        <li>
                            <p>- Therefore, all information contained on this website and designed or listed is provided
                                without any warranty. Always check the rules and restrictions of the websites you visit
                                before the process. </p>
                        </li>
                        <li>
                            <p>- We recommend that you check the applicable laws in your area before playing in an
                                online casino. Internet social casino must be legal in your city, country of residence.
                                It is your responsibility to know if you are following your local laws. All prepared
                                content is copyrighted and any use without written consent is a violation of applicable
                                copyright or trademark laws. </p>
                        </li>
                        <li>
                            <p>- Please remember that online games with cash prizes may develop addiction problems
                                which, from simple fun, turn into an obsession capable of conditioning people's working,
                                emotional and social life. If you noticed that gambling had become a problem for you or
                                anyone you know, ask for help. </p>
                        </li>
                    </ul>
                    <p class="popup__terms-subtitle">Intellectual property</p>
                    <p class="popup__terms-par">
                        All content on our website is owned by Casino Frodo. This includes any information or other
                        materials and services you find on the website or other writing, graphics or any other outlines.
                        Any copying, distribution, storage or transfer or any commercial use of our content is
                        prohibited without our prior written permission. You may not sell, bid, transfer or exchange
                        your subscriptions or any other publications. You may not republish, post, transmit or
                        distribute content on Internet posts and bulletin boards, blogs, chat rooms, intranets or
                        anywhere else without our permission. In addition, you agree not to create abstracts or to make
                        our content available for use on another website or service.
                    </p>
                    <p class="popup__terms-subtitle">Disclaimer of warranties and liabilities</p>
                    <p class="popup__terms-par">
                        This is a warranty statement for the use of <span class="site-title" style="text-transform: uppercase"></span> and its services
                        relating to the warranty and Terms & Conditions, marketing, purpose and against violation of
                        terms. The website, services, and all reviews of other websites are presented as they are, and
                        users use them at their own risk.
                    </p>
                    <p class="popup__terms-par">
                        We provide a wide selection of information, comments and entertainment. We cannot and do not
                        guarantee the completeness or accuracy of the content for a particular purpose. And even though
                        we have the most hard-working, most talented technicians in the business, we do not promise that
                        our content or any service will be delivered to you smoothly, on time, securely, or error-free.
                        In fact, we make no promises or guarantees other than to do our best to provide interesting and
                        useful information, education and more. Otherwise, we reserve the right to be wrong, even though
                        we work hard to have always right. Neither <span class="site-title" style="text-transform: uppercase"></span> nor any of our
                        partners gives no warranty of the quality of products, services, information or other materials
                        you purchase or get for using our services will meet your expectations and any errors will be
                        corrected immediately.
                    </p>
                    <p class="popup__terms-par">
                        You will be responsible for any damage that may occur on your computer or device due to use of
                        the website. We also do not guarantee that our website will be available at all moments. We also
                        do not guarantee that the content on our website is perfect and the only truth or completely
                        confidential and accurate.
                    </p>
                    <p class="popup__terms-par">
                        Furthermore, we do not guarantee that we will eliminate all errors or defects on our website.
                        Likewise, we also do not guarantee that the reviews and ratings of third parties on our website
                        are completely accurate and factual. Our website ratings come from our personal experience on
                        third-party websites, or from data from other clients or websites we find. We do not guarantee
                        that you will be completely satisfied with all the websites we have recommended, or that the
                        experience on these websites will be as you might have expected. Responsibility
                    </p>
                    <p class="popup__terms-par">
                        By using our website, you agree that we are not responsible for your experience and possible
                        losses on this or other websites. We are not responsible for your losses (maybe direct or
                        indirect), damages, which may occur due to your behavior or actions. Our responsibility for your
                        actions will not change in any case, and we will not be obliged to be responsible for your
                        experience on other pages. We will not be responsible for your losses in order to be informed
                        about possible losses. In addition, we remind you that by using our website, you agree that
                        despite any damages or losses on other websites that you have accessed through the links on our
                        website, you will not claim compensation from our website for your losses. These costs include
                        miscellaneous costs of judgments and lawyers, as well as compensation for losses on other
                        parties.
                        Dispute resolution
                    </p>
                    <p class="popup__terms-par">
                        If you have any reason to dispute with us, then we ask you to first fill out a contact form,
                        through which we can resolve the dispute informally. If we are unable to resolve the dispute
                        informally, then it will be resolved through these Terms & Conditions, unless otherwise provided
                        by law. All actions must be by the person as an individual entity and not as the plaintiff or as
                        a representative of the class, and may not be by the representative of the person representing a
                        certain class.
                    </p>
                    <p class="popup__terms-subtitle">Changes on the page</p>
                    <p class="popup__terms-par">
                        We reserve the right to make various changes that occur on our website. These changes may be
                        improvements, corrections, additions, changes in the Terms & Conditions, in the content, in the
                        services and may occur at any time without prior notice. In addition, you agree to and allow
                        changes in the content, services and Terms & Conditions, and you know that we are not
                        responsible for any damages that may occur to you during the changes.
                    </p>
                    <p class="popup__terms-subtitle">Changes in conditions</p>
                    <p class="popup__terms-par">
                        Terms & Conditions (this document) dictates the use of the website. We reserve the right to
                        change these Terms & Conditions at any time, so we encourage you to visit this website
                        frequently. Terms are subject to change as soon as a new or revised Terms and Conditions
                        document is posted on the website or with your permission to make changes, as required by law.
                    </p>
                    <p class="popup__terms-subtitle">Other</p>
                    <p class="popup__terms-par">
                        If any section of this policy is illegal or incorrect, then we will make sure that this section
                        is removed from the policy immediately and that rules that are incorrect or illegal do not
                        exist. Other rules or other sections of these rules will remain valid, regardless of whether any
                        of the other sections will be incorrect.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="disclamer" class="popup popup_disclamer">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Disclaimer</p>
                <p class="popup__terms-par">
                    Welcome to <span class="site-title" style="text-transform: uppercase"></span> offering social casino games. It means you don't need to
                    pay money, nor can you win any monetary prizes. Due to this activity's essence, only players older
                    than 21 y.o. are allowed to participate in this casino.
                </p>
                <p class="popup__terms-par">
                    We inform you that any kind of gaming may become addictive. With that said, we ask you to play
                    responsibly and ask for help if you notice that you're getting addicted.
                </p>
                <p class="popup__terms-par">
                    Also, we want to warn you that succeeding in a social casino game doesn't give you the same chance
                    in playing in a real-money casino.
                    As an independent and private online social casino portal, <span class="site-title" style="text-transform: uppercase"></span> promotes
                    third-party sites on an affiliate basis. Still, it has no ties to these third-party sites regarding
                    ownership, shares, or partnerships. We can place all third-party sites only on an "as is" basis
                    because we have no control over the content, offerings, or intent.
                </p>
                <p class="popup__terms-par">
                    Be aware that if you use this website, any information contained in this document, or any
                    third-party links contained in this document, you do so solely at your own risk. You must exercise
                    caution and read those third-party pages' <a class="popup-link" href="#terms">Terms and
                        Conditions</a> and <a class="popup-link" href="#pr">Privacy Policy</a>.
                </p>
            </div>
        </div>
    </div>

    <div id="pr" class="popup popup_privacy">
        <div class="popup__body">
            <div class="popup__content">
                <div class="popup__close">
                    <div class="popup__close-btn"></div>
                </div>
                <p class="popup__title">Privacy Policy</p>
                <p class="popup__terms-subtitle">Who we are</p>
                <p class="popup__terms-par">
                    Our website address is: <span class="addres"></span>
                </p>
                <p class="popup__terms-subtitle">Cookies</p>
                <p class="popup__terms-par">
                    This Cookie Policy explains what cookies are and how we use them. You should read this policy so
                    that you understand what kind of cookies we use or what information we collect using cookies and how
                    that information is used.
                </p>
                <p class="popup__terms-par">
                    Cookies typically do not contain information that personally identifies a user, but personal
                    information we store about you may be linked to information stored in and obtained from cookies. For
                    more information about how we use, store and protect your personal information, please see our
                    Privacy Policy.
                </p>
                <p class="popup__terms-par">
                    We do not store sensitive personal data such as postal addresses, account passwords, etc. in the
                    cookies we use.
                </p>
                <p class="popup__terms-par">
                    <b>Interpretation</b>
                    Words whose initial letters are capitalized have the meanings defined in the following conditions.
                    The following definitions have the same meaning whether they are singular or plural.
                </p>
                <p class="popup__terms-par">
                    <b>Definitions</b>
                    For the purposes of this Cookie Policy:
                </p>
                <ul class="popup__terms-list">
                    <li>
                        <p>"Company" (referred to in this Cookie Policy as either "the Company," "we," "us," or "our")
                            refers to <span
                            class="site-title"></span></p>
                    </li>
                    <li>
                        <p>"Cookies" means small files placed on your computer, mobile device or other device by a
                            website that contain, among other things, details about your browsing history on that
                            website.</p>
                    </li>
                    <li>
                        <p>"Website" refers to <span class="site-title" style="text-transform: uppercase"></span> Casino, accessible through <span class="site-title" style="text-transform: uppercase"></span></p>
                    </li>
                    <li>
                        <p>"You" means the person accessing or using the Site, or a company or entity on whose behalf
                            that person accesses or uses the Site, whichever is applicable.
                            The use of cookies
                            Type of cookies we use</p>
                        <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your PC or
                            mobile device when you go offline, while session cookies are deleted when you close your web
                            browser.</p>
                        <p>We use both session and persistent cookies for the purposes listed below:</p>
                    </li>
                    <li>
                        <p>Necessary / Essential Cookies.</p>
                        <p>Type: Session cookies</p>
                        <p>Managed by: Us</p>
                        <p>Purpose: These cookies are essential to provide you with the services available through the
                            website and to allow you to use some of its features. They help authenticate users and
                            prevent fraudulent use of user accounts. Without these cookies, the services you request
                            cannot be provided and we only use these cookies to provide you with these services.</p>
                    </li>
                    <li>
                        <p>Cookie Policy / Cookies to accept notices</p>
                        <p>Type: Persistent cookies</p>
                        <p>Managed by: Us</p>
                        <p>Purpose: These cookies identify whether users have consented to the use of cookies on the
                            website.</p>
                    </li>
                    <li>
                        <p>Functionality cookies</p>
                        <p>Type: Persistent cookies</p>
                        <p>Managed by: Us</p>
                        <p>Purpose: These cookies allow us to remember choices you make when you use the website, such
                            as saving your login information or language preferences. The purpose of these cookies is to
                            provide you with a more personalized experience and to avoid having to re-enter your
                            preferences each time you use the website.</p>
                    </li>
                    <li>
                        <p>Functionality cookies</p>
                        <p>Type: Persistent cookies</p>
                        <p>Managed by: Us</p>
                        <p>Purpose: These cookies allow us to remember choices you make when you use the website, such
                            as saving your login information or language preferences. The purpose of these cookies is to
                            provide you with a more personalized experience and to avoid having to re-enter your
                            preferences each time you use the website.</p>
                    </li>
                    <li>
                        <p>Tracking- und Performance-Cookies</p>
                        <p>Type: Persistent cookies</p>
                        <p>Managed by: Third-party providers</p>
                        <p>Purpose: These cookies are used to track information about traffic on the website and how
                            users use the website. The information collected through these cookies can directly or
                            indirectly identify you as an individual visitor. This is because the information collected
                            is usually linked to a pseudonymous identifier associated with the device you use to access
                            the Website. We may also use these cookies to test new ads, pages, features, or new
                            functionality of the website to see how our users respond.</p>
                    </li>
                    <li>
                        <p><b>Your choices regarding cookies</b></p>
                        <p>Wenn Sie die Verwendung von Cookies auf der Website lieber vermeiden möchten, müssen Sie
                            zuerst die Verwendung von Cookies in Ihrem Browser deaktivieren und dann die in Ihrem
                            Browser gespeicherten Cookies löschen, die mit dieser Website verknüpft sind. Sie können
                            diese Option nutzen, um die Verwendung von Cookies jederzeit zu verhindern.</p>
                        <p>If you do not accept our cookies, you may experience some inconvenience while using the
                            website and some features may not function properly.</p>
                        <p>If you wish to delete cookies or instruct your web browser to delete or refuse cookies,
                            please visit your web browser's help pages.Managed by: Third-party providersIf you wish to
                            delete cookies or instruct your web browser to delete or refuse cookies, please visit your
                            web browser's help pages.</p>
                        <p>For the Chrome web browser, please visit this page from Google:
                            Https://Support.Google.Com/Accounts/Answer/32050Managed by: Third-party providersFor the
                            Chrome web browser, please visit this page from Google:
                            Https://Support.Google.Com/Accounts/Answer/32050</p>
                        <p>For Internet Explorer web browser, please visit this page from Microsoft:
                            http://Support.Microsoft.Com/Kb/278835</p>
                        <p>For the Firefox web browser, please visit this page from Mozilla:
                            Https://Support.Mozilla.Org/En-Us/Kb/Delete-Cookies-Remove-Info-Websites-Stored</p>
                        <p>For the Safari web browser, please visit this page from Apple:
                            Https://Support.Apple.Com/Guide/Safari/Manage-Cookies-And-Website-Data-Sfri11471/Mac</p>
                        <p>For other web browsers, please visit the official web pages of your web browser.</p>
                    </li>
                </ul>
                <p class="popup__terms-subtitle">Embedded content from other websites</p>
                <p class="popup__terms-par">
                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded
                    content from other websites behaves in the exact same way as if the visitor has visited the other
                    website. These websites may collect data about you, use cookies, embed additional third-party
                    tracking, and monitor your interaction with that embedded content, including tracking your
                    interaction with the embedded content if you have an account and are logged in to that website
                </p>
                <p class="popup__terms-subtitle">Who we share your data with</p>
                <p class="popup__terms-par">
                    If you request a password reset, your IP address will be included in the reset email.
                </p>
                <p class="popup__terms-subtitle">How long we retain your data</p>
                <p class="popup__terms-par">
                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can
                    recognize and approve any follow-up comments automatically instead of holding them in a moderation
                    queue. For users that register on our website (if any), we also store the personal information they
                    provide in their user profile. All users can see, edit, or delete their personal information at any
                    time (except they cannot change their username). Website administrators can also see and edit that
                    information.
                </p>
                <p class="popup__terms-subtitle">What rights you have over your data</p>
                <p class="popup__terms-par">
                    If you have an account on this site, or have left comments, you can request to receive an exported
                    file of the personal data we hold about you, including any data you have provided to us. You can
                    also request that we erase any personal data we hold about you. This does not include any data we
                    are obliged to keep for administrative, legal, or security purposes.
                </p>
                <p class="popup__terms-subtitle">Where we send your data</p>
                <p class="popup__terms-par">
                    Visitor comments may be checked through an automated spam detection service.
                </p>
            </div>
        </div>
    </div>
    <div id="age" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">Please, confirm your age</p>
                <p class="popup__subtitle">Are you already 21 years old or over?</p>
                <div class="popup__buttons">
                    <a id="yes21" class="button button_fill" href="#">Yes</a>
                    <a id="no21" class="button button_border" href="#">No</a>
                </div>
            </div>
        </div>
    </div>

    <div id="stop" class="popup popup_stop">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">Access denied</p>
                <p class="popup__terms-par">You are under the age of 21. Please leave the site.</p>
            </div>
        </div>
    </div>

    <div id="suc-reg" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">Successful registration</p>
                <svg style="margin: 0 auto; display: block;" width="100" height="100" viewBox="0 0 800 800" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1575_1385)">
                        <path
                            d="M400 784.375C612.284 784.375 784.375 612.284 784.375 400C784.375 187.716 612.284 15.625 400 15.625C187.716 15.625 15.625 187.716 15.625 400C15.625 612.284 187.716 784.375 400 784.375Z"
                            stroke="#FDD65B" stroke-width="31.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M180.531 419.953L313.547 552.969L619.469 247.031" stroke="#FDD65B" stroke-width="31.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1575_1385">
                            <rect width="800" height="800" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </div>

    <div id="suc-contact" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">Successfully sent</p>
                <p class="popup__terms-subtitle" style="text-align: center;">We'll get back to you as soon as possible
                </p>
                <svg style="margin: 0 auto; display: block;" width="100" height="100" viewBox="0 0 800 800" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1575_1385)">
                        <path
                            d="M400 784.375C612.284 784.375 784.375 612.284 784.375 400C784.375 187.716 612.284 15.625 400 15.625C187.716 15.625 15.625 187.716 15.625 400C15.625 612.284 187.716 784.375 400 784.375Z"
                            stroke="#FDD65B" stroke-width="31.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M180.531 419.953L313.547 552.969L619.469 247.031" stroke="#FDD65B" stroke-width="31.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1575_1385">
                            <rect width="800" height="800" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </div>

    <div id="suc-subscribe" class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <p class="popup__title">Thank you</p>
                <p class="popup__terms-subtitle" style="text-align: center;">You have successfully subscribed</p>
                <svg style="margin: 0 auto; display: block;" width="100" height="100" viewBox="0 0 800 800" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1575_1385)">
                        <path
                            d="M400 784.375C612.284 784.375 784.375 612.284 784.375 400C784.375 187.716 612.284 15.625 400 15.625C187.716 15.625 15.625 187.716 15.625 400C15.625 612.284 187.716 784.375 400 784.375Z"
                            stroke="#FDD65B" stroke-width="31.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M180.531 419.953L313.547 552.969L619.469 247.031" stroke="#FDD65B" stroke-width="31.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1575_1385">
                            <rect width="800" height="800" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </div>

</body>
<script src="js/reg.js"></script>
<script src="js/auth.js"></script>

</html>