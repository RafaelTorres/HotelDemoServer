// Controllers
import BaseController from './base.controller';

// Models
import HotelModel from '../models/Hotel';

// Utils

class HotelController extends BaseController {

  // Params permitted
  whitelist = [
    'name',
    'price',
    'stars',
    'images',
    'amenities',
    'address',
    'city',
    'state',
    'country',
    'latitude',
    'longitude',
    'phone',
    'website',
  ];

  _fetch = async (req, res, next) => {
    // Prepare query params
    let queryParams = {};

    // Get URL params
    const { id } = req.params;

    // Get Query Params
    const params = this.checkParams(req.query, this.whitelist);

    if (typeof id !== 'undefined') {
      // Search hotel by id send from client
      queryParams._id = id;
    }else if(Object.keys(params).length) {
      // Search hotel by query params send from client
      queryParams['$or'] = Object.keys(params).map((key) => {
        return {
          [key]: new RegExp(params[key], 'i'),
        };
      });
    }

    try {
      res.json(
        this.formatApiResponse(
          await HotelModel.find(queryParams)
        )
      );
    } catch (err) {
      err.status = err.name ==='CastError' ? 404 : 500;
      next(err);
    }
  }

  _create = async (req, res, next) => {
    // Get Body Params
    const params = this.checkParams(req.body.data, this.whitelist);

     try {
      await HotelModel.create(params, (err, todo) => {
        if (err) return next(err);
        // saved!
        return res.status(201).json(
          this.formatApiResponse(todo, null, 201)
        );
      });
    } catch(err) {
      next(err);
    }
  }

  _update = async (req, res, next) => {
    // Get URL params
    const { id } = req.params;

    // Get Body Params
    const params = this.checkParams(req.body.data, this.whitelist);

    if (!id) {
      return res.status(403).json(
        this.formatApiResponse([], 'Hotel id is required', 403)
      );
    }

    try {
      res.status(200).json(
        this.formatApiResponse(await HotelModel.update({ _id: id }, params))
      );
    } catch (err) {
      next(err);
    }
  }

  _delete = async (req, res, next) => {
    // Get URL params
    const { id } = req.params;

    if (!id) {
      return res.status(403).json(
        this.formatApiResponse([], 'Hotel id is required', 403)
      );
    }

    try {
      await HotelModel.remove({ _id: id }, (error, todo) => {
          if (error) {
            return next(error);
         }

         return res.json(
           this.formatApiResponse(todo)
         );
      });
    } catch(err) {
      next(err);
    }
  }
}

export default new HotelController();
