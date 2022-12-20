function getRealTime() {
    let curTime = new Date();
    let curHour = curTime.getHours();
    if(curHour > 12) {
        curHour = [curHour - 12,"PM"];
    };
    let curTimeString = "Current Time: " + curHour[0] + ":" + curTime.getMinutes() + curHour[1];
    return [[curTime.getHours(),curTime.getMinutes(),curTime.getSeconds()],curTimeString];
}