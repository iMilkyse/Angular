import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {

  constructor(private router: Router) {
  }

  innerValue: boolean | undefined;

  onChangeCallback = (v:any) => {
    if (this.innerValue){
      this.router.navigate(['aboutFilm']);
    }else{
      this.router.navigate(['addFilm'])
    }
  };
  onTouchedCallback = () => {

  };



  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  toggle(value: boolean): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
      this.onTouchedCallback();
    }
  }


}
