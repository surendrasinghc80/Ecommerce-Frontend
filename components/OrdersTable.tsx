import { ArrowRight, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";

export function OrdersTable() {
  // const orders = [
  //   {
  //     id: "#f0ba538b",
  //     status: "Pending",
  //     date: "Nov 10, 2022",
  //     total: "$350.00",
  //   },
  //   {
  //     id: "#1f10985b",
  //     status: "Processing",
  //     date: "Nov 10, 2022",
  //     total: "$500.00",
  //   },
  //   {
  //     id: "#6d54d506",
  //     status: "Delivered",
  //     date: "Dec 22, 2020",
  //     total: "$700.00",
  //   },
  //   {
  //     id: "#63d35462",
  //     status: "Delivered",
  //     date: "Nov 20, 2020",
  //     total: "$700.00",
  //   },
  //   {
  //     id: "#753deee0",
  //     status: "Cancelled",
  //     date: "Dec 14, 2020",
  //     total: "$300.00",
  //   },
  // ];

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case "Pending":
  //       return "bg-blue-100 text-blue-800 hover:bg-blue-100";
  //     case "Processing":
  //       return "bg-blue-100 text-blue-800 hover:bg-blue-100";
  //     case "Delivered":
  //       return "bg-green-100 text-green-800 hover:bg-green-100";
  //     case "Cancelled":
  //       return "bg-red-100 text-red-800 hover:bg-red-100";
  //     default:
  //       return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  //   }
  // };

  //     return (
  //     <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
  //       <div className="overflow-x-auto">
  //         <Table>
  //           <TableHeader>
  //             <TableRow className="bg-gray-50">
  //               <TableHead className="w-[150px] py-3">Order #</TableHead>
  //               <TableHead className="w-[120px] py-3">Status</TableHead>
  //               <TableHead className="w-[150px] py-3">Date purchased</TableHead>
  //               <TableHead className="w-[100px] py-3">Total</TableHead>
  //               <TableHead className="w-[50px] py-3"></TableHead>
  //             </TableRow>
  //           </TableHeader>
  //           <TableBody>
  //             {orders.map((order) => (
  //               <TableRow key={order.id} className="border-t border-gray-200">
  //                 <TableCell className="font-medium py-4">{order.id}</TableCell>
  //                 <TableCell className="py-4">
  //                   <Badge variant="secondary" className={`font-normal ${getStatusColor(order.status)}`}>
  //                     {order.status}
  //                   </Badge>
  //                 </TableCell>
  //                 <TableCell className="py-4 text-gray-600">{order.date}</TableCell>
  //                 <TableCell className="py-4 font-medium">{order.total}</TableCell>
  //                 <TableCell className="py-4">
  //                   <Button variant="ghost" size="icon" className="rounded-full">
  //                     <ChevronRight className="h-4 w-4" />
  //                     <span className="sr-only">View order</span>
  //                   </Button>
  //                 </TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </div>
  //       <div className="flex justify-center py-4 border-t border-gray-200">
  //         <div className="flex items-center justify-center w-8 h-8 rounded-full border border-rose-200 text-rose-600 text-sm">
  //           1
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <div className="flex justify-between font-semibold text-lg text-zinc-600 font m-4">
          <div className=" basis-[25%] justify-start">
            <p>Order #</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Status</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Date of Purchased</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Total</p>
          </div>
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-4 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(54,54,54,0.2)] text-zinc-500  p-1.5 rounded-xl">
              Pending
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm font-medium ml-6 ">
            <p>NOV 10, 2022</p>
          </div>
          <div className="basis-[25%] justify-start ml-6 font-medium">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 font-medium">
            <p>DEC 15, 2022</p>
          </div>
          <div className="basis-[25%] justify-start ml-6 font-medium">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 font-medium">
            <p>JAN 10, 2023</p>
          </div>
          <div className="basis-[25%] justify-start ml-6 font-medium">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 font-medium">
            <p>AUG 10, 2023</p>
          </div>
          <div className="basis-[25%] justify-start ml-6  font-medium">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(239,68,68,0.2)] text-red-500 p-1.5 rounded-xl">
              Cancelled
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 font-medium">
            <p>JUN 10, 2024</p>
          </div>
          <div className="basis-[25%] justify-start ml-6 font-medium">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
      </div>
    </div>
  );
}
