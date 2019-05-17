export interface ISearchListResponse {
  readonly kind: string;
  readonly etag: string;
  readonly nextPageToken?: string;
  readonly prevPageToken?: string;
  readonly regionCode: string;
  readonly pageInfo: {
    readonly totalResults: number;
    readonly resultsPerPage: number;
  };
  readonly items: ReadonlyArray<ISearchResource>;
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