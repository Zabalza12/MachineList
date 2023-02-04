import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineService } from '../services/machine.service';
import { Machine } from '../shared/machine';

import { MachineListComponent } from './machine-list.component';

describe('MachineListComponent', () => {
  let component: MachineListComponent;
  let fixture: ComponentFixture<MachineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MachineListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
