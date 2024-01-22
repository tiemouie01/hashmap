const growBucket = function checkIfLoadFactorIsExceeded(capacity, totalSize) {
  const loadFactor = 0.75;

  if (capacity / totalSize > loadFactor) return true;
  return false;
};

const HashMap = function HashMap() {
  const buckets = new Array(16);
  const capacity = 0;

  const hash = function computeHash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i += 1) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  };

  // const set = function setKeyValuePair(key, value) {
  //   // Get the hash of the key and insert into its corresponding bucket.
  //   const keyHash = hash(key) % buckets.length;

  //   buckets[keyHash] = value;
  //   capacity += 1;

  //   //  If the load factor is exceeded, grow the bucket.
  //   const totalBuckets = buckets.length;
  //   if (growBucket(capacity, totalBuckets))
  //     buckets.push(...new Array(totalBuckets));
  // };

  return {
    hash,
  };
};

module.exports = HashMap;
