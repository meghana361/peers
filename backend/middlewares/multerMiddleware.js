import multer from "multer";

// Multer setup to handle image file upload
const storage = multer.memoryStorage();
const upload = multer({ storage }).single("img"); 
export default upload;
