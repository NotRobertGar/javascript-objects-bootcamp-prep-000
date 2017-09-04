var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artistname, songtitle){
  Object.assign({} playlist, {[artistname]: songtitle} );
  return playlist;
  //* updates to playlist

}

function removeFromPlaylist{
  //*removes from play list
}
