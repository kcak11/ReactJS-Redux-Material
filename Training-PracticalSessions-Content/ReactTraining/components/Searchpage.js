import React from 'react';
import ReactDOM from 'react-dom'
class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      docs: [], 
      numFound: 0, 
      num_found: 0, 
      start: 0, 
      searchCompleted:false, 
      searching: false
    }
    this.updateState=this.updateState.bind(this);
  }
  
  render() { 
    let tabStyles = {paddingTop: '5%'};
    return (
      <div className='container'>
      <h2>Search App by Murthy</h2>
        <div className="row" style={tabStyles}>
          <div className="col-lg-8 col-lg-offset-2">
            <div className="input-group">
              <input type="text" 
                className="form-control"
                  placeholder="Search for Projects..." 
                  ref='searchInput'/>
            <span className="input-group-btn">
              <button className="btn btn-primary"
               type="button" 
               onClick={this.performSearch.bind(this)}>Go!
                 </button>
            </span>
            </div>
          </div>
        </div>
        { (() => {
          if (this.state.searching) {
            return this.renderSearching();
          }
          return this.state.searchCompleted ? 
             this.renderSearchElements() : <div/>
        })()}
      </div>
    );
  }

  renderSearching(){
    return <div className="row">
      <div className="col-lg-8 col-lg-offset-2">
        <div className='text-center'>
        <i>Loading...</i>
      </div>
      </div>
    </div>;
  }

  renderSearchElements(){
    return (

      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <span className='text-center'>Total Results: {this.state.numFound}</span>
          <table className="table table-stripped">
            <thead>
            <tr>
            <th>Title</th>
            <th>Title suggest</th>
            <th>Author</th>
            <th>Edition</th>
            </tr>
            </thead>
            <tbody>
            {this.renderDocs(this.state.docs)}
            </tbody>
          </table>
        </div>
      </div>

    );
  }

  renderDocs(docs){
    return docs.map((doc) => {
      return <tr key={doc.key}>
        <td>{doc.title}</td>
        <td>{doc.title_suggest}</td>
        <td>{(doc.author_name || []).join(', ')}</td>
        <td>{doc.edition_count}</td>
      </tr>
    })
  }

  performSearch(){
   // let searchTerm = $(this.refs.searchInput.getDOMNode()).val();
   let searchTerm=ReactDOM.findDOMNode(this.refs.searchInput).value;
   
    this.setState({searchCompleted: false, searching: true});
   this.openLibrarySearch(searchTerm);
  }

  parseJSON(response) {
    return response.json();
  }

  updateState(json={}){
    this.setState({docs:json.docs,numFound:json.numFound,searchCompleted: true,searching: false});
    console.log(json);
  }

  openLibrarySearch(searchTerm){
 
    let openlibraryURI = `https://openlibrary.org/search.json?page=1&q=${searchTerm}}`;
    fetch(openlibraryURI)
      .then(this.parseJSON)
      .then(this.updateState)
      .catch(function (ex) {
        console.log('Parsing failed', ex)
      })

  }

}
export default SearchPage