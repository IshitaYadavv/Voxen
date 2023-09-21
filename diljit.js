const music = new Audio('audio/diljit/15.mp3');
// music.play();

const songs = [
    {
                id: '1',
                songName: `5 Taara<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/1.png",
                
            },
            {
                id: '2',
                songName: `Dil Todeya<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/2.png",
                
            },
            {
                id: '3',
                songName: `GOAT<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/3.png",
                
            },
            {
                id: '4',
                songName: `High End<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/4.png",
                
            },
            {
                id: '5',
                songName: `Jatt Di Jaan<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/5.png",
                
            },
            {
                id: '6',
                songName: `Jind Mahi<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/6.png",
                
            },
            {
                id: '7',
                songName: `Lemonade<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/7.png",
            },
            {
                id: '8',
                songName: `Lover<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/8.png",
                
            },
            {
                id: '9',
                songName: `Luna<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/9.png",
                
            },
            {
                id: "10",
                songName: `Move Your Lakk<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/10.png",
               
            },
            {
                id: "11",
                songName: `Offline<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/11.png",
                
            },
            {
                id: "12",
                songName: `Pagal<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/12.png",
                
            },
            {
                id: "13",
                songName: `Pain<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/13.png",
                
            },
            {
                id: "14",
                songName: `Peaches<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/14.png",
               
            },
            {
                id: "15",
                songName: `Proper Patola<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/15.png",
               
            },
            {
                id: "16",
                songName: `Ranjhna<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/16.png",
               
            },
            {
                id: "17",
                songName: `Raula<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/17.png",
                
            },
            {
                id: "18",
                songName: `Sadda Move<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/18.png",
                
            },
            {
                id: "19",
                songName: `Stranger<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/19.png",
                
            },
            {
                id: "20",
                songName: `Unforgettable<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/20.png",
                
            },
            {
                id: "21",
                songName: `Vibe<br>
                <div class="subtitle">Diljit Dosanjh</div>`,
                poster: "image/diljit/21.png",
                
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});




let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/diljit/${index}.mp3`;
        poster_master_play.src = `image/diljit/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/diljit/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/diljit/${index}.mp3`;
    poster_master_play.src = `image/diljit/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/diljit/${index}.mp3`;
    poster_master_play.src = `image/diljit/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;

    switch (a){
       case "next":
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-list');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='repeat';
        break;
        

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-list');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
            break;
        
        case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-list');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML='next';
                break;
    }
});


    
    const next_music =()=>{
        //index++;
        if(index == songs.length){
            index=1;
           }else{
            index++;
           }
        
        music.src = `audio/diljit/${index}.mp3`;
        poster_master_play.src = `image/diljit/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/diljit/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    
    }


    const repeat_music =()=>{
        index;
        
        music.src = `audio/diljit/${index}.mp3`;
        poster_master_play.src = `image/diljit/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/diljit/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    
    }

    const random_music =()=>{
        if(index == songs.length){
            index=1;
           }else{
            index=Math.floor((Math.random()*songs.length)+1);
           }
        
        music.src = `audio/diljit/${index}.mp3`;
        poster_master_play.src = `image/diljit/${index}.png`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/diljit/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    
    }
    
    music.addEventListener('ended',()=>{
      let b=shuffle.innerHTML;

      switch(b){
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
      }

    
    })