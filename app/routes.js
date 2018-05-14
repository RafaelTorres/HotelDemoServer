// Dependencies
import { Router } from 'express';

// Controllers
import MetaController from './controllers/meta.controller';
import HotelController from './controllers/hotels.controller';

// middlewares
import ErrorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', MetaController.index);

// Hotel Routes
routes.get('/hotels', HotelController._fetch);
routes.get('/hotel/:id?', HotelController._fetch);
routes.post('/hotel', HotelController._create);
routes.put('/hotel/:id?', HotelController._update);
routes.delete('/hotel/:id?', HotelController._delete);

routes.use(ErrorHandler);

export default routes;
