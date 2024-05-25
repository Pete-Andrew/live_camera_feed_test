(async function() {
    const video = document.getElementById('camera-feed');

    try {
        // Request access to the camera
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        // Set the video element's srcObject to the camera stream
        video.srcObject = stream;

        // Play the video
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (err) {
        console.error("Error accessing the camera: ", err);
    }
})();
