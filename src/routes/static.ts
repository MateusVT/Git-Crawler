import { Router } from 'express';
import * as executeController from '../controllers/execute/execute';
import * as testsController from '../controllers/execute/tests';

function generateStaticRoutes(router: Router) {
    
    //                   ----- GETs -----
    router.get('/execute', executeController.execute);
    // router.get('/test', testsController.getStars);
    router.get('/limit', executeController.limit);

}

export default generateStaticRoutes;
