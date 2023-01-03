import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Gallery } from "./ImageGallery.styled"


export const ImageGallery = ({materials}) =>{
    console.log('materials: ', materials);
    
    return <Gallery>
        {materials.map(material =>{
            return <ImageGalleryItem key={material.id} material = {material}/>
        })}
    </Gallery>
}