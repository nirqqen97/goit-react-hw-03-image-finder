import { Component } from "react"
import { Searchbar } from "components/Searchbar/Searchbar"
import { Container } from "./App.styled"
import {getPhotos} from "../api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

export class App extends Component  {
  state = {
    photos : null,
    filter:"",
    showModal : false,
  }
  toggleModal = () =>{
    this.setState(state =>({
      showModal : !state.showModal
    }))
  }
  handleSubmit =  async text =>{
    this.setState({filter : text})
    const photos = await getPhotos(text)
    this.setState({photos})


  }



  render(){
  return (
    <Container>
      {this.state.showModal && <Modal/>}
      <Searchbar onSubmit = {this.handleSubmit}/>
      {this.state.photos && <ImageGallery materials={this.state.photos}/>}
  
    </Container>
   
  )};
};
