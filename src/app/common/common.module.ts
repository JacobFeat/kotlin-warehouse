import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MaterialModule],
  exports: [HeaderComponent],
})
export class CommonModule {}
