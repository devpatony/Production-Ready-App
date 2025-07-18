# Production-Ready Startup Platform

A modern, full-stack startup platform built with Next.js 15, Sanity CMS, and TypeScript. This platform allows entrepreneurs to showcase their startups, browse other projects, and engage with the startup community.

## 🚀 Features

- **Startup Showcase**: Create and display startup profiles with detailed information
- **User Authentication**: Secure authentication using NextAuth.js with GitHub integration
- **Content Management**: Headless CMS powered by Sanity for easy content management
- **Real-time Views**: Track and display view counts for startup profiles
- **Search Functionality**: Search for startups by name, category, or description
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Editor's Picks**: Curated startup recommendations
- **User Profiles**: Personal profiles showcasing user's startups
- **Modern UI**: Beautiful interface with Lucide React icons and custom components

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Authentication**: NextAuth.js
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Error Monitoring**: Sentry
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devpatony/Production-Ready-App.git
   cd Production-Ready-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   # NextAuth Configuration
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # GitHub OAuth
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret

   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_sanity_read_token
   SANITY_API_WRITE_TOKEN=your_sanity_write_token

   # Sentry Configuration (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up Sanity**
   ```bash
   npm run typegen
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Creating a Startup

1. Sign in with your GitHub account
2. Click on "Create" in the navigation
3. Fill out the startup form with:
   - Title and description
   - Category selection
   - Image upload
   - Detailed pitch (Markdown supported)
4. Submit to publish your startup

### Browsing Startups

- View all startups on the home page
- Use the search functionality to find specific startups
- Click on any startup card to view detailed information
- Check out the "Editor's Picks" section for curated recommendations

### User Profiles

- View user profiles by clicking on author names
- See all startups created by a specific user
- View user statistics and information

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate Sanity types

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.ts`
- Updating component styles in individual files
- Adding custom CSS in `globals.css`

### Content Types
Add new content types by:
1. Creating schema files in `sanity/schemaTypes/`
2. Adding them to the schema index
3. Running `npm run typegen` to generate types

### Authentication
The project uses NextAuth.js with GitHub provider. You can add more providers by:
1. Installing the required provider package
2. Configuring it in `auth.ts`
3. Adding environment variables

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- NextAuth configuration
- Sanity API tokens
- GitHub OAuth credentials
- Sentry DSN (optional)

