import Meta from "../models/Meta.model.js";
import _ from "lodash";
import "dotenv/config";
import lodash from "lodash";
const { trim } = lodash;
export default class MetaController {
  /*----------------------- Add Meta Data -----------------------*/
  static async addMeta(req, res) {
    var body = req.body;
    var files = req.files;
    const images = _.first(files);
    var meta = await Meta.findOne({});
    try {
      if (body.slider_name) {
        var data = {
          status: body.status,
          slider_name: trim(body.slider_name),
          small_title: trim(body.small_title),
          large_title: trim(body.large_title),
          images: {
            name: images.filename,
            path: `${images.destination}/${images.filename}`,
          },
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        if (meta === null) {
          await Meta.create({
            block1: data,
          });
        } else {
          meta.block1.push(data);
          await meta.save();
        }
        res.json({
          status: true,
          message: "Slider add Successfully",
        });
      } else if (body.blog_name) {
        var blog_data = {
          status: body.status == "false" ? false : true,
          blog_name: trim(body.blog_name),
          title: trim(body.title),
          content: trim(body.content),
          images: {
            name: images.filename,
            path: `${images.destination}/${images.filename}`,
          },
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        if (meta === null) {
          var meta = await Meta.create({
            block2: blog_data,
          });
        } else {
          meta.block2.push(blog_data);
          await meta.save();
        }
        res.json({
          status: true,
          message: "Blog add Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: false,
        message: "Error in adding ",
        error: error,
      });
    }
  }

  /*----------------------- get Meta  Data -----------------------*/

  static async getMetaData(req, res) {
    try {
      var meta = await Meta.find({});
      res.json({
        status: true,
        meta: meta,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: false,
        message: "Error in adding ",
        error: error,
      });
    }
  }

  /*-----------------------Frontend Routes Funtions-----------------------*/

  /*----------------------- get Meta Data -----------------------*/

  static async getMeta(req, res) {
    try {
      var slider = await Meta.find({});
      res.json({
        status: true,
        message: "Blog get Successfully",
        slider: slider,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: false,
        message: "Error in adding ",
        error: error,
      });
    }
  }

/*----------------------- Detele Multiple Meta Data -----------------------*/
  // static async multipleDeleteMete(req, res) {
  //   const id = req.body.id;
  //   const product = await Meta.findOne({});
  //   console.log(product ,"hgd");
  //   try {
  //     if (product) {
  //       product.forEach((product) => {
  //         var Images = product.product_images;
  //         Images.forEach((image) => {
  //           unlink(`../server/${image.path}`, (err) => {
  //             if (err) throw err;
  //           });
  //         });
  //       });
  //     }
  //     await Meta.deleteMany({ _id: id });
  //     res.json({
  //       status: true,
  //       message: "Multiple Product Deleted Successfully",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.json({
  //       status: false,
  //       message: "Delete Failed ",
  //     });
  //   }
  // }

  /*----------------------- Detele Meta Data   -----------------------*/
  static async delMeta(req, res) {
    var id = req.params.id
    try {
        var meta = await Meta.findOne({})
        meta.block1.pull({
            _id: id
        })

        meta.block2.pull({
          _id : id
        })
        await meta.save()
        res.json({
            status: true,
            message: 'Meta Deleted Successfully'
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Error in deleting Meta',
            error: error
        })
    }
}

}
