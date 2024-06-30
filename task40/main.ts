function makeAlbum (artist: string, title: string) : { artist: string, title: string} {
    const dictionaries = {
       artist: artist.charAt(0).toUpperCase() + artist.slice(1),
       title: title.charAt(0).toUpperCase() + title.slice(1)
};
    return dictionaries;
}

 let album = makeAlbum("safa" , "light")
 console.log(album);

 album = makeAlbum("habiba" , "midlle june")
 console.log(album);

 album = makeAlbum("huraira" , "sound on")
 console.log(album);
