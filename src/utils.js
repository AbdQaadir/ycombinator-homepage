export const parseTime = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;

    const dateObject = new Date(milliseconds);

    const minutes = dateObject.getMinutes();
    const hours = dateObject.getHours();

    const minutesDiff = new Date().getMinutes() - minutes;
    const hoursDiff = new Date().getHours() - hours;

    if(hoursDiff) {
        return `${hoursDiff} hours`;
    }else if(minutesDiff){
        return `${minutesDiff} minutes`;
    }
}


export const getHostname = (url) => {
    if(url){
        let a = document.createElement('a');
        a.href = url;

        return a.hostname.replace("www.", "")
    }
    return "";
    
}