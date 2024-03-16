const newLocal = "@angular/core/testing";
import { ComponentFixture, TestBed } from newLocal;

import { EmpleadosComponent } from './empleados.component';

async () => {
  describe
}
("EmpleadosComponent", () => {
  let component: EmpleadosComponent;
  let fixture: ComponentFixture<EmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
