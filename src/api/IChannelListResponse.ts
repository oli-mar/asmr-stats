export interface IChannelListResponse {
  readonly kind: string;
  readonly etag: string;
  readonly nextPageToken?: string;
  readonly prevPageToken?: string;
  readonly pageInfo: {
    readonly totalResults: number;
    readonly resultsPerPage: number;
  };
  readonly items: ReadonlyArray<IChannelResource>;
}

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