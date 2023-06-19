import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@learn-nx/shared/material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedComponentsModule {}
