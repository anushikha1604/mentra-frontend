import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Upload,
  Download,
  Edit,
  Trash2,
  Eye,
  Search,
  Plus,
} from 'lucide-react';
import { InputFieldProps, MutationForm } from '../../common/MutationForm';
import { CREATE, UPDATE } from '../../constants/APP';
import {
  useAddAPIMutation,
  useGetAPIQuery,
  useRemoveAPIMutation,
  useUpdateAPIMutation,
} from './studentSlice';
import { DeleteDialog } from '../../common/DeleteDialog';
import { Row } from './student';

const columns: InputFieldProps[] = [
  {
    name: 'fullName',
    label: 'Full Name',
  },
  {
    name: 'emailId',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'primaryPhone',
    label: 'Primary Phone',
    type: 'tel',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'state',
    label: 'State',
  },
  {
    name: 'country',
    label: 'Country',
  },
  {
    name: 'pincode',
    label: 'Pin Code',
    type: 'number',
  },
  {
    name: 'DOB',
    label: 'DOB',
    type: 'date',
  },
];

export function StudentManagement() {
  const [editedItem, setEditedItem] = useState<Partial<Row>>({});
  const { data = { data: [] } } = useGetAPIQuery<{ data: Row[] }>();
  const [addAPI, { isError: addError }] = useAddAPIMutation();
  const [removeAPI] = useRemoveAPIMutation();
  const [updateAPI, { isError: updateError }] = useUpdateAPIMutation();
  const [openModelType, setOpenModelType] = useState<string | boolean>(false);
  const [deleteItem, setDeleteItem] = useState<Row | null>(null);

  const handleAddItem = () => {
    setEditedItem({});
    setOpenModelType(CREATE);
  };

  const handleEditItem = (item: Row) => {
    setEditedItem(item);
    setOpenModelType(UPDATE);
  };

  const handleMutationClose = () => {
    setOpenModelType(false);
    setEditedItem({});
  };

  const handleMutationSubmit = async (item: Row) => {
    if (openModelType === CREATE) {
      await addAPI(item);
    } else if (openModelType === UPDATE) {
      await updateAPI(item);
    }
    if (!(addError || updateError)) {
      handleMutationClose();
    }
  };

  // Delete Dialog Handlers
  const handleDeleteAgree = async () => {
    if (deleteItem === null) return;
    const resp = await removeAPI(deleteItem);
    if (resp.error) {
    } else {
      setDeleteItem(null);
    }
  };

  const handleDeleteReject = () => {
    setDeleteItem(null);
  };

  const students: Row[] = data.data || [];

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {/* <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search students..."
                  className="pl-10 w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Students</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="placed">Placed</SelectItem>
                  <SelectItem value="searching">Searching</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            {/* <div className="flex items-center gap-2">
              <Button onClick={handleAddItem} className="gap-2">
                <Plus className="w-4 h-4" />
                Add Student
              </Button>
            </div> */}
          </div>

          {/* Students Table */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Student Database
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Comprehensive student profile management and placement tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        Student
                      </th>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        Course & Year
                      </th>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        CGPA
                      </th>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        Placement
                      </th>
                      <th className="text-left p-4 font-semibold text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr
                        key={student.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-blue-600 text-white text-sm">
                                {student?.fullName
                                  ?.split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-gray-900">
                                {student.fullName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {student.emailId}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-gray-900">
                            {student.course} - {student.year}
                          </div>
                          <div className="text-sm text-gray-500">
                            Batch {student.batch}
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700">
                            {student.cgpa}/10
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge
                            className={
                              student.status === 'Active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }
                          >
                            {student.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          {student.placementStatus === 'Placed' ? (
                            <div>
                              <div className="font-medium text-green-600">
                                {student.company}
                              </div>
                              <div className="text-sm text-gray-500">
                                {student.package}
                              </div>
                            </div>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-700">
                              {student.appliedJobs?.length || 0} Applied
                            </Badge>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditItem(student)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteItem(student)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MutationForm
        openModelType={openModelType}
        handleOpenChange={(open) => {
          if (!open) handleMutationClose();
        }}
        handleSubmit={handleMutationSubmit}
        handleClose={handleMutationClose}
        editedItem={editedItem}
        columns={columns}
      />

      <DeleteDialog
        deleteItem={deleteItem}
        handleDeleteReject={handleDeleteReject}
        handleDeleteAgree={handleDeleteAgree}
      />
    </>
  );
}
