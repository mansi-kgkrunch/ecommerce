import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import auth from "../middleware/auth.js";
import MetaController from "../controllers/MetaController.js";

const route = express.Router();

route.use(cors());
route.use(
  bodyParser.json({
    extended: true,
  })
);
route.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*------------ Multer Images Code  ------------ */

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "storage/public/images/Slider");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    if (ext == "jpg" || ext == "jpeg" || ext == "png") {
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    } else {
      cb(new Error("Not valid extention..."), false);
    }
    //  else {
    //     cb(null, `extra/${file.fieldname}-${Date.now()}.${ext}`)
    // }
  },
});
const upload = multer({
  storage: multerStorage,
});
const UploadFiles = upload.any({
  name: "images",
  arrayKey: 'slider', 
});


/*------------ Slider Data Routes ------------ */

/*------------ Add Slider Data Routes ------------ */
route.post("/add",UploadFiles,MetaController.addMeta);

/*------------ get Meta Data Routes ------------ */

route.get("/getdata",MetaController.getMetaData);

/*------------ multiple delete data  ------------ */

// route.delete("/mlpdelete",auth, MetaController.multipleDeleteMete);

/*------------ Delete Meta Data Routes ------------ */

route.delete("/del/:id",auth, MetaController.delMeta);

/*------------ fronten Routes ------------ */

/*------------ Get Meta Routes ------------ */
route.get("/",MetaController.getMeta);


export default route;