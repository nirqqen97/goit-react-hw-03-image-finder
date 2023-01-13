import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Gallery } from "./ImageGallery.styled"


export const ImageGallery = ({materials, materialInfo,toggleModal}) =>{
    return <Gallery>
        {materials.map(material =>{
            return <ImageGalleryItem key={material.id} material = {material} materialInfo = {materialInfo} toggleModal = {toggleModal}/>
        })}
    </Gallery>
}

ImageGallery.propTypes ={
        toggleModal: PropTypes.func.isRequired,
        materialInfo: PropTypes.func.isRequired,
        materials: PropTypes.array.isRequired
}