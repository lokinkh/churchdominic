
import axios from 'axios';
import { axiosConfig } from '@churchdominic/proxy';
import { sleep } from '@churchdominic/sleep';
import { formatTimestamp } from '@churchdominic/date-time-processor';
import { notify } from 'feishu-notifier';
import { log } from '@churchdominic/log';


// simple_task_timer.js

class TaskTimer {
    constructor() {
        this.startTime = null;
        this.pausedTime = 0;
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now();
            this.isRunning = true;
            console.log('Task timer started.');
        } else {
            console.log('Task timer is already running.');
        }
    }

    pause() {
        if (this.isRunning) {
            this.pausedTime = this.getTimeElapsed();
            this.isRunning = false;
            console.log('Task timer paused.');
        } else {
            console.log('Task timer is not running.');
        }
    }

    reset() {
        this.startTime = null;
        this.pausedTime = 0;
        this.isRunning = false;
        console.log('Task timer reset.');
    }

    getTimeElapsed() {
        if (this.startTime === null) {
            return 0;
        }
        const currentTime = Date.now();
        return currentTime - this.startTime + this.pausedTime;
    }
}

// Example usage
const timer = new TaskTimer();
timer.start();
setTimeout(() => {
    timer.pause();
    console.log('Time elapsed:', timer.getTimeElapsed() / 1000, 'seconds');
}, 3000);



