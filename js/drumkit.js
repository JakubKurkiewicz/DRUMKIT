const boom = document.querySelector('#boom');
const clap = document.querySelector('#clap');
const hihat = document.querySelector('#hihat');
const kick = document.querySelector('#kick');
const openhat = document.querySelector('#openhat');
const ride = document.querySelector('#ride');
const snare = document.querySelector('#snare');
const tink = document.querySelector('#tink');
const tom = document.querySelector('#tom');

class CreateChannel{
    constructor(btnRec, btnPlay){
        this.channelSounds = []
        console.log( this.channelSounds)
        this.channelStartTime = null
        this.channelRecording = false
        this.btnRec = document.querySelector(`${btnRec}`)
        this.btnRec.addEventListener('click', this.startRecording);
        this.btnPlay = document.querySelector(`${btnPlay}`)
        this.btnPlay.addEventListener('click', this.playRecording);
        document.body.addEventListener('keypress', this.playAudio);
      
    }


playAudio=(e)=>{
    if (this.channelRecording) {
        this.channelSounds.push({
            code: e.code,
            time: Date.now(),
        })
    }
    this.playSounds(e.code);
}


startRecording=()=>{
    this.channelRecording = !this.channelRecording; 
    if (this.channelRecording) {
        this.channelStartTime = Date.now();
    }
    this.btnRec.innerHTML = `${this.channelRecording ? 'stop recording' : 'start recording'}`;
}



playRecording=()=>{
    this.channelRecording = false;
    this.btnRec.innerHTML = 'start recording';
    this.channelSounds.forEach(element => {
            setTimeout(this.playSounds, element.time - this.channelStartTime, element.code);
        })
}



playSounds=(code)=>{
    switch (code) {
        case 'KeyA':
            clap.currentTime = 0;
            clap.play();
            break
        case 'KeyS':
            boom.currentTime = 0;
            boom.play();
            break
        case "KeyD":
            hithat.currentTime = 0;
            hithat.play();
            break
        case "KeyF":
            kick.currentTime = 0;
            kick.play();
            break
        case "KeyG":
            openhat.currentTime = 0;
            openhat.play();
            break
        case "KeyH":
            ride.currentTime = 0;
            ride.play();
            break
        case "KeyJ":
            snare.currentTime = 0;
            snare.play();
            break
        case "KeyK":
            tink.currentTime = 0;
            tink.play();
            break
        case "KeyL":
            tom.currentTime = 0;
            tom.play();
            break
        }
    }
}


const channel1 = new CreateChannel('#channel1Rec', '#channel1Play');
const channel2= new CreateChannel('#channel2Rec', '#channel2Play');
const channel3 = new CreateChannel('#channel3Rec', '#channel3Play');
const channel4 = new CreateChannel('#channel4Rec', '#channel4Play');

