User Management CRUD Application

A clean and extensible React-based CRUD application built as part of a technical assignment.
The project demonstrates strong React fundamentals, maintainable architecture, and real-world form handling.

🔗 Live Application
https://naukri-assignment-api.vercel.app/

What This Application Does

Create, view, update, and delete users

Display user data in a clean, responsive table

Add and edit users using a modal-based form

Validate inputs with clear error messages

Handle loading and empty states gracefully

Why This Implementation Stands Out
✅ Clean React Architecture

Separation of concerns between:

UI components

Data fetching logic

Form configuration

Stateless presentational components where possible

Page-level state management for predictable behavior

✅ Extensible by Design

User form is schema-driven

New fields can be added with minimal changes

No UI rewrites required when fields are updated

✅ Strong Form Handling

Controlled inputs

Centralized validation logic

Clear user feedback on validation errors

Supports both create and edit flows using the same form

✅ Real-World UX Considerations

Skeleton loader for better loading experience

Explicit edit/delete actions

Modal workflow similar to admin dashboards

Clean, consistent UI using modern component patterns

Tech Stack

React

TypeScript

Vite

ShadCN/UI + Tailwind CSS

JSON Server (Mock API)

Vercel (Deployment)

Extending the Form (Key Requirement)

The form structure and validation are defined using a configuration file:

src/schema/formSchema.ts


To add a new field (e.g. Date of Birth):

Add a new field definition to the schema

The form UI and validation automatically update

This approach keeps the codebase flexible and easy to maintain.

Mock API

Uses JSON Server to simulate REST APIs

Supports full CRUD operations

Can be replaced with a real backend without changing the UI
