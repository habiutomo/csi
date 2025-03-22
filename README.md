# PT Cloud System Indonesia - Company Profile Website

## Project Overview
This is a modern, professional website for PT Cloud System Indonesia, a company specializing in cloud solutions and services. The website showcases the company's services, team members, client testimonials, and provides a contact form for inquiries.

## Features
- Responsive design that works on mobile, tablet, and desktop devices
- Modern UI with animations powered by Framer Motion
- Interactive components using Shadcn UI library
- Smooth scrolling navigation
- Contact form with validation
- Professional company sections including:
  - Hero section with call-to-action
  - About section highlighting company values
  - Services section showcasing cloud solutions
  - Team section featuring key personnel
  - Testimonials from satisfied clients
  - Client logos display
  - Contact form for inquiries

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express
- **State Management**: TanStack Query
- **UI Components**: Shadcn UI
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server
```
npm run dev
```
This will start both the backend Express server and the frontend Vite development server.

## Project Structure
- `client/src`: Frontend React code
  - `components`: Reusable UI components
  - `hooks`: Custom React hooks
  - `pages`: Page components
  - `lib`: Utility functions
- `server`: Backend Express server
- `shared`: Shared types and schemas

## Key Components
- **Header**: Navigation menu with links to different sections
- **Hero Section**: Main banner with company tagline and CTA
- **Services Section**: Cards displaying different cloud services
- **Team Section**: Team member profiles with roles
- **Testimonials**: Client testimonials with ratings
- **Contact Form**: Form for user inquiries

## Deployment
The project is configured for deployment on Vercel.

## Future Enhancements
- Multilingual support
- Blog section for company news and insights
- Customer portal for existing clients
- Detailed case studies section
- Enhanced animations and interactions