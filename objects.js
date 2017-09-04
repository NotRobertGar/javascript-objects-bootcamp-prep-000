var playlist = new Object({artist: songtitle});

console.log(playlist);

function updatePlaylist(playlist, artistname, songtitle){
  return Object.assign({} playlist, {[artistname]: songtitle} );
  //* updates to playlist

}

function removeFromPlaylist{
  //*removes from play list
}
