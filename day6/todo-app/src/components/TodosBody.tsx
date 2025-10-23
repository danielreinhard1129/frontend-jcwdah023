import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface TodosBodyProps {
  filteredTodos: { todo: string; isDone: boolean }[];
  handleDone: (index: number, value: boolean) => void;
  handleDelete: (index: number) => void;
}

function TodosBody(props: TodosBodyProps) {
  return (
    <div className="container mx-auto mt-4">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Done</TableHead>
            <TableHead>Todo</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.filteredTodos.map((todo, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={todo.isDone}
                    onCheckedChange={(checked) =>
                      props.handleDone(index, Boolean(checked))
                    }
                  />
                </TableCell>
                <TableCell className={todo.isDone ? "line-through" : ""}>
                  {todo.todo}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => props.handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TodosBody;
