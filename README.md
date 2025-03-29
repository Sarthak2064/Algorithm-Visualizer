### **To run this project Follow the steps below** 

---

### **Step 1: Clone the Repository**  
1. Open **Terminal** or **Command Prompt**.  
2. Navigate to the directory where you want to clone the project:  
   ```bash
   cd path/to/your/directory
   ```  
3. Clone the GitHub repository:  
   ```bash
   git clone <repository-url>
   ```  
   Replace `<repository-url>` with the actual GitHub repository link.  

4. Move into the project folder:  
   ```bash
   cd project-folder-name
   ```

---

### **Step 2: Install Dependencies**  
Ensure you have **Node.js** installed. Check with:  
```bash
node -v
```
If not installed, download it from [Node.js official site](https://nodejs.org/).  

Now, install dependencies using **npm** or **yarn**:  
```bash
npm install
# OR
yarn install
```

---

### **Step 3: Run the Project Locally**  
Start the development server with:  
```bash
npm run dev
# OR
yarn dev
```
After running the command, you’ll see an output like:  
```
VITE v4.0.0 ready in 100ms
Local: http://localhost:5173/
```
Open the provided URL in your browser.

---

### **Step 4: Troubleshooting (If Needed)**  
- If you see a missing module error, try deleting `node_modules` and `package-lock.json`, then reinstall dependencies:  
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If the port **5173** is in use, run the project on a different port:  
  ```bash
  npm run dev -- --port=3000
  ```
