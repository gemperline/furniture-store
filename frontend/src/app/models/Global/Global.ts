export interface IGlobal {
    sessionLoaded?: boolean;
    banner: IBanner;
  }
  
  export interface IBanner {
    open?: boolean;
    message?: string | null;
    severity?: 'warning' | 'error';
    justify?: 'center' | 'flex-start' | 'flex-end';
    action?: IBannerAction;
  }
  
  export enum IBannerAction {
    refreshPage,
  }
  