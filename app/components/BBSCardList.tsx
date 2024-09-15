import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

const BBSCardList = () => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum enim ab fugiat distinctio eligendi nesciunt, recusandae quidem, totam magnam et voluptate perferendis neque! Quam ex nostrum consectetur libero a.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BBSCardList