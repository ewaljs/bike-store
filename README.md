# Bike Store Web Application

This is a full-featured web application for managing a fictional bike store. It provides **CRUD operations** for the store owner and a customer view to browse available bikes.

## Tech Stack

This application is built with the following technologies:

- **Next.js** (React Framework with App Router)
- **TypeScript** for static typing
- **PostgreSQL** as the database
- **Prisma ORM** for database interactions
- **TailwindCSS** for styling

## Project Structure

The project uses the Next.js **app router** structure and has the following directory layout:

```plaintext
app/
├── api/                     # API routes for CRUD operations
│   └── bikes/
│       ├── route.ts         # Handles GET (list), POST (create)
│       ├── [id]/            # Routes for specific bike operations
│           └── route.ts     # Handles GET, PUT, DELETE by ID
├── components/              # Reusable components
│   ├── BikeCard.tsx         # Displays individual bike information
│   ├── BikeForm.tsx         # Form for adding/editing bikes
│   ├── Navbar.tsx           # Navigation bar
│   ├── BikeList.tsx         # Lists all bikes, reusable for owner and customer
│   └── Modal.tsx            # Confirmation modal for delete action
├── owner/                   # Owner-specific pages
│   ├── add-bike/            # Page for adding a new bike
│   ├── [id]/                # Dynamic routes for bike ID
│       ├── edit/            # Page for editing a specific bike
│       └── view/            # Page for viewing a specific bike
├── layout.tsx               # Root layout for global settings
├── page.tsx                 # Main customer view listing bikes
├── owner/page.tsx           # Main owner dashboard page
lib/
├── prisma.ts                # Prisma client setup
prisma/
├── schema.prisma            # Database schema
types/
├── index.ts                 # Type definitions for TypeScript
```

### Components Overview

- **BikeCard**: A reusable component that displays individual bike details with actions (edit, view, delete).
- **BikeForm**: Form component for adding and editing bikes.
- **Modal**: A modal component used for delete confirmation.
- **BikeList**: Displays a list of BikeCard components.

### Page Overview

- **Customer View (`/`)**: Allows customers to browse available bikes.
- **Owner Dashboard (`/owner`)**: Owner's view for managing bikes with CRUD actions.
- **Add/Edit/View Pages**: Pages for adding, editing, and viewing a specific bike in detail.

### Features

- **Owner CRUD Operations**: Add, view, edit, and delete bikes.
- **Customer View**: Browse the list of bikes with descriptions, prices, ratings, types, and stock quantity.
- **Image Support**: Optionally display images for each bike.
- **Modal Confirmation**: Confirmation modal for delete actions.
- **Responsive Design**: Designed to be responsive for desktop and mobile views.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm**
- **PostgreSQL**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bike-store
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a **.env.local** file in the root directory and add the following environment variable:

```
DATABASE_URL=postgresql://username:password@localhost:5432/bike_store
```

Replace `username`, `password`, and `bike_store` with your PostgreSQL credentials and database name.

### 4. Set Up the Database

1. Initialize Prisma and migrate the database schema:

```bash
npx prisma migrate dev --name init
```

2. (Optional) To visualize the database, you can run:

```bash
npx prisma studio
```

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Usage

- **Customer View**: Visit http://localhost:3000 to browse bikes.
- **Owner Dashboard**: Visit http://localhost:3000/owner to manage bikes (Add, Edit, View, and Delete).

## API Routes

### Bikes API

The **bikes** API routes are located in the **app/api/bikes** directory and allow for managing bike data:

1. **GET /api/bikes** - Retrieve a list of all bikes.
2. **POST /api/bikes** - Add a new bike (requires **description**, **price**, **type**, etc.).
3. **GET /api/bikes/[id]** - Retrieve a specific bike by **id**.
4. **PUT /api/bikes/[id]** - Update a specific bike by **id**.
5. **DELETE /api/bikes/[id]** - Delete a specific bike by **id**.

Each API endpoint returns JSON data and uses appropriate HTTP status codes for error handling.
