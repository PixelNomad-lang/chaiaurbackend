import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_KEY, 
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET, // Fixed typo here (replaced '/' with ',')
});

const uploadOnCloudinary = async (localFilePath) => { // Fixed 'asyn' to 'async'
  try {
    if (!localFilePath) return null; // Check if file path exists
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });
    console.log("file is uploaded on", response.url);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error); // Error logging
    fs.unlinkSync(localFilePath); // Remove local file if upload fails
  }
};

// Example usage
cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    if (error) {
      console.error("Error uploading the image:", error);
    } else {
      console.log("Upload result:", result);
    }
  }
);

export { uploadOnCloudinary };
