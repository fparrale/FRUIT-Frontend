import { ComponentFixture, TestBed } from '@angular/core/testing';
import CreateGameRoomComponent from './create-game-room.component';


describe('CreateGameRoomComponent', () => {
  let component: CreateGameRoomComponent;
  let fixture: ComponentFixture<CreateGameRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGameRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGameRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
