interface IYoutubeListResponse<ListItem> {
  readonly kind: string;
  readonly etag: string;
  readonly nextPageToken?: string;
  readonly prevPageToken?: string;
  readonly regionCode?: string;
  readonly pageInfo: {
    readonly totalResults: number;
    readonly resultsPerPage: number;
  };
  readonly items: ReadonlyArray<ListItem>;
}

export interface IChannelListResponse extends IYoutubeListResponse<IChannelResource> {}

export interface ISearchListResponse extends IYoutubeListResponse<ISearchResource> {}

export interface IVideoListResponse extends IYoutubeListResponse<IVideoResource> {}

export interface IChannelResource {
  readonly kind: string;
  readonly etag: string;
  readonly id: string;
  readonly statistics: {
    viewCount: string;
    commentCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  }
}

export interface ISearchResource {
  readonly kind: string;
  readonly etag: string;
  readonly id: {
    readonly kind: string;
    readonly videoId?: string;
    readonly channelId?: string;
    readonly playlistId?: string;
  };
  readonly snippet: {
    readonly publishedAt: string;
    readonly channelId: string;
    readonly title: string;
    readonly description: string;
    readonly thumbnails: {
      [key: string]: {
        readonly url: string;
        readonly width: number;
        readonly height: number;
      }
    };
    readonly channelTitle: string;
    readonly liveBroadcastContent: string;
  }
}

export interface IVideoResource {
  readonly kind: string;
  readonly etag: string;
  readonly id: string;
  readonly statistics: {
    readonly viewCount: string;
    readonly likeCount: string;
    readonly dislikeCount: string;
    readonly favoriteCount: string;
    readonly commentCount: string;
  }
}