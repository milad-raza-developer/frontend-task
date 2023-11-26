import { CLOUDINARY_URL, CLOUDINARY_PRESET, CLODINARY_CLOUD_NAME } from "../constants/constants";

const uploadImage = async (image) => {
    let url;
    const data = new FormData();
    data.append("file", image);
    data.append("filename", image.name);
    data.append("upload_preset", CLOUDINARY_PRESET);
    data.append("cloud_name", CLODINARY_CLOUD_NAME);
    await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        url = data.secure_url;
      })
      .catch((err) => {
        err = err;
      });
    return url;
  };

  export {uploadImage}