import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TodosHeaderProps {
  filter: "all" | "pending" | "complete";
  setFilter: (value: "all" | "pending" | "complete") => void;
  setNewTodo: (value: string) => void;
  handleCreate: () => void;
}

function TodosHeader(props: TodosHeaderProps) {
  return (
    <div className="container mx-auto mt-4 flex justify-between">
      <Select
        value={props.filter}
        onValueChange={(value: "all" | "pending" | "complete") =>
          props.setFilter(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter here..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="complete">Complete</SelectItem>
        </SelectContent>
      </Select>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Todo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="space-y-2">
            <DialogTitle>Add new todo</DialogTitle>
            <Input
              placeholder="Add new todo here..."
              onChange={(e) => props.setNewTodo(e.target.value)}
            />
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button
                  className="w-fit"
                  variant="outline"
                  onClick={props.handleCreate}
                >
                  Submit
                </Button>
              </DialogClose>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodosHeader;
