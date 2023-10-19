function user() {
    username: 'Swaraj'
    lastTime : '19th Oct 23'
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           user.lastTime = new Date().getTime();
           resolve(time); 
        },1000)
    })
}

userUpdatesPost(){
    Promise.all([user, updateLastUserActivityTime]).then(([userResolves, updateLastUserActivityTimeResolves]) => {
        console.log(userResolves);
        console.log(updateLastUserActivityTimeResolves);
    })
}
