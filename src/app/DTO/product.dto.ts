export class Product {
  StatusCode: number = 0;
  ErrorString: any;
  ObjectReturn?: {
    Code: string 
    Barcode: string 
    ProductName: string 
    Alias: string 
    ImageThumb: string 
    ImageSmall: string 
    ImageLarge: string 
    FreeShippingImage: string 
    TypeData: number ;
    StatusID: number ;
    IsNew: boolean ;
    IsHachi24h: boolean ;
    IsBestPrice: boolean ;
    IsSpecial: boolean ;
    IsGift: boolean ;
    IsPromotion: boolean ;
    PromotionID: number ;
    GroupIDList?: [];
    IsCombo: boolean ;
    Price: number ;
    PriceBase: number ;
    PriceVIP: number ;
    Discount: number ;
    CategoryID: number ;
    OrginalID: number ;
    OrginalName: string 
    BrandID: number ;
    BrandName: string 
  }
  }

  export class ProductList {
    StatusCode: number = 0;
    ErrorString: any;
    ObjectReturn?: {
      Data: [
        {
          Code: string,
          Barcode: string,
          Poscode: string,
          ProductName:string
        }
      ];
      Total: number;
      AggregateResults: null;
      Errors: null;
    }
  }

  // export class UpdateProduct{
  //   DTO?: {
  //     Code: number 
  //     Barcode: number 
  //     ProductName: string 
  //     Alias: string 
  //     ImageThumb: string 
  //     ImageSmall: string 
  //     ImageLarge: string 
  //     FreeShippingImage: string 
  //     TypeData: number ;
  //     StatusID: number ;
  //     IsNew: boolean ;
  //     IsHachi24h: boolean ;
  //     IsBestPrice: boolean ;
  //     IsSpecial: boolean ;
  //     IsGift: boolean ;
  //     IsPromotion: boolean ;
  //     PromotionID: number ;
  //     GroupIDList?: [];
  //     IsCombo: boolean ;
  //     Price: number ;
  //     PriceBase: number ;
  //     PriceVIP: number ;
  //     Discount: number ;
  //     CategoryID: number ;
  //     OrginalID: number ;
  //     OrginalName: string 
  //     BrandID: number ;
  //     BrandName: string ;
  //   }
  //   Properties?: String []
  // }



  
  export class User{
    id: number = 0;
    name: string = "";
    username: string = "";
    email: string = "";
    address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat:string;
        lng:string;
      }
    }
  }

  export class Task{
    userId: number = 0;
    id:number = 0;
    title: string = "";
    completed: boolean = false;
  }
  