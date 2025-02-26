"use client";
import { Badge, Dropdown } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Icon } from "@iconify/react";
import { Table } from "flowbite-react";

import product1 from "/public/images/products/s1.jpg";
import product2 from "/public/images/products/s2.jpg";
import product3 from "/public/images/products/s3.jpg";
import product4 from "/public/images/products/s4.jpg";
import product5 from "/public/images/products/s5.jpg";
import Image from "next/image";
import Card from "@/app/components/common/card";

const Page = () => {
  const ProductTableData = [
    {
      id: 1,
      img: product1,
      name: "iPhone 13 pro max-Pacific Blue-128GB storage",
      payment: "$180",
      paymentstatus: "Partially paid",
      process: 100,
      processcolor: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
    },
    {
      id: 2,
      img: product2,
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-success",
      statuscolor: "success",
      statustext: "Confirmed",
    },
    {
      ud: 3,
      img: product3,
      name: "PlayStation 5 DualSense Wireless Controller",
      payment: "$120",
      paymentstatus: "Cancelled",
      process: 100,
      processcolor: "bg-error",
      statuscolor: "error",
      statustext: "Cancelled",
    },

    {
      id: 4,
      img: product5,
      name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
      payment: "$120",
      paymentstatus: "Partially paid",
      process: 45,
      processcolor: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
    },

    {
      id: 5,
      img: product4,
      name: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      processcolor: "bg-success",
      statuscolor: "success",
      statustext: "Confirmed",
    },
  ];

  /*Table Action*/
  const tableActionData = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];

  return (
    <Card>
      <h5 className="card-title">Danh sách BOT đang hoạt động</h5>
      <div className="mt-3">
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>STT</Table.HeadCell>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell className="p-6">BOT</Table.HeadCell>

              <Table.HeadCell>Trạng thái</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {ProductTableData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <h5 className="text-base text-wrap">{item.id}</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <h5 className="text-base text-wrap">{item.id}</h5>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap ps-6">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.img}
                        alt="icon"
                        className="h-[60px] w-[60px] rounded-md"
                      />
                      <div className="truncat line-clamp-2 sm:text-wrap max-w-56">
                        <h6 className="text-sm">{item.name}</h6>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <Badge
                      color={`light${item.statuscolor}`}
                      className={`text-${item.statuscolor}`}
                    >
                      {item.statustext}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <HiOutlineDotsVertical size={22} />
                        </span>
                      )}
                    >
                      {tableActionData.map((items, index) => (
                        <Dropdown.Item key={index} className="flex gap-3">
                          {" "}
                          <Icon icon={`${items.icon}`} height={18} />
                          <span>{items.listtitle}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Card>
  );
};

export default Page;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
