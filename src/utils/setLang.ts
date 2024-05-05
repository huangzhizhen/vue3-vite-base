import i18n from '@/lang'
import { App } from 'vue'

// 设置localStorage
export const setStorage = function(key:string, obj:any) {
    localStorage.setItem(key, obj)
};

// 获取localStorage
export const getStorage = function(key:string) {
  const str = localStorage.getItem(key);
  if (!str) {
    return ''
  }
  return str
};

// 移除localStorage
export const removeStorage = function(key:string) {
    localStorage.removeItem(key)
};
