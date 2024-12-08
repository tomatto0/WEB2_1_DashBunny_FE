export interface storeRegist{
  storeName: string,
  address: string,
  latitude: number,
  longitude: number,
  storeRegistrationDocs: File | null,
  storeStatus: string,
  userName: string,
  categories: string[],
}
