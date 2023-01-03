import { Component } from "react"
import { createPortal } from "react-dom"
import { Img, Mod, Overlay } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyDown)
    }
    // componentWillUnmount() {
    //     window.removeEventListener(this.handleKeyDown)
    // }

    handleKeyDown =  e => {
        if (e.code === "Escape") {
            console.log("closeModal");
            // this.props.Onclose()
        }    
    }
    onOverlayClick = (e) =>{
        console.log('click');
        if (e.currentTarget === e.target) {
              // this.props.Onclose()
            
        }
    }
    render(){ 
    return createPortal(
        <Overlay onClick={this.onOverlayClick}>
    <Mod>
    <Img src={''} alt = {''}/>
    </Mod>
</Overlay>,
    modalRoot,
    )}}