import { Table } from "antd";

const ThemeTable = ({ columns, data, loader, pagination, onRow }) => {
  return (
    <Table
      onRow={onRow}
      columns={columns}
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30"],
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        total: pagination?.total || data?.length,
        hideOnSinglePage: true,
        onChange: (page, pageSize) => {
          if (pagination) {
            pagination.setCurrentPage(page);
            pagination.setResultPerPage(pageSize);
          }
        },
      }}
      loading={loader}
    />
  );
};

export default ThemeTable;
