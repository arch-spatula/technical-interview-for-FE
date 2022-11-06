# technical-interview-for-FE
프론트엔드 엔지니어를 위한 코딩테스트, 기술 면접 등을 정리하는 리포입니다.

1일1커밋할 수단 맞습니다.

프로그래머스, 백준, LeetCode 등 코테 자료는 이 리포 하나로 관리합니다.

기술면접은 라이브 코딩을 한다고 가정합니다. 

[How to NOT Fail a Technical Interview](https://www.youtube.com/watch?v=1t1_a1BZ04o)

위와 같은 방식은 기술면접 중 일부입니다.

실제로 포폴에 활용한 기술 스택도 많이 논하지만 이런 부분은 없다고 가정합니다. 그리고 이런 부분에 대한 면접준비는 전혀다릅니다. 활용한 기술스택에 대한 깊은 이해를 논합니다.

기술 면접 중에는 구현도 존재합니다. 구현을 과제로 주거나 실시간으로 만드는 방식으로 진행합니다. 이런 부분은 어떻게 처리할지 모르겠지만 일단은 관련 링크를 추가하겠습니다.

파이썬도 있지만 자바스크립트로 재생산하도록 노력하겠습니다. 

또 라이브러리 사용가능과 불가능은 고민하겠습니다. 면접에서는 본인이 편한 환경에서 진행하도록 할 수도 있습니다.

# 파이썬 가상환경 만들기

[가상환경 만들기](https://www.daleseo.com/python-venv/)
```shell
cd <디렉터리>
$ python3 -m venv .venv
```

```shell
. .venv/bin/activate
```
디렉토리로 접근한 상태에서 가상환경을 실행할 수 있습니다.

```
deactivate
```

위 명령으로 가상환경을 종료할 수 있습니다.

설치를 완료하면 `requirements.txt` 파일을 활용해서 설치합니다.

```shell
pip3 list # 설치목록을 보여줍니다.
```

```shell
pip3 freeze > requirements.txt  # 현재 설치된 패키지를 목록에 넣습니다.
```

```shell
pip3 install -r requirements.txt  # 목록에 있는 패키지를 로컬에 설치합니다.
```


# npm 패키지 관리하기