# 🧠 KnowWise – AI-Powered Document Assistant

KnowWise is a backend system that enables users to upload their own documents and notes, then interact with them using powerful AI tools.

Users can ask questions about their files, generate summaries, translate content, or improve their writing — all powered by OpenAI/Gemini. The system supports real-time collaboration, secure authentication, and payment-based feature access.

---

## 🚀 Features

### 👤 User System
- Register/Login via Email or Google
- Role-based access (`free`, `pro`, `admin`)
- JWT Authentication + Refresh tokens

### 📄 Document & Notes Handling
- Upload PDF, Word, or TXT files
- Extract and store content using `pdf-parse` or `mammoth`
- Create/edit rich-text notes

### 🧠 AI Assistant (LLM-Powered)
- Ask questions about your documents
- Summarize uploaded content
- Translate or paraphrase sections
- AI answers based on **your personal files**

### 🔍 Knowledge Search
- Search across your uploaded documents
- Combines keyword + semantic search (via Vector DB)

### 💬 Real-time Collaboration *(Optional)*
- Work on shared notes with other users
- Real-time editing using **Socket.io**

### 💳 Subscription System *(Optional)*
- Free plan with limited AI usage
- Pro plan with unlimited features
- Stripe Integration

### 🛡️ Security & Rate Limiting
- Helmet, CORS, Rate-Limiter
- Role-based API access
- File validation and size limits

---

## 🧰 Tech Stack

| Layer         | Technology                              |
|---------------|------------------------------------------|
| Language      | Node.js                                  |
| Framework     | Express.js                               |
| Database      | MongoDB + Mongoose                       |
| Auth          | JWT + Google OAuth                       |
| File Upload   | Multer + Cloudinary                      |
| AI Engine     | OpenAI API / Gemini                      |
| Text Extract  | `pdf-parse`, `mammoth`                   |
| Vector DB     | Pinecone / ChromaDB / Qdrant *(optional)*|
| Real-time     | Socket.io *(optional)*                   |
| Payment       | Stripe *(optional)*                      |
| Deployment    | Docker + Railway/Render                  |

---

## 🧪 Installation & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/knowwise-backend.git
cd knowwise-backend

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env

# 4. Start the server
npm run dev
