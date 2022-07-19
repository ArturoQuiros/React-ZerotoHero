export const fileUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningúna archivo a subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dfes8qaqo/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir imagen");
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
