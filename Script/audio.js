const volumeBtnUp = document.querySelector('.volume-btn--up');
const volumeBtnDown = document.querySelector('.volume-btn--down');
const songName = document.querySelector('#songName');
const songImage = document.getElementById('songImage');



// $(document).ready(function () {
var file = document.getElementById("thefile");
var audio = document.getElementById("audio");

file.onchange = function () {
    const container = document.querySelector(".progress .track");
    const elapsed = document.querySelector(".progress .current");
    function progress_animation() {
        var rect = container.getBoundingClientRect();
        var percentage = audio.currentTime / audio.duration;
        elapsed.style.width = percentage * rect.width + "px";
        window.requestAnimationFrame(progress_animation);
    }


    audio.oncanplaythrough = function (e) {
        const totalMinutes = Math.floor(audio.duration / 60);
        const totalSeconds = Math.floor(audio.duration % 60);
        $("#left").html(totalMinutes + ":" + (totalSeconds >= 10 ? totalSeconds : "0" + totalSeconds));
    };

    audio.onended = function (e) {
        $("#play-pause i").toggleClass(["fa-play", "fa-pause"]);
    };

    audio.ontimeupdate = function (e) {
        const totalMinutes = Math.floor(audio.duration / 60);
        const totalSeconds = Math.floor(audio.duration % 60);
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        $("#current").html(minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds));
        $("#left").html(
            totalMinutes -
            minutes +
            ":" +
            (totalSeconds - seconds >= 10 ? totalSeconds - seconds : "0" + (totalSeconds - seconds))
        );
        window.requestAnimationFrame(progress_animation);
    };


    var files = this.files;
    songName.innerHTML = files[0].name;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 0.8;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = `rgb(34,38,42)`;
        ctx.fillRect(0, 10, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            var r = barHeight + 45 * (i / bufferLength);
            var g = 250 * (i / bufferLength);
            var b = 505;

            ctx.fillStyle = "rgb(" + g + "," + r + "," + b + ")";

            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            x += barWidth + 5;
        }

    }

    renderFrame();

    $("#play-pause").on("click", function (e) {
        window.requestAnimationFrame(progress_animation);
        $btn = $(e.currentTarget);
        $btn.toggleClass("playing");
        $btn.toggleClass("paused");
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
        $btn.find("i").toggleClass(["fa-pause", "fa-play"]);
    });


};

volumeBtnUp.addEventListener("click", function () {
    if (audio.volume < 1) {
        audio.volume += 0.2;
    }
});

volumeBtnDown.addEventListener("click", function () {
    if (audio.volume > 0) {
        audio.volume -= 0.2;
    }
});

