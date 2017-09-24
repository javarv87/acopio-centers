import { Injectable } from '@angular/core';
import { Centro } from './../centro';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CentrosService {
  private basePath= '/centros';
  acopioCenters: FirebaseListObservable<Centro[]>;
  acopioCenter: FirebaseObjectObservable<Centro>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.acopioCenters = this.db.list(this.basePath);
  }

  getAcopioCenters(query = {}): FirebaseListObservable<Centro[]> {
    this.acopioCenters = this.db.list(this.basePath, {
      query: query
    });
    return this.acopioCenters;
  }

  getAcopioCenter(key: string): FirebaseObjectObservable<Centro> {
    const acopioCenterPath = `${this.basePath}/${key}`;
    this.acopioCenter = this.db.object(acopioCenterPath);
    return this.acopioCenter;
  }

  createAcopioCenter(acopioCenter): void {
    this.acopioCenters.push(acopioCenter)
      .catch(error => this.handleError(error));
  }

  updateAcopioCenter(key: string, value: any): void {
    this.acopioCenters.update(key, value)
      .catch(error => this.handleError(error));
  }

  handleError(error: any): void {
    console.log(error);
  }
}
