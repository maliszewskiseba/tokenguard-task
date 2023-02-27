export interface graphFolderInterface {
  id: number;
  name: string;
  img_src: string;
}

export interface formattedGraphDataInterface {
  avgTransferValue: number[];
  dates: string[];
  transfersCount: number[];
}
