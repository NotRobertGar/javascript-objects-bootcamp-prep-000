var playlist = new Object({TaylorSwift: "Oatmeal"});

console.log(playlist);

function updatePlaylist(playlist, artistname, songtitle){
  return Object.assign({} playlist, {[artistname]: songtitle} );
  //* updates to playlist

}

function removeFromPlaylist{
  //*removes from play list
}
