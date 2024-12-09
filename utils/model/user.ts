export interface User {
  phone: string
  password: string | null
  name: string
  birthday: string
  email: string
  profileImageUrl: string
}

export interface Store{
  storeId: string
  storeName: string
  storeStatus: string
}