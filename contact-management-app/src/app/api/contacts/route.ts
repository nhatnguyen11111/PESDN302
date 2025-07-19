import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

// GET /api/contacts - Lấy tất cả contacts
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const group = searchParams.get('group');
    const sort = searchParams.get('sort') || 'name';
    
    const query: Record<string, unknown> = {};
    
    // Tìm kiếm theo tên
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    
    // Lọc theo nhóm
    if (group && group !== 'all') {
      query.group = group;
    }
    
    // Sắp xếp
    const sortOption: Record<string, number> = {};
    if (sort === 'name') {
      sortOption.name = 1;
    } else if (sort === 'name-desc') {
      sortOption.name = -1;
    }
    
    const contacts = await Contact.find(query).sort(sortOption);
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

// POST /api/contacts - Tạo contact mới
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, phone, group } = body;
    
    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }
    
    // Kiểm tra email đã tồn tại
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }
    
    const contact = new Contact({
      name,
      email,
      phone,
      group: group || 'Other'
    });
    
    await contact.save();
    
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { error: 'Failed to create contact' },
      { status: 500 }
    );
  }
} 