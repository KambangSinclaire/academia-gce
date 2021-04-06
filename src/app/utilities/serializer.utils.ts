import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serializer {
  serializeTableDataToRender(
    displayedColumns: string[],
    rawData: [] | {} | any
  ) {
    let columnHeadingsToDisplay: string[] = [];

    if (rawData.length > 1) {
      columnHeadingsToDisplay.push('select');
      for (const [key] of Object.entries(rawData[0])) {
        if (
          displayedColumns.includes(key) &&
          !columnHeadingsToDisplay.includes(key)
        ) {
          columnHeadingsToDisplay.push(key);
        }
      }
    }
    columnHeadingsToDisplay.push('preview');
    return columnHeadingsToDisplay;
  }

  filterHeadings(displayedColumns: string[], columns: any) {
    return displayedColumns.filter((key) => {
      return columns[key];
    });
  }

  serializeChartData() {}
}
