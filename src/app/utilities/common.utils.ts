import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilities {
  setToStorageAndEncode(payload: string | {}, storeName: string | {}) {
    if (typeof payload === 'string' && typeof storeName === 'string') {
      try {
        sessionStorage.setItem(storeName, btoa(payload));
        return true;
      } catch (error) {
        return false;
      }
    } else {
      for (const [key, value] of Object.entries(payload)) {
        try {
          sessionStorage.setItem(key, btoa(value));
        } catch (error) {
          return error;
        }
      }
    }
  }

  getFromStorageAndDecode(name: string | {}) {
    if (typeof name === 'string') {
      let element;
      try {
        element = sessionStorage.getItem(name);
        if (element !== null && element !== undefined) {
          element = atob(element);
          return element;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    } else {
      const storeElements: any = {};
      for (let [key, value] of Object.entries(name)) {
        try {
          value = sessionStorage.getItem(value as string);
          if (value !== null && value !== undefined) {
            storeElements[key] = atob(value as string);
          } else {
            // console.log('Some elements are undefined, e.g', key);
          }
        } catch (error) {
        }
      }
      return storeElements;
    }
  }
}