import { Image, Item } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ material, materialInfo, toggleModal }) => {
  function handleClick(e) {
    console.log(material)
    console.log('toggleModal(): ', toggleModal())
    return materialInfo(material)
  }

  return (
    <Item>
      <Image onClick={handleClick.bind(this)} src={material.webformatURL} />
    </Item>
  )
}