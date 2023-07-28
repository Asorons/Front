import {Component} from '@angular/core';
@Component({
    selector:'app-footer',
    templateUrl:'footer.componet.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    autor: any = {nombre:'Juan', apellido:'Guzman'};
}
