import { Component } from '@angular/core';

import { MachineService } from '../services/machine.service';
import { Machine } from '../shared/machine';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
})
export class MachineListComponent {
  machines: Machine[] = [];
  noMachines: boolean = false;
  error: boolean = false;

  ngOnInit() {
    this.getMachineList();
  }

  constructor(private machineService: MachineService) {}

  getMachineList() {
    return this.machineService.GetMachines().subscribe({
      next: (data: any) => (this.machines = data),
      error: (error: any) => ((this.noMachines = true), (this.error = error)),
    });
  }
}
