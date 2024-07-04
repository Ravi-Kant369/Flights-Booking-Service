const { StatusCodes } = require('http-status-code');

const { Booking } = require('../models');
const CrudRepository = require('./crud-repository');


class BookingRepository extends CrudRepository {
    constructor(){
        super(Booking);
    }
}


module.exports = {
    BookingRepository
}