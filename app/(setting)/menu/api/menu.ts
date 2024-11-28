import axios, {AxiosError} from "axios";
import { api, updateAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { menuList, menuGroup, menu } from "@/utils/model/menu";

const storeId = 'user_1';

// 전체 메뉴 조회
export const getAllMenu = async(): Promise<menuList> => {
  try{
    const response = await api.get<menuList>(`/store/read/menu/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '전체 메뉴 정보 조회 실패 ')
    }
    throw error
  }
}

interface singleMenu {
  menu: menu,
  menuGroups: menuGroup[]
}

// 메뉴 1건 조회 - 수정시 사용
export const getSingleMenu = async(menuId: number): Promise<singleMenu> => {
  try{
    const response = await api.get<singleMenu>(`/store/update-menu/${menuId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '전체 메뉴 정보 조회 실패 ')
    }
    throw error
  }
}

// 특정 메뉴 그룹에 해당하는 메뉴 리스트만 조회할때 사용
export const getGroupMenus = async(groupId: number): Promise<menuList['menus']> => {
  try{
    const response = await api.get<menuList['menus']>(`/store/read/menu/${groupId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 기반 메뉴 정보 조회 실패 ')
    }
    throw error
  }
}

// 메뉴 그룹 리스트 조회
export const getGroupMenuOnly = async(): Promise<menuGroup[]> => {
  console.log("getGroupMenuOnly");
  try{
    const response = await api.get<menuGroup[]>(`/store/create/menu/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 정보 조회 실패 ')
    }
    throw error
  }
}

//신규 메뉴 추가
export const addMenu = async(formData: Partial<menu>) : Promise<void> => {
  try{
    const response = await api.post<void>(`/store/create-menu/${storeId}`, formData);
    console.log('MenuId Array Data:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '신규 메뉴 추가 실패 ')
    }
    throw error
}
}

interface UpdateMenu {
  menuId: number,
  formData: Partial<menu>
}

//메뉴 정보 수정
export const updateMenu = async({menuId, formData}: UpdateMenu) : Promise<void> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<void>(`/store/update-menu/${menuId}`, formData);
    console.log('MenuId Array Data:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 정보 수정 실패 ')
    }
    throw error
}
}

interface UpdateSingleSoldOutInput{
  menuId: number;
  isSoldOut: boolean;
}

//개별 품절 업데이트
export const updateSingleSoldOut = async({menuId, isSoldOut}: UpdateSingleSoldOutInput) : Promise<Partial<UpdateSingleSoldOutInput>> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<Partial<UpdateSingleSoldOutInput>>(`/store/update/menu-sold-out/${menuId}`, {
      isSoldOut: isSoldOut
    });
    console.log('MenuId Array Data:', isSoldOut)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 개별 품절 업데이트 실패 ')
    }
    throw error
}
}

interface sendMenuIds{
  menuIds: number[];
  action: string;
}

//다중 품절 업데이트
export const updateMultifleSoldOut = async(selectedIds: number[]) : Promise<sendMenuIds> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<sendMenuIds>(`/store/read/menu/action`, {
      menuIds: selectedIds,
      action: 'Soldout'
    });
    console.log('MenuId Array Data:', selectedIds)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 다중 품절 업데이트 실패 ')
    }
    throw error
}
}

//다중 삭제 업데이트
export const updateMultifleDelete = async(selectedIds: number[]) : Promise<sendMenuIds> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<sendMenuIds>(`/store/read/menu/action`, {
      menuIds: selectedIds,
      action: 'delete'
    });
    console.log('MenuId Array Data:', selectedIds)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 다중 삭제 업데이트 실패 ')
    }
    throw error
}
}