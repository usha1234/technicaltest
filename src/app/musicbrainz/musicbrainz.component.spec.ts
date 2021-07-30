import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicbrainzComponent } from './musicbrainz.component';

describe('MusicbrainzComponent', () => {
  let component: MusicbrainzComponent;
  let fixture: ComponentFixture<MusicbrainzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicbrainzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicbrainzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
