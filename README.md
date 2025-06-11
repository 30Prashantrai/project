# Chennai Home Church

## Overview
Chennai Home Church is a web application designed to provide an online platform for church-related activities, including information about services, locations, giving, and more.

## Features
- **Dynamic Pages**: Includes pages for About, Contact, Giving, Locations, and Services.
- **Google Maps Integration**: Uses Google Maps API for location-based features.
- **Language Support**: Implements a language toggle for multilingual support.
- **Responsive Design**: Built with TailwindCSS for a mobile-friendly experience.
- **Authentication**: Includes authentication support via Supabase.

## Tech Stack
- **Frontend**: React, React Router
- **Styling**: TailwindCSS
- **Backend Services**: Supabase
- **APIs**: Google Maps API
- **Build Tool**: Vite
- **Linting**: ESLint
- **Type Checking**: TypeScript

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chennai-home-church
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the required environment variables.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

## Project Structure
```
src/
├── components/
│   ├── common/
│   ├── layout/
│   ├── providers/
│   └── sections/
├── hooks/
├── images/
├── lib/
├── pages/
├── types/
├── utils/
└── Video/
```

## Dependencies
- **Core**: React, React DOM, React Router DOM
- **APIs**: @googlemaps/js-api-loader, @react-google-maps/api, @supabase/supabase-js
- **Icons**: Lucide React, React Icons

## Development Dependencies
- ESLint, TypeScript, TailwindCSS, Vite

## License
This project is licensed under the MIT License.
