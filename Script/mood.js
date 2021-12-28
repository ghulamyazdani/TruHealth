var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
const video = document.querySelector('#myVidPlayer');
const btnDisplay = document.querySelector('#btnDisplay');
const secondCanvas = document.getElementById('snapshot');

//w-width,h-height
var w, h;
canvas.style.display = "block";

let canvsText = `Mood Map By True Health. All rights reserved © ${new Date().getFullYear()}    Date: ${new Date().toLocaleDateString()}`;

//delete
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./Assets/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./Assets/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./Assets/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./Assets/models'),
    faceapi.nets.ageGenderNet.loadFromUri('./Assets/models')
]).then(startVideo)
//delete
//new
function snapshot() {
    secondCanvas.classList.remove('hidden');
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
    context.font = "15px Roboto";
    context.textAlign = "center";
    context.fillStyle = "Yellow";
    context.fillText(canvsText, w / 2, h / 1.05);
    canvas.style.display = "block";
    setTimeout(snapshot, 10);
}

async function startVideo() {
    const constraints = { video: true };

    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints);

        video.srcObject = stream;
        video.onloadedmetadata = e => {
            video.play();

            w = video.videoWidth;
            h = video.videoHeight

            canvas.width = w;
            canvas.height = h;

        }

    } catch (err) {
        console.error(err);
    }
}


// window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//     .then(stream => {
//         video.srcObject = stream;
//         video.onloadedmetadata = (e) => {
//             video.play();

//             //new
//             w = video.videoWidth;
//             h = video.videoHeight

//             canvas.width = w;
//             canvas.height = h;
//         };
//     })
//     .catch(error => {
//         alert('You have to enable the mike and the camera');
//     });


video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    canvas.classList.add('canvas')
    secondCanvas.appendChild(canvas);
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(
            video,
            new faceapi.TinyFaceDetectorOptions()

        ).withFaceExpressions()
            .withAgeAndGender()

        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)

        faceapi.draw.drawDetections(canvas, resizedDetections)

        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        resizedDetections.forEach(detection => {
            const box = detection.detection.box
            const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " years old " + detection.gender })
            drawBox.draw(canvas)
        })

    }, 100);
})


btnDisplay.addEventListener('click', () => {

    html2canvas(secondCanvas).then(function (canvas) {

        saveAs(canvas.toDataURL(), 'file-name.png');
    });
});

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}