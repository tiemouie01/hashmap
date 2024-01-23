const growBucket = function checkIfLoadFactorIsExceeded(
  capacity,
  totalBuckets
) {
  const loadFactor = 0.75;

  if (capacity / totalBuckets > loadFactor) return true;
  return false;
};

const HashMap = function HashMap() {
  const buckets = new Array(16).fill(null);
  let capacity = 0;

  const hash = function computeHash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i += 1) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  };

  const set = function setKeyValuePair(key, value) {
    // Get the hash of the key and insert into its corresponding bucket.
    const keyHash = hash(key) % buckets.length;

    buckets[keyHash] = value;
    capacity += 1;

    //  If the load factor is exceeded, grow the bucket.
    const totalBuckets = buckets.length;
    if (growBucket(capacity, totalBuckets))
      buckets.push(...new Array(totalBuckets).fill(null));
  };

  const get = (key) => buckets[hash(key) % buckets.length];

  const has = (key) => buckets[hash(key) % buckets.length] !== null;

  const remove = function removeAValueFromTheMap(key) {
    const keyHash = hash(key) % buckets.length;

    if (buckets[keyHash] !== null) {
      buckets[keyHash] = null;
      return true;
    }
    return false;
  }

  const length = () => capacity;

  const clear = function clearTheMapOfAllBuckets() {
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        // eslint-disable-next-line no-param-reassign
        bucket = null;
        capacity -= 1;
      }
    })
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
  };
};

module.exports = HashMap;
