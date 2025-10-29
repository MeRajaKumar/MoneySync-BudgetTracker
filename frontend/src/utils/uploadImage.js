// chatGpt
import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance"; // <- MUST be relative

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  // backend field name may vary; use the exact field name expected by your server (e.g. 'image' or 'file' or 'Image')
  formData.append("Image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // axios will set proper boundary automatically; you can omit this header too
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading the image:", error);
    throw error;
  }
};

export default uploadImage;




// import { API_PATHS } from "./apiPaths";
// import axiosInstance from "./axiosInstance";


// const uploadImage = async (imageFile) => {
//     const formData =  new FormData();
//     // append image file to form data
//     formData.append('Image',imageFile);

//     try{
//         const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data', // set header for file uplaod
//             },

//         });
//         return response.data;

//     } catch (error){
//         console.error('Error uploading the image:', error);
//         throw error; // rethrow error for handling 
//     }
// };

// export default uploadImage;