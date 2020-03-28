import React from "react";
import ImageSearch from './components/ImageSearch/ImageSearch';
import ImageList from './components/ImageList/ImageList';

const API_KEY = "68176debe6d02d7fccf1f673a216fabd0f50b923fa7bae478f4073d7e6f58f27";
const perPage = 12;
class App extends React.Component {
  state ={
    images : [],
    error: null
  }
  
  fetchImages = async (event) => {
    event.preventDefault();
    const searchTerm= event.target.elements.searchValue.value;
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${API_KEY}&per_page=${perPage}`
    const request = await fetch(url);
    const response = await request.json(); 
    if(!searchTerm){
      this.setState({error: "Please provide a value."});
    } else {
      this.setState({images: response.results, error:null});
    }
  }

  render() {
    return (
      <div>
        <ImageSearch fetchImages={this.fetchImages}/>

        {
          this.state.error !== null ? 
          <div style={{color:"#fff", textAlign:"center"}}>{ this.state.error }</div> :
          <ImageList images = {this.state.images}/>
        }
        
      </div>
    )
  }
} 

export default App