
# AI Form Builder 🚀

AI Form Builder is a powerful and user-friendly application that allows you to create customized forms effortlessly. Powered by **Gemini AI API**, this Next.js application generates form fields based on simple prompts.  
With secure authentication using **Clerk**, a responsive UI, and persistent data storage, AI Form Builder streamlines the form creation process while offering a seamless user experience.

## ✨ Features

- 🔮 **AI-Powered Form Creation**: Generate complete forms based on user prompts.
- 🔐 **Authentication**: Secure login/signup using **Clerk**.
- 📊 **Admin Dashboard**: View and manage all form responses.
- 🎨 **Theme Customization**: Choose from 6 different UI themes.
- 💾 **Persistent Data Storage**: Built with **PostgreSQL** and **Drizzle ORM**.
- 📱 **Responsive Design**: Mobile and desktop friendly using **Shadcn UI** and **Tailwind CSS**.

## 🛠️ Built With

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Shadcn UI](https://ui.shadcn.dev/)
- [Gemini AI API](https://deepmind.google/technologies/gemini/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [DaisyUI](https://daisyui.com/)

## 🚀 Getting Started

Follow these instructions to set up the project locally:

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL database
- Clerk API keys
- Gemini AI API Key

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/ai-form-builder.git
   cd ai-form-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

Create a `.env.local` file and add:

```bash
DATABASE_URL=your_postgresql_database_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
GEMINI_API_KEY=your_gemini_api_key
```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## 🔥 Live Demo

Check out the deployed version here:  
👉 [https://ai-form-builder-007.vercel.app/](https://ai-form-builder-007.vercel.app/)
