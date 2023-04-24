export class Product {
    Code: string = "";
    Barcode: string = "";
    ProductName: string = "";
    Alias: string = "";
    ImageThumb: string = "";
    ImageSmall: string = "";
    ImageLarge: string = "";
    FreeShippingImage: string = "";
    TypeData: number = 0;
    StatusID: number = 0;
    IsNew: boolean = false;
    IsHachi24h: boolean = false;
    IsBestPrice: boolean = false;
    IsSpecial: boolean = false;
    IsGift: boolean = false;
    IsPromotion: boolean = false;
    PromotionID: number = 0;
    GroupIDList?: [];
    IsCombo: boolean = false;
    Price: number = 0;
    PriceBase: number = 0;
    PriceVIP: number = 0;
    Discount: number = 0;
    CategoryID: number = 0;
    OrginalID: number = 0;
    OrginalName: string = "";
    BrandID: number = 0;
    BrandName: string = "";
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
  