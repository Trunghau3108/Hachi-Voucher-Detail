import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organi-content',
  templateUrl: './organi-content.component.html',
  styleUrls: ['./organi-content.component.scss']
})
export class OrganiContentComponent implements OnInit {
  expanded1 = false;
  expanded2 = false;
  onToggle(rowIndex: number) {
    this.data[rowIndex].showPopup = !this.data[rowIndex].showPopup;
  }
  
  getData() {
    // Lấy dữ liệu từ nguồn
    this.data.forEach(item => {
      item.showPopup = false;
    });
  }
  public data: any[] = [
    {
      id: 1,
      name: "Văn phòng",
      title: "VP",
      managerId: null,
    },
    {
      id: 7,
      name: "Văn phòng",
      title: "VP",
      managerId: 1,
    },
    {
      id: 2,
      name: "Văn phòng 40",
      title: "HW40",
      managerId: 1,
    },
    {
      id: 15,
      name: "Văn phòng 40",
      title: "HW40",
      jobTitle: "Trưởng đơn vị",
      managerId: 2,
    },
    {
      id: 3,
      name: "Văn phòng 42",
      title: "LO42",
      managerId: 2,
    },
    {
      id: 4,
      name: "Kho 42",
      title: "DP01",
      managerId: 3,
    },
    {
      id: 5,
      name: "Kho online",
      title: "ON01",
      managerId: 2,
    },
    {
      id: 6,
      name: "Kho online",
      title: "ON01",
      managerId: 5,
    },
  ];
  ngOnInit(): void {
    this.getData();
  }
}
