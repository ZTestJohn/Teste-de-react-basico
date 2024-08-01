import db from "../../json/db.json";

function articleInformation(ArticleId) {
  ArticleId = Number(ArticleId);
  const noticia = db.find((e) => {
    return e.id === ArticleId;
  });
  return noticia;
}

export default articleInformation;
