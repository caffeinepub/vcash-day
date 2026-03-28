# Vcash Day

## Current State
No App.tsx exists - previous build failed. Backend is empty actor. Frontend scaffolding is in place.

## Requested Changes (Diff)

### Add
- App.tsx with full 3-screen flow matching the uploaded design mockup
- Screen 1 (Splash/Landing): VcashDay logo, "Take Control of Your Money, Every Day" headline, subtitle, Get Started + Download App buttons, phone mockup, "Trusted by 10,000+ users" with VISA/GCash/Globe logos
- Screen 2 (PIN Entry): VcashDay logo, "Your Daily Money Companion" tagline, "Enter Your Passcode" heading, 4 PIN dots, numeric keypad (1-9, Clear, 0, OK), first-use creates PIN, subsequent uses verify it
- Screen 3 (Dashboard): Green header with "Hello, Ken!", balance card showing ₱1,250 "Today's Money Left", 4 main action icons (Money, Savings, Buy Load, Send Money), Quick Actions row (Pay Bills, Transaction, Rewards, More), Insights section with spending chart, bottom navigation bar

### Modify
- index.css to use green brand colors

### Remove
- Nothing

## Implementation Plan
1. Create App.tsx managing screen state (splash → pin → dashboard)
2. Splash screen component matching design
3. PIN screen with create/verify flow using localStorage
4. Dashboard screen with all sections
5. Style with Tailwind using green (#16a34a) brand colors
