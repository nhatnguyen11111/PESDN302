# Contact Management App

A simple contact management web application built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

### ✅ Main Page (Contact List)
- Display all contacts with name, email, phone, and group
- Search contacts by name
- Filter contacts by group (Friends, Work, Family, Other)
- Sort contacts by name (A-Z/Z-A)

### ✅ Create Contact
- Add new contacts with required name and email
- Optional phone number and group selection
- Email validation
- Duplicate email prevention

### ✅ Edit Contact
- Click on contact to navigate to edit page
- Modify all contact fields
- Automatic redirect back to contact list after saving

### ✅ Delete Contact
- Delete contacts with confirmation prompt
- Real-time UI updates

### ✅ Modern UI/UX
- Responsive design with Tailwind CSS
- Beautiful card-based layout
- Loading states and error handling
- Color-coded group badges

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Deployment**: Ready for Vercel, Render, Railway, etc.

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd contact-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/contact-management
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-management?retryWrites=true&w=majority
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/contacts/          # API routes for CRUD operations
│   ├── contacts/              # Contact pages (new, edit)
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Main contact list page
├── components/
│   ├── ContactCard.tsx       # Contact display component
│   └── ContactForm.tsx       # Form for create/edit
├── lib/
│   └── mongodb.ts            # MongoDB connection
└── models/
    └── Contact.ts            # Mongoose contact model
```

## API Endpoints

- `GET /api/contacts` - Get all contacts (with search, filter, sort)
- `POST /api/contacts` - Create new contact
- `GET /api/contacts/[id]` - Get specific contact
- `PUT /api/contacts/[id]` - Update contact
- `DELETE /api/contacts/[id]` - Delete contact

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add `MONGODB_URI` environment variable
4. Deploy

### Other Platforms
- **Render**: Connect GitHub repo, add environment variables
- **Railway**: Import from GitHub, configure MongoDB
- **Netlify**: Build command: `npm run build`, publish directory: `.next`

## Database Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/contact-management`

### MongoDB Atlas (Cloud)
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster
3. Get connection string and add to environment variables

## Features Implemented

✅ **Contact List Display**
- Name, email, phone, group display
- Responsive grid layout
- Empty state handling

✅ **Search Functionality**
- Real-time search by name
- Case-insensitive search

✅ **Filter by Group**
- Dropdown filter for Friends, Work, Family, Other
- "All Groups" option

✅ **Sort by Name**
- A-Z and Z-A sorting options
- Server-side sorting

✅ **Create Contact**
- Form validation (required fields, email format)
- Duplicate email prevention
- Success/error handling

✅ **Edit Contact**
- Pre-populated form
- Update validation
- Redirect after save

✅ **Delete Contact**
- Confirmation dialog
- Real-time UI updates
- Error handling

✅ **Modern UI/UX**
- Tailwind CSS styling
- Responsive design
- Loading states
- Color-coded groups
- Hover effects

## Student Information

- **Student ID**: QE180014
- **Project**: Contact Management Web Application
- **Technology**: Next.js + MongoDB
- **Features**: Complete CRUD operations with search, filter, and sort

## Screenshots

[Add screenshots of working features here]

1. Main contact list page
2. Add new contact form
3. Edit contact page
4. Search and filter functionality
5. Delete confirmation dialog
