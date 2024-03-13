import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ImgUrl } from '../../shared/constants';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display title text', () => {
    const title = element.nativeElement.querySelector('.title');
    expect(title.textContent).toContain("World News");
  });

  it('Should display Globe Logo image', () => {
    const image = element.nativeElement.querySelector('.logo');
    expect(image.src).toContain(`${ImgUrl}/GlobeLogo.png`);
  });

});
