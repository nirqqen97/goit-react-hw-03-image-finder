import { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from "prop-types";
import { Mod, Overlay } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    componentDidMount() {        
        window.addEventListener('keydown',this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
      }

    handleKeyDown =  e => {

        if (e.code === "Escape") {
            console.log("closeModal");
            this.props.onClose()
        }    
    }
    onOverlayClick = (e) =>{
        console.log('click');
        if (e.currentTarget === e.target) {
              this.props.onClose()
            
        }
    }
    render(){ 
    return createPortal(
        <Overlay onClick={this.onOverlayClick}>
    <Mod>{this.props.children}</Mod>
</Overlay>,
    modalRoot,
    )}}


Modal.propTypes = {
    onCLose: PropTypes.func.isRequired 
}