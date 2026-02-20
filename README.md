# Authentication App

A simple authentication system with login and profile pages using vanilla JavaScript.

## Features

- User login with API authentication
- Profile page displaying user information
- Session management using localStorage
- Logout functionality
- Responsive design
- Error handling

## Project Structure

```
autheticate/
├── index.html       # Login page
├── index.css        # Login page styles
├── main.js          # Login logic and API integration
├── profile.html     # User profile page
├── profile.css      # Profile page styles
└── README.md        # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API for HTTP requests
- LocalStorage for session management

## Setup & Installation

1. Clone or download this repository
2. No build process required - pure vanilla JavaScript
3. Open `index.html` in any modern web browser

## Usage

### Login
1. Open `index.html` in your browser
2. Enter test credentials:
   - **Username:** `emilys`
   - **Password:** `emilyspass`
3. Click "Login" button
4. On successful authentication, you'll be redirected to the profile page

### Profile
- View your user information (name, username, email, gender)
- Click "Logout" to clear session and return to login page

## API Integration

**Endpoint:** `https://dummyjson.com/auth/login`

**Method:** POST

**Request Body:**
```json
{
  "username": "emilys",
  "password": "emilyspass"
}
```

**Response (Success):**
```json
{
  "id": 1,
  "username": "emilys",
  "email": "emily.johnson@x.dummyjson.com",
  "firstName": "Emily",
  "lastName": "Johnson",
  "gender": "female",
  "token": "..."
}
```

## How It Works

### Authentication Flow

1. **User Input:** User enters username and password in login form
2. **Form Submission:** JavaScript prevents default form submission and captures input values
3. **API Request:** Sends POST request to DummyJSON API with credentials
4. **Response Handling:**
   - **Success:** User data saved to localStorage, redirect to profile page
   - **Failure:** Display error message to user
5. **Profile Display:** Profile page reads user data from localStorage and displays it
6. **Session Check:** Profile page redirects to login if no user data exists
7. **Logout:** Clears localStorage and redirects to login page

### Code Breakdown

**main.js:**
- Event listener on login form
- Async/await for API calls
- Error handling with try-catch
- LocalStorage for data persistence
- Automatic redirect on success

**profile.html:**
- Checks for user data on page load
- Dynamically renders user information
- Logout function to clear session
- Protected route (redirects if not authenticated)

## Features Explained

### Session Management
- Uses browser's localStorage to persist user data
- Data stored as JSON string
- Cleared on logout

### Error Handling
- Network errors caught and displayed
- Invalid credentials show error message
- Visual feedback with colored message boxes

### Security Notes
- This is a demo app using a test API
- In production, use secure authentication (JWT, OAuth)
- Never store sensitive data in localStorage
- Always use HTTPS in production

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add registration functionality
- Implement token-based authentication
- Add password visibility toggle
- Form validation improvements
- Remember me functionality
- Session timeout

## License

Free to use for learning and personal projects.

## Author 

RADOWAN ISLAM

## FINISHED 
