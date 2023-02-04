import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Machine } from '../shared/machine';

import { MachineService } from './machine.service';

describe('MachineService', () => {
  let httpController: HttpTestingController;
  let service: MachineService;
  let url =
    'https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MachineService);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GetMachines and return an array of Machines', () => {
    let machines: Machine[] = [
      { id: '1', name: 'GF3015', manufacturer: 'HGTech' },
      { id: '2', name: 'SF30015F3', manufacturer: 'Senfeng' },
    ];
    service.GetMachines().subscribe((res) => {
      expect(res).toEqual(machines);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    req.flush(machines);
  });

  it('should call GetMachines and return an server error', () => {
    let body: any;
    let serverError = { status: 404, statusText: 'Not Found' };

    service.GetMachines().subscribe({
      next: () => {},
      error: (error: any): void => {
        body = error;
      },
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    const expected: any = {
      code: 'validationFailed',
      message: 'Invalid input',
    };
    req.flush(expected, serverError);

    expect(body).toEqual(
      `Error Code: ${serverError.status} - Message: ${serverError.statusText}`
    );
  });
});
