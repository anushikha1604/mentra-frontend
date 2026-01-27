import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

interface DeleteFormProps {
  deleteItem: any;
  handleDeleteReject: () => void;
  handleDeleteAgree: () => void;
}

export function DeleteDialog({
  deleteItem,
  handleDeleteReject,
  handleDeleteAgree,
}: DeleteFormProps) {
  return (
    <Dialog open={Boolean(deleteItem)} onOpenChange={handleDeleteReject}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Delete {deleteItem?.name || 'Item'}</DialogTitle>
          <DialogDescription>Are you sure wanted to delete?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleDeleteReject}>
            Cancel
          </Button>
          <Button onClick={handleDeleteAgree}>Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
