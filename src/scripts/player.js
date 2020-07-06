// let player;
// // const playerContainer = document.querySelector('.player');
// // const playerStart = document.querySelector('.player__start');
// //
// // let eventsInit =() => {
// // playerStart.addEventListener('click', function(e) {
// //     e.preventDefault()
// //     const btn=e.currentTarget;
// //     playerContainer.add('paused');
// //     player.playVideo();
// //
// // })
// // }
// // function onYouTubeIframeAPIReady() {
// //     player = new YT.Player('yt-player', {
// //         height: '405',
// //         width: '660',
// //         videoId: 'M7lc1UVf-VE',
// //         events: {
// //             // 'onReady': onPlayerReady,
// //             // 'onStateChange': onPlayerStateChange
// //         },
// //         playerVars: {
// //             controls:0,
// //             disablekb:0,
// //             showinfo:0,
// //             rel:0,
// //             autoplay:0,
// //              modestbranding:0,
// //         }
// //     });
// // }
// // eventsInit();

(function() {
    const player = document.querySelector('.player')
    const playerStart = document.querySelector('.player__play')
    const video = document.querySelector('.player__elem')
    const playerPlaybackBtn = document.querySelector('.player__playback-btn')
    const playerPlayback = document.querySelector('.player__playback')
    const playerVolBtn = document.querySelector('.player__vol')
    const playerVolume = document.querySelector('.player__volume')
    const playerVolumeBtn = document.querySelector('.player__volume-btn')
    const playerSplash = document.querySelector('.player__splash')

    playerStart.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            player.classList.add('player--active')
        }
        else {
            video.pause();
            player.classList.remove('player--active')
        }
    })

    playerSplash.addEventListener('click', () => {
        video.play()
    })

    video.addEventListener('play', () => {
        player.classList.add('player--active')
    })

    video.addEventListener('timeupdate', (event) => {
        const completedSec = video.currentTime;
        const completedPercent = (completedSec / video.duration) * 100;
        playerPlaybackBtn.style.left = `${completedPercent}%`
    });

    video.addEventListener('ended', function () {
        video.currentTime = 0;
        player.classList.remove('player--active')
    });

    playerPlayback.addEventListener('click', (e) => {
        const bar = e.currentTarget;
        const newButtonPosition = e.pageX - bar.offset().left;
        const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
        const newPlayerTimeSec = (video.duration / 100) * buttonPosPercent;
        playerPlaybackBtn.style.left = `${buttonPosPercent}%`
        video.currentTime = newPlayerTimeSec
    })

    playerVolBtn.addEventListener('click', () => {
        video.volume = !video.volume;
        const volPos = video.volume ? 100 : 0;
        playerVolumeBtn.style.left = `${volPos}%`;
    })

    playerVolume.addEventListener('click', (e) => {
        const bar =e.currentTarget;
        const newButtonPosition = e.pageX - bar.offset().left;
        const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
        const newPlayerVolume = (1 / 100) * buttonPosPercent;
        playerVolumeBtn.style.left = `${buttonPosPercent}%`;
        video.volume = newPlayerVolume;
    })
}) ()