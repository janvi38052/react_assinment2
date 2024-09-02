const stationService = require('../services/stationService');
const statusCode = require('../utils/statusCode');

class StationController {
  async createStation(req, res, next) {
    try {
      const station = await stationService.createStation(req.body);
      res.status(statusCode.CREATED).json(station);
    } catch (error) {
      next(error); // Passes the error to the next middleware (usually an error handler)
    }
  }

  async getAllStations(req, res, next) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 10;

      const stations = await stationService.getAllStations(page, pageSize);
      res.status(statusCode.OK).json(stations);
    } catch (error) {
      next(error); // Passes the error to the next middleware
    }
  }

  async getStationById(req, res, next) {
    try {
      const station = await stationService.getStationById(req.params.id);
      res.status(statusCode.OK).json(station);
    } catch (error) {
      next(error); // Passes the error to the next middleware
    }
  }

  async updateStation(req, res, next) {
    try {
      const station = await stationService.updateStation(req.params.id, req.body);
      res.status(statusCode.OK).json(station);
    } catch (error) {
      next(error); // Passes the error to the next middleware
    }
  }

  async deleteStation(req, res, next) {
    try {
      await stationService.deleteStation(req.params.id);
      res.status(statusCode.NO_CONTENT).send(); // Responds with no content on successful deletion
    } catch (error) {
      next(error); // Passes the error to the next middleware
    }
  }
}

module.exports = new StationController();
