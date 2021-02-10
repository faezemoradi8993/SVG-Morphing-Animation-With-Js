const moonpath = "M15.5 27.5C15.5 42.6878 \
26.9933 54.9954 27.5 55C12.3122 55 0\
 42.6878 0 27.5C0 12.3122 12.3122 0 27.5\
  0C27.5 1 15.5 12.3122 15.5 27.5Z";
const sunpath = "M55 27.5C55 42.6878 42.6878 \
55 27.5 55C12.3122 55 0 42.6878 \
0 27.5C0 12.3122 12.3122 0 27.5\
 0C42.6878 0 55 12.3122 55 27.5Z";
const darkmode = document.querySelector('#darkmode');
let toggle = false;

////we need to click on sun
darkmode.addEventListener('click', () => {
    document.getElementById('caption').innerHTML = toggle ? "Light Mode" : "Dark Mode";
    //we need to use anime.js
    //here we set the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"

    });

    // add different animation to the timeline
    timeline.add({
        targets: ".sun",
        d: [{ value: toggle ? sunpath : moonpath }]
    });
    timeline.add({
        targets: "#darkmode",
        rotate: toggle ? 360 : 320
    },"-=50"
        
    );
    timeline.add({
        targets: "#caption",
        rotate:  360 
    }, '-=30');
    timeline.add({
        targets: "section",
        color: toggle ? "rgb(0,0,0)" : "rgb(255,255,255)",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22, 22, 22)"
    },
    '-=30'
    );
    //everytime we click on the sun i want that toggle to switch
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
   

});

