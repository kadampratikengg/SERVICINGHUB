// client/src/utils/cloudinary.js

/**
 * Uploads an image file to Cloudinary using unsigned upload preset.
 * Fallback to FileReader base64 Data URL if Cloudinary preset is not configured.
 *
 * @param {File} file - The image file to upload
 * @param {string} [cloudName] - Optional Cloudinary cloud name
 * @param {string} [uploadPreset] - Optional Cloudinary unsigned upload preset
 * @returns {Promise<string>} The uploaded image URL or Base64 data string
 */
export const uploadImageToCloudinary = async (
  file,
  cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'demo',
  uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || 'unsigned_preset'
) => {
  if (!file) return null;

  try {
    // 1. Try Cloudinary Unsigned Upload Endpoint
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      }
    }
  } catch (error) {
    console.warn('Cloudinary upload API fallback to base64 reader:', error);
  }

  // 2. Fallback: Convert file to Base64 Data URL for instant browser rendering & localStorage persistence
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};
