import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/dashboard/tasks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tasks
      </Link>
      <Link
        to="/dashboard/completed-task"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Completed
      </Link>
      <Link
        to="/dashboard/trash-task"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Trash
      </Link>
    </nav>
  );
}
