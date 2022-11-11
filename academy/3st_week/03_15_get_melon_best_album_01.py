'''
해설 확인했습니다.
Q. 멜론에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 한다.

노래는 인덱스 구분하며, 노래를 수록하는 기준은 다음과 같다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록한다. (단, 각 장르에 속한 노래의재생 수 총합은 모두 다르다.)

2. 장르 내에서 많이 재생된 노래를 먼저 수록한다.

3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.

노래의 장르를 나타내는 문자열 배열 genres와
노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,

베스트 앨범에 들어갈 노래의 인덱스를 순서대로 반환하시오.
'''
def get_melon_best_album(genre_array: list, play_array:list) -> list:

    n = len(genre_array)
    totalPlayByGenre = {}   # 장르별 노래 플래이 횟수합을 딕셔너리에 저장합니다.
    genreIndexPlay = {}     # {장르 : [(인덱스, 재생횟수), (인덱스, 재생횟수), (인덱스, 재생횟수) ... ]}

    # 길이가 같은 배열을 순회합니다.
    for i in range(n):
        play = play_array[i]
        genre = genre_array[i]

        # 딕셔너리의 중복이 없으면
        if genre not in totalPlayByGenre:
            # 새롭게 생성합니다.
            totalPlayByGenre[genre] = play
            # {장르 : [(인덱스, 재생횟수)]}
            genreIndexPlay[genre] = [[i, play]]
        # 딕셔너리에 중복이 있으면
        else:
            # 재생횟수를 더합니다.
            totalPlayByGenre[genre] += play
            # {장르 : [(인덱스, 재생횟수), (인덱스, 재생횟수)]}
            genreIndexPlay[genre].append([i, play])

    # lambda는 (장르, 조회수) 중 조회수를 기준으로 정렬하기 위해 사용합니다.
    sortedTotalPlayByGenreArray = sorted(totalPlayByGenre.items(), key=lambda item: item[1], reverse=True)

    result = []
    for genre, value_ in sortedTotalPlayByGenreArray:
        # [인덱스, 재생]으로 순회합니다.
        indexPlay = genreIndexPlay[genre]
        # [인덱스, 재생]에서 [재생]기준으로 정렬합니다.
        sortedGenreIndexPlay = sorted(indexPlay, key=lambda item: item[1], reverse=True)
        # 정렬된 [인덱스, 재생] Array를 순회합니다.
        for i in range(len(sortedGenreIndexPlay)):
            # 마지막 원소는 추가하지 않습니다.
            if i > 1: break
            # [인덱스, 재생] 중 [인덱스]를 추가합니다.
            result.append(sortedGenreIndexPlay[i][0])

    return result


print("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ", get_melon_best_album(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
print("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ", get_melon_best_album(["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"], [2000, 500, 600, 150, 800, 2500, 2000]))