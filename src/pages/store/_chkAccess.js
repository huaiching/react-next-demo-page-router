import { getUser } from "@/pages/store/_user";


/**
 * 檢查有無權限
 * @param access 檢核權限代碼
 * @returns true.有權限 / false.無權限
 */
export const haveAccess = (access) => {
    // 取得 用戶資料
    const user = getUser()
    
    // 空值不檢核
    if (access === null || access == undefined || access === "") {
        return true
    }
    // 目前寫死無 NB 權限
    if (!user.access.includes(access)) {
        return false
    } 
    
    return true
}