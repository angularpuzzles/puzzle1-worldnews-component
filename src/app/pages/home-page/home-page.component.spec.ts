import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { NewspaperComponent } from '../../components/newspaper/newspaper.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let element: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, NewspaperComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display title text', () => {
    const title = element.nativeElement.querySelector('.title');
    expect(title.textContent).toContain("Breaking World News");
  });
});
