import {Router} from 'express';
import multer from 'multer';
import FileModel from '../Models/FileUploadModel.js'

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({storage:storage});

router.post('/upload', upload.single('file'), async (req,res)=>{
    try{
        const newFile = new FileModel({
            filename: req.file.filename,
            contentType: req.file.mimetype,
            data: req.file.buffer
        });
        await newFile.save();
        res.status(201).send('File uploaded successfully');
    }catch(error){
        console.log(error);
        res.status(500).send('Error uploading file');
    }
});

router.delete('/delete/:filename', async (req,res)=>{
    try{
        await FileModel.findOneAndDelete({filename:req.params.filename});
        res.status(200).send('File deleted successfully');
    }catch(error){
        console.log(error);
        res.status(500).send('Error deleting file')
    }
});

export default router;