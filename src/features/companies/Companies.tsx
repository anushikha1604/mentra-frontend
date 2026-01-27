import { useCallback, useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Building2, Edit, Trash2, Eye, Search, Plus } from 'lucide-react';
import { MutationForm } from '../../common/MutationForm';
import { CREATE, UPDATE } from '../../constants/APP';
import {
  Company,
  useAddAPIMutation,
  useGetAPIQuery,
  useRemoveAPIMutation,
  useUpdateAPIMutation,
} from './companySlice';
import { DeleteDialog } from '../../common/DeleteDialog';

const columns = [
  {
    name: 'CompanyName',
    label: 'Company Name',
    sortable: false,
  },
  {
    name: 'emailId',
    label: 'Email',
    sortable: false,
  },
  {
    name: 'contact',
    label: 'Contact',
    sortable: false,
  },
  {
    name: 'address',
    label: 'Address',
    sortable: false,
  },
  {
    name: 'city',
    label: 'City',
    sortable: false,
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
  },
];

export function Companies() {
  const [editedItem, setEditedItem] = useState<Partial<Company>>({});
  const { data = {} } = useGetAPIQuery<{ data: Company[] }>();
  const [addAPI, { isError: addError }] = useAddAPIMutation();
  const [removeAPI] = useRemoveAPIMutation();
  const [updateAPI, { isError: updateError }] = useUpdateAPIMutation();
  const [openModelType, setOpenModelType] = useState<string | boolean>(false);
  const [deleteItem, setDeleteItem] = useState<Company | null>(null);

  const handleAddItem = () => {
    setEditedItem({});
    setOpenModelType(CREATE);
  };

  const handleEditItem = (item: Company) => {
    setEditedItem(item);
    setOpenModelType(UPDATE);
  };

  const handleMutationClose = () => {
    setOpenModelType(false);
    setEditedItem({});
  };

  const handleSubmit = async (item: Company) => {
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
  const handleDeleteAgree = useCallback(async () => {
    if (deleteItem === null) return;
    const resp = await removeAPI(deleteItem);
    if (resp.error) {
    } else {
      setDeleteItem(null);
    }
  }, [removeAPI]);

  const handleDeleteReject = useCallback(() => {
    setDeleteItem(null);
  }, []);

  const companies: Company[] = data.data || [];

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search companies..."
                  className="pl-10 w-80"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={handleAddItem} className="gap-2">
                <Plus className="w-4 h-4" />
                Add Company
              </Button>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Card
                key={company.companyId}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {company.CompanyName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {company.country}
                          {` `}
                          {company.city}
                        </p>
                      </div>
                    </div>
                    {/* <Badge className="bg-green-100 text-green-700">
                    {company.status}
                  </Badge> */}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{company.emailId}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{company.contact}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditItem(company)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDeleteItem(company)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <MutationForm
        openModelType={openModelType}
        handleOpenChange={(open) => {
          if (!open) handleMutationClose();
        }}
        handleSubmit={handleSubmit}
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
