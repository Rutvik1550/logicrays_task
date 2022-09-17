import { get } from "./util/HttpUtil";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getData = async (title, language, subject, grade, chapter, topic) => {
  try {
    const url = `${baseUrl}/${title}/?language=${language ?? ""}&subject=${subject ?? ""}&grade=${grade ?? ""}&chapter_no=${chapter ?? ""}&video_topic_no=${topic ?? ""}&format=json`
    const json = await get(url);
    if(json) {
      return json;
    }
  } catch (e) {
    console.log('Error with getData: ',e)
  }
}