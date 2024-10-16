export interface IResponse<T> {
  data?: {
    MRData: T;
  };
  success: boolean;
  code: number;
}

export interface BaseMRData {
  xmlns: string;
  series: string;
  limit: string;
  offset: string;
  total: number;
}
