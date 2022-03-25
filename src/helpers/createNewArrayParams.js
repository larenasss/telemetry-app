export function createNewArrayParams(arrayParamsAll, arrayStringFieldsHide) {
  const sortArray = arrayParamsAll.sort();
  const result = sortArray.map(param => {
    const resultObj = {
      showValue: param,
    };

    if (arrayStringFieldsHide.includes(param)) {
      resultObj.isShow = false;
      return resultObj;
    }

    resultObj.isShow = true;
    return resultObj;
  });

  return result;
}