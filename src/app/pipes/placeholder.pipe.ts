import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'placeholder'})
export class PlaceHolderPipe implements PipeTransform {
    transform(value: string, defect: string): string {
        return (value)? value: defecto;
    }
}