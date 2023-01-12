import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/"

export const getPhotos = async( text,page )=>{
    try {
      const response = await axios.get(`?q=${text}&page=1&key=31111811-a873af1301b96cbe5261cb9af&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)
      return response.data
    } catch (error) {
      console.error(error)
    }
}







// export async function getPhotos() {
//     try {
//       const response = await axios.get('?q=cat&page=1&key=31111811-a873af1301b96cbe5261cb9af&image_type=photo&orientation=horizontal&per_page=12')
//       console.log(response.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }



