import { IChannelListResponse, ISearchListResponse, IVideoListResponse } from "./IYoutubeListResponse";

const API_KEY = 'test';

export const fetchChannelStatistics = (channelId: string) => {
  return fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`)
    .then(response => response.json())
    .then((data: IChannelListResponse) => {
      console.log(data);
    })
    .catch(error => console.error(error))
}

export const fetchVideoList = (channelId: string) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&key=${API_KEY}`)
    .then(response => response.json())
    .then((data: ISearchListResponse) => {
      console.log(data);
    })
    .catch(error => console.error(error))
}

export const fetchVideoStatistics = (videoIdList: ReadonlyArray<string>) => {
  const stringVideoList = videoIdList.join('%2C%20'); // ', '
  return fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${stringVideoList}&key=${API_KEY}`)
    .then(response => response.json())
    .then((data: IVideoListResponse) => {
      console.log(data);
    })
    .catch(error => console.error(error))
}