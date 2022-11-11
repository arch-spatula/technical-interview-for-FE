class LinkedTuple:
    def __init__(self):
        self.items = []

    def add(self, key, value):
        self.items.append((key, value))

    def get(self, key):
        for k, v in self.items:
            if k == key:
                return v

class LinkedDict:
    def __init__(self):
        self.items = []
        for i in range(8):
            self.items.append(LinkedTuple())

    def put(self, key, value):
        self.items[hash(key) % 8].add(key, value)

    def get(self, key):
        return self.items[hash(key) % 8].get(key)


linkedDict = LinkedDict()
linkedDict.put('fast', '빠른')
linkedDict.get('fast')
