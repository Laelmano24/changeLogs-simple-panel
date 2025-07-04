# 📜 Changelog Panel (Discord Webhook Sender)

This is a simple web panel built with **Node.js** that allows you to send changelog messages directly to a **Discord Webhook**. It includes a **basic login system**, so only authorized users can access the panel.

You can also **deploy it for free on Vercel**!

---

## 🖼️ Preview

![Changelog Panel Preview](https://i.postimg.cc/Cx8hYk6y/Captura-de-Tela-66.png)

---

## 🚀 Features

* Send messages to a Discord webhook
* Simple and clean interface
* Basic login system (username & password)
* Lightweight and easy to deploy
* Free hosting support (Vercel)

---

## ⚙️ Requirements

Before running this project, make sure you have the following installed:

* [Node.js](https://nodejs.org/) (version 16 or higher)
* Git (optional, for cloning)

---

## 🧑‍💻 How to Install Locally

Follow these steps to run the project on your computer:

### 1. Install Node.js

If you don't have Node.js installed:

* Go to [https://nodejs.org](https://nodejs.org)
* Download the **LTS** version for your system
* Install it normally

After installing, open a terminal and run:

```bash
node -v
```

You should see something like:

```bash
v16.x.x
```

---

### 2. Clone or Download the Project

Using Git (recommended):

```bash
git clone https://github.com/your-username/changelog-panel.git
cd changelog-panel
```

Or download the `.zip` and extract it manually.

---

### 3. Install Dependencies

In the project folder, run:

```bash
npm install
```

---

### 4. Configure Environment Variables

Create a file named `.env` in the root of the project and add the following:

```env
WEBHOOKURL=your_discord_webhook_url
PASSWORD=your_secure_password
```

* `WEBHOOK_URL`: The Discord webhook where the message will be sent
* `PANEL_PASSWORD`: Password required to access the panel

---

### 5. Run the Server

Start the application locally with:

```bash
npm run start
```

The panel should now be running at:

```
http://localhost:3000
```

> Note: Change the port if needed in your code.

---

## 🔗 How to Use

1. Open your browser and go to `http://localhost:3000`
2. Log in with your password `http://localhost:3000/login`
3. Paste your **Discord webhook URL**
4. Write your changelog message
5. Click **Send**

The message will be delivered to your Discord server instantly.

---

## 📦 Deploy on Vercel (Free Hosting)

You can deploy this panel for free using [Vercel](https://vercel.com):

1. Push this project to a GitHub repository

2. Go to [https://vercel.com](https://vercel.com) and sign in

3. Import your repository

4. Set the build settings (if needed):

   * Framework: **Node.js**
   * Output Directory: `public` or your custom folder

5. On Vercel, go to **Project Settings > Environment Variables** and add:

   * `WEBHOOK_URL`
   * `PANEL_PASSWORD`

6. Deploy!

> These variables are required for login and message sending to work properly.

---

## 📄 License

This project is open source and free to use.
