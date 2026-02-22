export interface AppliedJob {
  // Known fields
  status?: string;
  appliedAt?: string; // ISO date string

  // Allow additional arbitrary keys (example shows numeric keys)
  [key: string]: any;
}

export interface Row {
  _id: string;
  userId: string;
  studentId: string;
  fullName: string;
  emailId: string;
  primaryPhone?: string;
  alternatePhone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  course?: string;
  year?: string;
  DOB?: string; // ISO date string
  gender?: string;
  password?: string;
  skills?: string[];
  role?: string;
  wishlistCompanies?: string[];
  isPlaced?: boolean;
  isDeleted?: boolean;
  isActive?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  appliedJobs?: AppliedJob[];

  [key: string]: any;
}

export type Students = Row[];
