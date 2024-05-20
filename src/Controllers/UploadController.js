const port = process.env.PORT || 4000;

class UploadController {
    // [POST] /upload
    async upload(req, res) {
        res.json({
            success: 1,
            image_url: `images/${req.file.filename}`,
        });
    }
}

module.exports = new UploadController();
