import { Modal } from "../Modal/Modal";
import { Image, Item } from "./ImageGalleryItem.styled"



export const ImageGalleryItem = ({material}) =>{
    function handleCLick(e) {
        console.log(material.id);
    }
    return <Item>
       <Image onClick={handleCLick} src= {material.webformatURL}/>
        </Item>
}