import { Request, Response, Router } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as executeController from '../controllers/execute/execute';
function generateStaticRoutes(router: Router) {
    //                   ----- GETs -----
    router.get('/execute', executeController.execute);
    router.get('/graph', executeController.graph);

    //                   ----- POSTs -----
    // router.post('/example',  exampleController.example);

}

export default generateStaticRoutes;
