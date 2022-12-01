with open('../input.txt', 'r') as handle:
    text = handle.read().splitlines()
    i = 0
    length = len(text)
    a = []
    final = []
    while i < length:
      line = text[i]
      if not line:
        final.append(sum(a))
        a = []
      else:
        a.append(int(line))
      i += 1
    print(sum(sorted(final, reverse=True)[:3]))
