/**
 * Full Scroll Animation
 */

var fullScrollAnimation = (() => {    
    var componentName = 'Full Scroll Animation';

    var defaults = {
        index: 0,
        direction: '',
        currentPageTop: null,
        mTouchStart: 0,
        mTouchEnd: 0,
        movable: false,
        markerDistance: null,
        timer: null,
        prevInnerHeight: 0,
        currentInnerHeight: 0
    };

    var objs = {
        $container: null,
        $sections: null,
        $activeSection: null,
        $video: null,
        $swiper: [],
        $footer: null,
        $marker: null,
        $scrollNav: null,
        $scrollBtn: null,
        $topBtn: null,
        $navBtn: null
    }


    function init(el, options) {
        objs.$container = el;
        if(objs.$container !== null){
            if(objs.$container.dataset.component !== undefined) return false;
            objs.$container.dataset.component = new initFullScroll(options);
        }
    }

    function initFullScroll(options){
        objs.$sections = document.querySelectorAll('.scroll-section');    
        objs.$footer = document.querySelector('.footer-renew');
        objs.$marker = document.querySelector('.marker');
        objs.$scrollNav = document.querySelector('.scroll-nav ul');
        objs.$scrollBtn = document.querySelector('.btn-fix-group button > ul');
        objs.$topBtn = document.querySelector('.fix-top');

        defaults = extend(defaults, parseOptions(options));
        defaults.movable = true;
        defaults.prevInnerHeight = getWinHeight();
      
        //�명듃濡�
        setSwiper('.intro-swiper', {
            autoplay: {
                delay : 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            centeredSlides: true,
            speed: 2200,
            loopedSlides: 100,
            observer: true,
            observeParents: true,
            allowTouchMove: false
        });

        //紐⑥엫�듭옣
        setSwiper('.moim-swiper', {
            slidesPerView: 'auto',
            loop:true,
            observer: true,
            observeParents: true,
            centeredSlides: true,
            speed: 500,
            autoplay: {
                delay: 3500,
                disableOnInteraction:false,
            }
        });

        //留덉씠泥댄겕移대뱶
        setSwiper('.logo-swiper', {
            autoplay: {
                delay : 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            centeredSlides: true,
            speed: 1600,
            loopedSlides: 100,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            allowTouchMove: false
        });

        setScreenSize();
        setTitle();
        setPage();
        setMarker();            
        moneyTalkMain();
        attachEvents();
    }

    function attachEvents(){
        /*
        var playThumb = document.querySelector('.play-thumb');

        // �꾩�踰꾪듉 �대┃//
        playThumb.addEventListener('touchstart', function(){
            playThumb.classList.contains('thumb-down') && playThumb.classList.remove('thumb-down');
            playThumb.classList.add('thumb-up');
        }, { passive:true });
        playThumb.addEventListener('touchend', function(){
            setTimeout(function(){
                playThumb.classList.remove('thumb-up');
                playThumb.classList.add('thumb-down');
                setTimeout(function(){
                    playThumb.classList.remove('thumb-down');
                }, 600);
            }, 200);
            console.log('touchend...');        
        })
        */

        document.addEventListener('wheel', function(event){
            console.log('scroll...');
            if(defaults.movable == true){
                mouseWheelDirection(event);
                setPage();
                setResize();
            }else return;
        }, false);

        document.addEventListener('touchstart', function(event){
            touchStart(event);
        }, false);

        document.addEventListener('touchend', function(event){
            if(defaults.movable == true){
                touchEnd(event);
                setPage();
                setResize();
            }else return;
        }, false);

        window.addEventListener('resize', function(event){
            setPage();
            setResize();
            setScreenSize();
        });

        window.addEventListener('load', function(event){            
            playVideo();        
            objs.$swiper[1].autoplay.stop();
            // infiniteLoop('.rolling-benefit', 0, {'direction': 'left'});
            // infiniteLoop('.rolling-logo1', 1, {'direction': 'left'});
            // infiniteLoop('.rolling-logo2', 2, {'direction': 'right'});            
        });

        objs.$topBtn.addEventListener('click', function(event){
            defaults.index = 0;
            setPage();
        });
        
        objs.$container.addEventListener('transitionend', function(event){
            if(event.target !== objs.$container) return false;
            
            window.scrollTo(0, 1);
            defaults.movable = true;
            
            console.log('index', defaults.index);

            if(defaults.index > 0){
                document.body.style.overscrollBehaviorY = 'none';
            }else{
                document.body.style.overscrollBehaviorY = 'auto';
            }

            if(defaults.index === 2){
                objs.$swiper[1].autoplay.start();
            }

            if(defaults.index === 5){
                var aniCount = objs.$activeSection.querySelector('[data-ani-count]');
                var startNum = JSON.parse(aniCount.innerText);
                var endNum = JSON.parse(aniCount.dataset.aniCount);

                if(startNum < endNum){
                    counterAni(aniCount, startNum, endNum, 1000);
                }
            }

            if(defaults.index === 7){
                objs.$swiper[3].autoplay.start();
            }

            if(defaults.index >= 9){
                
                thumbUpAni();
            }
                      
            setStatusBtn();
            setStatusNav();
            setResize();
            playVideo();
        });
    }

    function setStatusBtn(){
        defaults.index > 0 ? objs.$scrollBtn.closest('.btn-fix-group').classList.remove('active') : objs.$scrollBtn.closest('.btn-fix-group').classList.add('active');
        defaults.index > 8 ? objs.$topBtn.classList.add('active') : objs.$topBtn.classList.remove('active');
    }

    function setStatusNav(){
        if(defaults.index > 0 && defaults.index < objs.$sections.length -1){
            var scrollList = defaults.direction == 'down' ? objs.$scrollNav.querySelectorAll('li')[defaults.index-2] : objs.$scrollNav.querySelectorAll('li')[defaults.index];
            objs.$scrollNav.classList.add('active');
            objs.$scrollNav.querySelectorAll('li')[defaults.index-1].classList.add('active');
            scrollList && scrollList.classList.remove('active');
        }else{
            objs.$scrollNav.classList.remove('active');
            objs.$scrollNav.lastChild.classList.remove('active');
        }
    }    

    function setResize(){
        if(defaults.index == 9 || defaults.index == 10) return false;

        var winHeight = window.innerHeight;
        var headHeight = document.querySelector('.header-wrap').clientHeight;
        var titHeight = objs.$activeSection.querySelector('.tit-area').clientHeight;
        var btnHeight = document.querySelector('.btn-fix-group').clientHeight;
        var contArea = objs.$activeSection.querySelector('.cont-area');

        if(defaults.index == 4 || defaults.index == 7){
            contArea.style.setProperty('height', winHeight - titHeight - btnHeight - headHeight + 'px');
        }else{
            contArea.style.setProperty('height', winHeight - titHeight - headHeight + 'px');
        }
    }

    function setSwiper(className, params){
        var options = {
            slidesPerView: 'auto',
            loop: true,
        }
        options = extend(options, params);
        objs.$swiper.push(new Swiper(className, options));
    }

    function setPage(){
        if(defaults.index == objs.$sections.length){
            var viewHeight = window.getComputedStyle(objs.$sections[defaults.index-1]).height;
            var diffHeight = parseInt(viewHeight) - window.innerHeight;
            
            defaults.currentPageTop = (defaults.index-1) * parseInt(viewHeight) + diffHeight + objs.$footer.clientHeight;
            objs.$container.style.transform = 'translate3d(0, -' + defaults.currentPageTop + 'px, 0)';
            objs.$footer.classList.add('fadein');
            objs.$footer.style.transform = 'translateY(0px)';
            
            if(getWinHeight() > defaults.prevInnerHeight){
                var diffHeight2 = getWinHeight() - defaults.prevInnerHeight;
                objs.$footer.style.transform = 'translateY(' + diffHeight2 +'px)';
            }
        }else{
            defaults.currentPageTop = defaults.index * 100;
            if(defaults.index < 9){
                objs.$scrollBtn.style.transform = 'translate3d(0, -' + defaults.index * objs.$scrollBtn.closest('.btn-list').clientHeight + 'px, 0)';
                objs.$scrollBtn.closest('.btn-fix-group').classList.remove('fadeOut');
                objs.$footer.classList.remove('active');
            }else{
                objs.$scrollBtn.closest('.btn-fix-group').classList.add('fadeOut');
                objs.$footer.classList.add('active');
            }
            objs.$footer.classList.remove('fadein');
            objs.$footer.style.transform = 'translateY(' + objs.$footer.clientHeight +'px)';
            objs.$container.style.transform = 'translate3d(0, -' + defaults.currentPageTop +'vh, 0)';
            setActive();
        }
        objs.$container.id = 'scroll-section-' + defaults.index;
    }

    function getWinHeight(){
        return window.innerHeight;
    }

    function moneyTalkMain() {
        if( $('.newletter-swiper').length) {            
            $.getScript('/resource/js/cmm/lib/moneyTalkMain.js', function(){
                moneyTalk.init();

                //癒몃땲�� �댁뒪�덊꽣
                setSwiper('.newletter-swiper .swiper-container', {
                    spaceBetween:0,
                    pagination: {
                        el: '.mtalkRecomm-swiper .swiper-pagination',
                        clickable: true,
                    }, 
                    on: {
                        slideChangeTransitionStart: function() {
                            moneyTalk.setSwiperSlideColor(this);
                        }
                    }                
                });            
            });
        }
    }

    function mouseWheelDirection(event){
        console.log(event.deltaY);
        if(event.deltaY > 0 && defaults.index < objs.$sections.length){
            defaults.movable = false;
            defaults.direction = 'down';
            defaults.index++;
        }else if(event.deltaY < 0 &&  defaults.index > 0){
            defaults.movable = false;
            defaults.direction = 'up';
            defaults.index--;
        }
    }

    function touchStart(event){
        defaults.mTouchStart = parseInt(event.changedTouches[0].clientY);
        defaults.mTouchEnd = 0;
    }

    function touchEnd(event){
        defaults.mTouchEnd = parseInt(event.changedTouches[0].clientY);

        var mTouchRangeY = defaults.mTouchEnd - defaults.mTouchStart > 50 || defaults.mTouchStart - defaults.mTouchEnd > 50;
        if(!mTouchRangeY) return false;

        if(defaults.mTouchStart > defaults.mTouchEnd && defaults.index < objs.$sections.length){
            defaults.movable = false;
            defaults.direction = 'down';
            defaults.index++;
        }else if(defaults.mTouchStart < defaults.mTouchEnd && defaults.index > 0){
            defaults.movable = false;
            defaults.direction = 'up';
            defaults.index--;
        }
    }

    function setMarker(){
        for(let i=0; i < objs.$sections.length - 2; i++){
            var navBtn = document.createElement('li');
            objs.$scrollNav.append(navBtn);
        }
    }

    function setTitle(){
        var titleLists = Array.from(objs.$sections).filter(function(section){
            return section.dataset.sectionTitle
        }).map(function(section){
            return section.dataset.sectionTitle
        });
        var emoji = ['&#x1F440', '&#x1F49C', '&#x2714', '&#x1F50D', '&#x1F4B0', '&#x1F440', '&#x1F514', '&#x1F381'];
        
        titleLists.forEach(function(title, i){
            var titBtn = document.createElement('li');        

            if(i > 0){
                var emojiHtml =  title + ' <i class="ico-emoji">' + emoji[i-1] + '</i>';
                titBtn.innerHTML = emojiHtml;
            }else{
                titBtn.innerHTML = title;
            }

            objs.$scrollBtn.append(titBtn);
        });
    }

    function playVideo(){

        var videos = objs.$container.querySelectorAll('video');
        objs.$video = objs.$activeSection.querySelector('video');

        if(!objs.$video) return false;
        if(objs.$video.dataset.played) return false;

        if(defaults.index !== 9){
            !objs.$video.loop && (objs.$video.dataset.played = true);
            objs.$video.paused && objs.$video.play();
            console.log('video play...');
        }else{
            objs.$video = null;
        }

        // ���꾨젰紐⑤뱶 & paused�� 寃쎌슦 fallback UI
        if(objs.$video && objs.$video.paused){
            console.log('���꾨젰 紐⑤뱶...');

            document.querySelector('.main-new').classList.add('low-mode');
            
            if(defaults.index === 0){
                objs.$swiper[0].autoplay.stop();
            }

            objs.$activeSection.querySelector('.btn-play') && objs.$activeSection.querySelector('.btn-play').addEventListener('click', function(){
                objs.$activeSection.classList.add('off');
                objs.$video.play();
    
                defaults.index === 0 && objs.$swiper[0].autoplay.start();
            });        
        }

        objs.$video && objs.$video.addEventListener('suspend', function(){
            // ���꾨젰紐⑤뱶�� 寃쎌슦
            // console.log('low-power mode...');
        });

        objs.$video && objs.$video.addEventListener('play', function(){
            if(defaults.index === 0){
                objs.$swiper[0].autoplay.start();
            }
        });

        Array.from(videos).forEach(function(video){
            video.addEventListener('pause', function(){
                if(video.closest('.section0')){
                    console.log('鍮꾨뵒�� stop...');
                    objs.$swiper[0].autoplay.stop();
                }        
            });
        });
       
        var aniCount = objs.$activeSection.querySelector('[data-ani-count]');
        if(defaults.index === 6) {
            setTimeUpdate(aniCount);
        }
    }

    function infiniteLoop(selector, index, option){
        var direction = option.direction;

        var roller = document.querySelector(selector);
        roller.id = `roller${index}`;

        var clone = roller.cloneNode(true);
        clone.id = `roller${index}-2`;

        roller.closest('.inner').appendChild(clone);

        document.querySelector('#roller'+ index).style[direction] = '0px';
        document.querySelector('#roller'+index+'-2').style[direction] = roller.offsetWidth + 'px';

        roller.classList.add('original');
        clone.classList.add('clone');
    }

    function counterAni(selector, start, end, duration){
        var target = selector;
        let startTimestamp = null;
        var step = function(timestamp) {
            if(!startTimestamp) startTimestamp = timestamp;
            var progress = Math.min((timestamp - startTimestamp) / duration, 1);
            target.innerText = format_number(Math.floor(progress * (end - start) + start));
            if(progress < 1){
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    function thumbUpAni(){
        var playThumb = objs.$activeSection.querySelector('.play-thumb');    

        objs.$activeSection.querySelector('video').dataset.played && objs.$activeSection.querySelector('video').closest('.video-area').classList.remove('active');
        if(playThumb.dataset.played) return false;

        setTimeout(function(){
            
            playThumb.classList.add('thumb-up');
            playThumb.dataset.played = true;

            objs.$video = objs.$activeSection.querySelector('video');            
            objs.$video.closest('.video-area').classList.add('active');
            objs.$video.currentTime = 0;
            objs.$video.play();
            objs.$video.dataset.played = true;         
            
            setTimeout(function(){
                playThumb.classList.remove('thumb-up');
                playThumb.classList.add('thumb-down');
            }, 200 );
        }, 200 );
    }


    function setTimeUpdate(selector){
        var txtLists = objs.$activeSection.querySelector('.text-area > ul');
        var countArray = JSON.parse(selector.dataset.aniCount);

        objs.$video.addEventListener('timeupdate', function() {
            if(!objs.$video) return false;

            var currentTime = objs.$video.currentTime.toFixed(0);
            if(currentTime == 3){
                counterAni(selector, countArray[0], countArray[1], 500);
                txtLists.style.transform = 'translate3d(0, -30px, 0)';
            }else if(currentTime == 6){
                counterAni(selector, countArray[0], countArray[2], 500);
                txtLists.style.transform = 'translate3d(0, -60px, 0)';
            }else if(currentTime == 9){
                counterAni(selector, countArray[0], countArray[3], 500);
                txtLists.style.transform = 'translate3d(0, -90px, 0)';
            }else if(currentTime == 12){
                counterAni(selector, countArray[0], countArray[4], 500);
                txtLists.style.transform = 'translate3d(0, -120px, 0)';
            }else if(currentTime == 0){
                counterAni(selector, countArray[0], countArray[0], 500);
                txtLists.style.transform = 'translate3d(0, 0px, 0)';
            }
        })
    }    

    function setActive(){
        objs.$activeSection =  objs.$sections[defaults.index];
        objs.$activeSection.classList.add('active');        
    }

    function setScreenSize(){
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh+'px');
    }

    function getIndex(){
        return defaults.index
    }

    function removeActive(){
        var $prevActiveSection = Array.from(objs.$sections).filter(function(section){
            section.classList.contains('active');
        });
        $prevActiveSection.length && $prevActiveSection[0].classList.remove('active');
    }

    return {
        init: init,
        getIndex: getIndex
    }

})();    

function format_number(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function parseOptions(options) {
    let splitString;
    let numberArray = [];

    if (typeof options.no == 'string') {
        splitString = options.no.split(',');
        splitString.map(function(item){
            numberArray.push(+item);
        });

        options.no = numberArray;
    }

    return options;
}


function extend(target, source){
    if(source){
        for(var key in source){
            var val = source[key];
            if(typeof val !== 'undefined'){
                target[key] = val;
            }
        }
    }
    return target;
}
if (typeof window === 'object') {
window.addEventListener('DOMContentLoaded', function(){
    var fullScrollElement = document.querySelector('[data-role="animation-container"]');
    var options = fullScrollElement.dataset;
    fullScrollAnimation.init(fullScrollElement, options);
});}