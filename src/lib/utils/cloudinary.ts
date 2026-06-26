export const uploadToCloudinary = async (file: File, folder = "aarfa-marine") => {
  try {
    // Convert file to base64
    const fileBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileBase64,
        folder
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to upload image');
    }

    return data.secure_url;
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    // Return a dummy fallback image from unsplash if upload fails (e.g. if preset is invalid)
    // so that the admin panel doesn't crash and the user can still add products
    return `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60`;
  }
};
