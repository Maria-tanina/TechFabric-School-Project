export interface IFilter {
  query: string;
  role: string;
}

export interface IAdminInitialState {
  draftFilter: IFilter;
  appliedFilter: IFilter;
  paginationPage: number;
  rowsPerPage: number;
}
