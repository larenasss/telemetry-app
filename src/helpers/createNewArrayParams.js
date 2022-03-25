export function createNewArrayParams(arrayParams, arrayStringFieldsDelete) {
  const result = arrayParams.map(key => {
    if (!arrayStringFieldsDelete.includes(key)) {
      return key;
    }
  });

  return result.filter(res => typeof res === 'string');
}