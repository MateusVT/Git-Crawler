import { Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as executeController from '../controllers/execute/execute';
import * as statisticsController from '../controllers/execute/statistics';
import * as testsController from '../controllers/execute/tests';

function generateStaticRoutes(router: Router) {
    
    //                   ----- GETs -----
    router.get('/execute', executeController.execute);
    router.get('/statistics', statisticsController.execute);
    router.get('/test', testsController.loadRepositoriesSampleDataByLanguage);
    router.get('/limit', executeController.limit);


    //                   ----- POSTs -----
    // router.post('/example',  exampleController.example);

}

export default generateStaticRoutes;
