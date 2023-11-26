import React, { useState } from "react";
import { Layout, ThemeInput, ThemeTable } from "../../components/components";
import { user } from "../../assets/images/images";
import { Switch } from "antd";

const UserTable = () => {
  const [resultPerPage, setResultPerPage] = useState(10)

  const data = [
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
    {
      email: "Johnsculey12@gmail.com",
      name: "John Sculey",
      phoneNumber: "+62 34346-3847",
      interviewTime: "Mornings",
      role: "Student",
    },
  ];

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
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-centers">
          <span className="w-6 h-6 rounded-full bg-[#D8D8D8]">
            <img src={user} alt="user" className="object-cover" />
          </span>
          <p className="font-medium ml-2">{text}</p>
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
      render: (active) => <Switch checked={active} />,
    },
  ];

  return (
    <Layout selected={"2"}>
      <div className="overflow-hidden">
        <h1 className="text-secondary text-2xl font-medium p-2">User Table</h1>
        <div className="bg-white rounded-md w-full h-full px-4 py-6">
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
          <div className="mt-6 overflow-auto">
            <ThemeTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserTable;
