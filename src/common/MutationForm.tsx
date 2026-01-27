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
import { Label } from '../components/ui/label';
import { on } from 'events';
import { useEffect, useState } from 'react';

const InputField = ({
  label,
  onChange,
  name,
  value,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} value={value} onChange={onChange} />
  </div>
);

export function MutationForm({
  handleOpenChange,
  openModelType,
  columns,
  editedItem = {},
  handleClose,
  handleSubmit,
}: {
  handleOpenChange: (open: boolean) => void;
  openModelType: string | boolean;
  columns: Array<{ name: string; label: string }>;
  editedItem?: Record<string, any>;
  handleClose: () => void;
  handleSubmit: (item: Record<string, any>) => void;
}) {
  const [editingItem, setEditingItem] = useState(editedItem || {});

  useEffect(() => {
    setEditingItem(editedItem || {});
  }, [editedItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingItem((prevEditingItem) => ({
      ...prevEditingItem,
      [name]: value,
    }));
  };

  return (
    <Dialog open={Boolean(openModelType)} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit {editingItem?.name || 'Item'}</DialogTitle>
          <DialogDescription>
            Update the information for this item
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {columns.map((column) => (
            <InputField
              key={column.name}
              label={column.label}
              name={column.name}
              value={editingItem[column.name] || ''}
              onChange={handleChange}
            />
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit(editingItem)}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
