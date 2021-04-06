import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class CrudHandlerService {

  private reference: AngularFireStorageReference;

  constructor(private fireStore: AngularFirestore, storage: AngularFireStorage) {
    this.reference = storage.ref(Math.floor(Math.random() * 100000).toString(36));
  }



  registerExam(details: any) {
    return this.fireStore.collection<any>('').add(details);
  }

  updateexam(exam: any) {
    return this.fireStore.collection<any>('').doc(exam.deliveryId).update(exam);
  }

  getAll(collectionName: string) {
    return this.fireStore.collection<any>(collectionName).snapshotChanges()
  }

  singleFileUploadService(event: any): AngularFireUploadTask {
    return this.reference.put(event.target.files[0])
  }

  multiFileUploadService(event: any): AngularFireUploadTask {
    return this.reference.put(event.target.files);
  }
}
