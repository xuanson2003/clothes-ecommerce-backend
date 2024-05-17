class UploadController {
    // [POST] /upload
    async upload(req, res) {
        res.json({
            success: 1,
            image_url: `http://localhost:4000/images/${req.file.filename}`,
        });
    }
}

module.exports = new UploadController();
