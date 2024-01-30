interface IData {
  data: Array<object>, 
  total: number
}

export const repaged = (paginatedResult: IData , currentPage: number, pageSize: number) => {
  const { data, total } = paginatedResult;

  const totalPages = Math.ceil(total / pageSize);

  return {
    data: data,
    pagination: {
      current_page: currentPage,
      first_page_url: '/?page=1',
      from: (currentPage - 1) * pageSize + 1,
      last_page: totalPages,
      last_page_url: `/?page=${totalPages}`,
      links: [],
      next_page_url: currentPage < totalPages ? `/?page=${currentPage + 1}` : null,
      path: `/?page=${currentPage}`,
      per_page: pageSize,
      prev_page_url: currentPage > 1 ? `/?page=${currentPage - 1}` : null,
      to: currentPage * pageSize < total ? currentPage * pageSize : total,
      total: total,
    },
  };
};