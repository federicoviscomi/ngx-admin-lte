import { Router } from '@angular/router';
export declare class MenuService {
    private router;
    private current;
    constructor(router: Router);
    setCurrent(menu: any): void;
    getCurrent(): any;
}