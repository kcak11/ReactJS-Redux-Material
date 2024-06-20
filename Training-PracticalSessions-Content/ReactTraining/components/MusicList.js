import React,{Component} from 'react';

export class MusicList extends React.Component{
  
  constructor(props,context){
    super(props,context);
    this.state={
     songs: [
        { id: 1, name: 'Sing a song', singer: 'kavitha' },
        { id: 2, name: 'Baby alone', singer: 'Robin' },
        { id: 3, name: 'I Love you forever', singer: 'Mary' },
        { id: 4, name: 'I am  always there', singer: 'Varun' }
      ],
        selectedSongs: [],
        error: false
      };
      this._renderSong=this._renderSong.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleselectedSongs=this.handleselectedSongs.bind(this);
  }
  _renderSong(song) {
    return (
      <div className="checkbox" key={song.id}>
        <label>
          <input type="checkbox" value={song.name}
                 onChange={this.handleselectedSongs.bind(this)}/>
          {song.name} -- {song.singer}
        </label>
      </div>
    );
  }

  _renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
  }

  // as songs are checked , pushit to selectedSongs array
  handleselectedSongs(event) {
    var selectedSongs = this.state.selectedSongs;
    var index = selectedSongs.indexOf(event.target.value);

    if (event.target.checked) {
      if (index === -1)
        selectedSongs.push(event.target.value);
    } else {
      selectedSongs.splice(index, 1);
    }

    this.setState({selectedSongs: selectedSongs });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.selectedSongs.length === 0) {
      this.setState({error: 'Please choose atleast one song to continue'});
    } else {
      this.setState({error: false});
      this.props.updateFormData({ selectedSongs: this.state.selectedSongs });
    }
  }

  render() {
    var errorMessage = this._renderError();

    return (
      <div>
        <h3 className="text-info"> Choose your Online song from our Music Store </h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          { this.state.songs.map((song) => { return (this._renderSong(song)); })}
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}