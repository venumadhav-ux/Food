FOOD ON WHEELS — CENTRALIZED DAILY ORDER COUNTER

READY-TO-PUSH FILES

Files:
- index.html
- script.js
- style.css
- api/order.js

Order flow:
QR -> menu -> cart -> Order on WhatsApp -> centralized daily order number.

Order numbering:
- First successful order button press in India calendar day: #1
- Then #2, #3, ...
- Next India calendar date starts at #1 automatically.
- Redis INCR is atomic, so simultaneous customers receive different numbers.

No customer/order history database is stored. Redis only keeps daily counter keys.

Vercel environment variables required (Production):
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN

IMPORTANT: never put the Redis token in GitHub or any frontend file.

WhatsApp destination: 9010185837
