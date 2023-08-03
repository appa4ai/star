(function () {
    var autoLogo = true;// Измени значение на false если хочешь поставить свое лого.
    var customText = 'Best <br> High Win Casino'; // Установи текст, который будет рядом с лого
    // раздели его тегом <br> там, где хочешь перенос на новую строку
    // Сохрани картинку с именем my-logo.png в папку img

    var domainName = window.location.hostname;
    var polityAddr = document.querySelector('.site-address');
    var placeLogo = document.querySelector('.header__logo');
    var placeLogoGame = document.querySelector('.header__logo_game');
    var siteTitle = domainName.substring(0, domainName.indexOf('.'));

    var siteAddress = document.querySelectorAll('.addres');
    var siteTitlePlaces = document.querySelectorAll('.site-title');


    var autoLogoHTML = `
    <div class="logo-image">
        <img src="./img/logo.png" alt="logo">
    </div>
    <p style="text-transform: uppercase;" class="logo-text">${siteTitle}</p>`;

    var customLogoHTML = `
    <div class="logo-image">
        <img src="./img/my-logo.png" alt="logo">
    </div>
    <p class="logo-text">${customText}</p>`;


    if (autoLogo) {
        placeLogo.innerHTML = autoLogoHTML;
        siteTitlePlaces.forEach((place) => {
            place.innerHTML = siteTitle;
        })
        document.querySelector('title').innerHTML = siteTitle;

    } else {
        placeLogo.innerHTML = customLogoHTML;
        siteTitlePlaces.forEach((place) => {
            place.innerHTML = customText.replace(/<br>/g, '');
            document.querySelector('title').innerHTML = customText.replace(/<br>/g, '');
        })
    }

})();

const da = new DynamicAdapt("max");
da.init();

(function () {
    var loginButtonsBlock = document.querySelector('.header__buttons');
    var accountBlock = document.querySelector('.account');
    var accountContent = document.querySelector('.account__content');

    var userName = document.querySelector('#accUserrName');
    var userEmail = document.querySelector('#accUserEmail');

    window.addEventListener('load', function () {
        var userData = localStorage.getItem("user");
        if (userData) {
            var user = JSON.parse(userData);
            if (user.login) {
                loginButtonsBlock.classList.add('hidden');
                accountBlock.classList.add('visible');
                var user = JSON.parse(userData);
                userName.innerHTML = user.username;
                userEmail.innerHTML = user.email;
                accountContent.classList.add('visible-b');
                accountContent.classList.remove('hidden');
            } else {
                loginButtonsBlock.classList.remove('hidden');
                accountBlock.classList.remove('visible');
                loginButtonsBlock.classList.remove('visible');
                accountBlock.classList.remove('hidden');
                accountContent.classList.remove('visible-b');
                accountContent.classList.add('hidden');
            }
        } else {
            accountContent.classList.remove('visible-b');
            accountContent.classList.add('hidden');
        };

        const subFormHTML = `
        <form id="subscribe" action="./subscr.php">
            <input class="subscribe__input" type="email" placeholder="Your email" required>
            <button class="main-button subscribe__submit" type="submit">Subscribe</button>
        </form>
        `;
        const subFormPlace = document.querySelector('.subscribe__form');

        subFormPlace.innerHTML = subFormHTML;

        var success = document.querySelector('#suc-subscribe');
        var form = document.querySelector('#subscribe');
    
    
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.querySelector('input').value = '';
            success.classList.add('open');
            setTimeout(function () {
                success.classList.remove('open');
            }, 2000);
        });
    });
})();

// Burger-menu
(function () {
    const burgerButton = document.querySelector('.header__burger');
    const menu = document.querySelector('.mobile-menu');


    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('header__burger_active');
        menu.classList.toggle('mobile-menu_active');
    })

})();

// Games Render
(function () {
    var games = [
        {
            "id": "1",
            "genre": ["all games", "western"],
            "img": "./img/games/1_SaddleUp.webp",
            "title": "Saddle Up",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=goldencolts&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Get your revolvers and lasso ready as Pragmatic Play takes players back in the time of the real Wild West",
            "desc": "Brilliant Colts incorporates a wild image (the Bull) and a reward dissipate image (the Golden Colts’ crate). The wild image substitutes for some other reel images with the exception of the reward disperse to assist with involving winning mixes. Some other brief wild image likewise fill in for some other reel images aside from the reward dissipate image.",
            "link": "#"
        },
        {
            "id": "2",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/2_MakeContact.webp",
            "title": "Make Contact",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=contact&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "The game is designed to look like an ancient temple, with stairs leading up to the reels and fiery skulls on either side of the reels",
            "desc": "Wins are achieved by getting 5 or more matching symbols in a connected cluster where they touch each other horizontally and/or vertically. Each symbol has a value and the total win of the round is calculated by multiplying the number of alike winning symbols by the value of that symbol. During a game round, winning clusters will not be removed. Instead, non-winning symbols will be removed, then winning symbols will cascade down and get locked in place, then new symbols will cascade in to fill the grid. These new symbols can connect to the existing winning symbols to increase the size of the clusters or create entirely new clusters. The game continues to cascade until no new winning combinations are created.",
            "link": "#"
        },
        {
            "id": "3",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/3_StrikeGold.webp",
            "title": "Strike Gold",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=wildfalls&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "In Strike Gold you don't even have to dig-up your own nuggets, you just have to spin the 3-reels of this classic slot",
            "desc": "It is 1896 and the Klondike Gold Rush is simply starting. Go to the Yukon River to get yourself a slice of the pie! The game has an incredible new element where you can see the Wilds as they stream along the waterway and drop onto your reels! Watch in expectation as the Wild Chests float delicately towards the reels and afterward drop, assisting you with making additional triumphant mixes and adding an additional an aspect to your ongoing interaction. ",
            "link": "#"
        },
        {
            "id": "4",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/4_DinoMite.webp",
            "title": "Dino Mite",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=ragingrex&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "If you can make it through the thick jungle that is swarming with dangerous bugs and terrifying animals, you will come across a shower of rocks, each of which is highly valuable.",
            "desc": "The dinosaurs meander indiscriminately in this 6-reel video space, assisting you with matching 3, 4, 5 or 6 images across a gigantic 4,096 payways to get a standard success. Ruler of the dinosaurs, the fearsome T-Rex, addresses the standard Wild for this completely exhilarating new game, assisting you with making much more winning payway blends, while the considerable Stacked Wild, the Raging Rex, will arrive on reels 2, 3, 4, 5 or 6 to enact the enormous Rampage mode! In Rampage mode the Raging Rex will step across to the principal reel, granting a free re-turn for each reel it leaves afterward (in the event that it begins on reel 2 it will grant 1 re-turn, reel 3 will grant 2 re-turns and so forth). ",
            "link": "#"
        },
        {
            "id": "5",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/5_ReachForTheJoker.webp",
            "title": "Reach For The Joker",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=starjoker&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Star Joker includes an intuitive instructional exercise that can be initiated to show you how to play with no genuine cash included",
            "desc": "What better opportunity to figure out how to play than on a generally themed opening? Star Joker includes an intuitive instructional exercise that can be initiated to show you how to play with no genuine cash included. Figure out how paylines work, what the Wild image does, how to change your wagers and more with this convenient amateur’s aide. The sparkling Star is the Wild image that will assist you with making winning mixes; while the Joker is the Scatter image that releases Free Spin mode! When free twists are actuated the Joker bends over as a Wild. ",
            "link": "#"
        },
        {
            "id": "6",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/6_RoyalFun.webp",
            "title": "Royal Fun",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=battleroyal&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Star Joker includes an intuitive instructional exercise that can be initiated to show you how to play with no genuine cash included",
            "desc": "Set yourself up for grand franticness! It’s King Henry VIII versus his regal spouses in the fresh out of the plastic new Play’n GO opening Battle Royal! Go on a funny outing to the period of one of the most notorious rulers in history as you’re moved to the hour of the Tudors and King Henry and his six spouses. Each of the six sovereigns are on a mission; either catch his heart or lose their head. Match 3, 4 or 5 images across twenty paylines to get yourself a success. ",
            "link": "#"
        },
        {
            "id": "7",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/7_IntergalacticAdventure.webp",
            "title": "Intergalactic Adventure",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=irongirl&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "When you see a slot machine developed by Ainsworth, you know you’re in for a treat.",
            "desc": "Gather wins by matching 3,4 or 5 images across the triumphant paylines, and catch miscreants and Wilds on your Reels, setting off re-turns and the chance of increasing your successes. On each twist you can ‘catch’ a bad guy alongside any Wilds that spring up, this triggers your re-turn. Each re-turn that outcomes in one more matching Villain or Wild being added to your reels, sets off much more re-turns! Re-turns go on until no more Villains or Wilds are added. ",
            "link": "#"
        },
        {
            "id": "8",
            "genre": ["all games", "music"],
            "img": "./img/games/8_BananaRockAndRoll.webp",
            "title": "Banana Rock And Roll",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=bananarock&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Join the band of six monkeys on Play’n GO’s Banana Rock slot and start headbanging with the hilarious artists on five reels and 10 paylines.",
            "desc": "The band is back together and now is the ideal time to shake! The Banana Rock band are prepared to play you to a fortune in this spic and span opening. The Banana Rock band have changed for one final show and are hoping to get it started in this fresh out of the box new 5-reel opening. Match 3, 4 or 5 images across ten winning paylines to gather up a success. The band’s lead artist, Simeon Chimpsky, is the Rock ‘n’ Rollin’ Wild, and assuming at least two show up in a solitary twist he’ll move across the reels and leave a path of Vinyl Wilds afterward to make winning blends and perhaps a generally Wild line! ",
            "link": "#"
        },
        {
            "id": "9",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/9_TurnUpTheHeat.webp",
            "title": "Turn Up The Heat",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=dragonmaiden&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Enjoy the sound of the waves as you play The Heat slot for free!",
            "desc": "The legend of the Dragon Maiden is alive! Geneth has the influence to control the Dragon and release fire and fortune in this strong new space. Match 3,4 or 5 images across 243 compensation ways of gathering a success in this 5×3 reel space. The Dragon Maiden is available to help you by arbitrarily transforming into a wild, with the chance of growing up to 3 images high! In the event that you can trap 2 Dragon disperses on any reels, those reels will freeze, and you’ll get re-turns until no more images show up. In the event that your re-turns leave you with at least 3 Dragons, you’ll enter Free Spin mode and the Dragon it will set off reel developments (each image in turn) until it gets to a transcending 6 images high. ",
            "link": "#"
        },
        {
            "id": "10",
            "genre": ["all games", "western"],
            "img": "./img/games/10_ShootForTheTop.webp",
            "title": "Shoot For The Top",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=gunslingerreloaded&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Get ready because the free slots game temperature is rising! ",
            "desc": "Six shooters good to go, now is the right time to tidy up the wild west! The Gunslinger is coming to town in this fresh out of the box new space from Play’n GO. Now is the right time to chase the Gunslinger’s most savage adversaries and deal with them in… Gunslinger: Reloaded! Match 2, 3, 4 or 5 images in succession across the triumphant paylines for a success in this 5×3 reel opening. The Gunslinger himself is the Wild and will sub for any standard images to assist you with making winning mixes, while his dependable horse is your Scatter. ",
            "link": "#"
        },
        {
            "id": "11",
            "genre": ["all games", "arcade"],
            "img": "./img/games/11_GetSupercharged.webp",
            "title": "Get Supercharged",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=mahjong88&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Get Supercharged is an online five-reel slot game from makers Play’n Go. ",
            "desc": "Prepare for the VERY FIRST 8×8 matrix space from Play’n GO, Mahjong 88! Partake in all the fun of the exemplary tile game in this imaginative new title! As well similar to our most memorable 8×8 lattice space title, the game has an intriguing new turn; images don’t flow onto the frameworks as ordinary yet rather are uncovered to you at the same time from under the network! Utilizing groups rather than paylines, in the event that you match at least 4 images, associated upward and on a level plane, you can get yourself a standard success. ",
            "link": "#"
        },
        {
            "id": "12",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/12_ArmTheBattalion.webp",
            "title": "Arm The Battalion",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=sabaton&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Enjoy classic slots and old school casino games absolutely for free. ",
            "desc": "Get ready to shake the reels in the latest Play’n GO space, Sabaton! Made in relationship with the staggering Swedish power metal band Sabaton and featuring their hit music the game is a searing excitement of energy! With compelling artwork considering, and invigorated by, the band and their original sound; match 3, 4 or 5 pictures across the 10 paylines to grab yourself a triumph. The game’s Wild, lead craftsman Joakim Brodén can fill in for any picture, except for the Scatter, to help with making astonishing winning mixes. ",
            "link": "#"
        },
        {
            "id": "13",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/13_PlanetsOnlyHope.webp",
            "title": "Planet’s Only Hope",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=sparkyandshortz&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": " Get your binoculars ready, as you are going to go on a tour in this brand-new game, with it looking to deliver all the sights",
            "desc": "“Alpha Labori is near the very edge of elimination. Its just expectation is a support droid, Sparky, and his sidekick, Shortz. Shortz is a daily existence saving robot, however he’s in desperate waterways. Before they get an opportunity of serving to repopulate the planet, Sparky should get Shortz in working condition. Time isn’t their ally. ",
            "link": "#"
        },
        {
            "id": "14",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/14_StepUp.webp",
            "title": "Step Up",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=snakebite&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Try Step Up slot online for free in demo mode with no download or no registration required.",
            "desc": "It’s the competition of the year, move forward to the oche – it’s your chance to hit one out of the ballpark. Peter’ Snakebite’ Wright is close by with his colorful style and a consistent hand; he’ll tell you the best way to take your game to a higher level and win the competition. Do you have the stuff?",
            "link": "#"
        },
        {
            "id": "15",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/15_AsgardsThrone.webp",
            "title": "Asgard’s Throne",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=lokisfortune&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "The master of illusions will use every trick up his shapeshifting sleeve to prevent Thor’s crowning as the King of Asgard.",
            "desc": "A daily existence in Thor’s shadow leaves Loki loaded up with desire. With regards to the subject of who will take their dad’s high position, it is Thor or Loki. Furthermore, we know who Loki is pulling for. The expert of deceptions will go through each stunt his shapeshifting sleeve to forestall Thor’s delegated as the King of Asgard. Will he succeed? ",
            "link": "#"
        },
        {
            "id": "16",
            "genre": ["all games", "music"],
            "img": "./img/games/16_RockWithKiss.webp",
            "title": "Rock With Kiss",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=kiss&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "This musical IP hits all the right notes when it comes to music slots and their features. Random Wilds, Multipliers, and Free Spins are just for starters in this epic game.  ",
            "desc": "This melodic IP hits the appropriate notes with regards to music openings and their elements. Irregular Wilds, Multipliers, and Free Spins are only first off in this amazing game. Situated in a 6×4 jewel molded framework loaded up with images which incorporate the individuals from the band who additionally show up on the screen to grant highlights all through ongoing interaction. ",
            "link": "#"
        },
        {
            "id": "17",
            "genre": ["all games", "arcade"],
            "img": "./img/games/17_ForceofGems.webp",
            "title": "Force of Gems",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=forgeofgems&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Forge of Gems caters to those who appreciate gameplay that has both traditional and unique elements to it.",
            "desc": "One more expansion to our host of Dynamic Payways games, this five by three lattice space includes an additional a reel over the primary matrix – the incredible Forge Reel. Special images show up in the reel, they’re there to improve the framework. They do this by setting out open doors for dividing images, granting Universal Multipliers and making Stacked Wilds. ",
            "link": "#"
        },
        {
            "id": "18",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/18_MjolnirMarriageAndMischief.webp",
            "title": "Mjölnir, Marriage And Mischief",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=freyaswedding&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "It’s up to Thor and Loki to find a way to retrieve the hammer. Of course, the God of Mischief has a trick up his sleeve.",
            "desc": "Thrym, the strong Ice King of Jotunheim, has taken Mjölnir. In return for its return, he requests Freya’s hand in marriage. Freya has different thoughts. It depends on Thor and Loki to figure out how to recover the sledge. Obviously, the God of Mischief has a stunt at his disposal. Thor will mask himself as Freya and enter the realm, take the sledge and slip back out – which isn’t quite so natural as it sounds. ",
            "link": "#"
        },
        {
            "id": "19",
            "genre": ["all games", "music"],
            "img": "./img/games/19_DefLeppardHysteria.webp",
            "title": "Def Leppard Hysteria",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=defleppard&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "It’s the concert of a lifetime and Def Leppard are pulling out all the stops as they perform iconic hits from their bestselling album, Hysteria. ",
            "desc": "It’s actually quite important the creative visual sync with the Pour Some Sugar on Me include. The player’s objective is completely clear, they should open the ‘sugar’ which is taken cover behind the framework. Roused by one of the groups most renowned melodies, Pour Some Sugar on Me, the Pour Some Sugar on Me highlight outwardly adjusts with how the images follow up on the framework, dropping to the lower part of the matrix as though pouring sugar. ",
            "link": "#"
        },
        {
            "id": "20",
            "genre": ["all games", "arcade"],
            "img": "./img/games/20_DoubleDiamondSpins.png",
            "title": "Enchanted Tail",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=taleofkyubiko&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": " You'll see the familiar wizard, the fairy, the ogres and other images of fairy you've loved as a child",
            "desc": "There are stories of a devilish soul that appears to late-night explorers and leads them to its sanctuary. However, who is this wily animal? She goes by the name Inari, a shapeshifting goddess who can assume the type of both a human and a fox ",
            "link": "#"
        },
        {
            "id": "21",
            "genre": ["all games", "western"],
            "img": "./img/games/21_BeatTheStampede.webp",
            "title": "Beat The Stampede",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=beastsoffire&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "For as long as humans have existed, we’ve been in awe of the beauty of the African savannah",
            "desc": "Hundreds of years have passed since the incredible meteor hit the frigid Great Plains. In any case, this was a meteor like no other. Tearing towards Earth it at long last struck a group of powerful bison. Ingraining them with a red hot energy that isn’t of this world. Saddle that energy and pioneer a path to influence and fortune. ",
            "link": "#"
        },
        {
            "id": "22",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/22_CatsMadmess.png",
            "title": "Cats Madmess",
            "frame": "https://platform.pa.rgsgames.com/studios/interactive/games/CatsSKB/launcher.html?skincode=PN03&softwareid=200-1137-002&countrycode=US&assetPack=desktop&language=en&currencycode=FPY&playMode=real&revisionTag=acc2ba2b-3293-4268-8e4a-b33f29617aac",
            "shortDesc": "As the name suggests, this game is all about wild cats. The game appears to be shot somewhere in Africa - in the savannah plain land.",
            "desc": "Cats is a 5-reel, 30-line game brought to you by IGT. This high quality slot game enters a world full of wild cats. But these cats are not common as they have the ability to double their prizes. Like any other great online game, Cats features attractive extras like wild symbols, scatters, split and a free spin bonus round. The game is also quite fast. You can play this IGT games game on computers with Windows or Mac operating systems.",
            "link": "#"
        },
        {
            "id": "23",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/23_EndOfTheWorld.webp",
            "title": "End Of The World",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=thelastsundown&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Enjoy classic slots and old school casino games absolutely for free.",
            "desc": "It’s the apocalypse. In a real sense. Earth has turned into a no man’s land and the battle to endure turns out to be progressively interesting as assets are constrained by horrendous warlords Tuco and Lauro.Two tough kin, Rae and Devin, concoct a course of action to oust them and recover assets trying to hold off The Last Sundown. ",
            "link": "#"
        },
        {
            "id": "25",
            "genre": ["all games", "western"],
            "img": "./img/games/25_TheWildSide.webp",
            "title": "THE WILD SIDE",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=safariofwealth&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "The world as we know it began in Africa, according to many historians and evolutionary scientists, so it is only fitting that Spielo looks to the continent for inspiration. ",
            "desc": "Moment Prizes, a rush of Free Spins joined with Expanding Reels – which make 7776 methods for winning could we add – Safari of Wealth is a wild ride that players of Play’n GO’s Win-a-Beest and the Wealth series will appreciate. The Instant Prize element has more going on than might be immediately obvious. On any arbitrary twist chosen reels become featured with a brilliant foundation; should a Wild land on the featured reels the Instant Prize is set off. An intelligent snap and pick game is introduced to the player where they should choose from 12 images to match the secret characters and decide the award. ",
            "link": "#"
        },
        {
            "id": "26",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/26_CleopatraRiches.png",
            "title": "Cleopatra Riches",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=taleofkyubiko&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Take a trip through the theme of Ancient Egypt as you embark on an epic journey to find the lost treasure of Cleopatra in Riches of Cleopatra, the visually impressive slot machine game from Playson.",
            "desc": "Cleopatra is a game created and conceived by the great game developers IGT (International Gaming Technology). The company is known for creating and distributing physical and online game software around the world. Cleopatra is a special casino game and it became so popular that a sequel, known as Cleopatra II, was created. The game is based on the charming Egyptian queen Cleopatra and includes many items from Egyptian culture in its gameplay. Those who are willing to get their hands on games will definitely want to play this fascinating and exciting Cleopatra video game. ",
            "link": "#"
        },
        {
            "id": "27",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/27_MarlinFoe.webp",
            "title": "Marlin Foe",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=icequeenmorgana&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "This title can be played across all your devices.",
            "desc": "After her sibling King Arthur’s crowning celebration – Morgana escapes Camelot. Not entirely set in stone to observe his previous understudy, Merlin starts his hunt just to track down a frozen no man’s land. The Ice Queen has asserted this land as her own. Local people dread her power. In any case, who is this mischievous witch? Indeed, she’s something like Merlin’s student – Morgana. ",
            "link": "#"
        },
        {
            "id": "29",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/29_EnchantedTail.webp",
            "title": "Enchanted Tail",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=taleofkyubiko&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "If you like machines on adventure theme and you think of the graphics and animation with great delicacy and then you will surely like playing this gambling machine.",
            "desc": "There are stories of a devilish soul that appears to late-night explorers and leads them to its sanctuary. However, who is this wily animal? She goes by the name Inari, a shapeshifting goddess who can assume the type of both a human and a fox ",
            "link": "#"
        },
        {
            "id": "30",
            "genre": ["all games", "arcade"],
            "img": "./img/games/30_ReactoonzAreBack.webp",
            "title": "Reactoonz are back",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=gigantoonz&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "They’re back and they’re evolving. Are you ready for an adventure with these electrifying bundles of alien energy? ",
            "desc": "One of our number one series, the Reactoonz series simply continues to develop! The charger includes a vivified Gargantoon incorporated and applies various elements to the Mega images for extreme amusement all through interactivity. This is one more part of the Reactoonz puzzle and we’re nowhere near wrapped up… ",
            "link": "#"
        },
        {
            "id": "31",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/31_CaptainXenoAndHisCrew.webp",
            "title": "Captain Xeno And His Crew",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=captxenosadventure&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "The notorious space pirate, Captain Xeno, and his crew are desperately on the run from the Galactic Space Patrol.",
            "desc": "Skipper Xeno’s Earth Adventure highlights Dynamic Payways, an element that (in this occasion) works by dividing images, making more ways for the player to win. In this game the element makes up to 32,768 methods for winning. This character-weighty game makes a story that players can truly jump aboard with. They should help Xeno and his team to fix the boat. As the game advances the players will see the foundations change. ",
            "link": "#"
        },
        {
            "id": "33",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/33_TameTheBeast.webp",
            "title": "Tame The Beast",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=legendoftheicedragon&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Ready to meet some cute and cuddly farm animals? Good, but just to let you know, you won’t find any of those in Spirit of the Tame The Beast. ",
            "desc": "An animal of legend, you might have known about it? An antiquated monster creates a shaded area across the land, leaving only a way of frigid annihilation afterward. Few have seen the actual animal; none have lay observer to the antiquated fortunes it watches. Might you venture to think of yourself into The Legend of the Ice Dragon? ",
            "link": "#"
        },
        {
            "id": "34",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/34_EyeOfAtum.webp",
            "title": "Eye of Atum",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=eyeofatum&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Eye of Atum is an online five-reel slot game from makers Play’n Go.",
            "desc": "A five by three reel opening sees ten compensation lines with the ‘Maker God’ Atum filling in as a Wild. Should Atum land on reels two, three or four, he will grow to cover the whole reel. Atum lands on the reels and grows across the whole reel, a gold sparkle features the element’s end. In any case, that is not all. The ever-evolving Free Spin highlight is set off via landing three Scatters. Before the Free Spins are actuated, the Scatters will pay out a Multiplier on the player’s absolute wagered. Three Scatters will twofold the player’s wagered. ",
            "link": "#"
        },
        {
            "id": "35",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/35_ChristmasMagik.webp",
            "title": "Christmas Magic",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=christmaskingdom&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Try Xmas Magic slot online for free in demo mode with no download or no registration required.",
            "desc": "Love, Star and Storm wind up on an excursion into the domain of The Christmas Kingdom. Bits of gossip circle of a spiritualist animal, a fox. Rumors from far and wide suggest that the fox occupies The Christmas Kingdom and has fantastic abilities. Follow the princesses and the impressions in the snow, and you make certain to track down the fox. There are a lot of highlights to help you on the way. ",
            "link": "#"
        },
        {
            "id": "36",
            "genre": ["all games", "music"],
            "img": "./img/games/36_LetsGetThePartyStarted.webp",
            "title": "Let’s Get The Party Started",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=pueblaparade&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Everyone's invited to take a shot at throwing the best part possible, and everyone's going to be in the mood to have fun when they see how bright and colourful everything is.",
            "desc": "Enthusiastic visuals wed imaginative elements as the artists act as Wilds on the reels. The Play’n GO group have found some kind of harmony between being inventive with the highlights without hauling the player out of the ongoing interaction. The Dancer Wilds converge on the reel to make a Multiplier, venturing around the reels as they take to the dance floor. Growing reels take five by four to five by seven game lines to make the dance floor greater and make more ways of winning. ",
            "link": "#"
        },
        {
            "id": "38",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/38_BiggestAdventure.webp",
            "title": "Biggest Adventure",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=wanderingcity&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Scroll of Adventure sounds like the promise of an epic endeavour in distant lands, where danger lurks at every corner. However, a single glance at the game screen paints a very different picture.",
            "desc": "In Patagonian folklore, there is a story of the Wandering City. A city evidently concealed in the valley of the Andes among Chile and Argentina encompassed by piles of precious stones and gold. Numerous voyagers have tried to observe the Wandering City and guarantee its fortune, however none have been effective. Until Rich Wilde that is. ",
            "link": "#"
        },
        {
            "id": "39",
            "genre": ["all games", "Adventure"],
            "img": "./img/games/39_TheBookOfDead.webp",
            "title": "The Book of Dead",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=lostchapter&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Ancient Egyptian style music fills the air the moment you log on to this game and enter the temple backdrop the reels are displayed against, classic pillars frame the screen and the 5x3 reels are divided by more historical columns in traditional colours.",
            "desc": "Players will be kept as eager and anxious as can be with any semblance of Pyramid Spins. In this Free Spins highlight, players will be allotted an irregular image on each twist – contrasting from one twist to another – landing at least two Scatter images will open the growing images. This unique element implies various twists make various possibilities which implies players reasonable to accomplish a full screen of Cat Wilde. A definitive objective. ",
            "link": "#"
        },
        {
            "id": "40",
            "genre": ["all games", "fantasy"],
            "img": "./img/games/40_TheIsCrystalRoses.webp",
            "title": "The 15 Crystal Roses",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=crystalroses&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Unravel the plot as you play the 15 Crystal Roses: A Tale of Love online slot. This five-reeled game comes with a fairy tale theme which prompts you to complete a quest.",
            "desc": "This is an unbelievable story of adoration for the best kind, the story of the 15 Crystal Roses. Is it true or not that you are sitting serenely? Great, then we’ll start. Sir Lancelot has announced his affection for Princess Elaine. As an image of genuine commitment, he should search out the 15 Crytal Roses, covered somewhere down in the charmed woods. Might you venture to go along with him on his journey? ",
            "link": "#"
        },
        {
            "id": "43",
            "genre": ["all games", "arcade"],
            "img": "./img/games/43_FatFranke.webp",
            "title": "Fat Frankie",
            "frame": "https://asccw.playngonetwork.com/Casino/IframedView?pid=2&gid=fatfrankies&lang=en_US&practice=1&channel=desktop&div=flashobject&width=100%25&height=100%25&user=&password=&ctx=&demo=2&brand=&lobby=&rccurrentsessiontime=0&rcintervaltime=0&rcaccounthistoryurl=&rccontinueurl=&rcexiturl=&rchistoryurlmode=&autoplaylimits=0&autoplayreset=0&callback=flashCallback&rcmga=&resourcelevel=0&hasjackpots=False&country=&pauseplay=&playlimit=&selftest=&sessiontime=&coreweburl=https://asccw.playngonetwork.com/&showpoweredby=True",
            "shortDesc": "Fat Frankie serves the best food in town, but he’s looking to put his name on the culinary map. Help him show that his Food Truck has what it takes. ",
            "desc": "Highlighting a solid story, players have clear objectives in their sights every step of the way. The point of the game is to develop Frankie’s standing as having the best food truck around. There are four different ways that they can do this through the four elements that are set off in the Bonus Rounds. In Burger Bonanza, Burgers will adhere to the reels and award a re-turn, this will go on until no more burgers land on the reels, then, at that point. ",
            "link": "#"
        },
    ];

    var filtersContainer = document.querySelector(".games__filters");
    var gamesContainer = document.querySelector(".games__grid");
    var showMoreButton = document.querySelector(".games__show-more");
    var gamesLinks = document.querySelectorAll('.game');
    var body = document.querySelector('body');
    var filtersArray = [];


    games.forEach((game) => {
        game.genre.forEach((genre) => {
            if (!filtersArray.includes(genre)) {
                filtersArray.push(genre);
            }

        });
    });

    filtersArray.forEach((filter) => {
        var filterElement = document.createElement("button");
        filterElement.className = "games__filter";
        filterElement.textContent = filter;
        filtersContainer.appendChild(filterElement);
    });


    // Определяем количество уже отображенных карточек и количество новых карточек, которые нужно добавить
    var displayedCount = 0;
    var increment = 8;

    // Функция для добавления дополнительных карточек игр
    function showMoreGames() {
        // Получаем дополнительные игры из массива games
        var additionalGames = games.slice(displayedCount, displayedCount + increment);

        // Проходим по каждой дополнительной игре и создаем карточки игр
        additionalGames.forEach((game) => {
            // Создаем строку с версткой для карточки игры
            var gameCardTemplate = `
          <a href="#" class="games__game game" data-popup="${game.id}">
              <div class="game__mark">
                  <p>${game.genre[1]}</p>
              </div>
              <div class="game__image">
                  <img src="${game.img}" alt="${game.title}">
              </div>
              <div class="game__content-wrapper">
                  <div class="game__heading">
                      <h3 class="game__title">${game.title}</h3>
                      <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.32854e-06 12.5L25 12.5M25 12.5L13.5802 1M25 12.5L13.5802 24" stroke="#EDC169" stroke-width="2" />
                      </svg>
                  </div>
                  <p class="game__desc">
                      ${game.shortDesc}
                  </p>
              </div>
          </a>
        `;

            // Добавляем карточку игры в родительский контейнер
            gamesContainer.insertAdjacentHTML("beforeend", gameCardTemplate);

            gamesLinks = document.querySelectorAll('.game');
            gamesLinks.forEach((game) => {
                game.addEventListener('click', openPopupGame);
            });
        });

        // Увеличиваем значение displayedCount на increment
        displayedCount += increment;

        // Проверяем, если больше нет дополнительных игр, скрываем кнопку "Show more"
        if (displayedCount >= games.length) {
            showMoreButton.style.display = "none";
        }
    }

    showMoreGames();

    showMoreButton.addEventListener("click", showMoreGames);

    var filtersButtons = document.querySelectorAll(".games__filter");
    filtersButtons.forEach((item) => {
        item.addEventListener('click', function (event) {
            gamesLinks = document.querySelectorAll('.game');
            // Очищаем контейнер игр
            gamesContainer.innerHTML = "";
            showMoreButton.style.display = 'none';
            gamesLinks.forEach((game) => {
                game.addEventListener('click', openPopupGame)
            });

            // Получаем выбранный фильтр
            var filter = event.target.textContent;
            var button = event.target;
            filtersButtons.forEach((btn) => {
                btn.classList.remove('active-filter');
            });
            button.classList.add('active-filter');

            // Используем фильтр для создания нового массива игр
            var filteredGames = games.filter(game => game.genre.includes(filter));

            // Проверяем, есть ли игры, соответствующие выбранному фильтру
            if (filteredGames.length > 0) {
                // Проходим по каждой игре и создаем карточки игр
                filteredGames.forEach((game) => {
                    // Создаем карточку игры
                    var gameCardTemplate = `
                    <a href="#" class="games__game game" data-popup="${game.id}">
                    <div class="game__mark">
                        <p>${game.genre[1]}</p>
                    </div>
                    <div class="game__image">
                        <img src="${game.img}" alt="${game.title}">
                    </div>
                    <div class="game__content-wrapper">
                        <div class="game__heading">
                            <h3 class="game__title">${game.title}</h3>
                            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.32854e-06 12.5L25 12.5M25 12.5L13.5802 1M25 12.5L13.5802 24" stroke="#EDC169" stroke-width="2" />
                            </svg>
                        </div>
                        <p class="game__desc">
                            ${game.shortDesc}
                        </p>
                    </div>
                </a>
                        `;

                    // Добавляем карточку игры в контейнер
                    gamesContainer.insertAdjacentHTML("beforeend", gameCardTemplate);
                });
            } else {
                // Если игры не найдены, отображаем сообщение
                var noGamesMessage = document.createElement("p");
                noGamesMessage.textContent = "No games found for the selected filter.";
                gamesContainer.appendChild(noGamesMessage);
            }
            gamesLinks = document.querySelectorAll('.game');
            gamesLinks.forEach((game) => {
                game.addEventListener('click', openPopupGame);
            });
        })

    });


    var close = document.querySelector('.game-popup__close');
    var gamePopUp = document.querySelector('.game-popup');


    gamesLinks.forEach((game) => {
        game.addEventListener('click', openPopupGame)
    });

    function openPopupGame(event) {
        event.preventDefault();
        var currentGame = event.target.closest('.game');
        var gameID = currentGame.dataset.popup;
        var gameInfo = games.find(function (item) {
            return item.id === gameID;
        });
        gamePopUp.classList.add('show-game-popup');
        body.classList.add('lock');
        gamePopUp.querySelector('.game-popup__title').innerHTML = gameInfo.title;
        gamePopUp.querySelector('.game-popup__desc').innerHTML = gameInfo.desc;
        gamePopUp.querySelector('.iframe').innerHTML = `<iframe width="100%" height="100%" allow="fullscreen" src="${gameInfo.frame}" frameborder="0"></iframe>`;
    };

    close.addEventListener('click', function (event) {
        gamePopUp.querySelector('.game-popup__title').innerHTML = '';
        gamePopUp.querySelector('.game-popup__desc').innerHTML = '';
        gamePopUp.querySelector('.iframe').innerHTML = '';
        body.classList.remove('lock');
        gamePopUp.classList.remove('show-game-popup');
    });
})();


/* start popups */
(function () {

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll(".lock-padding");
    const menu = document.querySelector('.mobile-menu');
    const button = document.querySelector('.header__burger');

    let unlock = true;

    const timeout = 500;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener("click", function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
                if (menu.classList.contains('mobile-menu_active')) {
                    menu.classList.remove('mobile-menu_active');
                    button.classList.remove('header__burger_active');
                }
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.popup__close');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener("click", function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener("click", function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }
    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }
    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
    function bodyUnLock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });
    /* end popups */
})();

// age and cookie popups
(function () {
    const agePopup = document.querySelector('#age');
    const stopPopup = document.querySelector('#stop');
    const confirmButton = document.querySelector('#yes21');
    const noConfirmButton = document.querySelector('#no21');
    const cookiePopup = document.querySelector('#cookies');

    agePopup.addEventListener('click', function (event) {
        if (event.target.closest('#yes21')) {
            localStorage.setItem('age', true);
            agePopup.classList.remove('open');
            cookiePopup.classList.add('open_cookie');
        } else if (event.target.closest('#no21')) {
            stopPopup.classList.add('open');
        }
    });

    cookiePopup.addEventListener('click', function (event) {
        if (event.target.closest('#yesCookies')) {
            localStorage.setItem('cookies', true);
            cookiePopup.classList.remove('open_cookie');
        } else if (event.target.closest('#noCookies')) {
            localStorage.setItem('cookies', false);
            cookiePopup.classList.remove('open_cookie');
        }
    })

    window.addEventListener('load', function () {
        if (!localStorage.getItem('age')) {
            agePopup.classList.add('open');
        };
        if (localStorage.getItem('cookies') === 'false') {
            cookiePopup.classList.add('open_cookie');
        }
    });
})();

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 4
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


(function () {
    const acc = document.querySelector('.accordion');
    const clickPlace = document.querySelector('.accordion-header');

    clickPlace.addEventListener('click', function () {
        acc.querySelector('.game-popup__desc').style.display = 'block';
    })
})();

// link scroll
(function () {
    const menuLinks = document.querySelectorAll('.ancor-link[data-goto]');
    const menu = document.querySelector('.mobile-menu');
    const button = document.querySelector('.header__burger');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 30;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });

                if (menu.classList.contains('mobile-menu_active')) {
                    menu.classList.remove('mobile-menu_active');
                    button.classList.remove('header__burger_active');
                }
                e.preventDefault();
            }
        }
    }
})();

(function () {
    var popup = document.querySelector('#contact');
    var success = document.querySelector('#suc-contact');
    var form = document.querySelector('.contact__form');
    const formHTML = `
    <form id="contactForm" class="popup__form" action="#">
        <label for="reg-username" class="popup__label">
            <p class="popup__field-name">Subject</p>
            <input class="popup__input" id="contact-subject" type="text" placeholder="Subject" required>
        </label>
        <label for="reg-phone" class="popup__label">
            <p class="popup__field-name">Your email</p>
            <input class="popup__input" id="contact-email" type="text" placeholder="Your email" required>
        </label>
        <label for="reg-email" class="popup__label">
            <p class="popup__field-name">Your message</p>
            <textarea class="popup__input" id="contact-massage" placeholder="Your message"
                required></textarea>
        </label>
        <button class="popup__button" type="submit">Send</button>
    </form>
    `;
    const buttonPopupContact = document.querySelectorAll('.getContactForm');

    buttonPopupContact.forEach((item) => {
        item.addEventListener('click', function () {
            form.innerHTML = formHTML;
        });
    });

    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        popup.classList.remove('open');
        success.classList.add('open');
        setTimeout(function () {
            success.classList.remove('open');
        }, 2000);
    })
})();

(function () {

})();


(function () {


})();