function solution(genres, plays) {
  const allTable = [];
  for (let i = 0; i < genres.length; i++) {
    const mapElem = new Map();
    mapElem.set("genres", genres[i]);
    mapElem.set("plays", parseInt(plays[i]));
    mapElem.set("idx", i);
    allTable.push(mapElem);
  }
  allTable.sort((a, b) => b.get("plays") - a.get("plays"));

  const genresTable = [];
  const genresSet = new Set(genres);

  genresSet.forEach((setElem) => {
    let total = 0;
    allTable
      .filter((mapElem) => mapElem.get("genres") === setElem)
      .forEach((mapElem) => {
        total += mapElem.get("plays");
      });

    const totalMap = new Map();
    totalMap.set("genres", setElem);
    totalMap.set("plays", total);
    genresTable.push(totalMap);
  });

  const results = [];
  genresTable.sort((a, b) => b.get("plays") - a.get("plays"));
  genresTable.forEach((elem) => {
    results.push(
      ...allTable
        .filter((allRecord) => allRecord.get("genres") === elem.get("genres"))
        .slice(0, 2)
        .map((record) => record.get("idx"))
    );
  });

  return results;
}

export { solution };
