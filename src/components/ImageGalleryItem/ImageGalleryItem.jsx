import PropTypes from "prop-types";
import { Image, Item } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ material, materialInfo, toggleModal }) => {
  function handleClick(e) {
    toggleModal()
    return materialInfo(material)
  }

  return (
    <Item>
      <Image onClick={handleClick.bind(this)} src={material.webformatURL} />
    </Item>
  )
}


ImageGalleryItem.propTypes ={
  toggleModal: PropTypes.func.isRequired,
  materialInfo: PropTypes.func.isRequired,
  material: PropTypes.object.isRequired
}