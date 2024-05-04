import axios from "axios";
export const uploadImageToServer = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  //formData.append(json형식으로 string 넣기)
  try {
    const response = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
