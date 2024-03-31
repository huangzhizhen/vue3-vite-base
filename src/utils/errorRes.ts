export function getErrorRes(code: number) {
  let params = "";
  if (code === 1001002001) {
    params = '出错了';
  } 
  return params;
}
