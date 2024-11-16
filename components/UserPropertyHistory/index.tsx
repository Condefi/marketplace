"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Property } from "@/types/property";
import Link from "next/link";

const UserPropertyHistory = ({
  pastUserProperties,
}: {
  pastUserProperties: Property[];
}) => {
  const getDaysAgo = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - end.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Investment History
      </h2>
      <div className="overflow-x-auto">
        <Table className="overflow-hidden rounded-xl shadow-sm">
          <TableHeader className="bg-gray-200 dark:bg-gray-700">
            <TableRow>
              <TableHead className="first:rounded-tl-xl last:rounded-tr-xl">
                Property
              </TableHead>
              <TableHead className="first:rounded-tl-xl last:rounded-tr-xl">
                Amount
              </TableHead>
              <TableHead className="first:rounded-tl-xl last:rounded-tr-xl">
                Min Deposit
              </TableHead>
              <TableHead className="first:rounded-tl-xl last:rounded-tr-xl">
                End Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pastUserProperties.map((property: Property, index) => (
              <TableRow
                key={property.id}
                className={`bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600/20 cursor-pointer ${
                  index === pastUserProperties.length - 1
                    ? "last:rounded-b-xl"
                    : ""
                }`}
              >
                <TableCell
                  className={`${
                    index === pastUserProperties.length - 1
                      ? "first:rounded-bl-xl"
                      : ""
                  }`}
                >
                  <Link href={`/marketplace${property.id}`}>
                    {property.name}
                  </Link>
                </TableCell>
                <TableCell>${property.treasury.minDeposit}</TableCell>
                <TableCell>{property.treasury.minDeposit}</TableCell>
                <TableCell
                  className={`${
                    index === pastUserProperties.length - 1
                      ? "last:rounded-br-xl"
                      : ""
                  }`}
                >
                  <div>{property.treasury.deadline}</div>
                  <div className="text-sm text-gray-500">
                    {getDaysAgo(property.treasury.deadline.toString())}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default UserPropertyHistory;
