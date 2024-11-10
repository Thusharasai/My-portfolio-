
.bharatanatyam-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -2;
}


.dancer {
    position: absolute;
    bottom: 10%;
    left: 20%;
    width: 200px;
    height: 400px;
    background: url('path/to/dancer-silhouette.png') no-repeat center center;
    background-size: contain;
    opacity: 0.1;
    animation: dance 5s infinite alternate;
}

@keyframes dance {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px) rotate(-5deg); }
}


.mandala {
    position: absolute;
    width: 120px;
    height: 120px;
    background: url('path/to/mandala.png') no-repeat center center;
    background-size: contain;
    opacity: 0.15;
    animation: floatMandala 10s infinite linear;
    mix-blend-mode: overlay;
}

.mandala:nth-child(2) {
    top: 20%;
    left: 70%;
    animation-duration: 15s;
    width: 150px;
    height: 150px;
}

.mandala:nth-child(3) {
    top: 70%;
    left: 30%;
    animation-duration: 20s;
    width: 100px;
    height: 100px;
}

@keyframes floatMandala {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
    100% { transform: translateY(0) rotate(360deg); }
}


.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 300px;
    background: linear-gradient(120deg, rgba(255, 182, 193, 0.3), rgba(255, 105, 180, 0.3));
    opacity: 0.2;
    animation: waveMotion 8s infinite linear;
}

@keyframes waveMotion {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
