import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{

    canDeactivate(
        component: CreateEmployeeComponent
    ) : /** Observable<boolean> | Promise<boolean> | */ boolean {
        console.log(component.createEmployeeForm.dirty);
        if(component.createEmployeeForm.dirty)
        {
            return confirm('Are you sure you want to discard changes?');
        }
        return true;
    }
}