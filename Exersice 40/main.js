//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
//Calling 3 times function and creating 3 variable with different values
var album1 = make_album("Atif aslam", "Alnum title 1");
var album2 = make_album("Faris shafee", "Alnum title 2");
//Calling a meke_album function with 3rd parameter
var album3 = make_album("Talha Younus", "Alnum title 3", 10);
//Printing the veriable
console.log(album1);
console.log(album2);
console.log(album3);
