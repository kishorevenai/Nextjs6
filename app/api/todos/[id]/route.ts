import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  console.log(request);
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todos: Todo = await res.json();

  if (!todos.id) return NextResponse.json({ message: "id not found." });

  return NextResponse.json(todos);
}
