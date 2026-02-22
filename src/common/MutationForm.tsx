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
import { Textarea } from '../components/ui/textarea';

export interface InputFieldProps {
  label: string;
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  required?: boolean;
}
export interface MutationFormProps {
  handleOpenChange: (open: boolean) => void;
  openModelType: string | boolean;
  columns: Array<InputFieldProps>;
  handleClose: () => void;
  handleSubmit: (item: Record<string, any>) => void;
  editedItem?: Record<string, any>;
}

const InputField = ({
  label,
  onChange,
  name,
  value,
  type = 'text',
  required = true,
}: InputFieldProps) => {
  const props = { label, onChange, name, value, type, required };

  const renderSwitch = (type: string) => {
    switch (type) {
      case 'textarea':
        return <Textarea {...props} />;
      default:
        return <Input {...props} />;
    }
  };

  return (
    <div>
      <Label htmlFor={name}>
        {label} {required ? '*' : ''}
      </Label>
      {renderSwitch(type)}
    </div>
  );
};

export function MutationForm({
  handleOpenChange,
  openModelType,
  columns,
  editedItem = {},
  handleClose,
  handleSubmit,
}: MutationFormProps) {
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(editingItem);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {columns.map((column) => (
              <InputField
                key={column.name}
                label={column.label}
                name={column.name}
                value={editingItem[column.name] || ''}
                onChange={handleChange}
                type={column.type}
              />
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" autoFocus>
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
