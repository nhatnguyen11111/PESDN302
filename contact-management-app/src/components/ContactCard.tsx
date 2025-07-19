'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Contact } from '@/types';

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

export default function ContactCard({ contact, onDelete }: ContactCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/contacts/${contact._id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          onDelete(contact._id);
        } else {
          alert('Failed to delete contact');
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete contact');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const getGroupColor = (group: string) => {
    switch (group) {
      case 'Friends':
        return 'bg-blue-100 text-blue-800';
      case 'Work':
        return 'bg-green-100 text-green-800';
      case 'Family':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {contact.name}
          </h3>
          <p className="text-gray-600 mb-2">{contact.email}</p>
          {contact.phone && (
            <p className="text-gray-500 text-sm">{contact.phone}</p>
          )}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGroupColor(contact.group)}`}>
          {contact.group}
        </span>
      </div>
      
      <div className="flex gap-2">
        <Link
          href={`/contacts/${contact._id}/edit`}
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors disabled:opacity-50"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
} 