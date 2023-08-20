const bubbleColumn = (v) => {
  const bubble = (v, bottom) => {
    // base case
    if (bottom === 0) {
      return;
    }

    if (v[bottom] === 0) {
      // bubble
      v[bottom] = v[bottom - 1];
      v[bottom - 1] = 0;
    }

    bubble(v, bottom - 1);
  };
  const zeros = v.reduce((acc, curr) => (curr === 0 ? acc + 1 : acc), 0);
  for (let i = 0; i < zeros; i++) {
    bubble(v, v.length - 1);
  }
};

module.exports = { bubbleColumn };
