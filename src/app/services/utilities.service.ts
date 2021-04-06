import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessagesComponent } from '../components/shared/messages/messages.component';
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private messageContainer: MatDialog,
    private loginMessageContainer: MatSnackBar
  ) { }

  private baseUrl: any = {};
  private endpoints: any = {};
  getFromStorageAndDecode() {
    throw new Error('Method not implemented.');
  }

  messageService(
    status: string,
    message: string,
    horizontalPosition: any = undefined,
    verticalPosition: any = undefined
  ): MatSnackBarRef<MessagesComponent> {
    // openFromComponent
    return this.loginMessageContainer.openFromComponent(MessagesComponent, {
      data: { message, status },
      duration: 30000,
      panelClass: status,
      horizontalPosition: horizontalPosition || 'center',
      verticalPosition: verticalPosition || 'top',
    });
  }
}
