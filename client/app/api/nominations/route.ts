import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Nomination from '@/models/Nomination';

export async function POST(request: Request) {
  try {
    // Connect to the database
    await dbConnect();
    
    // Parse the request body
    const nominationData = await request.json();
    
    // Create a new nomination
    const nomination = await Nomination.create(nominationData);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: "Nomination submitted successfully",
      data: nomination 
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error submitting nomination:', error);
    
    // Check if it's a validation error
    if (error instanceof Error) {
      return NextResponse.json({ 
        success: false, 
        message: error.message 
      }, { status: 400 });
    }
    
    // Return general error response
    return NextResponse.json({ 
      success: false, 
      message: "Failed to submit nomination" 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();
    
    // Get all nominations (you might want to add pagination here)
    const nominations = await Nomination.find({}).sort({ createdAt: -1 });
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      data: nominations 
    });
    
  } catch (error) {
    console.error('Error fetching nominations:', error);
    
    // Return error response
    return NextResponse.json({ 
      success: false, 
      message: "Failed to fetch nominations" 
    }, { status: 500 });
  }
}