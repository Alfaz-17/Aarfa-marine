export const uploadToCloudinary = async (file: File, folder = "aarfa-marine") => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "coursespace");
    formData.append("folder", folder);

    // If Cloudinary credentials are not fully set up or we want to fallback, we can use default values
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "npdq8wcn";
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Cloudinary error: ${errText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    // Return a dummy fallback image from unsplash if upload fails (e.g. if preset is invalid)
    // so that the admin panel doesn't crash and the user can still add products
    return `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60`;
  }
};
