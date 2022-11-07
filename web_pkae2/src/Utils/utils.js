export function chunker(arr, size) {
  return arr.reduce((all, one, i) => {
    const ch = Math.floor(i / size);
    all[ch] = [].concat((all[ch] || []), one);
    return all
  }, []);
}