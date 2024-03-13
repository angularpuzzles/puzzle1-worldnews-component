import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { ImgUrl } from '../../shared/constants';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display title text', () => {
    const title = element.nativeElement.querySelector('.title');
    expect(title.textContent).toContain('Page Not Found');
  });

  it('Should display 404 image', () => {
    const image = element.nativeElement.querySelector('.notfound img');
    expect(image.src).toContain(`${ImgUrl}/404.png`);
  });

});
