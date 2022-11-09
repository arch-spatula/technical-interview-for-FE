class person:
    def __init__(self, name):  # 초기화 함수입니다. 생성자함수에 인자를 받아야 합니다.
        self.name = name  # 생성하면서 갖게 된 속성값입니다.
        print()

    def take(self):  # 메서드입니다. 메서드에는 첫번째 매개변수는 self여야 합니다.
        print('You stay away from my women! magic men')


jakeTheDog = person('jake')  # jakeTheDog 인스턴스를 생성한 것입니다.
print(jakeTheDog.name)
jakeTheDog.take()