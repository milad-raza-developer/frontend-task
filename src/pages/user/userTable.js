import React, { useState, useEffect } from "react";
import { Layout, ThemeInput, ThemeTable } from "../../components/components";
import { Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { usersCollection, getDocs } from "../../utils/firebase";

const UserTable = () => {
  const [resultPerPage, setResultPerPage] = useState(10);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(usersCollection);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsLoading(false);
        setUserData(data);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  const filteredData = userData.filter(
    (user) =>
      (user.name &&
        user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.email &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [
    {
      title: "#",
      dataIndex: "no",
      key: "no",
      render: (data, _, index) => (
        <p className="text-center font-medium">{index + 1}</p>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      render: (email) => <p className="font-medium">{email}</p>,
    },
    {
      title: "NAME",
      dataIndex: "username",
      key: "username",
      render: (text, data) => (
        <div className="flex items-center">
          <span className="w-8 h-8 rounded-full bg-[#D8D8D8] flex items-center justify-center">
            {data?.profile ? (
              <img
                src={data?.profile}
                alt="user"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <UserOutlined className="text-lg" />
            )}
          </span>
          <p className="font-medium ml-2 !mb-0">{text}</p>
        </div>
      ),
    },
    {
      title: "PHONE NO",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "INTERVIEW TIMINGS",
      dataIndex: "interviewTime",
      key: "interviewTime",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active, data) => <Switch checked={active} />,
    },
  ];

  return (
    <Layout selected={"2"}>
      <div className="overflow-hidden">
        <h1 className="text-secondary text-2xl font-medium p-2">User Table</h1>
        <div className="bg-white rounded-md w-full h-full px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <p>Showing</p>{" "}
              <ThemeInput
                type={"number"}
                className={"w-16 mx-2"}
                height={"h-7"}
                inputClassName={"rounded-none"}
                value={resultPerPage}
                onChange={(e) => setResultPerPage(e.target.value)}
              />
              <p>entries</p>
            </div>
            <ThemeInput
              type={"text"}
              placeholder={"Search by name or email"}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mt-6 overflow-auto">
            <ThemeTable
              columns={columns}
              data={filteredData}
              loader={isLoading}
              resultPerPage={resultPerPage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserTable;
