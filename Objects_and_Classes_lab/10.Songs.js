
// function songProperty(input) {
// class Song {
//     constructor(type, name, time) {
//         this.type = type;
//         this.name = name;
//         this,time = time
//     }
// }

//     let songs = [];
// let numberOfSongs = input.shift();
// let typeSong = input.pop();

// for (let i = 0; i < numberOfSongs; i++) {
//     let [type, name, time] = input[i].split(' ');
//     let song = new Song(type, name, time);
//     song.push(song);
// }

// if (typeSong === 'all') {
//     songs.forEach((i) => console.log(i.name));
// }else {
//     let filtered = songs.filter((i) => i.type === typeSong);
//     filtered.forEach((i) => console.log(i.name));
// }
// }


// function songProperty(...arr) {
//     let numberOfSong = arr.shift();
//     for (let i = 0; i < numberOfSong.length; i++){
//     let [type, name, time] = numberOfSong[i].split("_");
//     }
// }

function songProperty(input) {
    let firstNum = input.shift();
    let lastNum = input.pop();
    
    for (const element of input) {
        let [firstElement, secondElement, thirdElement] = element.split('_');
        if (firstElement === lastNum || lastNum === "all") {
            console.log(secondElement);
        }
    }
}
songProperty(
    [4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']

)

songProperty(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
)