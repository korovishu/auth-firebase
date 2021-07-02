
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Protected page testing
 
If you directly go to /dashboard , you will be redirected to login page if user is 
not authenticated

## Redirect testing

Two ways to go to login page:
1. Press login in home page.
2. Press dashboard on home page without signing in first.

After logging in, you will be redirected to the page you came from.

