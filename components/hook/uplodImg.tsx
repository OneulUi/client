export const uploadImageToServer = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch("http://your-server-url/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("성공!");
    } else {
      console.error("실패:", response.statusText);
    }
  } catch (error) {
    console.error("에러", error);
  }
};
