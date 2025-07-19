# Deployment Guide

## Prerequisites

1. **GitHub Repository**: Push your code to a public GitHub repository
2. **MongoDB Atlas Account**: Free tier available at [MongoDB Atlas](https://www.mongodb.com/atlas)

## Step 1: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new cluster (M0 Free tier)
3. Create a database user with read/write permissions
4. Get your connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/contact-management?retryWrites=true&w=majority
   ```

## Step 2: Deploy to Vercel (Recommended)

1. Go to [Vercel](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
5. Click "Deploy"

## Step 3: Deploy to Render

1. Go to [Render](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: `contact-management-app`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
6. Click "Create Web Service"

## Step 4: Deploy to Railway

1. Go to [Railway](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
5. Deploy automatically

## Step 5: Deploy to Netlify

1. Go to [Netlify](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variable:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
6. Deploy

## Environment Variables

Make sure to set these environment variables in your hosting platform:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-management?retryWrites=true&w=majority
```

## Testing Your Deployment

1. Visit your deployed URL
2. Test all features:
   - Add a new contact
   - Edit an existing contact
   - Delete a contact
   - Search contacts
   - Filter by group
   - Sort by name

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are in `package.json`
2. **Database Connection**: Verify your MongoDB Atlas connection string
3. **Environment Variables**: Ensure they're set correctly in your hosting platform
4. **CORS Issues**: Next.js handles this automatically

### Local Testing

Before deploying, test locally:

```bash
npm run build
npm start
```

## Performance Optimization

- The app is already optimized with Next.js 14
- Static generation for better performance
- API routes for dynamic data
- Responsive design for all devices

## Security Notes

- Never commit `.env.local` to Git
- Use environment variables for sensitive data
- MongoDB Atlas provides built-in security
- Next.js handles XSS protection automatically 