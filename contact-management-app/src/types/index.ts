export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  group: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  group: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
} 