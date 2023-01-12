import { Component } from "react"
import { CirclesWithBar } from  'react-loader-spinner'

import { Searchbar } from "components/Searchbar/Searchbar"
import { Btn, Container, Img } from "./App.styled"
import {getPhotos} from "../api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

export class App extends Component  {
  state = {
    page: 1,
    photos : null,
    filter:"",
    showModal : false,
    modalInfo : null,
    status: "idle"
  }
  async componentDidUpdate(_, prevState){
  if (prevState.page !== this.state.page ||
      prevState.filter !== this.state.filter) {
        this.setState({ status:"loading"})
        try {
          const photos = await getPhotos(this.state.filter,this.state.page)
          this.setState({photos: photos.hits, status:"success"})
        } catch (error) {
          this.setState({ status:"error"})
        }
       
  }
  }
  loadMore = () =>{
   this.setState(prevState =>({
     page: prevState.page + 1
   }))
   
  }
  toggleModal = () =>{
    console.log("asd");
    this.setState(state =>({
      showModal : !state.showModal
    }))
  }
  handleSubmit =  async text =>{
    this.setState({ 
      status:"loading",
      filter : text,
      page:1})
    try {
      const photos = await getPhotos(text,this.state.page)
      console.log('photos: ', photos);
      this.setState({photos: photos.hits, status:"success"})
    } catch (error) {
      this.setState({ status:"error"})
    }


  }
  materialInfo = (info) => {
    this.setState({modalInfo: info})
  }
  


  render(){
    const {showModal,status,modalInfo,photos} = this.state
  return (
    
    <Container>

    
      {showModal && <Modal onClose = {this.toggleModal}><Img src={modalInfo.largeImageURL}/></Modal> }
      <Searchbar onSubmit = {this.handleSubmit}/>
      {status === 'success' && <ImageGallery materials={photos} toggleModal = {this.toggleModal} materialInfo = {this.materialInfo}/>}
      {status === 'loading' && <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />}
      <Btn type="button" onClick={this.loadMore}>LoadMore</Btn>
    </Container>
   
  )};
};
