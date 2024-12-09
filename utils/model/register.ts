export interface storeRegist{
  request: {storeName: string,
    address: string,
    latitude: number,
    longitude: number,
    storeRegistrationDocs: null,  
    categories: string[],}
  
  docsImageFile: File | null,

}
