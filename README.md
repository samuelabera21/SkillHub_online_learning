
# Live Demo here 

https://skill-hub-online-le-git-48b5a4-sami21goodbad-gmailcoms-projects.vercel.app

# SkillHub - Online Learning Platform

A modern, full-featured online learning platform frontend built with Next.js 15, featuring course browsing, shopping cart, user authentication, and a student dashboard.

## Features

### Core Functionality

- **Course Catalog** - Browse and search through available courses with filtering by category
- **Course Details** - Comprehensive course pages with curriculum, instructor info, and reviews
- **Shopping Cart** - Add courses to cart with persistent localStorage storage
- **Checkout System** - Complete purchase flow with order summary
- **User Authentication** - Login and signup with localStorage-based session management
- **Student Dashboard** - Track enrolled courses, progress, and continue learning


### User Experience

- **Dark Mode** - Toggle between light and dark themes with persistent preference
- **Responsive Design** - Mobile-first approach that works beautifully on all devices
- **Smooth Animations** - Framer Motion animations for polished interactions
- **Loading States** - Skeleton loaders for better perceived performance
- **Category Navigation** - Quick access to courses by category


## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage


## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager


### Installation

1. **Clone or download the project**

```shellscript
git clone <your-repo-url>
cd skillhub
```


2. **Install dependencies**

```shellscript
npm install
```


3. **Run the development server**

```shellscript
npm run dev
```


4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)


## Project Structure

```plaintext
skillhub/
├── app/                      # Next.js app directory
│   ├── courses/             # Course listing and detail pages
│   ├── cart/               # Shopping cart page
│   ├── checkout/           # Checkout flow
│   ├── dashboard/          # Student dashboard
│   ├── login/              # Authentication pages
│   └── page.tsx            # Landing page
├── components/              # Reusable components
├── data/                    # Mock data (courses.json)
└── lib/                     # Utilities
```

## Customization

### Adding Your Own Courses

Edit `data/courses.json` to add or modify courses with your own content.

### Updating Colors

Modify design tokens in `app/globals.css` to match your brand.

### Changing Fonts

Update fonts in `app/layout.tsx` using Google Fonts.

### Adding Real Images

Replace placeholder images by adding files to `public/images/` and updating paths in `courses.json`.

## Features in Detail

### Authentication System

Uses localStorage to simulate user sessions with persistent login state.

### Shopping Cart

Persistent cart storage with real-time price calculations and duplicate prevention.

### Student Dashboard

Displays enrolled courses with progress tracking and quick access to continue learning.

## Deployment

Deploy to Vercel (recommended) by pushing to GitHub and importing your repository, or use any platform supporting Next.js.

## Future Enhancements

- Real backend API integration
- Video player for course content
- Payment gateway (Stripe)
- Course completion certificates
- Instructor dashboard
- Advanced search and filtering




