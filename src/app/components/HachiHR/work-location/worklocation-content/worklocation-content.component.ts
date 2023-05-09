import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-worklocation-content',
  templateUrl: './worklocation-content.component.html',
  styleUrls: ['./worklocation-content.component.scss']
})
export class WorklocationContentComponent implements OnInit {

  expanded = false;
  public data: any[] = [
    {
      id: 1,
      name: "Văn phòng",
      title: "VP",
      managerId: null,
    },
    {
      id: 2,
      name: "Văn phòng 40",
      title: "HW40",
      managerId: 1,
    },
    {
      id: 3,
      name: "Văn phòng 42",
      title: "LO42",
      managerId: 1,
    },
    {
      id: 10,
      name: "Kho",
      title: "DP",
      managerId: null,
    },
    {
      id: 4,
      name: "Kho 42",
      title: "DP01",
      managerId: 10,
    },
    {
      id: 5,
      name: "Kho online",
      title: "ON01",
      managerId: 10,
    },
  ];

  public VP = [
    'Văn phòng 1',
    'Văn phòng 2',
    'Văn phòng 3',
    'Văn phòng 4',
  ]
  public TT = [
    'TP.HCM',
    'Bình Thuận',
    'Bến Tre',
    'Vũng Tàu',
  ]
  public QH = [
    'Tân Bình',
    'Gò vấp',
    'Phan thiết',
    'Bà rịa',
  ]
  public PX = [
    'Phú Trinh',
    'Phú thủy',
    'Mũi né',
    'Lạc đạo',
  ]
  public Ttrang = [
    'Chờ duyệt',
    'Đang áp dụng'
  ]
  

 
  ngOnInit(): void {
    
  }
}
