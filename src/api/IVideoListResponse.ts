export interface IVideoListResponse {
  readonly kind: string;
  readonly etag: string;
  readonly nextPageToken?: string;
  readonly prevPageToken?: string;
  readonly regionCode: string;
  readonly pageInfo: {
    readonly totalResults: number;
    readonly resultsPerPage: number;
  };
  readonly items: ReadonlyArray<IVideoResource>;
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