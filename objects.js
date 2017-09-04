var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artistname, songtitle){
  return Object.assign({} playlist, {[artistname]: songtitle} );
  //* updates to playlist

}

function removeFromPlaylist{
  //*removes from play list
}
