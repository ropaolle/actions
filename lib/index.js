function fibonacci(n, mem = []) {
  if (mem[n]) {
    return mem[n];
  }

  if (n <= 1) {
    return n;
  }

  mem[n] = fibonacci(n - 1, mem) + fibonacci(n - 2, mem);
  return mem[n];
}

module.exports = {
  fibonacci,
};

// Stuff 17!
