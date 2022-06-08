const listMissingEntries = (data) => {
  if (Object.keys(data).length === 0) {
    return "Input must be an object of data...";
  }
  let missing = [];
  let keys = Object.keys(data);
  keys.forEach((key) => {
    if (!data[key] || data[key].length === 0) {
      missing.push(key);
    }
  });
  if (missing.length > 0) {
    return `${missing.length} fields missing, ${JSON.stringify(missing)}`;
  } else {
    return "No missing fields";
  }
};

export default listMissingEntries;
