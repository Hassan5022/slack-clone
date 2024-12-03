"use client";

import { Input } from "@/components/ui/input";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const mutate = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    // Todo: clear form
  };

  const handleSubmit = async () => {
    try {
      const data = await mutate(
        {
          name: "Workspace 1",
        },
        {
          onSuccess() {
            // Redirect to workspace
          },
          onFailure() {
            // Show toast error
          },
          onSettled() {
            // Reset form
          },
        }
      );
    } catch (error) {}
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            disabled={false}
            autoFocus
            minLength={3}
            value=""
            required
            placeholder="Workspace name e.g. 'work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
