const listMissingEntries = (data) => {
  // Because you can't always rely on typeof...
  if (Object.keys(data).length === 0) {
    return "Input must be an object of data...";
  }
  // Store missing fields to return
  let missing = [];
  let keys = Object.keys(data);
  keys.forEach((key) => {
    // if value at key is falsey (or if array is empty) add to missing collection
    if (!data[key] || data[key].length === 0) {
      missing.push(key);
    }
  });
  // Return string with result missing data
  if (missing.length > 0) {
    return `${missing.length} fields missing, ${JSON.stringify(missing)}`;
  } else {
    return "No missing fields";
  }
};

export default listMissingEntries;
